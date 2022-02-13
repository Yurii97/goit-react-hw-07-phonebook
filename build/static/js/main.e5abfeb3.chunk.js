(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(16),i=n.n(o),s=(n(29),n(11)),d=n(8),u=n(10),l=u.a.label(a||(a=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n"]))),b=n(4),j=n(1),h=Object(j.b)("contacts/filter"),p=n(2);function m(){var e=Object(b.e)((function(e){return e.contacts})).filter,t=Object(b.d)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l,{children:["Find contacts by name",Object(p.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t(h(n))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})})}var O,x,f,g=n(13),v=u.a.button(O||(O=Object(d.a)(["\n  margin-left: 25px;\n  :hover,\n  :focus {\n    background-color: blue;\n    color: white;\n  }\n"])));function y(e){var t=e.id,n=e.name,a=e.phone,c=e.removeContact;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{children:[n," : ",a]}),Object(p.jsx)(v,{type:"button",onClick:function(){return c(t)},children:"Delete"})]})}var C=u.a.ul(x||(x=Object(d.a)(["\n  & li {\n    margin-top: 7px;\n  }\n"]))),w=u.a.p(f||(f=Object(d.a)(["\ncolor: red;\n"]))),k=n(22);var A,F=function(e){var t=e.size;return Object(p.jsx)("div",{style:{width:t,height:t},children:Object(p.jsx)(k.a,{color:"#00BFFF",margin:"0 auto",height:"inherit",width:"inherit"})})},z=n(21),q=n(5),L=Object(z.a)({reducerPath:"contacts",baseQuery:Object(q.d)({baseUrl:"https://62056a28161670001741bb7d.mockapi.io"}),tagTypes:["Contact"],endpoints:function(e){return{getContact:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]})}}}),T=L.useGetContactQuery,Z=L.useAddContactMutation,E=L.useDeleteContactMutation;function M(){var e=Object(b.e)((function(e){return e})).filter,t=E(),n=Object(g.a)(t,1)[0],a=T(),c=a.data,r=a.error,o=a.isError,i=a.isFetching,d=function(e){n(e),s.b.success("delete is complete")};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{children:[i&&Object(p.jsx)(F,{size:50}),o&&Object(p.jsx)(w,{children:r.error}),c&&!o&&Object(p.jsx)(C,{children:c.length>0&&c.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(e){var t=e.id,n=e.name,a=e.phone;return Object(p.jsx)("li",{children:Object(p.jsx)(y,{id:t,name:n,phone:a,removeContact:d})},t)}))})]})})}var P=u.a.form(A||(A=Object(d.a)(["\n  /* display: flex;\n  flex-direction: column; */\n  padding: 20px;\n  width: 300px;\n  border: 1px solid black;\n\n  & label {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  & button {\n    display: flex;\n    margin-top: 20px;\n    :hover,\n    :focus {\n      background-color: blue;\n      color: white;\n    }\n  }\n"])));function S(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(g.a)(r,2),i=o[0],d=o[1],u=Z(),l=Object(g.a)(u,2),b=l[0],j=l[1].isLoading,h=T().data,m=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":d(c);break;default:return}},O=function(e){h.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?s.b.error("contact with such name already exists"):(b(e),s.b.success("contact added"))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(P,{onSubmit:function(e){e.preventDefault(),O({name:n,phone:i}),d(""),a("")},children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",name:"name",onChange:m,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",onChange:m,value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(p.jsxs)("button",{type:"submit",disabled:j,children:[j&&Object(p.jsx)(F,{size:12}),"Add contact"]})]})})}var B,D=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(S,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(m,{}),Object(p.jsx)(M,{})]})},J=n(23),N=n(9),Q=Object(j.d)("",Object(N.a)({},h,(function(e,t){return t.payload}))),$=Object(j.a)({reducer:(B={},Object(N.a)(B,L.reducerPath,L.reducer),Object(N.a)(B,"filter",Q),B),middleware:function(e){return[].concat(Object(J.a)(e()),[L.middleware])}});Object(q.e)($.dispatch),i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b.a,{store:$,children:Object(p.jsx)(D,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e5abfeb3.chunk.js.map