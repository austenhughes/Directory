(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),c=n(13),s=n.n(c),i=(n(23),n(3)),o=n(14),l=n(15),u=n(18),h=n(17),j=(n(24),n(0));var d=function(t){return Object(j.jsx)("div",{id:"navBar",className:"nav"})};n(26);var b=function(t){var e=t;return Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"photo"}),Object(j.jsx)("th",{children:"name"}),Object(j.jsx)("th",{children:"location"}),Object(j.jsx)("th",{children:"email"}),Object(j.jsx)("th",{children:"phone"})]})}),Object(j.jsx)("tbody",{children:e.results.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:t.picture.large,className:"img",src:t.picture.large})}),Object(j.jsxs)("td",{children:[t.name.first," ",t.name.last]}),Object(j.jsxs)("td",{children:[t.location.state," ",Object(j.jsx)("br",{}),t.location.city]}),Object(j.jsx)("td",{children:t.email}),Object(j.jsx)("td",{children:t.phone})]},t.uuid)}))})]})};n(27);var f=function(t){return Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"searchStuff",children:[Object(j.jsx)("input",{onChange:t.handleInputChange,value:t.value,name:"search",type:"text",className:"form-control",placeholder:"Search by first name",id:"search"}),Object(j.jsx)("button",{onClick:t.handleFormSubmit,className:"btn btn-primary",children:"Search"}),Object(j.jsx)("button",{onClick:t.handleButtonPush,className:"btn btn-primary",children:"Sort by name"}),Object(j.jsx)("button",{onClick:t.handleButtonPushLocation,className:"btn btn-primary",children:"Sort by location"})]})})};n(28);var m=function(t){return Object(j.jsx)("div",{className:"footer",children:"Twinkle twinkle little bat how I wonder where your at! -Lewis Carroll"})};n(29);var O=function(t){return Object(j.jsx)("div",{className:"header",children:"Directory"})},v=n(16),x=n.n(v),p={search:function(t){return x.a.get("https://randomuser.me/api/?results=5000"+t)}},g=(n(48),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={search:"",results:[]},t.searchDirectory=function(e){p.search(e).then((function(e){return t.setState({results:e.data.results})})).catch((function(t){return console.log(t)}))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.results,r=t.state.search,a=n.filter((function(t){return t.name.first===r}));t.setState({results:a}),console.log(a)},t.handleButtonPush=function(e){e.preventDefault();var n=e.target.value,r=e.target.name;t.setState(Object(i.a)({},r,n));var a=t.state.results;console.log(a),a.sort((function(t,e){return t.name.first<e.name.first?-1:t.name.first>e.name.first?1:0}))},t.handleButtonPushLocation=function(e){e.preventDefault();var n=e.target.value,r=e.target.name;t.setState(Object(i.a)({},r,n));var a=t.state.results;console.log(a),a.sort((function(t,e){return t.location.city<e.location.city?-1:t.location.city>e.location.city?1:0}))},t.handleInputChange=function(e){e.preventDefault();var n=e.target.value,r=e.target.name;t.setState(Object(i.a)({},r,n))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.searchDirectory([])}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(d,{}),Object(j.jsx)(f,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,handleButtonPush:this.handleButtonPush,handleButtonPushLocation:this.handleButtonPushLocation}),Object(j.jsx)(b,{results:this.state.results}),Object(j.jsx)(m,{})]})}}]),n}(r.Component));var y=function(){return Object(j.jsx)(g,{})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.5b63f968.chunk.js.map