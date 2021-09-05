(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{70:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(10),r=a.n(i),l=(a(70),a(28)),o=a(29),c=a(32),h=a(31),d=a(119),u=a(56),j=a.n(u),b=a(55),g=a.n(b),f=a(121),m=a(120),p=a(123),O=a(118),v=a(116),x=a(117),C=a(115),y=a(6),k=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={open:!0,formData:{fist_name:"",last_name:"",email:"",pwd:"",username:""}},n}return Object(o.a)(a,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1}),this.props.closeDialog()}},{key:"addUser",value:function(){var e=this;fetch("http://3.6.93.159:7883/machstatz/add_new_user",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(this.state.formData)}).then((function(e){return e.json()})).then((function(t){alert(t.message),"Success"===t.status&&e.handleClose()})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){var t=this.state.formData;switch(e.target.id){case"fist_name":t.fist_name=e.target.value;break;case"last_name":t.last_name=e.target.value;break;case"username":t.username=e.target.value;break;case"email":t.email=e.target.value;break;case"pwd":t.pwd=e.target.value}this.setState({formData:t})}},{key:"render",value:function(){var e=this.state.formData;return Object(y.jsx)("div",{children:Object(y.jsxs)(p.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(y.jsx)(C.a,{id:"form-dialog-title",children:"Add User"}),Object(y.jsxs)(v.a,{children:[Object(y.jsx)(x.a,{children:"Please Enter User Information."}),Object(y.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"fist_name",value:e.fist_name,onChange:this.handleChange.bind(this),label:"First Name",type:"text",fullWidth:!0}),Object(y.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"last_name",value:e.last_name,onChange:this.handleChange.bind(this),label:"Last Name",type:"text",fullWidth:!0}),Object(y.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"username",value:e.username,onChange:this.handleChange.bind(this),label:"Username",type:"text",fullWidth:!0}),Object(y.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"email",value:e.email,onChange:this.handleChange.bind(this),label:"Email Address",type:"email",fullWidth:!0}),Object(y.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"pwd",value:e.pwd,onChange:this.handleChange.bind(this),label:"Password",type:"password",fullWidth:!0})]}),Object(y.jsxs)(O.a,{children:[Object(y.jsx)(f.a,{onClick:this.handleClose.bind(this),color:"primary",children:"Cancel"}),Object(y.jsx)(f.a,{onClick:this.addUser.bind(this),color:"primary",children:"Add"})]})]})})}}]),a}(s.a.Component),D=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={userData:[],addDialog:!1},n}return Object(o.a)(a,[{key:"deleteUser",value:function(e){var t=this;fetch("http://3.6.93.159:7883/machstatz/delete_existing_user?email="+e,{method:"DELETE",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){alert(e.message),t.getUser()})).catch((function(e){return console.log(e)}))}},{key:"getUser",value:function(){var e=this;fetch("http://3.6.93.159:7883/machstatz/get_all_users",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){e.setState({userData:t})})).catch((function(e){return console.log(e)}))}},{key:"componentWillMount",value:function(){this.getUser()}},{key:"getColor",value:function(){var e=["red","green","blue","orange","yellow"];return e[Math.floor(Math.random()*e.length)]}},{key:"openDialog",value:function(){this.setState({addDialog:!0})}},{key:"closeDialog",value:function(){this.setState({addDialog:!1}),this.getUser()}},{key:"getDailog",value:function(){return this.state.addDialog?Object(y.jsx)(k,{closeDialog:this.closeDialog.bind(this)}):null}},{key:"getChar",value:function(e){if(e)return e.charAt(0).toUpperCase()}},{key:"renderCard",value:function(){var e=[],t=this.state.userData;console.log(this.state.userData);for(var a=0;a<t.length;a++)e.push(Object(y.jsxs)(d.a,{style:{width:"250px",float:"left",margin:"10px",padding:"15px"},children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(g.a,{style:{float:"right",cursor:"pointer",color:"red"},onClick:this.deleteUser.bind(this,t[a].email)}),Object(y.jsx)(j.a,{style:{float:"right",cursor:"pointer"}})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{width:"100%"},children:[Object(y.jsx)("div",{style:{width:"40px",height:"40px",borderRadius:"50px",float:"left",textAlign:"center",backgroundColor:this.getColor()},children:Object(y.jsx)("span",{children:this.getChar(t[a].fist_name)})}),Object(y.jsx)("div",{style:{width:"50%",float:"left"},children:Object(y.jsxs)("span",{children:["\xa0\xa0",t[a].fist_name]})})]})]},a));return e}},{key:"render",value:function(){return Object(y.jsxs)("div",{style:{width:"100%"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(f.a,{variant:"contained",color:"primary",onClick:this.openDialog.bind(this),children:"Add User"})}),Object(y.jsx)("div",{children:this.renderCard()}),Object(y.jsx)("div",{children:this.getDailog()})]})}}]),a}(s.a.Component),w=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{height:"60px",width:"100%",background:"black",color:"white"},children:Object(y.jsx)("h1",{children:"User Management"})}),Object(y.jsx)("h1",{children:Object(y.jsx)(D,{})})]})}}]),a}(s.a.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),_()}},[[76,1,2]]]);
//# sourceMappingURL=main.879127db.chunk.js.map