(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(4),s=a(5),c=a(9),d=a(8),m=a(1),u=a(6),g=a.n(u),h=(a(15),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),console.log("constructor runs"),(n=t.call(this,e)).state={markdown:"# Heading H1  \n## Heading H2  \n---  \n[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)  \n**Bold**  \n*Italic*  \n~~Strikethrough~~  \n`Code`  \n- Unordered List  \n1. Ordered List  \n2. Ordered List  \n- [ ] Task List  \n- [x] Task List  \n\n![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/250px-FreeCodeCamp_logo.png)"},n}return Object(s.a)(a,[{key:"updateMarkdown",value:function(e){console.log("updateMarkdown runs"),this.setState({markdown:e})}},{key:"render",value:function(){var e=this;console.log("render runs");var t={width:"400px",height:"70vh",marginLeft:"auto",marginRight:"auto",padding:"10px"};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h1",null,r.a.createElement(m.a,{className:"text-align-center",variant:"light"},"Markdown Previewer")))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h4",null,r.a.createElement(m.a,{className:"text-align-center",variant:"secondary"},"Markdown Input"))),r.a.createElement("div",{className:"mark-input",style:t},r.a.createElement("textarea",{id:"editor",className:"input",style:t,value:this.state.markdown,onChange:function(t){e.updateMarkdown(t.target.value)}}),r.a.createElement("div",null,r.a.createElement("button",{id:"button",onClick:function(t){e.setState({markdown:"# Heading H1  \n## Heading H2  \n---  \n[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)  \n**Bold**  \n*Italic*  \n~~Strikethrough~~  \n`Code`  \n- Unordered List  \n1. Ordered List  \n2. Ordered List  \n- [ ] Task List  \n- [x] Task List  \n\n![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/250px-FreeCodeCamp_logo.png)"})}},"Reset Markdown Input")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h4",null,r.a.createElement(m.a,{className:"text-align-center",variant:"secondary"},"Preview"))),r.a.createElement("div",{id:"preview",style:{width:"400px",height:"70vh",marginLeft:"auto",marginRight:"auto",padding:"10px",margin:"18px",border:"solid 1px grey",backgroundColor:"lightsteelblue"},dangerouslySetInnerHTML:{__html:g()(this.state.markdown)}})))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.89c0197b.chunk.js.map