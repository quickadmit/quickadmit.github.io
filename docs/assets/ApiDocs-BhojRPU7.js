import{_ as b,o as r,c as n,a as e,F as l,e as c,t as a,g as u,n as h,h as y}from"./index-CLxIDc5l.js";const f="/assets/api_hero_security-vke8F8fY.png",g=`curl --request GET \\
  --url 'https://app.quickadmit.com/api/v2/payers?page=1&limit=25' \\
  --header 'Authorization: Bearer <your_api_key>'`,_=`{
  "payer": {
    "id": 1234,
    "name": "Example Health Plan"
  },
  "schema": {
    "combos": [
      ["memberId", "patientBirthDate"],
      ["memberId", "patientBirthDate", "patientFirstName", "patientLastName"]
    ],
    "fields": {
      "memberId": {
        "name": "memberId",
        "label": "Patient ID",
        "type": "text",
        "allowed": true,
        "required": true
      },
      "patientBirthDate": {
        "name": "patientBirthDate",
        "label": "Patient Birth Date",
        "type": "date",
        "allowed": true,
        "required": true,
        "min": "1900-01-01",
        "max": "2026-08-10"
      },
      "serviceType": {
        "name": "serviceType",
        "label": "Service Type",
        "type": "choice",
        "allowed": true,
        "required": true,
        "multiple": true,
        "options": [
          { "id": "MH", "name": "Mental Health" },
          { "id": "98", "name": "Professional Visit - Office" }
        ]
      }
    }
  }
}`,q=`{
  "code": 400,
  "status": "Bad Request",
  "message": "limit must be less than or equal to 100"
}`,A=`{
  "inquiry": {
    "id": "inq_01HZXAMPLE000000000000",
    "patient_first_name": "JANE",
    "patient_last_name": "EXAMPLE",
    "member_id": "QA123456789",
    "date": "08/10/2026",
    "status": "complete",
    "plan_status": "active",
    "user": { "id": 1001, "name": "API Owner" },
    "payer": { "id": 1234, "name": "Example Health Plan" },
    "provider": { "id": 42, "name": "Example Recovery Center" },
    "coverage": {
      "status": "complete",
      "payer_name": "Example Health Plan",
      "patient": {
        "first_name": "JANE",
        "last_name": "EXAMPLE",
        "relationship": "Self",
        "dob": "1990-05-06T00:00:00.000+0000"
      },
      "subscriber": {
        "first_name": "JANE",
        "last_name": "EXAMPLE",
        "member_id": "QA123456789"
      },
      "plan": {
        "status": "active",
        "coverage_start": "2026-01-01T00:00:00.000+0000",
        "benefit_groups": [
          {
            "name": "Mental Health",
            "status_details": [
              { "type": "Status", "status": "Active Coverage" }
            ],
            "benefits": [
              { "type": "Amount", "amount": "Deductible", "network": "In Network", "Value": 500 }
            ]
          }
        ]
      }
    }
  }
}`,P=`{
  "inquiry": {
    "id": "inq_01HZXAMPLE000000000000",
    "patient_first_name": "JANE",
    "patient_last_name": "EXAMPLE",
    "member_id": "QA987654321",
    "date": "08/10/2026",
    "status": "complete",
    "plan_status": "active",
    "user": { "id": 1001, "name": "API Owner" },
    "payer": { "id": 1234, "name": "Example Health Plan" },
    "provider": { "id": 42, "name": "Example Recovery Center" },
    "coverage": {
      "status": "complete",
      "payer_name": "Example Health Plan",
      "patient": {
        "first_name": "JANE",
        "last_name": "EXAMPLE",
        "relationship": "Self",
        "dob": "1990-05-06T00:00:00.000+0000"
      },
      "subscriber": {
        "first_name": "JANE",
        "last_name": "EXAMPLE",
        "member_id": "QA987654321"
      },
      "plan": {
        "status": "active",
        "coverage_start": "2026-01-01T00:00:00.000+0000",
        "benefit_groups": [
          {
            "name": "Mental Health",
            "status_details": [
              { "type": "Status", "status": "Active Coverage" }
            ],
            "benefits": [
              { "type": "Amount", "amount": "Deductible", "network": "In Network", "Value": 500 }
            ]
          }
        ]
      }
    },
    "alerts": [
      { "id": 12, "message": "Verify benefits before admission", "color": "yellow" }
    ],
    "record_updates": [
      {
        "field": "memberId",
        "message": "MemberID 'QA123456789' was entered, but the payer returned 'QA987654321'",
        "submitted": "QA123456789",
        "returned": "QA987654321"
      }
    ]
  }
}`,E=`{
  "inquiry": {
    "id": "inq_01HZXAMPLE000000000000",
    "is_archived": true
  }
}`,I=`{
  "inquiries": [
    {
      "id": "inq_01HZXAMPLE000000000000",
      "patient_first_name": "JANE",
      "patient_last_name": "EXAMPLE",
      "user": { "id": 1001, "name": "API Owner" },
      "payer": { "id": 1234, "name": "Example Health Plan" },
      "provider": { "id": 42, "name": "Example Recovery Center" },
      "date": "08/10/2026",
      "status": "complete",
      "plan_status": "active",
      "is_archived": false
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 25
}`,v=`{
  "blanket_vob": {
    "id": "bvob_01HZXAMPLE0000000000",
    "patient_first_name": "JANE",
    "patient_last_name": "EXAMPLE",
    "member_id": "QA123456789",
    "dob": "05/06/1990",
    "date": "08/10/2026",
    "status": "complete",
    "user": { "id": 1001, "name": "API Owner" },
    "provider": { "id": 42, "name": "Example Recovery Center" },
    "payers": [
      {
        "status": "Active",
        "payer_name": "Example Health Plan",
        "payer_id": 1234,
        "member_id": "QA123456789",
        "effective_date": "01/01/2026",
        "plan_name": "Example PPO",
        "plan_response": {
          "api_response_code": "0",
          "api_response_message": "Processed",
          "deductible_oop_summary": {
            "in_network": {
              "individual_deductible": "$1,000",
              "individual_deductible_remaining": "$250"
            }
          }
        }
      }
    ]
  }
}`,w=`{
  "blanket_vobs": [
    {
      "id": "bvob_01HZXAMPLE0000000000",
      "patient_first_name": "JANE",
      "patient_last_name": "EXAMPLE",
      "member_id": "QA123456789",
      "user": { "id": 1001, "name": "API Owner" },
      "provider": { "id": 42, "name": "Example Recovery Center" },
      "payers": [
        { "id": 1234, "name": "Example Health Plan", "status": "Active" }
      ],
      "date": "08/10/2026",
      "status": "complete",
      "is_archived": false
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 25
}`,k=`{
  "payers": [
    { "id": 1234, "name": "Example Health Plan" }
  ],
  "total": 1,
  "page": 1,
  "limit": 25
}`,S=`{
  "providers": [
    { "id": 42, "name": "Example Recovery Center" }
  ],
  "total": 1,
  "page": 1,
  "limit": 25
}`,x=`{
  "provider": {
    "id": 42,
    "name": "Example Recovery Center"
  }
}`,D=`{
  "service_codes": [
    { "code": "MH", "name": "Mental Health" },
    { "code": "CG", "name": "Mental Health Facility - Inpatient" },
    { "code": "CH", "name": "Mental Health Facility - Outpatient" },
    { "code": "CE", "name": "Mental Health Provider - Inpatient" },
    { "code": "CF", "name": "Mental Health Provider - Outpatient" },
    { "code": "AI", "name": "Substance Abuse" },
    { "code": "CI", "name": "Substance Abuse Facility - Inpatient" },
    { "code": "CJ", "name": "Substance Abuse Facility - Outpatient" },
    { "code": "98", "name": "Professional (Physician) Visit - Office" }
  ]
}`,T=[{id:"providers",title:"Providers",description:"Providers identify the facility or account location used when QuickAdmit submits coverage requests. Use them to select the correct providerId for eligibility and Blanket VOB workflows without sending full facility details on every request.",endpoints:[{method:"GET",path:"/providers",title:"List providers",description:"Returns providers available to the account with pagination.",query:["page","limit"],queryExample:"/providers?page=1&limit=25",request:null,response:S},{method:"GET",path:"/providers/{id}",title:"Get provider",description:"Returns one provider by ID.",query:[],request:null,response:x}],fieldSections:[{title:"Response fields",description:"Provider responses are intentionally small so callers can select the right facility without exposing setup details.",fields:[{name:"provider.id",description:"Provider ID to send in create requests."},{name:"provider.name",description:"Display name shown for the facility."},{name:"total",description:"Total matching providers before pagination on list responses."},{name:"page",description:"Current page number used for the list response."},{name:"limit",description:"Page size used for the list response."}]}]},{id:"payers",title:"Payers",description:"Payers represent the supported health plans that can receive eligibility requests. Search payers to choose the right plan, then load the payer schema before creating an inquiry. The schema is the contract for the inquiry request: it tells you which fields to collect, which field combination to use, and which service codes are accepted for that payer.",endpoints:[{method:"GET",path:"/payers",title:"List or search payers",description:"Returns enabled payers. The example searches payer names with pagination.",query:["query","page","limit"],queryExample:"/payers?query=Aetna&page=1&limit=25",request:null,response:k},{method:"GET",path:"/payers/{id}",title:"Get payer schema",description:"Returns the payer plus the schema used to build POST /inquiries. Read schema.fields for request field definitions and schema.combos for valid required-field combinations.",query:[],request:null,response:_}],fieldSections:[{title:"Query fields",description:"Search is optional; omit query to browse enabled payers with pagination.",fields:[{name:"query",description:"Optional payer search text."},{name:"page",description:"Page number. Defaults to 1."},{name:"limit",description:"Page size. Defaults to 25 and cannot exceed 100."}]},{title:"Payer response fields",description:"The payer object identifies the plan. The schema object explains how to build an eligibility inquiry for that payer.",fields:[{name:"payer.id",description:"Payer ID to send as payerId in eligibility create requests."},{name:"payer.name",description:"Payer display name."},{name:"total",description:"Total matching payers before pagination on list responses."}]},{title:"Schema fields",description:"Every key under schema.fields is a field name you can send in POST /inquiries when it is allowed by the selected payer.",fields:[{name:"schema.fields.<field>.name",description:"Request key to send, for example memberId or patientBirthDate."},{name:"schema.fields.<field>.label",description:"Human-readable label you can show in your form."},{name:"schema.fields.<field>.type",description:"Expected input type, such as text, date, or choice."},{name:"schema.fields.<field>.required",description:"Whether the payer marks this field as required."},{name:"schema.fields.<field>.allowed",description:"Whether this field can be sent for this payer."},{name:"schema.fields.<field>.options",description:"Allowed values for choice fields. Send the option id, not the display name."},{name:"schema.fields.serviceType.options",description:"Service codes available for this payer. Use GET /service-codes for the full supported catalog."}]},{title:"Using schema in POST /inquiries",description:"Pick one combo you can satisfy, send every field in that combo, and send the combo index as selectedCombo.",fields:[{name:"schema.combos",description:"Valid required-field combinations. Each array contains request field names."},{name:"schema.combos[0]",description:"If you use the first combo, send selectedCombo: 0 in POST /inquiries."},{name:"memberId / patientBirthDate",description:"Example fields from a combo. Send them as top-level inquiry request fields."},{name:"serviceType",description:"Send one service code or an array of codes from schema.fields.serviceType.options."},{name:"payerId",description:"Use payer.id from this response."}]}]},{id:"service-codes",title:"Service Codes",description:"Service codes describe the care categories used on eligibility requests. Use this catalog for supported code names, then use the payer schema to choose the serviceType values available for a specific payer.",endpoints:[{method:"GET",path:"/service-codes",title:"List service codes",description:"Returns the supported service code catalog. This endpoint is not paginated.",query:[],request:null,response:D}],fieldSections:[{title:"Response fields",description:"Send the code value in serviceType when it is allowed by the selected payer schema.",fields:[{name:"service_codes[].code",description:"Service code value, for example MH or 98."},{name:"service_codes[].name",description:"Human-readable service category name."}]}]},{id:"eligibility",title:"Eligibility",description:"Eligibility checks verify a patient's coverage with a specific payer. They return coverage and benefits details when available, which helps estimate patient responsibility such as copayments, deductibles, coinsurance, and out-of-pocket maximums.",endpoints:[{method:"POST",path:"/inquiries",title:"Create eligibility inquiry",description:"Creates a real-time eligibility inquiry. Use the payer schema to select the required fields and service types.",query:[],request:`{
  "providerId": 42,
  "payerId": 1234,
  "memberId": "QA123456789",
  "patientBirthDate": "1990-05-06",
  "patientFirstName": "JANE",
  "patientLastName": "EXAMPLE",
  "subscriberRelationship": "18",
  "serviceType": ["MH", "98"],
  "asOfDate": "2026-08-10T12:00:00Z",
  "selectedCombo": 0
}`,response:A},{method:"GET",path:"/inquiries",title:"List eligibility inquiries",description:"Returns stored inquiries for your account. The example filters by member and payer.",query:["memberId","payerId","page","limit"],queryExample:"/inquiries?memberId=QA123456789&payerId=1234&page=1&limit=25",request:null,response:I},{method:"GET",path:"/inquiries/{id}",title:"Get eligibility inquiry",description:"Returns one inquiry with coverage details when they are stored.",query:[],request:null,response:P},{method:"PATCH",path:"/inquiries/{id}",title:"Update eligibility inquiry",description:"Archives or restores one inquiry for your account.",query:[],request:`{
  "isArchived": true
}`,response:E}],fieldSections:[{title:"Create request fields",description:"Required patient fields can vary by payer. Use GET /payers/{id} before submitting.",fields:[{name:"providerId",description:"Provider ID returned by GET /providers."},{name:"payerId",description:"Payer ID returned by GET /payers."},{name:"memberId",description:"Subscriber or member identifier."},{name:"patientBirthDate",description:"Patient date of birth in YYYY-MM-DD format."},{name:"patientFirstName",description:"Patient first name when required by the payer schema."},{name:"patientLastName",description:"Patient last name when required by the payer schema."},{name:"subscriberRelationship",description:"Relationship code for the patient and subscriber, for example 18 for self."},{name:"serviceType",description:"Service code or array of codes allowed by the payer schema."},{name:"asOfDate",description:"Eligibility date. Defaults to today when omitted."},{name:"selectedCombo",description:"Zero-based index from schema.combos matching the fields you send."}]},{title:"List filters",description:"Use these query parameters on GET /inquiries.",fields:[{name:"memberId",description:"Filter results by member ID."},{name:"payerId",description:"Filter results by payer ID."},{name:"page",description:"Page number. Defaults to 1."},{name:"limit",description:"Page size. Defaults to 25 and cannot exceed 100."}]},{title:"Update request fields",description:"Use PATCH /inquiries/{id} to change the archive state of one inquiry.",fields:[{name:"isArchived",description:"Set true to archive the inquiry, or false to restore it."}]},{title:"Response fields",description:"List responses return compact inquiry rows; detail responses include coverage when available.",fields:[{name:"inquiry.id",description:"QuickAdmit inquiry ID."},{name:"patient_first_name / patient_last_name",description:"Patient name stored on the inquiry."},{name:"member_id",description:"Member ID when available."},{name:"date",description:"Inquiry created date formatted as MM/DD/YYYY."},{name:"status",description:"Processing status, for example pending, complete, error, expired, or draft."},{name:"plan_status",description:"Eligibility plan status, for example active, inactive, unknown, or unavailable."},{name:"is_archived",description:"Whether the inquiry is archived."},{name:"payer",description:"Payer object with id and name."},{name:"provider",description:"Provider object with id and name."},{name:"coverage",description:"Readable eligibility result details on get/create responses when stored."},{name:"alerts",description:"Detail responses only. Account alerts that matched the inquiry result."},{name:"alerts[].message",description:"Alert text configured for the account."},{name:"alerts[].color",description:"Alert color configured for display, such as yellow."},{name:"record_updates",description:"Detail responses only. Notes for submitted values that differ from returned coverage details."},{name:"record_updates[].field",description:"Request field that differs, such as memberId, patientBirthDate, or patientName."},{name:"record_updates[].message",description:"Ready-to-display update note for the customer record."},{name:"record_updates[].submitted / record_updates[].returned",description:"Submitted value and returned value for the field."},{name:"remote_errors",description:"Eligibility result errors returned with an otherwise stored result."}]}]},{id:"blanket-vob",title:"Blanket VOB",description:"Blanket VOB helps find a patient's active health plans using demographic information such as name, date of birth, and state. It is useful when the payer is unknown or when a standard eligibility check is not possible.",endpoints:[{method:"POST",path:"/blanket-vobs",title:"Create Blanket VOB",description:"Runs insurance discovery using patient demographics. Requires Blanket VOB access.",query:[],request:`{
  "providerId": 42,
  "patientStateId": "8550",
  "patientFirstName": "JANE",
  "patientLastName": "EXAMPLE",
  "patientDOB": "05/06/1990",
  "doS_StartDate": "08/10/2026",
  "doS_EndDate": "08/10/2026"
}`,response:v},{method:"GET",path:"/blanket-vobs",title:"List Blanket VOBs",description:"Returns stored Blanket VOB discovery searches. The example filters by member and payer.",query:["memberId","payerId","page","limit"],queryExample:"/blanket-vobs?memberId=QA123456789&payerId=1234&page=1&limit=25",request:null,response:w},{method:"GET",path:"/blanket-vobs/{id}",title:"Get Blanket VOB",description:"Returns one Blanket VOB with readable payer and plan details.",query:[],request:null,response:v}],fieldSections:[{title:"Create request fields",description:"Use synthetic test patients when building locally or sharing examples.",fields:[{name:"providerId",description:"Provider ID returned by GET /providers."},{name:"patientStateId",description:"Patient state ID used for discovery."},{name:"patientFirstName",description:"Patient first name."},{name:"patientLastName",description:"Patient last name."},{name:"patientDOB",description:"Patient date of birth in MM/DD/YYYY format."},{name:"doS_StartDate",description:"Date-of-service start date in MM/DD/YYYY format."},{name:"doS_EndDate",description:"Date-of-service end date in MM/DD/YYYY format."},{name:"patientSSN",description:"Optional patient SSN when required for discovery."}]},{title:"List filters",description:"Use these query parameters on GET /blanket-vobs.",fields:[{name:"memberId",description:"Filter results by member ID."},{name:"payerId",description:"Filter results by payer ID."},{name:"page",description:"Page number. Defaults to 1."},{name:"limit",description:"Page size. Defaults to 25 and cannot exceed 100."}]},{title:"Response fields",description:"Detail responses include payer-specific plan details when available.",fields:[{name:"blanket_vob.id",description:"QuickAdmit Blanket VOB ID."},{name:"patient_first_name / patient_last_name",description:"Patient name stored on the Blanket VOB."},{name:"member_id",description:"Member ID found or used for the search."},{name:"status",description:"Request status, for example pending, complete, or error."},{name:"provider",description:"Provider object with id and name."},{name:"payers",description:"Payer results found for the patient."},{name:"payers[].plan_response",description:"Readable plan details such as deductible, out-of-pocket, contacts, and service details."},{name:"remote_errors",description:"Result errors returned with an otherwise stored result."}]}]}],B=[{id:"overview",label:"Overview"},{id:"quickstart",label:"Quickstart"},{id:"authentication",label:"Authentication"},{id:"providers",label:"Providers"},{id:"payers",label:"Payers"},{id:"service-codes",label:"Service Codes"},{id:"eligibility",label:"Eligibility"},{id:"blanket-vob",label:"Blanket VOB"},{id:"pagination",label:"Pagination and errors"},{id:"testing",label:"Testing safely"}],M={name:"ApiDocs",data(){return{navItems:B,activeSectionId:"overview",activeSectionFrame:null,heroImage:f,quickstartCode:g,errorExample:q,endpointGroups:T,workflowSteps:[{number:"1",title:"Sign in",body:"Log in to the QuickAdmit account that has API Access enabled."},{number:"2",title:"Open API Access",body:"Go to API Access from account settings and review the keys issued for the account."},{number:"3",title:"Copy a key",body:"Copy an active API key and store it securely in your application configuration."},{number:"4",title:"Call the API",body:"Use any REST client or backend HTTP client and include Authorization: Bearer <your_api_key> on every request."}]}},mounted(){window.addEventListener("scroll",this.queueActiveSectionUpdate,{passive:!0}),window.addEventListener("resize",this.queueActiveSectionUpdate),this.$nextTick(this.updateActiveSection)},beforeUnmount(){window.removeEventListener("scroll",this.queueActiveSectionUpdate),window.removeEventListener("resize",this.queueActiveSectionUpdate),this.activeSectionFrame&&window.cancelAnimationFrame(this.activeSectionFrame)},methods:{queueActiveSectionUpdate(){this.activeSectionFrame||(this.activeSectionFrame=window.requestAnimationFrame(()=>{this.activeSectionFrame=null,this.updateActiveSection()}))},updateActiveSection(){const d=this.navItems.map(p=>document.getElementById(p.id)).filter(Boolean);if(!d.length)return;let t=d[0].id;d.forEach(p=>{p.getBoundingClientRect().top<=140&&(t=p.id)}),window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4&&(t=d[d.length-1].id),this.activeSectionId=t}}},R={class:"api-docs-page"},C={class:"docs-shell"},H={class:"docs-sidebar","aria-label":"API documentation navigation"},L=["href","aria-current"],O={class:"docs-content"},N={class:"docs-header",id:"overview"},Q={class:"docs-header-content"},F={class:"docs-header-visual","aria-hidden":"true"},G=["src"],U={class:"doc-section",id:"quickstart"},V={class:"step-grid"},Y={class:"code-block"},X=["id"],J={class:"section-heading"},z={class:"endpoint-header"},Z={key:0,class:"query-example"},j={key:0},W={class:"code-block"},K={class:"code-block"},$={class:"field-section-grid"},ee={key:0},te={class:"field-list"},ie={class:"doc-section",id:"pagination"},ae={class:"code-block"};function se(d,t,p,re,o,ne){return r(),n("div",R,[e("section",C,[e("aside",H,[t[0]||(t[0]=e("div",{class:"sidebar-title"},"QuickAdmit API",-1)),(r(!0),n(l,null,c(o.navItems,s=>(r(),n("a",{key:s.id,href:"#"+s.id,class:h({active:o.activeSectionId===s.id}),"aria-current":o.activeSectionId===s.id?"location":null},a(s.label),11,L))),128))]),e("article",O,[e("header",N,[e("div",Q,[t[1]||(t[1]=e("div",{class:"docs-header-copy"},[e("div",{class:"eyebrow"},"API documentation"),e("h1",null,"QuickAdmit API"),e("p",null," Build directly into QuickAdmit's eligibility, Blanket VOB, and payer workflows. The API is designed around a single app entry point, API-key authentication, and account-level access. ")],-1)),e("div",F,[e("img",{src:o.heroImage,alt:""},null,8,G)])])]),e("section",U,[t[2]||(t[2]=e("h2",null,"Quickstart",-1)),t[3]||(t[3]=e("p",null," Start in the QuickAdmit app. Sign in to your account, open API Access, and copy an active API key. Every API request must include that key in the authorization header. After that, use any REST client or backend service to call the endpoints below; each workflow is explained in more detail in the following sections. ",-1)),e("div",V,[(r(!0),n(l,null,c(o.workflowSteps,s=>(r(),n("div",{key:s.title,class:"step-item"},[e("span",null,a(s.number),1),e("div",null,[e("h3",null,a(s.title),1),e("p",null,a(s.body),1)])]))),128))]),e("pre",Y,[e("code",null,a(o.quickstartCode),1)])]),t[8]||(t[8]=u('<section class="doc-section" id="authentication" data-v-5011e045><h2 data-v-5011e045>Authentication and access</h2><p data-v-5011e045> QuickAdmit admins generate API keys after API Access is purchased. Customers can view their issued keys in the app, but key creation is handled by QuickAdmit operations. Treat API keys like production credentials and rotate them through support if they are exposed. </p><div class="info-table" data-v-5011e045><div data-v-5011e045><strong data-v-5011e045>Header</strong><code data-v-5011e045>Authorization: Bearer qa_live_example</code></div><div data-v-5011e045><strong data-v-5011e045>Scope</strong><span data-v-5011e045>API keys can only access data for the account they were issued for.</span></div><div data-v-5011e045><strong data-v-5011e045>Access requirements</strong><span data-v-5011e045>Active subscription plus paid API Access. Add-on endpoints require their product entitlement.</span></div></div></section>',1)),(r(!0),n(l,null,c(o.endpointGroups,s=>(r(),n("section",{id:s.id,key:s.id,class:"doc-section"},[e("div",J,[e("h2",null,a(s.title),1),e("p",null,a(s.description),1)]),(r(!0),n(l,null,c(s.endpoints,i=>(r(),n("section",{key:i.method+i.path,class:"endpoint-block"},[e("div",z,[e("span",{class:h(["method-badge","method-"+i.method.toLowerCase()])},a(i.method),3),e("code",null,a(i.path),1)]),e("h3",null,a(i.title),1),e("p",null,a(i.description),1),i.queryExample?(r(),n("div",Z,[t[4]||(t[4]=e("strong",null,"Example",-1)),e("code",null,a(i.queryExample),1)])):y("",!0),e("div",{class:h(["endpoint-examples",{"single-example":!i.request}])},[i.request?(r(),n("div",j,[t[5]||(t[5]=e("h4",null,"Request",-1)),e("pre",W,[e("code",null,a(i.request),1)])])):y("",!0),e("div",null,[t[6]||(t[6]=e("h4",null,"Response",-1)),e("pre",K,[e("code",null,a(i.response),1)])])],2)]))),128)),e("div",$,[(r(!0),n(l,null,c(s.fieldSections,i=>(r(),n("div",{key:i.title,class:"field-panel"},[e("h3",null,a(i.title),1),i.description?(r(),n("p",ee,a(i.description),1)):y("",!0),e("div",te,[(r(!0),n(l,null,c(i.fields,m=>(r(),n("div",{key:m.name},[e("code",null,a(m.name),1),e("span",null,a(m.description),1)]))),128))])]))),128))])],8,X))),128)),e("section",ie,[t[7]||(t[7]=u('<h2 data-v-5011e045>Pagination, filters, and errors</h2><div class="two-column" data-v-5011e045><div data-v-5011e045><h3 data-v-5011e045>Pagination</h3><p data-v-5011e045> List endpoints default to <code data-v-5011e045>page=1</code> and <code data-v-5011e045>limit=25</code>. The maximum limit is <code data-v-5011e045>100</code>. Responses include <code data-v-5011e045>total</code>, <code data-v-5011e045>page</code>, and <code data-v-5011e045>limit</code>. </p></div><div data-v-5011e045><h3 data-v-5011e045>Error envelope</h3><p data-v-5011e045> Handler errors use a consistent JSON envelope. Authentication middleware can return <code data-v-5011e045>401</code> or <code data-v-5011e045>403</code> before the request reaches a handler. </p></div></div>',2)),e("pre",ae,[e("code",null,a(o.errorExample),1)])]),t[9]||(t[9]=u('<section class="doc-section" id="testing" data-v-5011e045><h2 data-v-5011e045>Testing safely</h2><p data-v-5011e045> Use synthetic patient data when building locally or sharing examples. Only send production PHI from approved systems and never paste API keys, patient identifiers, or payer responses into public tickets or chat tools. </p><div class="testing-callout" data-v-5011e045><strong data-v-5011e045>Rate limiting</strong><span data-v-5011e045> Keep API traffic steady and avoid large request bursts. If a request returns <code data-v-5011e045>429 Too Many Requests</code>, pause and retry with exponential backoff. </span></div><ul class="check-list" data-v-5011e045><li data-v-5011e045>Store API keys in a secret manager or encrypted environment variable.</li><li data-v-5011e045>Use payer schemas to validate required fields before submitting inquiries.</li><li data-v-5011e045>Handle eligibility result errors returned inside <code data-v-5011e045>remote_errors</code>.</li><li data-v-5011e045>Use retries with backoff for temporary <code data-v-5011e045>429</code> and <code data-v-5011e045>5xx</code> responses.</li></ul></section>',1))])])])}const de=b(M,[["render",se],["__scopeId","data-v-5011e045"]]);export{de as default};
