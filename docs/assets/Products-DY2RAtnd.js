import{_ as m,o as c,c as l,a as e,n as d,F as g,e as h,f as u,t as p}from"./index-CyKzu2rJ.js";const y="/assets/admit_img-DHAPxSSf.png",f="/assets/vob_img-CWViaYKX.png",b="/assets/report_img-D1BiDkC4.png",v="/assets/alert_img-BnC640Vq.png",k="/assets/security_img-CnFpOhQL.png",_="/assets/phone_img-CIwcwuTA.png",I="/assets/reimb_img-TiZeKydB.png",w={name:"ProductsView",data(){return{isHeaderVisible:!1,visibleCards:[],productSuite:[{title:"Inquiries & Lead Management",type:"Core Platform",accent:"#7B5CFF",description:`Uptime You Can Depend On.<br/>
  Centralize your intake process with a system designed for maximum reliability,
  By leveraging redundant payer connections, QuickAdmit eliminates the risk of single-point failures,
  If one connection goes down, our system automatically reroutes to ensure your inquiries and eligibility checks never stall,
  keeping your admissions pipeline moving 24/7.`,image:y},{title:"Blanket VOBs",type:"Coverage Intelligence",accent:"#7B5CFF",description:`Uncover Hidden Coverage Instantly.<br/>
Our Blanket VOB tool is a powerful discovery engine,
By running a patient’s basic details—Name, DOB, and SSN—against an expansive database of hundreds of payers,
we identify both active and inactive coverage.
This deep-search capability ensures you find the primary, secondary, or forgotten policies,
making sure a patient's care is properly funded.`,image:f},{title:"Reimbursement & EIV",type:"Revenue Intelligence",accent:"#7B5CFF",description:`Stop Rolling the Dice on Admissions.<br/>
Go beyond basic verification with Expected Insurance Value (EIV).
Our reimbursement features allow you to see what a policy is likely to pay before the patient even walks through the door.
By integrating EIV into your workflow, your facility can move from "guessing" to making accurate financial projections,
ensuring every admission is backed by a clear understanding of its economic impact.`,image:I},{title:"Custom Logic Alerts",type:"Workflow Automation",accent:"#7B5CFF",description:`Visual Intelligence at a Glance.<br/>
Take the guesswork out of the VOB,
Your team can set custom triggers for specific criteria—such as out-of-network flags, high-deductible warnings, or specific plan types,
When these criteria are met, the VOB is automatically highlighted in a color of your choosing,
This visual shorthand allows your intake team to "scan and understand" critical data in seconds.`,image:v},{title:"Data & Insights",type:"Analytics & Reporting",accent:"#7B5CFF",description:`Reporting & Data Export<br/>
Your Data, Your Way.
QuickAdmit puts your data in your hands,
While we keep the tool lean and fast, our Reporting feature allows teams to export all VOB and Blanket VOB data into comprehensive datasets,
By moving your information into your preferred analysis tools, you can manipulate the data to uncover deep insights, track trends, and build custom visualizations,
that drive your facility's unique strategy.`,image:b},{title:"Mobile-First Admissions",type:"Anywhere Access",accent:"#7B5CFF",description:`Speed at the Point of Care.<br/>
In a fast-paced facility, the best decisions aren't always made behind a desk,
QuickAdmit is built for mobility, giving your team full access to inquiries, Blanket VOBs, and EIV data from any tablet or smartphone,
Whether you’re meeting a family in the lobby, coordinating in the field, or out of the office,
our mobile-optimized interface ensures you have the power to verify, alert, and admit without ever being tethered to a workstation.`,image:_},{title:"Security & Compliance",type:"Trust & Security",accent:"#7B5CFF",description:`Data Security You Can Trust.<br/>
In the healthcare industry, data integrity is non-negotiable,
QuickAdmit is built on a foundation of rigorous security protocols to ensure that sensitive patient information—including SSNs and clinical data—is protected at every touchpoint.<br/>
HIPAA Compliant: Our platform is fully engineered to meet and exceed HIPAA standards, ensuring the privacy and security of Protected Health Information (PHI),
We maintain strict administrative, physical, and technical safeguards.<br/>
SSL Encrypted: All data transmitted between your team and our servers is protected by high-level SSL (Secure Sockets Layer) encryption.
This creates a secure "tunnel" for your data, making it unreadable to unauthorized parties.`,image:k}]}},mounted(){this.initObserver()},methods:{initObserver(){const r=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting)if(i.target===this.$refs.header)this.isHeaderVisible=!0;else{const s=parseInt(i.target.getAttribute("data-index"));this.visibleCards.includes(s)||this.visibleCards.push(s)}})},{threshold:.2});r.observe(this.$refs.header),this.productSuite.forEach((a,i)=>{const s=this.$refs["product-"+i][0];s.setAttribute("data-index",i),r.observe(s)})}}},B={class:"products-page"},C={class:"section"},S={class:"container"},A={class:"column is-7 px-6"},V=["innerHTML"],F={class:"column is-5"},x={class:"product-image-container"},O=["src","alt"];function D(r,a,i,s,o,H){return c(),l("div",B,[e("header",{class:d(["products-hero reveal",{"is-visible":o.isHeaderVisible}]),ref:"header"},[...a[0]||(a[0]=[e("div",{class:"container has-text-centered"},[e("h1",{class:"header-title mb-4"}," The QuickAdmit Product Suite "),e("p",{class:"header-subtitle"}," Comprehensive tools designed to eliminate administrative friction and prioritize patient care. ")],-1)])],2),e("section",C,[e("div",S,[(c(!0),l(g,null,h(o.productSuite,(t,n)=>(c(),l("div",{key:n,class:d(["product-card-wrapper reveal",{"is-visible":o.visibleCards.includes(n)}]),ref_for:!0,ref:"product-"+n},[e("div",{class:"product-card box",style:u({boxShadow:"0 12px 30px rgba(15,15,20,0.06), 0 3px 8px rgba(15,15,20,0.04)",borderColor:t.accent+"30"})},[e("div",{class:d(["columns is-vcentered",{"is-reversed":n%2!==0}])},[e("div",A,[e("span",{class:"product-badge",style:u({background:t.accent+"15",color:t.accent})},p(t.type),5),e("h2",{class:"product-title",style:u({color:t.accent})},p(t.title),5),e("p",{class:"product-description",innerHTML:t.description},null,8,V)]),e("div",F,[e("div",x,[e("img",{src:t.image,alt:t.title,class:"product-ui-img"},null,8,O)])])],2)],4)],2))),128))])])])}const E=m(w,[["render",D],["__scopeId","data-v-5fd2b3ff"]]);export{E as default};
