import{r as l,j as e,N as c}from"./index-CNISrJWF.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...a)=>a.filter((s,t,o)=>!!s&&o.indexOf(s)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=l.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:r="",children:n,iconNode:h,...i},u)=>l.createElement("svg",{ref:u,...y,width:s,height:s,stroke:a,strokeWidth:o?Number(t)*24/Number(s):t,className:x("lucide",r),...i},[...h.map(([b,j])=>l.createElement(b,j)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(a,s)=>{const t=l.forwardRef(({className:o,...r},n)=>l.createElement(g,{ref:n,iconNode:s,className:x(`lucide-${k(a)}`,o),...r}));return t.displayName=`${a}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=d("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=d("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=d("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),L=()=>{const[a,s]=l.useState(!1),t=()=>{localStorage.clear(),window.location.href="/"},[o,r]=l.useState(),n=async()=>{const h=await localStorage.getItem("adminData");try{const i=h?JSON.parse(h):null;r(i.admin)}catch(i){console.error("Failed to parse admin data:",i),r(null)}};return l.useEffect(()=>{n()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"custom-sidebar",style:{borderRadius:0},children:e.jsxs("div",{className:"sidebar-content",children:[e.jsx("div",{className:"sidebar-logo mb-4 text-center",children:e.jsx("h2",{className:"text-yellow",children:"Admin Panel"})}),e.jsxs("nav",{className:"nav flex-column",children:[e.jsxs(c,{to:"/",exact:"true",className:"nav-link",children:[e.jsx(p,{className:"icon"}),"Dashboard"]}),e.jsxs(c,{to:"/b2c",className:"nav-link",children:[e.jsx(f,{className:"icon"}),"B2C Users"]}),e.jsxs(c,{to:"/b2b",className:"nav-link",children:[e.jsx(N,{className:"icon"}),"B2B Users"]}),e.jsxs(c,{to:"/jobPostList",className:"nav-link",children:[e.jsx(m,{className:"icon"}),"Job Post"]}),e.jsxs(c,{to:"/offerLettersList",className:"nav-link",children:[e.jsx(m,{className:"icon"}),"Offer Letters"]}),(o==null?void 0:o.isEdit)&&e.jsxs(c,{to:"/ApiLogsDashboard",className:"nav-link",children:[e.jsx(m,{className:"icon"}),"Api Logs"]})]}),e.jsx("div",{className:"logout-section",children:e.jsxs("button",{className:"btn logout-btn",onClick:()=>s(!0),children:[e.jsx(v,{className:"icon"}),"Logout"]})})]})}),a&&e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content bg-light text-dark",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title text-danger",children:"Confirm Logout"}),e.jsx("button",{type:"button",className:"btn-close btn-close-danger",onClick:()=>s(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsx("p",{children:"Are you sure you want to logout?"})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx("button",{className:"btn btn-danger",onClick:t,children:"Logout"})]})]})})})]})};export{L as default};
