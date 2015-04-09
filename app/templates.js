dod.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('app/global/navigation/navigation.html',
    "<nav class=transition-3 ng-class={show:showNav,open:openNav}><div id=hamburger class=transition-3 ng-click=toggleNav();>menu</div><div id=nav-holder ng-click=hideNav();><ul><li ng-repeat=\"link in nav\" ng-attr-style=transition-delay:{{$index*0.1}}s><a ng-href={{::link.url}} ng-bind=::link.title></a></li></ul></div></nav>"
  );


  $templateCache.put('app/views/404/404.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><section>404 bruv</section></div>"
  );


  $templateCache.put('app/views/about/about.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=container><p>{{::page.heading}}</p></div></div>"
  );


  $templateCache.put('app/views/art/art.html',
    "<div id=art class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1 ng-bind=::page.heading></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2><p ng-bind-html=::page.intro></p></div></div></header><div class=container><div class=grid-row ng-if=page.list><div class=art-thumb ng-attr-style=background-image:url({{data.media.thumbnail}}); ng-repeat=\"(artwork,data) in page.list\" ng-click=showWork(artwork)><img class=first src=/img/spacer.png> <img class=second src=/img/spacer.png><div class=overlay><div class=centre><p ng-bind=::data.title></p></div></div></div></div></div></div>"
  );


  $templateCache.put('app/views/art/single/art-single.html',
    "<div class=centre>{{work.title}}</div>"
  );


  $templateCache.put('app/views/contact/contact.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1 ng-bind=::page.heading></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2><p ng-bind-html=::page.intro></p></div></div></header><div class=container><form><fieldset><input name=Name ng-model=\"message.name\"></fieldset><fieldset><input type=email name=Email ng-model=\"message.email\"></fieldset><fieldset><input name=Subject ng-model=\"message.subject\"></fieldset><fieldset><textarea name=Message cols=30 rows=10 ng-model=message.text></textarea></fieldset><fieldset><button ng-click=sendMessage(message);>Send</button></fieldset>{{message}}</form></div></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div id=home class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=\"centre text\"><h1>{{::page.heading}}</h1><h2>{{::page.subheading}}</h2></div></div>"
  );


  $templateCache.put('app/views/loading/loading.html',
    "<div class=\"centre transition-5\" ng-class={hide:ready,show:!ready}><p>{{msg}}</p><p>{{percent}}%</p></div>"
  );


  $templateCache.put('app/views/websites/single/website-single.html',
    "<div class=centre>{{site.title}}</div>"
  );


  $templateCache.put('app/views/websites/websites.html',
    "<div id=websites class=\"page transition-5\" ng-class={show:ready,hide:!ready}><header class=grid-row><div class=container><div class=centred><h1 ng-bind=::page.heading></h1><h2 ng-bind=::page.subheading ng-if=page.subheading></h2><p ng-bind-html=::page.intro></p></div></div></header><div class=container><div class=\"website grid-row\" ng-repeat=\"(website,data) in page.list\" ng-click=showSite(website)><div class=website-showcase>&nbsp;</div><div class=website-info><h3 ng-bind=::data.title></h3><div ng-bind-html=::data.info></div></div></div></div></div>"
  );
}])