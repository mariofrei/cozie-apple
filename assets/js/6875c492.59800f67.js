(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(129),r=t(135),c=t(127),o=t(131),m=t(126),i=t(124);function g({tagName:e,count:a}){const t=function(){const{selectMessage:e}=Object(i.usePluralForm)();return a=>e(a,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return s.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:t(a),tagName:e}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){const{metadata:a,items:t,sidebar:l}=e,{allTagsPath:i,name:u,count:p}=a;return s.a.createElement(n.a,{title:`Posts tagged "${u}"`,description:`Blog | Tagged "${u}"`,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},s.a.createElement("div",{className:"container margin-vert--lg"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--3"},s.a.createElement(o.a,{sidebar:l})),s.a.createElement("main",{className:"col col--7"},s.a.createElement("h1",null,s.a.createElement(g,{count:p,tagName:u})),s.a.createElement(c.a,{href:i},s.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),s.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>s.a.createElement(r.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},s.a.createElement(e,null)))))))))}}}]);