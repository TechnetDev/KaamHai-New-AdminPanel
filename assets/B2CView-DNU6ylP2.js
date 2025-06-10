import{r as d,j as e,L as ye,B as u}from"./index-BZvsLlx0.js";import{p as ve,j as We}from"./user-CzrXbbqh.js";import{d as Ee,u as Me}from"./users-WTnmYfkT.js";import"./axiosInstance-BCvFxxX2.js";const Be=({user:o,setListPage:C,setViewPage:A,users:we,setUsers:ke})=>{var z,U,W,E,M,O,$,q,_,B,V,H,Q,Y,G,K,X,Z,D,ee,se,ae,le,re,ie,ce,ne,te,de,oe;const[s,Se]=d.useState(o||{}),[j,Ce]=d.useState("jobs"),[Ae,g]=d.useState(!1),[v,P]=d.useState();console.log(o,"user");const Pe=async()=>{const a=await localStorage.getItem("adminData");try{const l=a?JSON.parse(a):null;P(l.admin)}catch(l){console.error("Failed to parse admin data:",l),P(null)}};d.useEffect(()=>{Pe()},[]);const y=(a,l)=>{l.preventDefault(),Ce(a)},Te=a=>a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A",[t,f]=d.useState({id:"",jobRole:[],jobLocation:[],jobType:"",jobNature:"",shiftType:"",minSalaryAmount:"",maxSalaryAmount:"",salaryType:""}),[T,R]=d.useState(!1),[Re,I]=d.useState(""),[L,w]=d.useState([]),[Ie,J]=d.useState(!1),[p,k]=d.useState([]),S=d.useRef(null),F=()=>{C(!0),A(!1)},Le=async()=>{try{if(await Ee({id:s==null?void 0:s._id})){const l=we.filter(i=>i._id!==s._id);ke(l),u.success("User deleted successfully"),C(!0),A(!1),g(!1)}}catch(a){u.error(`${a.message}`)}};d.useEffect(()=>{if(s!=null&&s.workPreference){let a=[];s.workPreference.jobRole&&(typeof s.workPreference.jobRole=="string"?a=[{title:s.workPreference.jobRole}]:Array.isArray(s.workPreference.jobRole)&&(a=s.workPreference.jobRole.map(l=>typeof l=="string"?{title:l}:l))),k(a),f({id:s==null?void 0:s._id,jobRole:a.map(l=>l.title||l),jobLocation:s.workPreference.jobLocation||"",jobType:s.workPreference.jobType||"",jobNature:s.workPreference.jobNature||"",shiftType:s.workPreference.shiftType||"",minSalaryAmount:s.workPreference.minSalaryAmount||"",maxSalaryAmount:s.workPreference.maxSalaryAmount||"",salaryType:s.workPreference.salaryType||""})}else f(a=>({...a,id:(s==null?void 0:s._id)||""}))},[s]);const Je=async a=>{const l=a.target.value;if(I(l),S.current&&clearTimeout(S.current),!l.trim()){w([]);return}S.current=setTimeout(async()=>{try{J(!0);const i=await We(l);if(i.success){console.log(i,"resssssss");const c=p.map(r=>r),n=i.data.filter(r=>!c.includes(r));w(n)}else console.error("Error searching job roles:",i.message)}catch(i){console.error("Error searching job roles:",i)}finally{J(!1)}},500)},Fe=a=>{console.log(a,"JOOOOOOOO");const l=[...p,a];k(l),f(i=>({...i,jobRole:l.map(c=>c.title)})),I(""),w([])},ze=a=>{const l=p.filter((i,c)=>c!==a);k(l),f(i=>({...i,jobRole:l.map(c=>c.title)}))},b=a=>{const{name:l,value:i}=a.target;f(c=>({...c,[l]:i}))},Ue=async()=>{var a,l;try{R(!0);const i=await Me(t);i.success?(document.getElementById("closeWorkPreferenceModal").click(),Se(c=>{const n={...c};return n.workPreference={...n.workPreference||{},jobRole:t.jobRole,jobLocation:t.jobLocation,jobType:t.jobType,jobNature:t.jobNature,shiftType:t.shiftType,minSalaryAmount:t.minSalaryAmount,maxSalaryAmount:t.maxSalaryAmount,salaryType:t.salaryType},n}),u.success("Work preferences updated successfully")):u.error(i.message||"Failed to update work preferences")}catch(i){console.error("Error updating work preferences:",i),u.error(((l=(a=i.response)==null?void 0:a.data)==null?void 0:l.message)||"An error occurred while updating work preferences")}finally{R(!1)}},N=(s==null?void 0:s.workPreference)&&Object.keys(s.workPreference).length>0&&(((z=s.workPreference.jobRole)==null?void 0:z.length)>0||s.workPreference.jobType);return e.jsxs("div",{className:"page-wrapper",children:[e.jsxs("div",{className:"content container-fluid",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col",children:e.jsxs("ul",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",onClick:F,children:e.jsx(ye,{children:"B2C Users"})}),e.jsx("li",{className:"breadcrumb-item active",children:s==null?void 0:s._id})]})}),e.jsx("div",{className:"col-auto",onClick:F,children:e.jsxs(ye,{to:"/b2c",className:"btn btn-primary btn-sm",children:[e.jsx("i",{className:"fas fa-arrow-left me-1"})," Back to List"]})})]})}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"profile-header",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-auto",children:e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:(s==null?void 0:s.profile)||ve,alt:"Profile",className:"rounded-circle",width:"100",height:"100",style:{objectFit:"cover",border:"3px solid #f0f0f0"}})})}),e.jsxs("div",{className:"col ml-md-n2",children:[e.jsx("h3",{className:"mb-0",children:((U=s==null?void 0:s.basicDetails)==null?void 0:U.name)||"User"}),e.jsxs("div",{className:"text-muted d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-phone-alt me-1"}),(s==null?void 0:s.phoneNumber)||"No phone number",((W=s==null?void 0:s.basicDetails)==null?void 0:W.city)&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mx-2",children:"|"}),e.jsx("i",{className:"fas fa-map-marker-alt me-1"}),s.basicDetails.city]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("span",{className:"badge bg-light text-dark me-2",children:[e.jsx("i",{className:"fas fa-calendar-alt me-1"}),"Joined: ",Te(s==null?void 0:s.createdAt)]}),s!=null&&s.isAadharphotoVerified&&(s!=null&&s.isDocumentVerified)||s!=null&&s.isAadharOtpVerfied?e.jsxs("span",{className:"badge bg-success me-2",children:[e.jsx("i",{className:"fas fa-check-circle me-1"}),"Aadhar Verified"]}):e.jsxs("span",{className:"badge bg-warning text-dark me-2",children:[e.jsx("i",{className:"fas fa-times-circle me-1"}),"Aadhar Not Verified"]}),s!=null&&s.isPhotoVerified?e.jsxs("span",{className:"badge bg-success",children:[e.jsx("i",{className:"fas fa-check-circle me-1"}),"Photo Verified"]}):e.jsxs("span",{className:"badge bg-warning text-dark",children:[e.jsx("i",{className:"fas fa-times-circle me-1"}),"Photo Not Verified"]})]})]})]})})})})})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-3 col-sm-6",children:e.jsx("div",{className:"card card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"avatar avatar-lg bg-light-primary rounded-circle me-3",children:e.jsx("i",{className:"fas fa-user-check text-primary"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-0",children:s!=null&&s.isAadharphotoVerified&&(s!=null&&s.isDocumentVerified)||s!=null&&s.isAadharOtpVerfied?"Verified":"Pending"}),e.jsx("p",{className:"text-muted mb-0",children:"Aadhar Status"})]})]})})}),e.jsx("div",{className:"col-md-3 col-sm-6",children:e.jsx("div",{className:"card card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"avatar avatar-lg bg-light-success rounded-circle me-3",children:e.jsx("i",{className:"fas fa-briefcase text-success"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-0",children:((E=s==null?void 0:s.appliedJobs)==null?void 0:E.length)||0}),e.jsx("p",{className:"text-muted mb-0",children:"Applied Jobs"})]})]})})}),e.jsx("div",{className:"col-md-3 col-sm-6",children:e.jsx("div",{className:"card card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"avatar avatar-lg bg-light-info rounded-circle me-3",children:e.jsx("i",{className:"fas fa-star-half-alt text-info"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-0",children:((M=s==null?void 0:s.review)==null?void 0:M.length)||0}),e.jsx("p",{className:"text-muted mb-0",children:"Performance Reviews"})]})]})})}),e.jsx("div",{className:"col-md-3 col-sm-6",children:e.jsx("div",{className:"card card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"avatar avatar-lg bg-light-warning rounded-circle me-3",children:e.jsx("i",{className:"fas fa-calendar-alt text-warning"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-0",children:((O=s==null?void 0:s.experience)==null?void 0:O.length)||0}),e.jsx("p",{className:"text-muted mb-0",children:"Work Experiences"})]})]})})}),(v==null?void 0:v.isEdit)&&e.jsx("div",{className:"col-md-3 col-sm-6",children:e.jsx("div",{className:"card card-body",onClick:()=>g(!0),style:{cursor:"pointer"},children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"avatar avatar-lg bg-light rounded me-3",children:e.jsx("i",{className:"fas fa-trash text-danger"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-0 text-danger",children:"Delete"}),e.jsx("p",{className:"text-muted mb-0",children:"Delete B2C User"})]})]})})})]}),Ae&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"modal-backdrop fade show",style:{zIndex:1040}}),e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",style:{zIndex:1050},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title text-danger",children:"Confirm Deletion"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>g(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("p",{children:["Are you sure you want to delete this B2C User (",s==null?void 0:s.phoneNumber,")? This action cannot be undone."]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancel"}),e.jsx("button",{className:"btn btn-danger",onClick:Le,children:"Confirm Delete"})]})]})})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsxs("div",{className:"card mb-4",children:[e.jsx("div",{className:"card-header",children:e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"fas fa-user me-2"}),"Aadhar Information"]})}),e.jsx("div",{className:"col-md card shadow-sm mb-4 border rounded",style:{borderColor:"#eaeaea",height:"auto"},children:e.jsxs("div",{className:"card-body p-3",style:{backgroundColor:"#fff"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[e.jsx("img",{src:"https://storage.googleapis.com/offbeat_kaamhai_bucket/screens-images/Assets/adharlogo.png",alt:"Aadhaar Logo",style:{height:"40px"}}),e.jsx("div",{style:{fontWeight:600,fontSize:"1.1rem"},children:"Government of India"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"me-3",children:e.jsx("img",{src:(($=o==null?void 0:o.aadharId)==null?void 0:$.image)||"/placeholder-avatar.png",alt:"User Photo",style:{height:"100px",width:"100px",borderRadius:"90px",border:"1px solid #ccc",objectFit:"cover"}})}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"Name:"})," ",((q=s==null?void 0:s.basicDetails)==null?void 0:q.name)||"Not Available"]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"Gender:"})," ",((_=s==null?void 0:s.basicDetails)==null?void 0:_.gender)||"Not Specified"]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"DOB:"})," ",((B=s==null?void 0:s.basicDetails)==null?void 0:B.dateOfBirth)||"Not Available"]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"Aadhaar No:"})," ",(V=o==null?void 0:o.aadharId)!=null&&V.aadharId?`${o.aadharId.aadharId}`:"Not Available"]})]})]}),e.jsx("hr",{}),e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"Address:"})," ",((H=o==null?void 0:o.aadharId)==null?void 0:H.address)||"Not Available"]}),e.jsx("hr",{})]})})]}),e.jsxs("div",{className:"card mb-4",children:[e.jsx("div",{className:"card-header",children:e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"fas fa-address-card me-2"}),"Contact Information"]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"contact-info",children:[e.jsxs("div",{className:"contact-item mb-3",children:[e.jsxs("div",{className:"d-flex align-items-center mb-1",children:[e.jsx("i",{className:"fas fa-phone-alt me-2 text-primary"}),e.jsx("h6",{className:"mb-0",children:"Primary Phone"})]}),e.jsx("p",{className:"mb-0 ps-4",children:(s==null?void 0:s.phoneNumber)||"Not Available"})]}),e.jsxs("div",{className:"contact-item mb-3",children:[e.jsxs("div",{className:"d-flex align-items-center mb-1",children:[e.jsx("i",{className:"fas fa-phone me-2 text-primary"}),e.jsx("h6",{className:"mb-0",children:"Emergency Contact"})]}),e.jsx("p",{className:"mb-0 ps-4",children:((Q=s==null?void 0:s.otherDetails)==null?void 0:Q.emergencyContact)||"Not Available"})]}),e.jsxs("div",{className:"contact-item mb-3",children:[e.jsxs("div",{className:"d-flex align-items-center mb-1",children:[e.jsx("i",{className:"fas fa-phone-square me-2 text-primary"}),e.jsx("h6",{className:"mb-0",children:"Local Contact"})]}),e.jsx("p",{className:"mb-0 ps-4",children:((Y=s==null?void 0:s.otherDetails)==null?void 0:Y.localContact)||"Not Available"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsxs("div",{className:"d-flex align-items-center mb-1",children:[e.jsx("i",{className:"fas fa-map-marker-alt me-2 text-primary"}),e.jsx("h6",{className:"mb-0",children:"Emergency Address"})]}),e.jsx("p",{className:"mb-0 ps-4",children:((G=s==null?void 0:s.otherDetails)==null?void 0:G.emergencyAddress)||"Not Available"})]})]})})]}),e.jsxs("div",{className:"card mb-4",children:[e.jsxs("div",{className:"card-header d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"fas fa-briefcase me-2"}),"Work Preferences"]}),e.jsxs("button",{className:`btn btn-sm ${N?"btn-outline-primary":"btn-primary"}`,"data-bs-toggle":"modal","data-bs-target":"#updateWorkPreferenceModal",children:[e.jsx("i",{className:`fas ${N?"fa-edit":"fa-plus-circle"} me-1`}),N?"Edit":"Add Preferences"]})]}),e.jsx("div",{className:"card-body",children:N?e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"preference-item",children:[e.jsxs("h6",{className:"text-muted mb-1",children:[e.jsx("i",{className:"fas fa-user-tag me-2"}),"Job Roles"]}),e.jsx("p",{className:"mb-0",children:((X=(K=s==null?void 0:s.workPreference)==null?void 0:K.jobRole)==null?void 0:X.length)>0?Array.isArray(s.workPreference.jobRole)?s.workPreference.jobRole.join(", "):s.workPreference.jobRole:"Not Specified"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"preference-item",children:[e.jsxs("h6",{className:"text-muted mb-1",children:[e.jsx("i",{className:"fas fa-map-marker-alt me-2"}),"Locations"]}),e.jsx("p",{className:"mb-0",children:((D=(Z=s==null?void 0:s.workPreference)==null?void 0:Z.jobLocation)==null?void 0:D.length)>0?Array.isArray(s.workPreference.jobLocation)?s.workPreference.jobLocation.join(", "):s.workPreference.jobLocation:"Not Specified"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"preference-item",children:[e.jsxs("h6",{className:"text-muted mb-1",children:[e.jsx("i",{className:"fas fa-money-bill-wave me-2"}),"Salary Range"]}),e.jsxs("p",{className:"mb-0",children:["₹",((ee=s==null?void 0:s.workPreference)==null?void 0:ee.minSalaryAmount)||"0"," - ₹",((se=s==null?void 0:s.workPreference)==null?void 0:se.maxSalaryAmount)||"0",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:((ae=s==null?void 0:s.workPreference)==null?void 0:ae.salaryType)||"Not Specified"})]})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"preference-item",children:[e.jsxs("h6",{className:"text-muted mb-1",children:[e.jsx("i",{className:"fas fa-clock me-2"}),"Job Type"]}),e.jsxs("p",{className:"mb-0",children:[((le=s==null?void 0:s.workPreference)==null?void 0:le.jobType)||"Not Specified",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:((re=s==null?void 0:s.workPreference)==null?void 0:re.shiftType)||"Not Specified"})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"preference-item",children:[e.jsxs("h6",{className:"text-muted mb-1",children:[e.jsx("i",{className:"fas fa-users-cog me-2"}),"Job Nature"]}),e.jsx("p",{className:"mb-0",children:((ie=s==null?void 0:s.workPreference)==null?void 0:ie.jobNature)||"Not Specified"})]})})]}):e.jsxs("div",{className:"text-center py-4",children:[e.jsx("div",{className:"mb-3",children:e.jsx("i",{className:"fas fa-briefcase fa-3x text-muted"})}),e.jsx("p",{className:"mb-3",children:"No work preferences have been added yet."}),e.jsxs("button",{className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#updateWorkPreferenceModal",children:[e.jsx("i",{className:"fas fa-plus-circle me-1"})," Add Work Preferences"]})]})})]}),e.jsx("div",{className:"modal fade",id:"updateWorkPreferenceModal",tabIndex:"-1","aria-labelledby":"workPreferenceModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",id:"workPreferenceModalLabel",children:N?"Update Work Preferences":"Add Work Preferences"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Job Role"}),e.jsxs("div",{className:"position-relative",children:[e.jsx("div",{className:"mb-2",children:e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"Search for job roles...",value:Re,onChange:Je}),e.jsx("button",{className:"btn btn-outline-secondary",type:"button",disabled:!0,children:Ie?e.jsx("i",{className:"fas fa-spinner fa-spin"}):e.jsx("i",{className:"fas fa-search"})})]})}),L.length>0&&e.jsx("div",{className:"position-absolute w-100 shadow-sm bg-white border rounded p-2 mt-1 z-index-1000",style:{maxHeight:"200px",overflowY:"auto",zIndex:1e3},children:L.map((a,l)=>e.jsx("div",{className:"p-2 border-bottom search-item",onClick:()=>Fe(a),style:{cursor:"pointer"},children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("span",{style:{color:"#000"},children:a.title}),e.jsx("button",{className:"btn btn-sm btn-link text-primary p-0",children:e.jsx("i",{className:"fas fa-plus-circle"})})]})},l))}),e.jsx("div",{className:"selected-items mt-2",children:p.length>0?e.jsx("div",{className:"d-flex flex-wrap gap-2",children:p.map((a,l)=>e.jsxs("div",{className:"badge bg-light text-dark p-2 d-flex align-items-center",children:[e.jsx("span",{style:{color:"#000"},children:a.title||a}),e.jsx("button",{className:"btn btn-sm p-0 ms-2 text-danger",onClick:()=>ze(l),style:{fontSize:"10px",lineHeight:1},children:e.jsx("i",{className:"fas fa-times"})})]},l))}):e.jsx("div",{className:"text-muted small",children:"No job roles selected. Search and add job roles above."})})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Job Location"}),e.jsx("input",{type:"text",className:"form-control",name:"jobLocation",placeholder:"Job Location",min:"0",value:t.jobLocation,onChange:b})]})]}),e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Job Type"}),e.jsxs("select",{className:"form-select",name:"jobType",value:t.jobType,onChange:b,children:[e.jsx("option",{value:"",children:"Select Job Type"}),e.jsx("option",{value:"Full-time",children:"Full-time"}),e.jsx("option",{value:"Part-time",children:"Part-time"}),e.jsx("option",{value:"Contract",children:"Contract"}),e.jsx("option",{value:"Freelance",children:"Freelance"}),e.jsx("option",{value:"Internship",children:"Internship"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Shift Type"}),e.jsxs("select",{className:"form-select",name:"shiftType",value:t.shiftType,onChange:b,children:[e.jsx("option",{value:"",children:"Select Shift Type"}),e.jsx("option",{value:"Day",children:"Day"}),e.jsx("option",{value:"Night",children:"Night"}),e.jsx("option",{value:"Flexible",children:"Flexible"}),e.jsx("option",{value:"Rotational",children:"Rotational"}),e.jsx("option",{value:"Fixed",children:"Fixed"})]})]})]}),e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Minimum Salary (₹)"}),e.jsx("input",{type:"number",className:"form-control",name:"minSalaryAmount",placeholder:"Min Amount",min:"0",value:t.minSalaryAmount,onChange:b})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Maximum Salary (₹)"}),e.jsx("input",{type:"number",className:"form-control",name:"maxSalaryAmount",placeholder:"Max Amount",min:"0",value:t.maxSalaryAmount,onChange:b})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Salary Type"}),e.jsxs("select",{className:"form-select",name:"salaryType",value:t.salaryType,onChange:b,children:[e.jsx("option",{value:"",children:"Select Type"}),e.jsx("option",{value:"Monthly",children:"Monthly"}),e.jsx("option",{value:"Annual",children:"Annual"}),e.jsx("option",{value:"Weekly",children:"Weekly"}),e.jsx("option",{value:"Hourly",children:"Hourly"}),e.jsx("option",{value:"Daily",children:"Daily"})]})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Job Nature"}),e.jsxs("select",{className:"form-select",name:"jobNature",value:t.jobNature,onChange:b,children:[e.jsx("option",{value:"",children:"Select Job Nature"}),e.jsx("option",{value:"On-site",children:"On-site"}),e.jsx("option",{value:"Remote",children:"Remote"}),e.jsx("option",{value:"Hybrid",children:"Hybrid"}),e.jsx("option",{value:"Field",children:"Field"}),e.jsx("option",{value:"Travel Required",children:"Travel Required"})]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",id:"closeWorkPreferenceModal",children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:Ue,disabled:T,children:T?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Saving..."]}):"Save Preferences"})]})]})})})]}),e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header p-0 border-bottom-0",children:e.jsxs("ul",{className:"nav nav-tabs nav-tabs-bordered",children:[e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${j==="jobs"?"active":""}`,href:"#",onClick:a=>y("jobs",a),children:[e.jsx("i",{className:"fas fa-briefcase me-1"}),"Applied Jobs"]})}),e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${j==="reviews"?"active":""}`,href:"#",onClick:a=>y("reviews",a),children:[e.jsx("i",{className:"fas fa-star me-1"}),"Reviews"]})}),e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${j==="experience"?"active":""}`,href:"#",onClick:a=>y("experience",a),children:[e.jsx("i",{className:"fas fa-history me-1"}),"Experience"]})}),e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${j==="journey"?"active":""}`,href:"#",onClick:a=>y("journey",a),children:[e.jsx("i",{className:"fas fa-route me-1"}),"User Journey"]})})]})}),e.jsxs("div",{className:"card-body",children:[j==="jobs"&&e.jsxs("div",{className:"tab-content",children:[e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-3",children:e.jsxs("h5",{className:"mb-0",children:["Applied Jobs (",((ce=s==null?void 0:s.appliedJobs)==null?void 0:ce.length)||0,")"]})}),s!=null&&s.appliedJobs&&s.appliedJobs.length>0?e.jsx("div",{className:"applied-jobs-list",children:s.appliedJobs.map((a,l)=>{var i,c,n,r,m,x,h,me,xe,he,je,be,fe,pe,Ne,ue,ge;return e.jsxs("div",{className:"job-card mb-3 border rounded p-3 position-relative",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"company-logo me-3",children:e.jsx("img",{src:((c=(i=a.jobPostId)==null?void 0:i.companyId)==null?void 0:c.companyLogo)||ve,alt:"Company Logo",className:"rounded-circle",width:"60",height:"60",style:{objectFit:"cover"}})}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1",children:(r=(n=a.jobPostId)==null?void 0:n.jobTitle)!=null&&r._id?a.jobPostId.jobTitle.title:((m=a.jobPostId)==null?void 0:m.jobTitle)||"N/A"}),e.jsxs("p",{className:"text-muted mb-1",children:[e.jsx("i",{className:"fas fa-building me-1"}),((h=(x=a.jobPostId)==null?void 0:x.companyId)==null?void 0:h.companyName)||"N/A"]}),e.jsxs("p",{className:"text-muted mb-1 small",children:[e.jsx("i",{className:"fas fa-map-marker-alt me-1"}),((he=(xe=(me=a.jobPostId)==null?void 0:me.branchData)==null?void 0:xe.address)==null?void 0:he.substring(0,50))||"No address"]}),e.jsxs("p",{className:"mb-0 text-truncate",style:{maxWidth:"400px"},children:[((be=(je=a.jobPostId)==null?void 0:je.jobDescription)==null?void 0:be.substring(0,80))||"No description","..."]})]})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"d-flex flex-column h-100 justify-content-between align-items-end",children:[e.jsxs("div",{className:"job-badges mb-2",children:[e.jsx("span",{className:"badge bg-light text-dark me-2",children:((fe=a.jobPostId)==null?void 0:fe.jobType)||"N/A"}),e.jsx("span",{className:`badge ${(pe=a.jobPostId)!=null&&pe.paymentDone?"bg-success":"bg-danger"}`,children:(Ne=a.jobPostId)!=null&&Ne.paymentDone?"Paid":"Unpaid"})]}),e.jsxs("div",{className:"job-salary mb-2",children:[e.jsxs("span",{className:"d-block text-end text-dark",children:[e.jsx("i",{className:"fas fa-rupee-sign me-1"}),(ue=a.jobPostId)!=null&&ue.salaryRange?`${a.jobPostId.salaryRange.minSalary} - ${a.jobPostId.salaryRange.maxSalary}`:"N/A"]}),e.jsx("small",{className:"text-muted",children:((ge=a.jobPostId)==null?void 0:ge.salaryType)||""})]}),e.jsx("div",{className:"job-status",children:e.jsx("span",{className:"badge rounded-pill px-3 py-2",style:{backgroundColor:a.statusBgColor||"#E6F7FF",color:a.statusColor||"#1890FF"},children:a.applicationStatus||a.status||"Applied"})})]})})]}),e.jsx("div",{className:"job-footer mt-3 pt-3 border-top d-flex justify-content-between align-items-center",children:e.jsx("div",{className:"application-date",children:e.jsxs("small",{className:"text-muted",children:[e.jsx("i",{className:"fas fa-calendar-alt me-1"}),"Applied: ",a.appliedAt?new Date(a.appliedAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):a.timeText||"N/A"]})})})]},l)})}):e.jsxs("div",{className:"text-center py-5",children:[e.jsx("i",{className:"fas fa-briefcase fa-4x text-muted mb-3"}),e.jsx("h5",{children:"No Jobs Applied"}),e.jsx("p",{className:"text-muted",children:"This user hasn't applied to any jobs yet."})]})]}),j==="reviews"&&e.jsxs("div",{className:"tab-content",children:[e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-3",children:e.jsxs("h5",{className:"mb-0",children:["Performance Reviews (",((ne=s==null?void 0:s.review)==null?void 0:ne.length)||0,")"]})}),s!=null&&s.review&&s.review.length>0?e.jsx("div",{className:"reviews-list",children:s.review.map((a,l)=>{var i,c,n;return e.jsxs("div",{className:"review-card mb-4 border rounded shadow-sm",children:[e.jsx("div",{className:"review-header bg-primary text-white p-3 rounded-top",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"mb-0",children:[e.jsx("i",{className:"fas fa-building me-2"}),((i=a.userId)==null?void 0:i.name)||((c=a.companyId)==null?void 0:c.companyName)||((n=a.branchId)==null?void 0:n.entity)||"Anonymous Reviewer"]}),a.offerLetterId&&e.jsxs("small",{className:"text-white-50",children:[e.jsx("i",{className:"fas fa-briefcase me-1"}),a.offerLetterId.jobTitle||"Job Position"]})]}),e.jsx("div",{className:"review-date",children:e.jsxs("span",{className:"badge bg-light text-primary",children:[e.jsx("i",{className:"far fa-calendar-alt me-1"}),a.createdAt?new Date(a.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):""]})})]})}),a.questions&&a.questions.some(r=>r.type==="star")&&e.jsx("div",{className:"review-rating bg-light p-3 border-bottom",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h6",{className:"mb-0 fw-bold",children:"Overall Performance"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"stars me-2",children:(()=>{const r=a.questions.filter(x=>x.type==="star"),m=r.length>0?Math.round(r.reduce((x,h)=>x+parseInt(h.answer||0),0)/r.length):0;return[...Array(5)].map((x,h)=>e.jsx("i",{className:`fas fa-star ${h<m?"text-warning":"text-muted"}`,style:{fontSize:"18px"}},h))})()}),e.jsx("span",{className:"badge bg-primary rounded-pill",children:(()=>{const r=a.questions.filter(m=>m.type==="star");return r.length>0?(r.reduce((m,x)=>m+parseInt(x.answer||0),0)/r.length).toFixed(1):"N/A"})()})]})]})}),e.jsxs("div",{className:"review-content p-3",children:[a.questions&&a.questions.filter(r=>r.type==="star").length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsxs("h6",{className:"border-bottom pb-2 mb-3",children:[e.jsx("i",{className:"fas fa-chart-bar text-primary me-1"}),"Performance Metrics"]}),e.jsx("div",{className:"row",children:a.questions.filter(r=>r.type==="star").map((r,m)=>e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"rating-item p-2 rounded border",children:[e.jsx("div",{className:"mb-2 small fw-bold",children:r.question}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{className:"progress flex-grow-1 me-2",style:{height:"8px"},children:e.jsx("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:`${parseInt(r.answer||0)*20}%`},"aria-valuenow":parseInt(r.answer||0),"aria-valuemin":"0","aria-valuemax":"5"})}),e.jsx("div",{className:"rating-value",children:e.jsxs("span",{className:"badge bg-dark",children:[r.answer,"/5"]})})]}),e.jsx("div",{className:"rating-stars mt-1",children:[...Array(5)].map((x,h)=>e.jsx("i",{className:`fas fa-star ${h<parseInt(r.answer||0)?"text-warning":"text-muted"}`,style:{fontSize:"14px"}},h))})]})},m))})]}),a.questions&&a.questions.filter(r=>r.type==="text").length>0&&e.jsxs("div",{children:[e.jsxs("h6",{className:"border-bottom pb-2 mb-3",children:[e.jsx("i",{className:"fas fa-comment-alt text-primary me-1"}),"Feedback"]}),a.questions.filter(r=>r.type==="text").map((r,m)=>e.jsxs("div",{className:"mb-3",children:[e.jsxs("div",{className:"feedback-question mb-2 bg-light p-2 rounded",children:[e.jsx("i",{className:"fas fa-question-circle text-primary me-1"}),e.jsx("strong",{children:r.question})]}),e.jsxs("div",{className:"feedback-answer p-3 bg-white rounded border",children:[e.jsx("i",{className:"fas fa-quote-left text-muted me-2 opacity-50"}),r.answer||"No response provided.",e.jsx("i",{className:"fas fa-quote-right text-muted ms-2 opacity-50"})]})]},m))]}),(!a.questions||a.questions.length===0)&&e.jsxs("div",{className:"text-center py-4",children:[e.jsx("i",{className:"fas fa-clipboard-list text-muted mb-3",style:{fontSize:"3rem"}}),e.jsx("p",{className:"text-muted",children:"No detailed review information available for this assessment."})]})]})]},l)})}):e.jsxs("div",{className:"text-center py-5",children:[e.jsx("i",{className:"fas fa-star-half-alt text-muted mb-3",style:{fontSize:"4rem"}}),e.jsx("h5",{children:"No Performance Reviews Yet"}),e.jsx("p",{className:"text-muted",children:"This user hasn't received any performance reviews."})]})]}),j==="experience"&&e.jsxs("div",{className:"tab-content",children:[e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-3",children:e.jsxs("h5",{className:"mb-0",children:["Work Experience (",((te=s==null?void 0:s.experience)==null?void 0:te.length)||0,")"]})}),s!=null&&s.experience&&s.experience.length>0?e.jsx("div",{className:"timeline",children:s.experience.map((a,l)=>e.jsxs("div",{className:"timeline-item mb-4",children:[e.jsx("div",{className:"timeline-marker"}),e.jsxs("div",{className:"timeline-content card border-0 shadow-sm",children:[e.jsx("div",{className:"card-header bg-light py-2",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"mb-0",children:[e.jsx("i",{className:"fas fa-building me-2 text-primary"}),a==null?void 0:a.companyName]}),e.jsx("span",{className:"badge bg-primary ",children:a==null?void 0:a.jobType})]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-briefcase text-muted me-2"}),e.jsxs("div",{children:[e.jsx("small",{className:"text-muted d-block",children:"Position"}),e.jsx("span",{className:"text-dark",children:(a==null?void 0:a.jobRole)||"Not specified"})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-map-marker-alt text-muted me-2"}),e.jsxs("div",{children:[e.jsx("small",{className:"text-muted d-block",children:"Location"}),e.jsx("span",{className:"text-dark",children:(a==null?void 0:a.companyLocation)||"Not specified"})]})]})})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-user-clock text-muted me-2"}),e.jsxs("div",{children:[e.jsx("small",{className:"text-muted d-block",children:"Job Nature"}),e.jsx("span",{className:"text-dark",children:(a==null?void 0:a.jobNature)||"Not specified"})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-money-bill-wave text-muted me-2"}),e.jsxs("div",{children:[e.jsx("small",{className:"text-muted d-block",children:"Salary"}),e.jsxs("span",{className:"text-dark",children:[a==null?void 0:a.salaryType," - ₹",a==null?void 0:a.salaryAmount]})]})]})})]}),e.jsxs("div",{className:"d-flex align-items-center mt-3",children:[e.jsx("i",{className:"fas fa-calendar-alt text-primary me-2"}),e.jsxs("div",{children:[e.jsx("small",{className:"text-muted d-block",children:"Duration"}),e.jsxs("span",{className:"text-dark",children:["Started: ",a!=null&&a.startDate?new Date(a.startDate).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Not specified",a!=null&&a.endDate?` - Ended: ${new Date(a.endDate).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}`:" - Present"]})]})]})]})]})]},l))}):e.jsxs("div",{className:"text-center py-5",children:[e.jsx("i",{className:"fas fa-briefcase text-muted mb-3",style:{fontSize:"4rem"}}),e.jsx("h5",{children:"No Work Experience"}),e.jsx("p",{className:"text-muted",children:"This user hasn't added any work experience yet."})]})]}),j==="journey"&&e.jsxs("div",{className:"tab-content",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("h5",{className:"mb-0",children:["User Journey (",((de=s==null?void 0:s.userJourney)==null?void 0:de.length)||0,")"]}),e.jsx("div",{className:"journey-stats d-flex gap-2",children:e.jsxs("span",{className:"badge bg-light text-dark",children:[e.jsx("i",{className:"fas fa-flag-checkered me-1"}),((oe=s==null?void 0:s.userJourney)==null?void 0:oe.length)||0," Milestones"]})})]}),s!=null&&s.userJourney&&s.userJourney.length>0?e.jsxs("div",{className:"user-journey-timeline",children:[s.userJourney.sort((a,l)=>new Date(l.createdAt)-new Date(a.createdAt)).map((a,l)=>{const c=((n,r)=>n.toLowerCase().includes("successful")||n.toLowerCase().includes("verified")?{bgClass:"bg-success",iconClass:"fas fa-check-circle",borderColor:"#28a745"}:n.toLowerCase().includes("pending")||n.toLowerCase().includes("needed")?{bgClass:"bg-warning",iconClass:"fas fa-clock",borderColor:"#ffc107"}:n.toLowerCase().includes("submitted")||n.toLowerCase().includes("received")?{bgClass:"bg-info",iconClass:"fas fa-paper-plane",borderColor:"#17a2b8"}:n.toLowerCase().includes("rejected")||n.toLowerCase().includes("declined")?{bgClass:"bg-danger",iconClass:"fas fa-times-circle",borderColor:"#dc3545"}:n.toLowerCase().includes("welcome")||n.toLowerCase().includes("sign-up")?{bgClass:"bg-primary",iconClass:"fas fa-user-plus",borderColor:"#007bff"}:r==="Hiring"||n.toLowerCase().includes("application")?{bgClass:"bg-purple",iconClass:"fas fa-briefcase",borderColor:"#6f42c1"}:{bgClass:"bg-secondary",iconClass:"fas fa-info-circle",borderColor:"#6c757d"})(a.heading,a.category);return e.jsxs("div",{className:"journey-item",children:[e.jsx("div",{className:"journey-timeline-line"}),e.jsx("div",{className:`journey-icon ${c.bgClass}`,style:{borderColor:c.borderColor},children:e.jsx("i",{className:c.iconClass})}),e.jsx("div",{className:"journey-content",children:e.jsx("div",{className:"journey-card",children:e.jsx("div",{className:"journey-header",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{className:"flex-grow-1",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[a.icon&&e.jsx("img",{src:a.icon,alt:"Journey Icon",className:"journey-company-icon me-2"}),e.jsx("span",{className:`badge ${c.bgClass} text-white px-2 py-1`,style:{fontSize:"0.75rem"},children:a.category||"Profile"}),a.subCategory&&e.jsx("span",{className:"badge bg-light text-dark ms-2 px-2 py-1",style:{fontSize:"0.7rem"},children:a.subCategory})]}),e.jsx("h6",{className:"journey-heading mb-1",style:{color:c.borderColor,fontWeight:"600"},children:a.heading})]}),e.jsxs("div",{className:"journey-date text-end",children:[e.jsxs("div",{className:"text-muted small",children:[e.jsx("i",{className:"far fa-calendar-alt me-1"}),new Date(a.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})]}),e.jsxs("div",{className:"text-muted small mt-1",children:[e.jsx("i",{className:"far fa-clock me-1"}),new Date(a.createdAt).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})]})]})]})})})})]},a._id||l)}),e.jsxs("div",{className:"journey-item journey-start",children:[e.jsx("div",{className:"journey-timeline-line"}),e.jsx("div",{className:"journey-icon bg-light border-secondary",children:e.jsx("i",{className:"fas fa-flag text-secondary"})}),e.jsx("div",{className:"journey-content",children:e.jsx("div",{className:"journey-card border-secondary",children:e.jsxs("div",{className:"journey-header",children:[e.jsx("h6",{className:"text-secondary mb-1",children:"Journey Started"}),e.jsxs("p",{className:"text-muted mb-0 small",children:[e.jsx("i",{className:"fas fa-rocket me-1"}),"User began their journey with Kaamhai"]})]})})})]})]}):e.jsxs("div",{className:"text-center py-5",children:[e.jsx("i",{className:"fas fa-route text-muted mb-3",style:{fontSize:"4rem"}}),e.jsx("h5",{children:"No Journey Data Available"}),e.jsx("p",{className:"text-muted",children:"This user's journey milestones will appear here as they progress."})]})]})]})]})})]})]}),e.jsx("style",{jsx:!0,children:`
        .avatar-lg {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        .bg-light-primary {
          background-color: rgba(0, 123, 255, 0.15);
        }
        .bg-light-success {
          background-color: rgba(40, 167, 69, 0.15);
        }
        .bg-light-info {
          background-color: rgba(23, 162, 184, 0.15);
        }
        .bg-light-warning {
          background-color: rgba(255, 193, 7, 0.15);
        }
        .timeline {
          position: relative;
          padding-left: 30px;
        }
        .timeline:before {
          content: '';
          position: absolute;
          top: 10px;
          bottom: 0;
          left: 8px;
          width: 3px;
          background: #e9ecef;
        }
        .timeline-item {
          position: relative;
        }
          
        .timeline-marker {
          position: absolute;
          left: -30px;
          top: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #primary;
          border: 3px solid #fff;
          box-shadow: 0 0 0 3px #0d6efd;
        }
        .nav-tabs-bordered {
          border-bottom: 1px solid #dee2e6;
        }
        .nav-tabs-bordered .nav-link {
          margin-bottom: -1px;
          border: 1px solid transparent;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
        .nav-tabs-bordered .nav-link:hover,
        .nav-tabs-bordered .nav-link:focus {
          border-color: #e9ecef #e9ecef #dee2e6;
        }
        .nav-tabs-bordered .nav-link.active {
          color: #0d6efd;
          background-color: #fff;
          border-color: #dee2e6 #dee2e6 #fff;
        }
          .user-journey-timeline {
  position: relative;
  padding-left: 0;
}

.journey-item {
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
  padding-left: 50px;
}

.journey-item:last-child .journey-timeline-line {
  display: none;
}

.journey-timeline-line {
  position: absolute;
  left: 24px;
  top: 48px;
  bottom: -24px;
  width: 2px;
  background: linear-gradient(to bottom, #e9ecef 0%, #e9ecef 100%);
  z-index: 1;
}

.journey-icon {
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  border: 3px solid;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.journey-content {
  flex: 1;
  margin-left: 15px;
}

.journey-card {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
}

.journey-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}

.journey-card::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #fff;
  filter: drop-shadow(-1px 0 1px rgba(0,0,0,0.1));
}

.journey-company-icon {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  object-fit: contain;
}

.journey-heading {
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.journey-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.3;
}

.journey-subtitle {
  font-size: 0.9rem;
  line-height: 1.4;
}

.journey-date {
  min-width: 120px;
}

.bg-purple {
  background-color: #6f42c1 !important;
}

.journey-start .journey-card {
  background: #f8f9fa;
  border-style: dashed;
}

.journey-start .journey-icon {
  background: #f8f9fa !important;
  border-color: #6c757d !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .journey-item {
    padding-left: 40px;
  }
  
  .journey-icon {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
  
  .journey-timeline-line {
    left: 18px;
    top: 36px;
  }
  
  .journey-content {
    margin-left: 10px;
  }
  
  .journey-card {
    padding: 15px;
  }
  
  .journey-date {
    min-width: auto;
    text-align: left;
    margin-top: 10px;
  }
  
  .journey-header .d-flex {
    flex-direction: column;
  }
}
      `})]})};export{Be as default};
