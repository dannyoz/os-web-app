 dod.directive('dodIntro',[
 	'$timeout',
 	function ($timeout){

	 	return {
	 		restrict: "A",
	 		template: '<p ng-class="{show:showName}" class="name" ng-bind="intro.name"></p>' +
					  '<h1 ng-class="{show:showRole1}"><span ng-bind-html="intro.role1"></span></h1>' +
					  '<h2 ng-class="{show:showRole2,museoslab:designClass==\'museoslab\'}" ng-bind-html="intro.role2"></h2>' +
					  '<h3 ng-class="{show:showRole3}"><span ng-bind="intro.role3"></span></h3>',
	 		scope : {
	 			intro : "=dodIntro"
	 		},
	 		link : function(scope){

	 			//Temp hack
	 			if(scope.intro.role1.indexOf('</b>') > -1){
	 				scope.intro.role1 = "Front end Developer"
	 			}

	 			scope.showName  = false;
	 			scope.showRole1 = false;
	 			scope.showRole2 = false;
	 			scope.showRole3 = false;

	 			//SEQUENCING -------------------------------------------------------

		 			var sequence = [{
		 					"function" : "name",
		 					"timing"   : 500
		 				},{
		 					"function" : "role1",
		 					"timing"   : 1000
		 				},{
		 					"function" : "role2",
		 					"timing"   : 2000
		 				},{
		 					"function" : "role3",
		 					"timing"   : 3000
		 				}];

		 			scope.trigger = function(frame){

		 				$timeout(function(){
		 					if(frame.function == "name")  scope.name();
		 					if(frame.function == "role1") scope.role1();
		 					if(frame.function == "role2") scope.role2();
		 					if(frame.function == "role3") scope.role3();
		 				},frame.timing);
		 			};

		 			for(var i = 0; i < sequence.length; i ++){
		 				scope.trigger(sequence[i]);
		 			};

		 		// -------------------------------------------------------------------

	 			// SEQUENCE FRAMES

	 			scope.name = function(){
	 				scope.showName = true;
	 			};

	 			scope.role1 = function(){

	 				scope.showRole1 = true;

	 				var split     = scope.intro.role1.split(""),
	 					interval  = 10,
	 					newString = "";

	 				function typewriter(index){

	 					var span = "<b>" + split[index] + "</b>";

	 					$timeout(function(){
	 						newString = newString + span;
	 						scope.intro.role1 = newString;
	 					},interval*index);
	 				};

	 				for(var i = 0; i<split.length; i ++){
	 					typewriter(i);
	 				};

	 			};

	 			scope.role2 = function(){
	 				scope.showRole2 = true;

	 				$timeout(function(){
	 					scope.designClass = "museoslab"
	 				},10);
	 			};

	 			scope.role3 = function(){
	 				scope.showRole3 = true;
	 			};
	 		}
	 	}

	 }]);