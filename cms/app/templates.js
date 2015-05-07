cms.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('cms/app/global/directives/cms-editable.html',
    "<p class=simple ng-if=\"type == 'text'\"><span class=edit-result ng-click=toggleEdit();>{{content}}</span> <input ng-model=content ng-show=\"editMode\"> <button class=green ng-show=editMode ng-click=save(content);><span><i class=icon-check></i></span></button></p><div ng-if=\"type == 'list'\"><div class=edit-list ng-repeat=\"item in content track by $index\"><p ng-click=selectListItem($index);>{{item}}</p><button class=close ng-if=\"currentList != $index\" ng-click=removeListItem($index);><span>x</span></button> <button class=confirm ng-if=\"currentList == $index\" ng-click=changeListItem($index,item);><i class=icon-check></i></button> <input ng-model=item ng-show=\"currentList == $index\"></div><button ng-click=addListItem(); class=\"rounded-10px green medium\"><span>+</span></button></div>"
  );


  $templateCache.put('cms/app/global/nav/nav.html',
    "<nav><ul><li><a href=# class=item1>Lorem ipsum.</a></li><li><a href=# class=item2>Perferendis, accusantium.</a></li><li><a href=# class=item3>Unde, quam.</a></li><li><a href=# class=item4>Quos, recusandae.</a></li><li><a href=# class=item5>Dolore, corrupti.</a></li></ul></nav>"
  );


  $templateCache.put('cms/app/views/editor/editor-views/edit-about.html',
    "<div class=grid-row><p class=label>Heading</p><div class=editable ng-if=json cms-editable=json[currentView].heading></div><p class=label>Subheading</p><div class=editable ng-if=json cms-editable=json[currentView].subheading></div><p class=label>Intro</p><div class=wysiwyg text-angular=text-angular name=intro ng-model=json[currentView].intro></div></div><div class=grid-row><div class=grid-4><p class=label>Skills</p><div class=editable ng-if=json cms-editable=\"json[currentView]['skills']\" data-type=list></div></div><div class=grid-4><p class=label>Most likely to say</p><div class=editable ng-if=json cms-editable=\"json[currentView]['most-likely-to-say']\" data-type=list></div></div><div class=grid-4><p class=label>Least likely to say</p><div class=editable ng-if=json cms-editable=\"json[currentView]['least-likely-to-say']\" data-type=list></div></div></div>"
  );


  $templateCache.put('cms/app/views/editor/editor-views/edit-artwork.html',
    "<div ng-if=!singleView><div class=grid-row><p class=label>Heading</p><div class=editable ng-if=json cms-editable=json[currentView].heading></div><p class=label>Subheading</p><div class=editable ng-if=json cms-editable=json[currentView].subheading></div><p class=label>Intro</p><div class=wysiwyg text-angular=text-angular name=intro ng-model=json[currentView].intro></div></div><div class=list><p class=label>List</p><div class=grid-row><div class=selection ng-repeat=\"(art,data) in json[currentView].list\"><a ng-href=/editor/art/{{art}} ng-bind=art></a></div></div><div class=selection><a>+</a></div></div></div><div ng-if=singleView>{{json[currentView].list[single]}}<div class=editable ng-if=json cms-editable=json[currentView].list[single].title></div><div class=wysiwyg text-angular=text-angular name=info ng-model=json[currentView].list[single].info></div></div>"
  );


  $templateCache.put('cms/app/views/editor/editor-views/edit-homepage.html',
    "<div class=editable ng-if=json cms-editable=json[currentView].heading></div><div class=editable ng-if=json cms-editable=json[currentView].subheading></div>"
  );


  $templateCache.put('cms/app/views/editor/editor-views/edit-websites.html',
    "<div ng-if=!singleView><div class=grid-row><p class=label>Heading</p><div class=editable ng-if=json cms-editable=json[currentView].heading></div><p class=label>Subheading</p><div class=editable ng-if=json cms-editable=json[currentView].subheading></div><p class=label>Intro</p><div class=wysiwyg text-angular=text-angular name=intro ng-model=json[currentView].intro></div></div><div class=list><div class=selection ng-repeat=\"(website,data) in json[currentView].list\"><a ng-href=/editor/websites/{{website}} ng-bind=website></a></div><div class=selection><a>+</a></div></div></div><div ng-if=singleView><p class=label>Title</p><div class=editable ng-if=json cms-editable=json[currentView].list[single].title></div><div class=grid-row><div class=grid-8><p class=label>Info</p><div class=wysiwyg text-angular=text-angular name=info ng-model=json[currentView].list[single].info></div></div><div class=grid-4><p class=label>Tags</p><div class=editable ng-if=json cms-editable=json[currentView].list[single].tags data-type=list></div></div></div></div>"
  );


  $templateCache.put('cms/app/views/editor/editor.html',
    "<div id=editor><nav><ul id=top><li><a ng-click=toggleDialogue();><i class=icon-jsfiddle></i></a><div class=\"publish-dialogue rounded-10px\" ng-if=showDialogue><p>Publish changes?</p><button ng-click=publish(); class=\"green medium rounded-10px\"><i class=icon-check></i></button> <button ng-click=toggleDialogue(); class=\"red medium rounded-10px\"><i class=icon-ban></i></button></div></li></ul><ul id=views><li ng-repeat=\"view in views\" ng-class=\"{current:currentView == view}\"><a ng-href=/editor/{{view}} ng-class=[view]><i ng-class=iconClass(view);></i></a></li></ul></nav><div id=editor-header ng-class=\"{fullscreen : !previewMode}\"><h1 ng-bind=currentView></h1><button class=\"rounded-10px medium blue\" ng-click=\"previewMode = !previewMode\"><span>Preview</span></button></div><aside ng-class=\"{fullscreen : !previewMode}\"><section id=edit-pane><div ng-if=\"currentView == 'home'\" ng-include=\"'cms/app/views/editor/editor-views/edit-homepage.html'\"></div><div ng-if=\"currentView == 'websites'\" ng-include=\"'cms/app/views/editor/editor-views/edit-websites.html'\"></div><div ng-if=\"currentView == 'art'\" ng-include=\"'cms/app/views/editor/editor-views/edit-artwork.html'\"></div><div ng-if=\"currentView == 'about'\" ng-include=\"'cms/app/views/editor/editor-views/edit-about.html'\"></div></section></aside><section id=preview ng-class=\"{hide : !previewMode}\"><div ng-if=\"currentView == 'home'\" ng-include=\"'/views/preview/home.html'\"></div><div ng-if=\"currentView == 'art'\" ng-include=\"'/views/preview/art.html'\"></div><div ng-if=\"currentView == 'about'\" ng-include=\"'/views/preview/about.html'\"></div><div ng-if=\"currentView == 'websites'\" ng-include=\"'/views/preview/websites.html'\"></div><div ng-if=\"currentView == 'contact'\" ng-include=\"'/views/preview/contact.html'\"></div></section></div>"
  );


  $templateCache.put('cms/app/views/messages/messages.html',
    "<section id=messages><aside><ul><li ng-repeat=\"message in messages\" ng-class=\"{current:$index == currentmsg}\" ng-click=switchMsg($index)><span ng-bind=parseDate(message.date);></span> <span ng-bind=message.email></span><div ng-if=\"$index == currentmsg\"><div ng-if=!delete><button ng-click=toggleDelete();><i class=icon-trash></i></button></div><div ng-if=delete><button ng-click=deleteMsg($index);><i class=icon-check></i></button> <button ng-click=toggleDelete();><i class=icon-ban></i></button></div></div></li></ul></aside><div id=message-main><div id=message-content><h3 ng-bind-html=messages[currentmsg].subject></h3><div ng-bind-html=messages[currentmsg].text></div></div></div></section>"
  );


  $templateCache.put('cms/app/views/publish/publish.html',
    "<section class=page><div class=container><textarea ng-model=data>\r" +
    "\n" +
    "\t\t\t\r" +
    "\n" +
    "\t\t</textarea><button ng-click=api.post(data);>Post</button> <button ng-click=getData();>Get</button></div></section>"
  );


  $templateCache.put('cms/app/views/splash/splash.html',
    "<div class=centre><h1>Edit</h1><button class=\"medium rounded-10px\" ng-click=\"env('dev')\">Edit</button></div>"
  );


  $templateCache.put('cms/app/views/styleguide/base.html',
    "<div class=container><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/intro.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/panels.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/buttons-and-links.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/grid.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/paragraphs.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/headings.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/forms.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/text-elements.html'\"></section><section class=\"stack bevelStack\" ng-include=\"'app/views/styleguide/partials/lists-and-tables.html'\"></section></div>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/buttons-and-links.html',
    "<h1 class=section-heading>Buttons and links</h1><hr><p>Commonly used styles for buttons and links.</p><p><div class=grid-row><button class=\"large primary transition-1\">Button</button> <button class=\"large secondary transition-1\">Button</button> <button class=\"large tertiary transition-1\">Button</button> <button class=\"large transition-1\">Button</button></div><div class=grid-row><button class=\"medium primary transition-1\">Button</button> <button class=\"medium secondary transition-1\">Button</button> <button class=\"medium tertiary transition-1\">Button</button> <button class=\"medium transition-1\">Button</button></div><div class=grid-row><button class=\"small primary transition-1\">Button</button> <button class=\"small secondary transition-1\">Button</button> <button class=\"small tertiary transition-1\">Button</button> <button class=\"small transition-1\">Button</button></div></p>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/forms.html',
    "<h1 class=primary id=form_elements>Fieldsets, Legends, and Form Elements</h1><p>This section contains typical web form elements</p><fieldset><legend>Legend</legend><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p></fieldset><form><div class=grid-3><h2>Form Element</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p></div><div class=grid-9><fieldset><input id=text_field placeholder=\"Text Field\"></fieldset><fieldset><textarea id=text_area placeholder=\"Text Area\"></textarea></fieldset><fieldset><label class=grid-3 for=select_element>Select Element:</label><div class=grid-9><select name=select_element><optgroup label=\"Option Group 1\"><option value=1>Option 1</option><option value=2>Option 2</option><option value=3>Option 3</option></optgroup><optgroup label=\"Option Group 2\"><option value=1>Option 1</option><option value=2>Option 2</option><option value=3>Option 3</option></optgroup></select></div></fieldset><fieldset><label class=grid-3 for=radio_buttons>Radio Buttons:</label><div class=grid-9><input type=radio class=radio name=radio_button value=\"radio_1\"> Radio 1<br><input type=radio class=radio name=radio_button value=\"radio_2\"> Radio 2<br><input type=radio class=radio name=radio_button value=\"radio_3\"> Radio 3<br></div></fieldset><fieldset><label class=grid-3 for=checkboxes>Checkboxes:</label><div class=grid-9><div class=modern-check><input type=checkbox class=checkbox name=checkboxes value=check_1 checked> <span></span></div><div class=modern-check><input type=checkbox class=checkbox name=checkboxes value=\"check_1\"> <span></span></div><div class=modern-check><input type=checkbox class=checkbox name=checkboxes value=\"check_1\"> <span></span></div></div></fieldset><fieldset><label class=grid-3 for=password>Password:</label><div class=grid-9><input type=password class=password name=\"password\"></div></fieldset><fieldset><label class=grid-3 for=file>File Input:</label><div class=grid-9><input type=file class=file name=\"file\"></div></fieldset><h3>HTML5-specific Form Elements</h3><fieldset><input type=email placeholder=e-Mail></fieldset><fieldset><input type=url placeholder=Url></fieldset><fieldset><input type=tel placeholder=\"Phone Number\"></fieldset><fieldset><label class=grid-3 for=number>Number:</label><div class=grid-9><input type=number min=0 max=10 step=1 value=5></div></fieldset><fieldset><input type=search placeholder=Search></fieldset><fieldset><label class=grid-3 for=date>Date:</label><div class=grid-9><input type=date></div></fieldset><fieldset><label class=grid-3 for=time>Time:</label><div class=grid-9><input type=time></div></fieldset><fieldset><label class=grid-3 for=color>Color:</label><div class=grid-9><input type=color></div></fieldset><fieldset><div class=\"grid-9 push-3\"><input class=button type=reset value=\"Clear\"> <input class=button type=submit value=\"Submit\"></div></fieldset></div></form>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/grid.html',
    "<h1 class=section-heading id=grid>Grid</h1><hr><p>Fluid grid based on percentages. Uses the <code>@include grid</code> sass mixin.</p><div class=grid-row><div class=\"grid-3 grid-example panel padded rounded-5px\"><span class=centre>Grid 3</span></div><div class=\"grid-3 grid-example panel padded rounded-5px\"><span class=centre>Grid 3</span></div><div class=\"grid-3 grid-example panel padded rounded-5px\"><span class=centre>Grid 3</span></div><div class=\"grid-3 grid-example panel padded rounded-5px\"><span class=centre>Grid 3</span></div></div><div class=grid-row><div class=\"grid-4 grid-example panel padded rounded-5px\"><span class=centre>Grid 4</span></div><div class=\"grid-4 grid-example panel padded rounded-5px\"><span class=centre>Grid 4</span></div><div class=\"grid-4 grid-example panel padded rounded-5px\"><span class=centre>Grid 4</span></div></div><div class=grid-row><div class=\"grid-2 grid-example panel padded rounded-5px\"><span class=centre>Grid 2</span></div><div class=\"grid-7 grid-example panel padded rounded-5px\"><span class=centre>Grid 7</span></div><div class=\"grid-3 grid-example panel padded rounded-5px\"><span class=centre>Grid 3</span></div></div><div class=grid-row><div class=\"grid-12 grid-example panel padded rounded-5px\"><span class=centre>Grid 12</span></div></div><div class=grid-row><div class=\"grid-4 push-2 grid-example panel padded rounded-5px\"><span class=centre>Grid 4 | push 2</span></div><div class=\"grid-4 pull-2 grid-example panel padded rounded-5px\"><span class=centre>Grid 4 | pull 2</span></div></div>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/headings.html',
    "<h1 class=section-heading id=headings>Headings</h1><hr><h1>Heading 1</h1><p class=columns>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p><h2>Heading 2</h2><p class=columns>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p><h3>Heading 3</h3><p class=columns>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p><h4>Heading 4</h4><p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p><h5>Heading 5</h5><p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p><h6>Heading 6</h6><p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/intro.html',
    "<h1 class=epic>Front-end Styleguide Template</h1><p>This styleguide template contains many common HTML elements. You can use it to demonstrate the look of your designs across a variety of content.</p>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/lists-and-tables.html',
    "<h1 id=list_types>List Types</h1><h3>Ordered List</h3><ol><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol><h3>Unordered List</h3><ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul><h3>Definition List</h3><dl><dt>Definition List Term 1</dt><dd>This is a definition list description.</dd><dt>Definition List Term 2</dt><dd>This is a definition list description.</dd><dt>Definition List Term 3</dt><dd>This is a definition list description.</dd></dl>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/panels.html',
    "<h1 class=section-heading id=paragraph>Panels</h1><div class=grid-row><p>Panel example using the .rounded-10px class</p><div class=\"grid-8 grid-divide-right\"><div class=\"panel rounded-10px\"><header><h6>Panel header</h6></header><p class=\"panel-content engraved\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur consectetur soluta cumque nisi distinctio eius dolorem. Ut corporis similique, quas ipsam. Quas dolore consectetur officiis, eius ex eaque consequatur.</p><footer>Panel footer</footer></div></div><div class=\"grid-3 push-1\"><ul class=panel-list><li class=header><h6>Panel list</h6></li><li><a>Lorem Ipsum</a></li><li><a>Lorem Ipsum</a></li><li><a>Lorem Ipsum</a></li><li><a>Lorem Ipsum</a></li></ul></div></div>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/paragraphs.html',
    "<h1 class=section-heading id=paragraph>Paragraph</h1><div class=\"grid-8 grid-divide-right\"><p>Lorem ipsum dolor sit amet, <a href=# title=\"This is a hyperlink\">this is a hyperlink</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p><p>Lorem ipsum dolor sit amet, <strong>this text is strong</strong> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p><p>Lorem ipsum dolor sit amet, <em>this text is emphasized</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p><p><img alt=\"Placeholder Image and Some Alt Text\" src=http://placehold.it/350x150 title=\"A title element for this placeholder image.\"></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy.</p><blockquote><p>This is a blockquote. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p><cite>-Author</cite></blockquote><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy.</p><h5>Paragraph with css3 columns</h5><p class=columns>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy.</p></div><div class=\"grid-3 push-1\"><h4 id=text-elements>Text Elements</h4><p>The <a href=#>a element</a> example</p><p>The <abbr>abbr element</abbr> and an <abbr title=Abbreviation>abbr</abbr> element with title examples</p><p>The <acronym title=\"A Cowboy Ran One New York Marathon\">ACRONYM</acronym> element example</p><p>The <b>b element</b> example</p><p>The <cite>cite element</cite> example</p><p>The <code>code element</code> example</p><p>The <em>em element</em> example</p><p>The <del>del element</del> example</p><p>The <dfn>dfn element</dfn> and <dfn title=\"Title text\">dfn element with title</dfn> examples</p><p>The <i>i element</i> example</p><p>The <ins>ins element</ins> example</p><p>The <kbd>kbd element</kbd> example</p><p>The <mark>mark element</mark> example</p><p>The <q>q element</q> example</p><p>The <q>q element <q>inside</q> a q element</q> example</p><p>The <s>s element</s> example</p><p>The <samp>samp element</samp> example</p><p>The <small>small element</small> example</p><p>The <span>span element</span> example</p><p>The <strong>strong element</strong> example</p><p>The <sub>sub element</sub> example</p><p>The <sup>sup element</sup> example</p><p>The <u>u element</u> example</p><p>The <var>var element</var> example</p></div>"
  );


  $templateCache.put('cms/app/views/styleguide/partials/text-elements.html',
    "<h1 id=monospace>Monospace / Preformatted</h1><p>Code block wrapped in \"pre\" and \"code\" tags</p><pre>\r" +
    "\n" +
    "\t<code>\r" +
    "\n" +
    "\t\tbody{\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\tbackground:$APPlight;\r" +
    "\n" +
    "\t\t\tcolor:$APPdark;\r" +
    "\n" +
    "\t\t\tfont-family:$font1;\r" +
    "\n" +
    "\t\t\toverflow:hidden;\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\tfooter{\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\theight:0;\r" +
    "\n" +
    "\t\t\t\tbackground-color:lighten($APPdark,10%);\r" +
    "\n" +
    "\t\t\t\t@include fitParent(\"\",auto,0,0,0);\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t&.show{\r" +
    "\n" +
    "\t\t\t\t\theight: $footerHeight;\r" +
    "\n" +
    "\t\t\t\t}\r" +
    "\n" +
    "\t\t\t}\r" +
    "\n" +
    "\t\t}\r" +
    "\n" +
    "\t</code>\r" +
    "\n" +
    "</pre><p>Monospace Text wrapped in \"pre\" tags</p><pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p></pre><hr>"
  );
}])