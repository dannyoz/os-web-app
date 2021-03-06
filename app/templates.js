dod.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('app/global/directives/dod-carousel.html',
    "<div class=\"tablet transition-3\"><div class=front><div class=\"shine transition-3\"></div><img src=/img/tablet-spacer.png><div class=screen ng-class=[direction]><div class=slide ng-attr-style=background-image:url({{image}}); ng-repeat=\"image in images track by $index\" ng-class=slideClass($index);></div></div></div><div class=\"back transition-3\"></div><div class=carousel-bullets><button class=bullet ng-repeat=\"image in images track by $index\" ng-class=slideClass($index); ng-click=selectSlide($index);><span class=transition-2></span></button></div></div>"
  );


  $templateCache.put('app/global/navigation/navigation.html',
    "<nav class=transition-3 ng-class={show:showNav,open:openNav,ready:ready}><div id=hamburger class=transition-3 ng-click=toggleNav();><div class=transition-3><span></span></div></div><div id=nav-holder ng-click=hideNav();><ul><li ng-repeat=\"link in nav\" ng-attr-style=transition-delay:{{$index*0.1}}s><a class=transition-2 ng-click=changeRoute(link.url) ng-bind=::link.title ng-class=\"{current:path == link.url}\"></a></li></ul></div></nav>"
  );


  $templateCache.put('app/views/404/404.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><section>404 bruv</section></div>"
  );


  $templateCache.put('app/views/about/about.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1><span ng-bind=::page.heading></span></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2><p ng-bind-html=::page.intro></p></div></div></header><div class=container><p>Derp</p></div></div>"
  );


  $templateCache.put('app/views/art/art.html',
    "<div id=art class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1><span ng-bind=::page.heading></span></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2><p ng-bind-html=::page.intro></p></div></div></header><div class=container><div id=gallery class=grid-row ng-if=page.list><div class=art-thumb ng-attr-style=background-image:url({{page.list[artwork].media.thumbnail}}); ng-repeat=\"artwork in page.sequence\" ng-click=\"changeRoute('/art/' + artwork,500,'artleave')\"><img class=first src=/img/spacer.png> <img class=second src=/img/spacer.png><div class=overlay><div class=centre><p ng-bind=::page.list[artwork].title></p><button>View</button></div></div></div></div></div></div>"
  );


  $templateCache.put('app/views/art/single/art-single.html',
    "<div id=art-single ng-if=ready><div class=\"main-image current\" ng-attr-style=background-image:url({{getMainImage()}})></div><div class=\"main-image prev\" ng-if=\"artIndex > 0\" ng-attr-style=background-image:url({{getMainImage(artIndex-1)}})></div><div class=\"main-image next\" ng-if=\"(artIndex+1) < sequence.length\" ng-attr-style=background-image:url({{getMainImage(artIndex+1)}})></div><a ng-click=\"changeRoute('/art/' + sequence[artIndex-1],500,'leaveRight', 'enterLeft')\" class=\"prev-art control transition-2\" ng-if=\"artIndex > 0\"><span ng-bind=getArtwork(artIndex-1).title></span></a> <a ng-click=\"changeRoute('/art/' + sequence[artIndex+1],500,'leaveLeft', 'enterRight')\" class=\"next-art control transition-2\" ng-if=\"(artIndex+1) < sequence.length\"><span ng-bind=getArtwork(artIndex+1).title></span></a></div>"
  );


  $templateCache.put('app/views/contact/contact.html',
    "<div id=contact class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1><span ng-bind=::page.heading></span></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2></div></div></header><div class=container><div class=grid-row><div class=\"grid-6 push-3\"><form ng-if=!sent class=grid-row id=contact-form name=contactForm ng-submit=sendMessage(message);><fieldset><p class=transition-1 ng-messages=contactForm.name.$error role=alert ng-messages-include=app/views/contact/ng-messages.html></p><input class=transition-2 name=name ng-model=message.name placeholder=Name required ng-minlength=\"3\"></fieldset><fieldset><p class=transition-1 ng-messages=contactForm.email.$error role=alert ng-messages-include=app/views/contact/ng-messages.html><span ng-message=email>Please enter a valid email</span></p><input class=transition-2 type=email name=email ng-model=message.email placeholder=e-mail required></fieldset><fieldset><p class=transition-1 ng-messages=contactForm.subject.$error role=alert ng-messages-include=app/views/contact/ng-messages.html></p><input class=transition-2 name=subject ng-model=message.subject placeholder=Subject required ng-minlength=\"5\"></fieldset><fieldset><p class=transition-1 ng-messages=contactForm.message.$error role=alert ng-messages-include=app/views/contact/ng-messages.html></p><textarea class=transition-2 name=message cols=30 rows=10 ng-model=message.text placeholder=Message required ng-minlength=5 ng-maxlength=3500></textarea></fieldset><fieldset><input type=submit value=\"Send\"></fieldset></form><div ng-if=sent><div ng-bind-html=::page.successMessage></div></div></div></div></div></div>"
  );


  $templateCache.put('app/views/contact/ng-messages.html',
    "<span ng-message=required>This field is required</span> <span ng-message=minlength>This field is too short</span> <span ng-message=maxlength>This field is too long</span>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div id=home class=\"page transition-5\" dod-perspective=position ng-class={show:ready,hide:!ready}><div class=\"centre text\"><div ng-if=page dod-intro=page.intro></div></div><button ng-click=\"changeRoute('/websites')\"><span>My Work</span> <span class=hover></span></button></div>"
  );


  $templateCache.put('app/views/loading/loading.html',
    "<div class=\"centre transition-5\" ng-class={hide:ready,show:!ready} id=loading><p>{{msg}}</p><div class=loading-bar><div class=bar ng-attr-style=width:{{percent}}%></div></div></div>"
  );


  $templateCache.put('app/views/websites/single/website-single.html',
    "<div class=centre>{{site.title}}</div>"
  );


  $templateCache.put('app/views/websites/websites.html',
    "<div id=websites class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1><span ng-bind=::page.heading></span></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2><p ng-bind-html=::page.intro></p></div></div></header><div class=website ng-repeat=\"website in page.sequence\" dod-scroll><div class=container><div class=grid-row><h3><span ng-bind=::page.list[website].title></span></h3></div><div class=grid-row><div class=website-showcase><div dod-carousel=page.list[website].carousel></div></div><div class=website-info><div ng-bind-html=::page.list[website].info></div><ul class=\"tags grid-row\"><li ng-repeat=\"tag in page.list[website].tags\" ng-bind=tag></li></ul><div class=\"grid-row button-holder\"><a ng-if=page.list[website].url ng-href={{page.list[website].url}} class=button>Visit site</a></div></div></div></div></div></div>"
  );
}])