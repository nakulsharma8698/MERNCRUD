(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{17:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),r=n(33),l=n.n(r),i=(n(41),n(42),n(14)),o=n(10),j=n(11),b=n(5),h=n(13),d=n(12),u=(n(17),n(3)),O=n(15),x=n.n(O),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(i.a)({},e.target.name,e.target.value))},s.state={name:"",email:"",phone:"",seats:"",category:""},s.submitButton=s.submitButton.bind(Object(b.a)(s)),s.handleChange=s.handleChange.bind(Object(b.a)(s)),s}return Object(j.a)(n,[{key:"handleLogout",value:function(){localStorage.removeItem("token")}},{key:"submitButton",value:function(e){var t=this;e.preventDefault(),alert("Booking Successful"),this.props.history.push("/bookingdetails"),console.log(this.state);var n={name:this.state.name,email:this.state.email,phone:this.state.phone,seats:this.state.seats,category:this.state.category};x.a.post("http://localhost:4000/create",n).then((function(e){console.log(e.data),e.data&&t.setState({message:"Message sent successfully."})})).catch((function(e){return console.error("Error:",e)}))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,c=e.phone,a=e.seats,r=e.category;return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("b",{children:Object(s.jsx)("p",{className:"tdx",children:"The Family Pearl Restaurant"})})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(u.b,{to:"/bookingdetails",children:Object(s.jsx)("li",{children:"Bookings"})}),Object(s.jsx)(u.b,{to:"/task",children:Object(s.jsx)("li",{className:"active",children:"Add Booking"})}),Object(s.jsx)(u.b,{to:"#",children:Object(s.jsx)("li",{children:"About"})}),Object(s.jsx)(u.b,{to:"/",children:Object(s.jsx)("li",{style:{float:"right"},onClick:this.handleLogout,children:"Logout"})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("form",{children:[Object(s.jsx)("h1",{children:"Enter your Details"}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Name: "})}),Object(s.jsx)("input",{type:"text",name:"name",value:t,placeholder:"Enter your full name",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Email: "})}),Object(s.jsx)("input",{type:"email",name:"email",value:n,placeholder:"Enter your Email id",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Phone Number: "})}),Object(s.jsx)("input",{type:"text",name:"phone",value:c,placeholder:"Enter Mobile Number",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Seats Require: "})}),Object(s.jsx)("input",{type:"number",name:"seats",value:a,placeholder:"Enter No. of Seats",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Category: "})}),Object(s.jsxs)("select",{name:"category",value:r,placeholder:"",onChange:this.handleChange,required:!0,children:[Object(s.jsx)("option",{value:"Select",children:"Select Category"}),Object(s.jsx)("option",{value:"Basic",children:"Basic"}),Object(s.jsx)("option",{value:"Gold",children:"Gold"}),Object(s.jsx)("option",{value:"Premium",children:"Premium"}),Object(s.jsx)("option",{value:"Super Premium",children:"Super Premium"}),Object(s.jsx)("option",{value:"Celebrity",children:"Celebrity"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",className:"submitbtn",onClick:this.submitButton,children:" Submit"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})]})}}]),n}(a.a.Component),p=n(2),g=n(23),y=n.n(g),v=n(35),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={bookings:[]},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")&&x.a.get("http://localhost:4000/getbookings/").then((function(t){e.setState({bookings:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"handleLogout",value:function(){localStorage.removeItem("token")}},{key:"deldetails",value:function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Deleted Successfully"),window.location.reload(),this.props.history.push("/empdetails"),e.next=5,x.a.delete("http://localhost:4000/delete/"+t).then((function(e){console.log("Student successfully deleted!")})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("b",{children:Object(s.jsx)("p",{className:"tdx",children:"The Family Pearl Restaurant"})})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(u.b,{to:"/bookingdetails",children:Object(s.jsx)("li",{className:"active",children:"Bookings"})}),Object(s.jsx)(u.b,{to:"/task",children:Object(s.jsx)("li",{children:"Add Booking"})}),Object(s.jsx)(u.b,{to:"#",children:Object(s.jsx)("li",{children:"About"})}),Object(s.jsx)(u.b,{to:"/",children:Object(s.jsx)("li",{style:{float:"right"},onClick:this.handleLogout,children:"Logout"})})]}),Object(s.jsx)("h2",{style:{color:"white"},children:"BOOKING DETAILS"}),Object(s.jsx)("div",{children:Object(s.jsxs)("table",{className:"center",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Email"}),Object(s.jsx)("th",{children:"Phone Number"}),Object(s.jsx)("th",{children:"Seats"}),Object(s.jsx)("th",{children:"category"}),Object(s.jsx)("th",{children:"Action"})]}),this.state.bookings.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.name}),Object(s.jsx)("td",{children:t.email}),Object(s.jsx)("td",{children:t.phone}),Object(s.jsx)("td",{children:t.seats}),Object(s.jsx)("td",{children:t.category}),Object(s.jsxs)("td",{children:[" ",Object(s.jsx)("button",{className:"glyphicon glyphicon-pencil",style:{background:"green",color:"white"},onClick:function(){return e.props.history.push("/update/"+t._id)}})," \xa0\xa0\xa0",Object(s.jsx)("button",{className:"glyphicon glyphicon-trash",style:{background:"red",color:"white"},onClick:function(){return e.deldetails(t._id)}})]})]})}))]})})]})}}]),n}(c.Component),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(i.a)({},e.target.name,e.target.value))},s.state={phone:"",seats:"",category:""},s.submitButton=s.submitButton.bind(Object(b.a)(s)),s.handleChange=s.handleChange.bind(Object(b.a)(s)),s}return Object(j.a)(n,[{key:"handleLogout",value:function(){localStorage.removeItem("token")}},{key:"submitButton",value:function(e){var t=this;e.preventDefault(),console.log(this.state),alert("Updated SuccessFully");var n={phone:this.state.phone,seats:this.state.seats,category:this.state.category};x.a.post("http://localhost:4000/update/"+this.props.match.params.id,n).then((function(e){console.log(e.data),e.data&&t.setState({message:"Message sent successfully."})})).catch((function(e){return console.error("Error:",e)}))}},{key:"render",value:function(){var e=this.state,t=e.phone,n=e.seats,c=e.category;return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("b",{children:Object(s.jsx)("p",{className:"tdx",children:"The Family Pearl Restaurant"})})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(u.b,{to:"/bookingdetails",children:Object(s.jsx)("li",{children:"Bookings"})}),Object(s.jsx)(u.b,{to:"/task",children:Object(s.jsx)("li",{children:"Add Booking"})}),Object(s.jsx)(u.b,{to:"#",children:Object(s.jsx)("li",{children:"About"})}),Object(s.jsx)(u.b,{to:"/",children:Object(s.jsx)("li",{style:{float:"right"},onClick:this.handleLogout,children:"Logout"})})]}),Object(s.jsx)("h2",{style:{color:"white"},children:"Update Booking Details"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("h1",{children:"Update your Details"}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Phone Number: "})}),Object(s.jsx)("input",{type:"text",name:"phone",value:t,placeholder:"Enter Phone Number",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Seats: "})}),Object(s.jsx)("input",{type:"number",name:"seats",value:n,placeholder:"Enter Seats",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Category: "})}),Object(s.jsxs)("select",{name:"category",value:c,placeholder:"Enter your designation",onChange:this.handleChange,required:!0,children:[Object(s.jsx)("option",{value:"Select",children:"Select Category"}),Object(s.jsx)("option",{value:"Basic",children:"Basic"}),Object(s.jsx)("option",{value:"Gold",children:"Gold"}),Object(s.jsx)("option",{value:"Premium",children:"Premium"}),Object(s.jsx)("option",{value:"Super Premium",children:"Super Premium"}),Object(s.jsx)("option",{value:"Celebrity",children:"Celebrity"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",className:"submitbtn",onClick:this.submitButton,children:" Submit"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})]})}}]),n}(c.Component),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={username:"",password:"",token:""},e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(j.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state);var n={username:this.state.username,password:this.state.password};x.a.post("http://localhost:4000/admin/login",n).then((function(e){console.log(e.data),e.data.success&&console.log(e.data),localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),t.props.history.push("/bookingdetails")})).catch((function(e){return console.error("Error:",e)}))}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("b",{children:Object(s.jsx)("p",{className:"tdx",children:"The Family Pearl Restaurant"})})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"loginpage",children:[" ",Object(s.jsx)("b",{children:"Welcome to Family Pearl "}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,method:"user",children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)("p",{children:"Enter your credentials."}),Object(s.jsx)("hr",{}),Object(s.jsxs)("label",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("b",{children:"Username:"}),"\u2003\u2003"]}),Object(s.jsx)("input",{type:"text",name:"username",value:t,placeholder:"Enter Username",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("label",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("b",{children:"Passsword:"}),"\xa0"]}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Enter Password",value:n,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})]}),Object(s.jsx)("button",{type:"submit",className:"submitbtn",children:"LogIn"}),Object(s.jsxs)("p",{children:["New User? ",Object(s.jsx)("a",{href:"#",children:Object(s.jsxs)("b",{children:[" ",Object(s.jsx)(u.b,{to:"/register",children:"Register"})]})}),"."]})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})}}]),n}(a.a.Component),S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={username:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(j.a)(n,[{key:"handleSubmit",value:function(e){alert("Registered Successfully!"),e.preventDefault(),console.log(this.state);var t={username:this.state.username,password:this.state.password};fetch("http://localhost:4000/admin/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){return console.log("Success:",e)}))}},{key:"render",value:function(){var e,t=this.state,n=t.username,c=t.password;return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("b",{children:Object(s.jsx)("p",{className:"tdx",children:"The Family Pearl Restaurant"})})}),Object(s.jsxs)("div",{class:"container signin",children:[Object(s.jsx)("br",{}),Object(s.jsx)("p",{style:{color:"white"},children:Object(s.jsx)("b",{children:"Already have an account? "})}),Object(s.jsx)(u.b,{to:"/",children:Object(s.jsx)("button",{type:"submit",className:"submitbtn",children:"LogIn"})})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{color:"white"},children:[" ",Object(s.jsx)("b",{children:"New To Family Pearl? Create an Account "}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("form",(e={className:"form",onSubmit:this.handleSubmit,method:"user"},Object(i.a)(e,"className","right"),Object(i.a)(e,"children",[Object(s.jsx)("h1",{children:"Register"}),Object(s.jsx)("p",{children:"Please fill in this form to create an account."}),Object(s.jsx)("hr",{}),Object(s.jsxs)("label",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("b",{children:"Username:"}),"\u2003\u2003"]}),Object(s.jsx)("input",{type:"text",name:"username",value:n,placeholder:"Enter Username",onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("label",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("b",{children:"Passsword:"}),"\xa0"]}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Enter Password",value:c,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})]}),Object(s.jsx)("button",{type:"submit",className:"submitbtn",children:"Register"}),Object(s.jsxs)("p",{children:["By creating an account you agree to our ",Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("b",{children:"Terms & Privacy"})}),"."]})]),e)),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})}}]),n}(a.a.Component);var N=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)(p.a,{exact:!0,path:"/",component:k}),Object(s.jsx)(p.a,{exact:!0,path:"/task",component:m}),Object(s.jsx)(p.a,{exact:!0,path:"/register",component:S}),Object(s.jsx)(p.a,{exact:!0,path:"/update/:id",component:C}),Object(s.jsx)(p.a,{exact:!0,path:"/bookingdetails",component:f})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.985c1e49.chunk.js.map