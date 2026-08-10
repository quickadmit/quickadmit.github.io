<template>
  <div class="api-docs-page">
    <section class="docs-shell">
      <aside class="docs-sidebar" aria-label="API documentation navigation">
        <div class="sidebar-title">QuickAdmit API</div>
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          :class="{ active: activeSectionId === item.id }"
          :aria-current="activeSectionId === item.id ? 'location' : null"
        >
          {{ item.label }}
        </a>
      </aside>

      <article class="docs-content">
        <header class="docs-header" id="overview">
          <div class="docs-header-content">
            <div class="docs-header-copy">
              <div class="eyebrow">API documentation</div>
              <h1>QuickAdmit API</h1>
              <p>
                Build directly into QuickAdmit's eligibility, Blanket VOB, payer,
                and reimbursement workflows. The API is designed around a
                single app entry point, API-key authentication, and account-level
                access.
              </p>
            </div>
            <div class="docs-header-visual" aria-hidden="true">
              <img :src="heroImage" alt="" />
            </div>
          </div>
        </header>

        <section class="doc-section" id="quickstart">
          <h2>Quickstart</h2>
          <p>
            Start in the QuickAdmit app. Sign in to your account, open API
            Access, and copy an active API key. Every API request must include
            that key in the authorization header. After that, use any REST
            client or backend service to call the endpoints below; each
            workflow is explained in more detail in the following sections.
          </p>

          <div class="step-grid">
            <div v-for="step in workflowSteps" :key="step.title" class="step-item">
              <span>{{ step.number }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </div>
            </div>
          </div>

          <pre class="code-block"><code>{{ quickstartCode }}</code></pre>
        </section>

        <section class="doc-section" id="authentication">
          <h2>Authentication and access</h2>
          <p>
            QuickAdmit admins generate API keys after API Access is purchased.
            Customers can view their issued keys in the app, but key creation is
            handled by QuickAdmit operations. Treat API keys like production
            credentials and rotate them through support if they are exposed.
          </p>

          <div class="info-table">
            <div>
              <strong>Header</strong>
              <code>Authorization: Bearer qa_live_example</code>
            </div>
            <div>
              <strong>Scope</strong>
              <span>API keys can only access data for the account they were issued for.</span>
            </div>
            <div>
              <strong>Access requirements</strong>
              <span>Active subscription plus paid API Access. Add-on endpoints require their product entitlement.</span>
            </div>
          </div>
        </section>

        <section
          v-for="group in endpointGroups"
          :id="group.id"
          :key="group.id"
          class="doc-section"
        >
          <div class="section-heading">
            <h2>{{ group.title }}</h2>
            <p>{{ group.description }}</p>
          </div>

          <section
            v-for="endpoint in group.endpoints"
            :key="endpoint.method + endpoint.path"
            class="endpoint-block"
          >
            <div class="endpoint-header">
              <span class="method-badge" :class="'method-' + endpoint.method.toLowerCase()">
                {{ endpoint.method }}
              </span>
              <code>{{ endpoint.path }}</code>
            </div>
            <h3>{{ endpoint.title }}</h3>
            <p>{{ endpoint.description }}</p>
            <div v-if="endpoint.queryExample" class="query-example">
              <strong>Example</strong>
              <code>{{ endpoint.queryExample }}</code>
            </div>
            <div class="endpoint-examples" :class="{ 'single-example': !endpoint.request }">
              <div v-if="endpoint.request">
                <h4>Request</h4>
                <pre class="code-block"><code>{{ endpoint.request }}</code></pre>
              </div>
              <div>
                <h4>Response</h4>
                <pre class="code-block"><code>{{ endpoint.response }}</code></pre>
              </div>
            </div>
          </section>

          <div class="field-section-grid">
            <div
              v-for="fieldSection in group.fieldSections"
              :key="fieldSection.title"
              class="field-panel"
            >
              <h3>{{ fieldSection.title }}</h3>
              <p v-if="fieldSection.description">{{ fieldSection.description }}</p>
              <div class="field-list">
                <div v-for="field in fieldSection.fields" :key="field.name">
                  <code>{{ field.name }}</code>
                  <span>{{ field.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="doc-section" id="pagination">
          <h2>Pagination, filters, and errors</h2>
          <div class="two-column">
            <div>
              <h3>Pagination</h3>
              <p>
                List endpoints default to <code>page=1</code> and
                <code>limit=25</code>. The maximum limit is
                <code>100</code>. Responses include <code>total</code>,
                <code>page</code>, and <code>limit</code>.
              </p>
            </div>
            <div>
              <h3>Error envelope</h3>
              <p>
                Handler errors use a consistent JSON envelope. Authentication
                middleware can return <code>401</code> or <code>403</code>
                before the request reaches a handler.
              </p>
            </div>
          </div>
          <pre class="code-block"><code>{{ errorExample }}</code></pre>
        </section>

        <section class="doc-section" id="testing">
          <h2>Testing safely</h2>
          <p>
            Use synthetic patient data when building locally or sharing
            examples. Only send production PHI from approved systems and never
            paste API keys, patient identifiers, or payer responses into public
            tickets or chat tools.
          </p>
          <div class="testing-callout">
            <strong>Rate limiting</strong>
            <span>
              Keep API traffic steady and avoid large request bursts. If a
              request returns <code>429 Too Many Requests</code>, pause and
              retry with exponential backoff.
            </span>
          </div>
          <ul class="check-list">
            <li>Store API keys in a secret manager or encrypted environment variable.</li>
            <li>Use payer schemas to validate required fields before submitting inquiries.</li>
            <li>Handle eligibility result errors returned inside <code>remote_errors</code>.</li>
            <li>Use retries with backoff for temporary <code>429</code> and <code>5xx</code> responses.</li>
          </ul>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
import apiHeroImage from "../assets/api_hero_security.png";

const quickstartCode = `curl --request GET \\
  --url 'https://app.quickadmit.com/api/v2/payers?page=1&limit=25' \\
  --header 'Authorization: Bearer <your_api_key>'`;

const schemaExample = `{
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
}`;

const errorExample = `{
  "code": 400,
  "status": "Bad Request",
  "message": "limit must be less than or equal to 100"
}`;

const responseInquiry = `{
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
      "remote_id": "remote_example_123",
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
}`;

const responseInquiryList = `{
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
}`;

const responseBlanket = `{
  "blanket_vob": {
    "id": "bvob_01HZXAMPLE0000000000",
    "remote_id": "remote_discovery_123",
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
}`;

const responseBlanketList = `{
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
}`;

const responsePayers = `{
  "payers": [
    { "id": 1234, "name": "Example Health Plan" }
  ],
  "total": 1,
  "page": 1,
  "limit": 25
}`;

const responseProviders = `{
  "providers": [
    { "id": 42, "name": "Example Recovery Center" }
  ],
  "total": 1,
  "page": 1,
  "limit": 25
}`;

const responseProvider = `{
  "provider": {
    "id": 42,
    "name": "Example Recovery Center"
  }
}`;

const responseServiceCodes = `{
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
}`;

const responseReimbursement = `{
  "reimbursement_aggregation": {
    "id": 901,
    "prefix_id": 12,
    "group_id": 34,
    "payer_id": 56,
    "dtx": 42.5,
    "rtc": 51.2,
    "php": null,
    "iop": 38.9,
    "op": null,
    "average": 44.2,
    "status": "has_data",
    "created_at": "2026-08-10T12:00:00Z"
  }
}`;

const endpointGroups = [
  {
    id: "providers",
    title: "Providers",
    description: "Providers identify the facility or account location used when QuickAdmit submits coverage requests. Use them to select the correct providerId for eligibility and Blanket VOB workflows without sending full facility details on every request.",
    endpoints: [
      {
        method: "GET",
        path: "/providers",
        title: "List providers",
        description: "Returns providers available to the account with pagination.",
        query: ["page", "limit"],
        queryExample: "/providers?page=1&limit=25",
        request: null,
        response: responseProviders,
      },
      {
        method: "GET",
        path: "/providers/{id}",
        title: "Get provider",
        description: "Returns one provider by ID.",
        query: [],
        request: null,
        response: responseProvider,
      },
    ],
    fieldSections: [
      {
        title: "Response fields",
        description: "Provider responses are intentionally small so callers can select the right facility without exposing setup details.",
        fields: [
          { name: "provider.id", description: "Provider ID to send in create requests." },
          { name: "provider.name", description: "Display name shown for the facility." },
          { name: "total", description: "Total matching providers before pagination on list responses." },
          { name: "page", description: "Current page number used for the list response." },
          { name: "limit", description: "Page size used for the list response." },
        ],
      },
    ],
  },
  {
    id: "payers",
    title: "Payers",
    description: "Payers represent the supported health plans that can receive eligibility requests. Search payers to choose the right plan, then load the payer schema before creating an inquiry. The schema is the contract for the inquiry request: it tells you which fields to collect, which field combination to use, and which service codes are accepted for that payer.",
    endpoints: [
      {
        method: "GET",
        path: "/payers",
        title: "List or search payers",
        description: "Returns enabled payers. The example searches payer names with pagination.",
        query: ["query", "page", "limit"],
        queryExample: "/payers?query=Aetna&page=1&limit=25",
        request: null,
        response: responsePayers,
      },
      {
        method: "GET",
        path: "/payers/{id}",
        title: "Get payer schema",
        description: "Returns the payer plus the schema used to build POST /inquiries. Read schema.fields for request field definitions and schema.combos for valid required-field combinations.",
        query: [],
        request: null,
        response: schemaExample,
      },
    ],
    fieldSections: [
      {
        title: "Query fields",
        description: "Search is optional; omit query to browse enabled payers with pagination.",
        fields: [
          { name: "query", description: "Optional payer search text." },
          { name: "page", description: "Page number. Defaults to 1." },
          { name: "limit", description: "Page size. Defaults to 25 and cannot exceed 100." },
        ],
      },
      {
        title: "Payer response fields",
        description: "The payer object identifies the plan. The schema object explains how to build an eligibility inquiry for that payer.",
        fields: [
          { name: "payer.id", description: "Payer ID to send as payerId in eligibility create requests." },
          { name: "payer.name", description: "Payer display name." },
          { name: "total", description: "Total matching payers before pagination on list responses." },
        ],
      },
      {
        title: "Schema fields",
        description: "Every key under schema.fields is a field name you can send in POST /inquiries when it is allowed by the selected payer.",
        fields: [
          { name: "schema.fields.<field>.name", description: "Request key to send, for example memberId or patientBirthDate." },
          { name: "schema.fields.<field>.label", description: "Human-readable label you can show in your form." },
          { name: "schema.fields.<field>.type", description: "Expected input type, such as text, date, or choice." },
          { name: "schema.fields.<field>.required", description: "Whether the payer marks this field as required." },
          { name: "schema.fields.<field>.allowed", description: "Whether this field can be sent for this payer." },
          { name: "schema.fields.<field>.options", description: "Allowed values for choice fields. Send the option id, not the display name." },
          { name: "schema.fields.serviceType.options", description: "Service codes available for this payer. Use GET /service-codes for the full supported catalog." },
        ],
      },
      {
        title: "Using schema in POST /inquiries",
        description: "Pick one combo you can satisfy, send every field in that combo, and send the combo index as selectedCombo.",
        fields: [
          { name: "schema.combos", description: "Valid required-field combinations. Each array contains request field names." },
          { name: "schema.combos[0]", description: "If you use the first combo, send selectedCombo: 0 in POST /inquiries." },
          { name: "memberId / patientBirthDate", description: "Example fields from a combo. Send them as top-level inquiry request fields." },
          { name: "serviceType", description: "Send one service code or an array of codes from schema.fields.serviceType.options." },
          { name: "payerId", description: "Use payer.id from this response." },
        ],
      },
    ],
  },
  {
    id: "service-codes",
    title: "Service Codes",
    description: "Service codes describe the care categories used on eligibility requests. Use this catalog for supported code names, then use the payer schema to choose the serviceType values available for a specific payer.",
    endpoints: [
      {
        method: "GET",
        path: "/service-codes",
        title: "List service codes",
        description: "Returns the supported service code catalog. This endpoint is not paginated.",
        query: [],
        request: null,
        response: responseServiceCodes,
      },
    ],
    fieldSections: [
      {
        title: "Response fields",
        description: "Send the code value in serviceType when it is allowed by the selected payer schema.",
        fields: [
          { name: "service_codes[].code", description: "Service code value, for example MH or 98." },
          { name: "service_codes[].name", description: "Human-readable service category name." },
        ],
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    description: "Eligibility checks verify a patient's coverage with a specific payer. They return coverage and benefits details when available, which helps estimate patient responsibility such as copayments, deductibles, coinsurance, and out-of-pocket maximums.",
    endpoints: [
      {
        method: "POST",
        path: "/inquiries",
        title: "Create eligibility inquiry",
        description: "Creates a real-time eligibility inquiry. Use the payer schema to select the required fields and service types.",
        query: [],
        request: `{
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
}`,
        response: responseInquiry,
      },
      {
        method: "GET",
        path: "/inquiries",
        title: "List eligibility inquiries",
        description: "Returns stored inquiries for your account. The example filters by member and payer.",
        query: ["memberId", "payerId", "page", "limit"],
        queryExample: "/inquiries?memberId=QA123456789&payerId=1234&page=1&limit=25",
        request: null,
        response: responseInquiryList,
      },
      {
        method: "GET",
        path: "/inquiries/{id}",
        title: "Get eligibility inquiry",
        description: "Returns one inquiry with coverage details when they are stored.",
        query: [],
        request: null,
        response: responseInquiry,
      },
    ],
    fieldSections: [
      {
        title: "Create request fields",
        description: "Required patient fields can vary by payer. Use GET /payers/{id} before submitting.",
        fields: [
          { name: "providerId", description: "Provider ID returned by GET /providers." },
          { name: "payerId", description: "Payer ID returned by GET /payers." },
          { name: "memberId", description: "Subscriber or member identifier." },
          { name: "patientBirthDate", description: "Patient date of birth in YYYY-MM-DD format." },
          { name: "patientFirstName", description: "Patient first name when required by the payer schema." },
          { name: "patientLastName", description: "Patient last name when required by the payer schema." },
          { name: "subscriberRelationship", description: "Relationship code for the patient and subscriber, for example 18 for self." },
          { name: "serviceType", description: "Service code or array of codes allowed by the payer schema." },
          { name: "asOfDate", description: "Eligibility date. Defaults to today when omitted." },
          { name: "selectedCombo", description: "Zero-based index from schema.combos matching the fields you send." },
        ],
      },
      {
        title: "List filters",
        description: "Use these query parameters on GET /inquiries.",
        fields: [
          { name: "memberId", description: "Filter results by member ID." },
          { name: "payerId", description: "Filter results by payer ID." },
          { name: "page", description: "Page number. Defaults to 1." },
          { name: "limit", description: "Page size. Defaults to 25 and cannot exceed 100." },
        ],
      },
      {
        title: "Response fields",
        description: "List responses return compact inquiry rows; detail responses include coverage when available.",
        fields: [
          { name: "inquiry.id", description: "QuickAdmit inquiry ID." },
          { name: "patient_first_name / patient_last_name", description: "Patient name stored on the inquiry." },
          { name: "member_id", description: "Member ID when available." },
          { name: "date", description: "Inquiry created date formatted as MM/DD/YYYY." },
          { name: "status", description: "Processing status, for example pending, complete, error, expired, or draft." },
          { name: "plan_status", description: "Eligibility plan status, for example active, inactive, unknown, or unavailable." },
          { name: "payer", description: "Payer object with id and name." },
          { name: "provider", description: "Provider object with id and name." },
          { name: "coverage", description: "Readable eligibility result details on get/create responses when stored." },
          { name: "remote_errors", description: "Eligibility result errors returned with an otherwise stored result." },
        ],
      },
    ],
  },
  {
    id: "blanket-vob",
    title: "Blanket VOB",
    description: "Blanket VOB helps find a patient's active health plans using demographic information such as name, date of birth, and state. It is useful when the payer is unknown or when a standard eligibility check is not possible.",
    endpoints: [
      {
        method: "POST",
        path: "/blanket-vobs",
        title: "Create Blanket VOB",
        description: "Runs insurance discovery using patient demographics. Requires Blanket VOB access.",
        query: [],
        request: `{
  "providerId": 42,
  "patientStateId": "8550",
  "patientFirstName": "JANE",
  "patientLastName": "EXAMPLE",
  "patientDOB": "05/06/1990",
  "doS_StartDate": "08/10/2026",
  "doS_EndDate": "08/10/2026"
}`,
        response: responseBlanket,
      },
      {
        method: "GET",
        path: "/blanket-vobs",
        title: "List Blanket VOBs",
        description: "Returns stored Blanket VOB discovery searches. The example filters by member and payer.",
        query: ["memberId", "payerId", "page", "limit"],
        queryExample: "/blanket-vobs?memberId=QA123456789&payerId=1234&page=1&limit=25",
        request: null,
        response: responseBlanketList,
      },
      {
        method: "GET",
        path: "/blanket-vobs/{id}",
        title: "Get Blanket VOB",
        description: "Returns one Blanket VOB with readable payer and plan details.",
        query: [],
        request: null,
        response: responseBlanket,
      },
    ],
    fieldSections: [
      {
        title: "Create request fields",
        description: "Use synthetic test patients when building locally or sharing examples.",
        fields: [
          { name: "providerId", description: "Provider ID returned by GET /providers." },
          { name: "patientStateId", description: "Patient state ID used for discovery." },
          { name: "patientFirstName", description: "Patient first name." },
          { name: "patientLastName", description: "Patient last name." },
          { name: "patientDOB", description: "Patient date of birth in MM/DD/YYYY format." },
          { name: "doS_StartDate", description: "Date-of-service start date in MM/DD/YYYY format." },
          { name: "doS_EndDate", description: "Date-of-service end date in MM/DD/YYYY format." },
          { name: "patientSSN", description: "Optional patient SSN when required for discovery." },
        ],
      },
      {
        title: "List filters",
        description: "Use these query parameters on GET /blanket-vobs.",
        fields: [
          { name: "memberId", description: "Filter results by member ID." },
          { name: "payerId", description: "Filter results by payer ID." },
          { name: "page", description: "Page number. Defaults to 1." },
          { name: "limit", description: "Page size. Defaults to 25 and cannot exceed 100." },
        ],
      },
      {
        title: "Response fields",
        description: "Detail responses include payer-specific plan details when available.",
        fields: [
          { name: "blanket_vob.id", description: "QuickAdmit Blanket VOB ID." },
          { name: "remote_id", description: "Discovery request ID when available." },
          { name: "patient_first_name / patient_last_name", description: "Patient name stored on the Blanket VOB." },
          { name: "member_id", description: "Member ID found or used for the search." },
          { name: "status", description: "Request status, for example pending, complete, or error." },
          { name: "provider", description: "Provider object with id and name." },
          { name: "payers", description: "Payer results found for the patient." },
          { name: "payers[].plan_response", description: "Readable plan details such as deductible, out-of-pocket, contacts, and service details." },
          { name: "remote_errors", description: "Result errors returned with an otherwise stored result." },
        ],
      },
    ],
  },
  {
    id: "reimbursements",
    title: "Reimbursements",
    description: "Reimbursements summarize allowed-on-charge percentages from recent reimbursement data. Use them to compare expected reimbursement by payer, employer, group, prefix, or care category when planning financial expectations.",
    endpoints: [
      {
        method: "POST",
        path: "/reimbursements/aggregate",
        title: "Create reimbursement aggregation",
        description: "Aggregates reimbursement data from the last year. Requires reimbursement access.",
        query: [],
        request: `{
  "prefixId": 12,
  "groupId": 34,
  "employerId": 78,
  "payerId": 56
}`,
        response: responseReimbursement,
      },
    ],
    fieldSections: [
      {
        title: "Create request fields",
        description: "Use the filters that match the reimbursement segment you want to analyze.",
        fields: [
          { name: "prefixId", description: "Optional reimbursement prefix filter." },
          { name: "groupId", description: "Optional reimbursement group filter." },
          { name: "employerId", description: "Optional employer filter." },
          { name: "payerId", description: "Optional payer filter." },
        ],
      },
      {
        title: "Response fields",
        description: "Percent fields are returned only when data exists for that category.",
        fields: [
          { name: "reimbursement_aggregation.id", description: "Stored aggregation ID." },
          { name: "dtx / rtc / php / iop / op", description: "Average allowed-on-charge percentages by care category." },
          { name: "average", description: "Average across returned reimbursement categories." },
          { name: "status", description: "Result status: has_data, no_data, or local_allowable." },
          { name: "created_at", description: "Time the aggregation was stored." },
        ],
      },
    ],
  },
];

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "quickstart", label: "Quickstart" },
  { id: "authentication", label: "Authentication" },
  { id: "providers", label: "Providers" },
  { id: "payers", label: "Payers" },
  { id: "service-codes", label: "Service Codes" },
  { id: "eligibility", label: "Eligibility" },
  { id: "blanket-vob", label: "Blanket VOB" },
  { id: "reimbursements", label: "Reimbursements" },
  { id: "pagination", label: "Pagination and errors" },
  { id: "testing", label: "Testing safely" },
];

export default {
  name: "ApiDocs",
  data() {
    return {
      navItems,
      activeSectionId: "overview",
      activeSectionFrame: null,
      heroImage: apiHeroImage,
      quickstartCode,
      errorExample,
      endpointGroups,
      workflowSteps: [
        {
          number: "1",
          title: "Sign in",
          body: "Log in to the QuickAdmit account that has API Access enabled.",
        },
        {
          number: "2",
          title: "Open API Access",
          body: "Go to API Access from account settings and review the keys issued for the account.",
        },
        {
          number: "3",
          title: "Copy a key",
          body: "Copy an active API key and store it securely in your application configuration.",
        },
        {
          number: "4",
          title: "Call the API",
          body: "Use any REST client or backend HTTP client and include Authorization: Bearer <your_api_key> on every request.",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.queueActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", this.queueActiveSectionUpdate);
    this.$nextTick(this.updateActiveSection);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.queueActiveSectionUpdate);
    window.removeEventListener("resize", this.queueActiveSectionUpdate);

    if (this.activeSectionFrame) {
      window.cancelAnimationFrame(this.activeSectionFrame);
    }
  },
  methods: {
    queueActiveSectionUpdate() {
      if (this.activeSectionFrame) {
        return;
      }

      this.activeSectionFrame = window.requestAnimationFrame(() => {
        this.activeSectionFrame = null;
        this.updateActiveSection();
      });
    },
    updateActiveSection() {
      const sections = this.navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (!sections.length) {
        return;
      }

      let activeSectionId = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 140) {
          activeSectionId = section.id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        activeSectionId = sections[sections.length - 1].id;
      }

      this.activeSectionId = activeSectionId;
    },
  },
};
</script>

<style scoped>
.api-docs-page {
  background: #f6f7fb;
  color: #1c1d2a;
}

.docs-shell {
  display: grid;
  grid-template-columns: 248px minmax(0, 1fr);
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
}

.docs-sidebar {
  position: sticky;
  top: 96px;
  align-self: start;
  background: #ffffff;
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  padding: 1rem;
}

.sidebar-title {
  color: #0f172a;
  font-size: 0.86rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.docs-sidebar a {
  border-left: 3px solid transparent;
  border-radius: 6px;
  display: block;
  color: #536071;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.55rem 0.65rem;
  text-decoration: none;
}

.docs-sidebar a:hover {
  color: #2563eb;
}

.docs-sidebar a.active {
  background: #eef2ff;
  border-left-color: #2563eb;
  color: #1d4ed8;
  font-weight: 800;
}

.docs-content {
  min-width: 0;
}

.docs-header,
.doc-section {
  background: #ffffff;
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 2rem;
  scroll-margin-top: 96px;
}

.docs-header {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #134e4a 100%);
  color: #ffffff;
  overflow: hidden;
  padding: 0;
}

.docs-header-content {
  align-items: center;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 40%);
  min-height: 320px;
  padding: 2rem;
}

.docs-header-copy {
  max-width: 760px;
  position: relative;
  z-index: 1;
}

.docs-header-visual {
  align-self: stretch;
  display: flex;
  justify-content: flex-end;
  margin: -0.75rem -1rem -1.75rem 0;
  min-height: 260px;
  pointer-events: none;
}

.docs-header-visual img {
  align-self: flex-end;
  filter: drop-shadow(0 24px 36px rgba(8, 15, 35, 0.34));
  max-height: 330px;
  object-fit: contain;
  object-position: right bottom;
  opacity: 0.95;
  width: min(100%, 520px);
}

.eyebrow {
  color: #67e8f9;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

h1,
h2,
h3,
h4,
p {
  letter-spacing: 0;
}

h1 {
  font-size: 2.75rem;
  font-weight: 850;
  line-height: 1.08;
  margin: 0 0 1rem;
}

h2 {
  color: #0f172a;
  font-size: 1.55rem;
  font-weight: 800;
  margin: 0 0 0.75rem;
}

h3 {
  color: #111827;
  font-size: 1.05rem;
  font-weight: 750;
  margin: 0 0 0.4rem;
}

h4 {
  color: #475569;
  font-size: 0.78rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
}

p {
  color: #536071;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1rem;
}

.docs-header p {
  color: #dbeafe;
  max-width: 760px;
}

code {
  background: #eef2ff;
  border: 1px solid #dbe4ff;
  border-radius: 6px;
  color: #1d4ed8;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.9em;
  padding: 0.12rem 0.35rem;
}

.step-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 1.25rem 0;
}

.step-item {
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  display: flex;
  gap: 0.85rem;
  padding: 1rem;
}

.step-item > span {
  align-items: center;
  background: #0891b2;
  border-radius: 999px;
  color: #ffffff;
  display: inline-flex;
  flex: 0 0 28px;
  font-size: 0.84rem;
  font-weight: 800;
  height: 28px;
  justify-content: center;
}

.step-item p {
  font-size: 0.94rem;
  margin: 0;
}

.code-block {
  background: #0b1120;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #dbeafe;
  font-size: 0.86rem;
  line-height: 1.65;
  margin: 0;
  overflow-x: auto;
  padding: 1rem;
  white-space: pre;
}

.code-block code {
  background: transparent;
  border: 0;
  color: inherit;
  padding: 0;
}

.info-table {
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  overflow: hidden;
}

.info-table div {
  align-items: start;
  border-bottom: 1px solid #e2e7f0;
  display: grid;
  gap: 1rem;
  grid-template-columns: 180px minmax(0, 1fr);
  padding: 0.95rem 1rem;
}

.info-table div:last-child {
  border-bottom: 0;
}

.info-table strong {
  color: #0f172a;
}

.info-table span {
  color: #536071;
}

.two-column {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 1rem;
}

.endpoint-block {
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 1.25rem;
}

.endpoint-header {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 0.75rem;
}

.method-badge {
  border-radius: 6px;
  color: #ffffff;
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 850;
  min-width: 54px;
  padding: 0.3rem 0.45rem;
  text-align: center;
}

.method-get {
  background: #2563eb;
}

.method-post {
  background: #059669;
}

.query-example {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0 1rem;
}

.query-example strong {
  color: #0f172a;
  margin-right: 0.25rem;
}

.query-example code {
  max-width: 100%;
  overflow-wrap: anywhere;
  white-space: normal;
}

.endpoint-examples {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.endpoint-examples.single-example {
  grid-template-columns: minmax(0, 1fr);
}

.section-heading {
  margin-bottom: 0.5rem;
}

.field-section-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.field-panel h3 {
  margin-bottom: 0.35rem;
}

.field-panel p {
  font-size: 0.94rem;
}

.field-list {
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  overflow: hidden;
}

.field-list div {
  align-items: start;
  border-bottom: 1px solid #e2e7f0;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 180px) minmax(0, 1fr);
  padding: 0.9rem 1rem;
}

.field-list div:last-child {
  border-bottom: 0;
}

.field-list code {
  display: inline-block;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
  white-space: normal;
  word-break: break-word;
}

.field-list span {
  color: #536071;
}

.testing-callout {
  background: #f8fafc;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
}

.testing-callout strong {
  color: #0f172a;
  display: block;
  margin-bottom: 0.35rem;
}

.testing-callout span {
  color: #536071;
  display: block;
  line-height: 1.65;
}

.check-list {
  color: #536071;
  line-height: 1.8;
  margin: 0;
  padding-left: 1.2rem;
}

@media screen and (max-width: 1100px) {
  .docs-shell {
    grid-template-columns: 1fr;
  }

  .docs-sidebar {
    position: static;
  }

  .docs-sidebar a {
    display: inline-block;
    margin-right: 0.75rem;
  }
}

@media screen and (max-width: 760px) {
  .docs-shell {
    padding: 1rem 0.75rem 3rem;
  }

  .doc-section {
    padding: 1.25rem;
  }

  .docs-header-content {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 1.25rem;
  }

  .docs-header-visual {
    margin: 0 -0.75rem -1rem;
    min-height: 180px;
  }

  .docs-header-visual img {
    max-height: 220px;
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  .step-grid,
  .two-column,
  .endpoint-examples,
  .info-table div,
  .field-list div {
    grid-template-columns: 1fr;
  }
}
</style>
