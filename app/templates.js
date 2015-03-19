dod.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('app/views/about/about.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><a href=\"/\">home</a> <a href=/about>about</a> <a href=/art>art</a> <a href=/websites>websites</a> <a href=/contact>contact</a></div></div>"
  );


  $templateCache.put('app/views/art/art.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><a href=\"/\">home</a> <a href=/about>about</a> <a href=/art>art</a> <a href=/websites>websites</a> <a href=/contact>contact</a></div></div>"
  );


  $templateCache.put('app/views/art/single/art-single.html',
    "<div class=centre>art single</div>"
  );


  $templateCache.put('app/views/contact/contact.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><form><fieldset><input name=Name placeholder=\"Name\"></fieldset><fieldset><input type=email name=Email placeholder=\"Email\"></fieldset><fieldset><input name=Subject placeholder=\"Subject\"></fieldset><fieldset><textarea name=Message cols=30 rows=10 placeholder=Message></textarea></fieldset><fieldset><button>Send</button></fieldset></form></div></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><a href=\"/\">home</a> <a href=/about>about</a> <a href=/art>art</a> <a href=/websites>websites</a> <a href=/contact>contact</a></div></div>"
  );


  $templateCache.put('app/views/loading/loading.html',
    "<div class=\"centre transition-5\" ng-class={hide:ready,show:!ready}><p>loading</p></div>"
  );


  $templateCache.put('app/views/websites/single/website-single.html',
    "<div class=centre><h1>Site Under construction</h1><h3>Please check back soon!!!</h3></div>"
  );


  $templateCache.put('app/views/websites/websites.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><a href=\"/\">home</a> <a href=/about>about</a> <a href=/art>art</a> <a href=/websites>websites</a> <a href=/contact>contact</a></div></div>"
  );
}])