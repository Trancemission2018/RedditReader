webpackJsonp([1],{101:function(t,e,s){"use strict";var a=s(46),n=s(102),r=s(5),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},102:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-tile",{attrs:{avatar:""},on:{click:t.loadPost}},[s("v-list-tile-avatar",[t._v("\n            "+t._s(t.post.data.score)+"\n        ")]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(t.post.data.title)+" -\n                "),s("small",[t._v(t._s(t.post.data.domain))])]),t._v(" "),s("v-list-tile-sub-title",[t._v(t._s(t.post.data.num_comments)+" Comments")])],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},103:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-layout",{staticClass:"a-2",attrs:{fluid:""}},[s("v-flex",{attrs:{xs12:""}},[t.loading?s("div",{staticClass:"text-xs-center pt-4"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e()])],1),t._v(" "),s("v-layout",{staticClass:"a-2",attrs:{fluid:""}},[t.loading?t._e():s("v-card",{attrs:{flat:""}},[s("v-list",{attrs:{"two-line":""}},t._l(t.$store.state.reddit.currentPosts,function(t,e){return s("post-row",{key:e,attrs:{post:t}})}))],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},104:function(t,e,s){"use strict";function a(t){s(105)}var n=s(47),r=s(106),i=s(5),o=a,c=i(n.a,r.a,!1,o,"data-v-05d0980c",null);e.a=c.exports},105:function(t,e){},106:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-container",{attrs:{fluid:""}},[t._v("\n    Here we will have all the latest news, from hacker news!\n")])},n=[],r={render:a,staticRenderFns:n};e.a=r},107:function(t,e,s){"use strict";var a=s(11),n=s(108),r=s(109),i=s(110),o=s(139),c=s(140);a.default.use(n.a),e.a=new n.a.Store({state:r.a,actions:i.a,mutations:o.a,getters:c.a})},109:function(t,e,s){"use strict";e.a={title:"MyHome",lastScroll:0,reddit:{currentSub:null,currentType:"new",types:[{value:"new",text:"New"},{value:"hot",text:"Hot"}],currentPosts:[],currentAfter:null,history:[],pages:[],firstId:null,lastId:null,subs:[{name:"Hacker News",path:"/hackernews"},{name:"CasualUk",path:"/reddit/sub/CasualUk"},{name:"BritishSuccess",path:"/reddit/sub/BritishSuccess"},{name:"BritishProblems",path:"/reddit/sub/BritishProblems"},{name:"Vue",path:"/reddit/sub/VueJs"},{name:"Javascript",path:"/reddit/sub/Javascript"},{name:"WebDev",path:"/reddit/sub/webdev"}]}}},110:function(t,e,s){"use strict";var a=s(48),n=s.n(a),r=s(138);e.a={loadPosts:function(t,e){var s=this,a=(t.commit,t.state);return new n.a(function(t,n){var i=a.route.params.subReddit,o=a.reddit.currentType;a.title=i,r.a.getPosts(i,o,e).then(function(e){var a=e.children.length-1;s.commit("SET_REDDIT_POSTS",e.children),s.commit("SET_FIRST_ID",e.children[0].data.name),s.commit("SET_LAST_ID",e.children[a].data.name),s.commit("SET_CURRENT_AFTER",e.children[a].data.name),s.commit("ADD_PAGE",e.children[0].data.name),t()}).catch(function(t){return n(t)})})}}},138:function(t,e,s){"use strict";var a=s(48),n=s.n(a),r=s(18),i=r.create({baseURL:"https://old.reddit.com"});e.a={getPosts:function(t,e,s){var a="/r/"+t+"/"+e+"/.json";return s&&(a+="?after="+s),new n.a(function(t,e){i.get(a).then(function(e){console.log("We have some posts from ",e),t(e.data.data)}).catch(function(t){return e(t)})})}}},139:function(t,e,s){"use strict";e.a={SET_REDDIT_VIEW:function(t,e){t.reddit.currentType=e},SET_REDDIT_POSTS:function(t,e){t.reddit.currentPosts=e},SET_FIRST_ID:function(t,e){console.log("Setting ID",e),t.reddit.firstId=e},SET_LAST_ID:function(t,e){t.reddit.lastId=e},SET_CURRENT_AFTER:function(t,e){t.reddit.currentAfter=e},ADD_PAGE:function(t,e){t.reddit.pages.push(e)},SET_TITLE:function(t,e){t.title=e}}},140:function(t,e,s){"use strict";e.a={}},142:function(t,e){},30:function(t,e,s){"use strict";e.a={data:function(){return{postType:"new",clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1}},name:"App",mounted:function(){},watch:{},methods:{loadNext:function(){var t="/reddit/sub/"+this.$store.state.route.params.subReddit+"?after="+this.$store.state.reddit.currentAfter;this.$store.state.lastScroll=0,this.$router.push(t)},loadPrevious:function(){this.$router.go(-1)}}}},31:function(t,e,s){"use strict";e.a={name:"",components:{},props:[],data:function(){return{}},created:function(){},methods:{}}},32:function(t,e,s){"use strict";var a=s(18),n=s.n(a);e.a={name:"reddit-post",components:{},props:[],data:function(){return{post:{},comments:[],rootComments:[],depth:0,currentAuthor:null,url:"",isImage:!1,imageUrl:""}},mounted:function(){var t=this;console.log("And here are are"),n.a.get("https://old.reddit.com/r/"+this.$route.params.subReddit+"/"+this.$route.params.postId+"/.json").then(function(e){t.post=e.data[0].data.children[0].data,t.currentAuthor=t.post.author,""!==t.post.url&&console.log("URL ",t.parseUrl(t.post.url)),t.post.content=t.post.selftext.replace(/(?:\r\n|\r|\n)/g,"<br>"),t.comments=t.getCommentsFromArray(e.data[1].data.children)})},methods:{getCommentsFromArray:function(t){var e=this,s="";return t.forEach(function(t){if(void 0!==t)if(0===t.data.depth?s+='<div class="pa-1 grey lighten-3 mb-3">':s+='<div class="pa-1 white">',console.log("In Loop",t),s+='\n                  <div class="">\n          ',e.currentAuthor===t.data.author?s+='<b><span class="teal pa-1">'+e.currentAuthor+"</span></b>":s+="<b>"+t.data.author+"</b>",s+="\n                  "+t.data.ups+"</div>\n                  "+e.decodeHTMLEntities(t.data.body_html)+"\n                  </div>",void 0!==t.data.replies&&""!==t.data.replies){e.depth++;var a=10*e.depth;s+='<div style="padding-left: '+a+'px"> '+e.getCommentsFromArray(t.data.replies.data.children)+"</div>"}else e.depth=0}),s},decodeHTMLEntities:function(t){if(t){var e={amp:"&",apos:"'",lt:"<",gt:">",quot:'"',nbsp:" "},s=/&([a-z]+);/gi;return t.replace(s,function(t,s){return s=s.toLowerCase(),e.hasOwnProperty(s)?e[s]:t})}return""},parseUrl:function(t){var e=new RegExp("^https?://(.*)/(.*)$","i"),s=t.match(e),a=t.split(".").pop();switch(console.log("Ext",a),this.imageUrl="",a){case"png":case"jpg":case"jpeg":this.isImage=!0,this.imageUrl=t}this.isImage||(this.url=s[1],this.url.match(/imgur/)?(this.getImageFromImgur(t),this.isImage=!0):this.url="")},getImageFromImgur:function(t){var e=this;n.a.get("http://localhost:9000/imgur/image?url="+t).then(function(t){e.imageUrl=t.data.url})}}}},38:function(t,e,s){"use strict";var a=s(90),n=s.n(a),r=s(100),i=(s.n(r),s(101));e.a={name:"",components:{PostRow:i.a},props:[],mounted:function(){this.$route.query.after?this.loadPosts(this.$route.query.after):this.loadPosts(null)},data:function(){return{loading:!0}},watch:{"$store.state.route.params.subReddit":function(){this.$store.state.lastScroll=0,this.$store.state.reddit.currentAfter=null,this.$store.state.reddit.pages=[],this.loadPosts(null)},$route:function(t,e){console.log(t),t.query.after?this.loadPosts(t.query.after):this.loadPosts(null)},"$store.state.reddit.currentType":function(){this.$store.state.lastScroll=0,this.$store.state.reddit.currentAfter=null,this.$store.state.reddit.pages=[],this.loadPosts(null)}},methods:{loadPosts:function(t){var e=this;this.loading=!0,this.$store.state.reddit.currentPosts=[],this.$store.dispatch("loadPosts",t).then(function(t){e.loading=!1,console.log("Scrolling to",e.$store.state.lastScroll),setTimeout(function(){e.$vuetify.goTo(e.$store.state.lastScroll,{duration:300,offset:0,easing:"easeInOutCubic",easings:n()(r)}).then(function(){})})})}}}},46:function(t,e,s){"use strict";e.a={name:"post-row",props:{post:{}},computed:{postUrl:function(){}},methods:{loadPost:function(){console.log("Can we save window position",window.scrollY),this.$store.state.lastScroll=window.scrollY,this.$router.push("/reddit/post/"+this.$store.state.route.params.subReddit+"/"+this.post.data.id)}}}},47:function(t,e,s){"use strict";e.a={name:"",components:{},props:[],data:function(){return{}},created:function(){},mounted:function(){this.$store.state.title="Hacker News"},methods:{}}},56:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(11),n=s(59),r=s(61),i=s(107),o=s(141),c=s.n(o),l=s(142),u=(s.n(l),s(18)),d=s.n(u),p=s(143),v=s.n(p),f=s(144);s.n(f);a.default.use(v.a,d.a),Object(f.sync)(i.a,r.a),a.default.use(c.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:r.a,store:i.a,components:{App:n.a},template:"<App/>"})},59:function(t,e,s){"use strict";var a=s(30),n=s(60),r=s(5),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},60:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("div",{staticClass:"pa-2"}),t._v(" "),s("v-list",t._l(t.$store.state.reddit.subs,function(e,a){return s("v-list-tile",{key:a,attrs:{value:"true",to:e.path},on:{click:function(e){t.drawer=!1}}},[s("v-list-tile-action"),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{textContent:t._s(e.name)}})],1)],1)}))],1),t._v(" "),s("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[s("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.$router.go(-1)}}},[s("v-icon",[t._v("chevron_left")])],1),t._v(" "),s("v-toolbar-title",[t._v(" "+t._s(t.$store.state.title))]),t._v(" "),s("v-spacer"),t._v(" "),s("v-layout",[s("v-flex",{attrs:{xs8:""}}),t._v(" "),s("v-flex",{staticClass:"text-xs-right pt-3",attrs:{xs4:""}},[s("v-select",{attrs:{items:t.$store.state.reddit.types},model:{value:t.$store.state.reddit.currentType,callback:function(e){t.$set(t.$store.state.reddit,"currentType",e)},expression:"$store.state.reddit.currentType"}})],1)],1)],1),t._v(" "),s("v-content",{attrs:{id:"mainContent"}},[s("router-view")],1),t._v(" "),s("v-footer",{attrs:{fixed:t.fixed,app:"",height:48}},[s("v-layout",{staticClass:"pa-2"},[s("v-flex",{attrs:{xs6:""}},[s("v-btn",{staticClass:"grey",attrs:{small:"",disabled:1===t.$store.state.reddit.pages.length},on:{click:t.loadPrevious}},[t._v("Previous\n                ")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},[s("v-btn",{staticClass:"grey",attrs:{small:""},on:{click:t.loadNext}},[t._v("Next\n                ")])],1)],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},61:function(t,e,s){"use strict";var a=s(11),n=s(62),r=s(63),i=s(67),o=s(88),c=s(104);a.default.use(n.a),e.a=new n.a({history:!0,scrollBehavior:function(t,e,s){return s||{x:0,y:0}},routes:[{path:"/",name:"Start",component:r.a},{path:"/reddit/sub/:subReddit/:section?",name:"Reddit Sub",component:o.a},{path:"/reddit/post/:subReddit/:postId",name:"Reddit Post",component:i.a},{path:"/hackernews",name:"Hacker News",component:c.a}]})},63:function(t,e,s){"use strict";function a(t){s(64)}var n=s(31),r=s(66),i=s(5),o=a,c=i(n.a,r.a,!1,o,"data-v-72d97b20",null);e.a=c.exports},64:function(t,e){},66:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",[s("v-flex",{attrs:{xs4:"",md6:""}},[t._v("\n            Ando so it begin\n        ")]),t._v(" "),s("v-flex",{attrs:{xs4:"",md6:""}},[t._v("\n            Again....\n        ")])],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},67:function(t,e,s){"use strict";function a(t){s(68)}var n=s(32),r=s(87),i=s(5),o=a,c=i(n.a,r.a,!1,o,"data-v-b9c03c80",null);e.a=c.exports},68:function(t,e){},87:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",{staticClass:"postTitle mb-2"},[s("strong",[t._v(t._s(t.post.title))]),t._v("\n        - "),s("span",{staticClass:"teal pa-1"},[t._v(t._s(t.post.author))])]),t._v(" "),t.isImage?s("img",{attrs:{src:t.imageUrl,width:"500"}}):t._e(),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"pa-2 mb-2"},[t._v("\n        "+t._s(t.post.url)+"\n        "),s("a",{attrs:{href:t.post.url,target:"_blank"}},[s("v-icon",{attrs:{small:""}},[t._v("link")])],1)]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.comments)}})])},n=[],r={render:a,staticRenderFns:n};e.a=r},88:function(t,e,s){"use strict";function a(t){s(89)}var n=s(38),r=s(103),i=s(5),o=a,c=i(n.a,r.a,!1,o,"data-v-b51fc5ee",null);e.a=c.exports},89:function(t,e){}},[56]);
//# sourceMappingURL=app.c09b19460fc2658ad772.js.map