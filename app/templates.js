dod.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('app/global/navigation/navigation.html',
    "<nav class=transition-3 ng-class={show:showNav}><div id=hamburger class=transition-3 ng-click=\"showNav = !showNav\">menu</div><div id=nav-holder><ul><li ng-repeat=\"link in nav\" ng-attr-style=transition-delay:{{$index*0.1}}s><a ng-href={{::link.url}} ng-bind=::link.title></a></li></ul></div></nav>"
  );


  $templateCache.put('app/views/404/404.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><section>404 bruv</section></div>"
  );


  $templateCache.put('app/views/about/about.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p></div></div>"
  );


  $templateCache.put('app/views/art/art.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><div ng-repeat=\"(artwork,data) in page.list\" ng-click=showWork(artwork)>{{artwork}} <img ng-src={{::data.thumbnail}}></div></div></div>"
  );


  $templateCache.put('app/views/art/single/art-single.html',
    "<div class=centre>{{work.title}}</div>"
  );


  $templateCache.put('app/views/contact/contact.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><form><fieldset><input name=Name ng-model=\"message.name\"></fieldset><fieldset><input type=email name=Email ng-model=\"message.email\"></fieldset><fieldset><input name=Subject ng-model=\"message.subject\"></fieldset><fieldset><textarea name=Message cols=30 rows=10 ng-model=message.text></textarea></fieldset><fieldset><button ng-click=sendMessage(message);>Send</button></fieldset>{{message}}</form></div></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div id=home class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=\"centre text\"><h1>{{::page.heading}}</h1><h2>{{::page.subheading}}</h2></div></div>"
  );


  $templateCache.put('app/views/loading/loading.html',
    "<div class=\"centre transition-5\" ng-class={hide:ready,show:!ready}><p>loading</p></div>"
  );


  $templateCache.put('app/views/websites/single/website-single.html',
    "<div class=centre>{{site.title}}</div>"
  );


  $templateCache.put('app/views/websites/websites.html',
    "<div class=\"page transition-5\" ng-class={show:ready,hide:!ready}><div class=centre><p>{{::page.heading}}</p><div ng-repeat=\"(website,data) in page.list\" ng-click=showSite(website)>{{website}} <img ng-src={{::data.thumbnail}}></div></div></div>"
  );
}])