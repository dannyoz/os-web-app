#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
//var fs      = require('fs');
var fs      = require('fs-extra');
var path    = require('path');

//File upload dependancies
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
// var UserController = require('./controllers/UserController');


/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { '/build/index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['/build/index.html'] = fs.readFileSync('./build/index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };
        self.paths = [
            "/",
            "/about",
            "/art",
            "/art/:artwork",
            "/contact",
            "/websites",
            "/websites/:website",
            "/:err"
        ];

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/api/:api'] = function(req, res) {
            res.setHeader('Content-Type', 'application/json');
        };

    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        self.app = express.createServer();
        self.app.use(express.bodyParser());

        self.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        self.app.configure(function(){

            ['css', 'img', 'js', 'views', 'api', 'msg'].forEach(function (dir){
                self.app.use('/'+dir, express.static(__dirname+'/build/'+dir));
            });

        });


        for (var i = 0; i<self.paths.length; i++){

            self.app.get(self.paths[i], function(req, res) {

                res.sendfile('./build/index.html');

            });
        };

        
        self.app.post('/update', function(req, res){

            var topSlice    = "",
                filling     = JSON.stringify(req.body),
                bottomSlice = "",
                sandwich    = topSlice+filling+bottomSlice,
                response    = {};

            fs.writeFile("build/api/data.json", sandwich, function(err) {

                if(err) {

                    response.data = req.body;
                    response.status = "ERROR file not saved";

                    res.send(response);

                    return console.log(err);
                    
                } else {

                    response.data = req.body;
                    response.status = "File saved successfully!!!";

                    res.send(response);
                }
        
            }); 

        });

        self.app.post('/post-message', function (req, res){

            var topSlice    = '{"messages":',
                filling     = JSON.stringify(req.body),
                bottomSlice = "}",
                sandwich    = topSlice+filling+bottomSlice,
                response    = {};

            fs.writeFile("build/api/messages.json", sandwich, function(err) {

                if(err) {

                    response.data = req.body;
                    response.status = "ERROR file not saved";

                    res.send(response);

                    return console.log(err);
                    
                } else {

                    response.data = req.body;
                    response.status = "derp File saved successfully!!!";

                    res.send(response);
                }
        
            }); 

        });

        self.app.post('/user/uploads', multipartyMiddleware, function (req, res){

            if(req.files.file.type == "image/jpeg"){
                var orgName = req.files.file.originalFilename,
                    title   = orgName.replace('.jpg','');
            } else if(req.files.file.type == "image/png"){
                var orgName = req.files.file.originalFilename,
                    title   = orgName.replace('.png','');
            } else {
                var title = req.files.file.originalFilename;
            }

            var tempPath  = req.files.file.path,
                directory = "/img/uploads/",
                filename  = req.files.file.originalFilename.replace(/ /g, "-").toLowerCase(),
                response  = {};

            fs.copy(tempPath, './build'+ directory + filename , function (err) {
                if (err){
                    return console.error(err)
                } else{

                    response.filename = filename;
                    response.title    = title;
                    response.path     = directory + filename;
                    res.send(response);
                }; 
            });

        });

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }


        // handle 404 errors
        self.app.use(self.app.router);
        self.app.use(function(req, res, next){
            res.status(404);

            // respond with html page
            if (req.accepts('html')) {
                res.sendfile('./build/404.html');
                return;
            }

            // respond with json
            if (req.accepts('json')) {
                res.send({ error: 'Not found' });
                return;
            }

            // default to plain-text. send()
            res.type('txt').send('Not found');

        });
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */




/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();

