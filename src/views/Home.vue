<template>
  <div class="home-page">
    <div class="hero-flow">
      <section id="top" class="hero-section section-block">
      <div class="page-shell hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">
            <svg class="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Real-time eligibility for treatment centers
          </div>
          <h1>The Complete Admissions Engine Built to <span>Admit Every Qualified Caller.</span></h1>
          <p class="hero-lead">
            Behind every inquiry is someone ready for treatment. QuickAdmit removes the administrative gridlock
            between the first call and admission. By pairing instant verification across 1,500+ payers with
            redundant payer connections, Blanket VOB coverage searches, and real-time reimbursement estimates,
            we help treatment centers verify faster, eliminate denials, and admit with confidence 24/7/365.
          </p>
          <ul class="hero-proof" aria-label="QuickAdmit platform highlights">
            <li><i class="fas fa-circle-check"></i> Admit on the first call</li>
            <li><i class="fas fa-circle-check"></i> 1,500+ payers</li>
            <li><i class="fas fa-circle-check"></i> Mobile &amp; API access</li>
          </ul>
        </div>

        <div class="hero-visual" aria-label="QuickAdmit workflow examples">
          <div class="hero-card-frame">
            <transition name="hero-slide">
              <div :key="activeHeroSlide.id" class="browser-card inquiry-card">
                <div class="browser-bar">
                  <div class="browser-dots"><span></span><span></span><span></span></div>
                  <span>{{ activeHeroSlide.title }}</span>
                </div>
                <div class="inquiry-fields">
                  <div v-for="field in activeHeroSlide.fields" :key="field.label">
                    <small>{{ field.label }}</small><strong>{{ field.value }}</strong>
                  </div>
                </div>

                <div v-if="activeHeroSlide.id === 'inquiries'" class="coverage-panel">
                  <div class="coverage-status"><i class="fas fa-shield-halved"></i> Active coverage</div>
                  <div class="coverage-values">
                    <div><strong>$1,250</strong><small>Deductible</small></div>
                    <div><strong>$410</strong><small>Remaining</small></div>
                    <div><strong>$6,000</strong><small>OOP max</small></div>
                  </div>
                </div>

                <div v-else-if="activeHeroSlide.id === 'blanket-vob'" class="slide-result-list">
                  <div v-for="payer in activeHeroSlide.results" :key="payer">
                    <strong>{{ payer }}</strong><span><i class="fas fa-circle-check"></i> Found</span>
                  </div>
                </div>

                <div v-else class="coverage-panel reimbursement-slide-panel">
                  <div class="coverage-status"><i class="fas fa-calculator"></i> Reimbursement estimate</div>
                  <div class="coverage-values">
                    <div><strong>55.20%</strong><small>Average</small></div>
                    <div><strong>55.00%</strong><small>Detox</small></div>
                    <div><strong>45.00%</strong><small>Residential</small></div>
                  </div>
                </div>

                <div class="card-foot">
                  <span>{{ activeHeroSlide.footnote }}</span>
                  <span><i class="status-dot online"></i> {{ activeHeroSlide.status }}</span>
                </div>
              </div>
            </transition>
          </div>

          <transition name="hero-slide">
            <div :key="activeHeroSlide.id" class="floating-result">
              <i :class="activeHeroSlide.icon"></i>
              <span>{{ activeHeroSlide.title }}<strong>{{ activeHeroSlide.result }}</strong></span>
            </div>
          </transition>

          <div class="hero-slide-controls" role="tablist" aria-label="Hero slides">
            <button
              v-for="(slide, index) in heroSlides"
              :key="slide.id"
              type="button"
              role="tab"
              :class="{ active: index === heroSlideIndex }"
              :aria-label="`Show ${slide.title}`"
              :aria-selected="index === heroSlideIndex"
              @click="setHeroSlide(index)"
            ></button>
          </div>
        </div>
      </div>
      </section>

      <section class="workflow-series-intro">
      <div class="page-shell workflow-series-intro-layout">
        <div class="workflow-series-intro-copy">
          <div class="section-kicker">The admissions journey</div>
          <h2>From first call to admission, instant answers through the whole journey.</h2>
          <p>Check payer availability, verify coverage, estimate reimbursement, keep your census active, and keep working from mobile — with eligibility workflows connected through the API.</p>
        </div>
        <div class="workflow-journey-map">
          <svg class="workflow-journey-route" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path class="workflow-journey-route-base" d="M 140 91 C 260 47 380 47 500 91 S 740 135 860 91 C 960 112 960 176 860 197 C 740 153 620 153 500 197 S 260 241 140 197" pathLength="100"></path>
            <path class="workflow-journey-route-dots" d="M 140 91 C 260 47 380 47 500 91 S 740 135 860 91 C 960 112 960 176 860 197 C 740 153 620 153 500 197 S 260 241 140 197" pathLength="100"></path>
          </svg>
          <ol class="workflow-journey" aria-label="QuickAdmit feature journey">
          <li>
            <a href="#workflows">
              <span class="workflow-journey-marker"><i class="fas fa-phone-volume"></i><span class="workflow-journey-flag"><i class="fas fa-flag-checkered"></i></span></span>
              <span class="workflow-journey-copy"><strong>Admissions call</strong><small>New inquiry arrives</small></span>
            </a>
          </li>
          <li>
            <a href="#outages">
              <span class="workflow-journey-marker"><i class="fas fa-tower-broadcast"></i><span class="workflow-journey-flag"><i class="fas fa-flag-checkered"></i></span></span>
              <span class="workflow-journey-copy"><strong>Payer intelligence</strong><small>Monitor availability</small></span>
            </a>
          </li>
          <li>
            <a href="#workflows">
              <span class="workflow-journey-marker"><i class="fas fa-shield-halved"></i><span class="workflow-journey-flag"><i class="fas fa-flag-checkered"></i></span></span>
              <span class="workflow-journey-copy"><strong>Eligibility</strong><small>Verify coverage</small></span>
            </a>
          </li>
          <li>
            <a href="#reimbursement">
              <span class="workflow-journey-marker"><i class="fas fa-calculator"></i><span class="workflow-journey-flag"><i class="fas fa-flag-checkered"></i></span></span>
              <span class="workflow-journey-copy"><strong>Reimbursement</strong><small>Estimate payment</small></span>
            </a>
          </li>
          <li>
            <a href="#automation">
              <span class="workflow-journey-marker"><i class="fas fa-layer-group"></i><span class="workflow-journey-flag"><i class="fas fa-flag-checkered"></i></span></span>
              <span class="workflow-journey-copy"><strong>VOB batching</strong><small>Reverify your census</small></span>
            </a>
          </li>
          <li>
            <a href="#access">
              <span class="workflow-journey-marker"><i class="fas fa-mobile-screen-button"></i><span class="workflow-journey-flag"><i class="fas fa-flag-checkered"></i></span></span>
              <span class="workflow-journey-copy"><strong>Access anywhere</strong><small>Mobile and API</small></span>
            </a>
          </li>
          </ol>
          <div class="workflow-journey-guide" aria-hidden="true">
            <div class="workflow-journey-hud">
              <span class="journey-reward journey-reward-call"><i class="fas fa-phone-volume"></i><b>Caller connected</b></span>
              <span class="journey-reward journey-reward-payer"><i class="fas fa-tower-broadcast"></i><b>Payer live</b></span>
              <span class="journey-reward journey-reward-eligibility"><i class="fas fa-shield-halved"></i><b>Verified</b></span>
              <span class="journey-reward journey-reward-reimbursement"><i class="fas fa-calculator"></i><b>55.20%</b></span>
              <span class="journey-reward journey-reward-automation"><i class="fas fa-envelope-circle-check"></i><b>Results emailed</b></span>
              <span class="journey-reward journey-reward-access"><i class="fas fa-mobile-screen-button"></i><b>Connected</b></span>
            </div>
            <div class="workflow-journey-record">
              <div class="journey-record-main">
                <span class="journey-record-patient"><i class="fas fa-user"></i></span>
                <span class="journey-record-copy"><small>Patient intake</small><strong class="journey-record-status"></strong></span>
                <i class="journey-record-check fas fa-circle-check"></i>
              </div>
              <span class="journey-record-progress"><i></i></span>
              <span class="journey-tool journey-tool-call"><i class="fas fa-phone-volume"></i></span>
              <span class="journey-tool journey-tool-payer"><i class="fas fa-tower-broadcast"></i></span>
              <span class="journey-tool journey-tool-eligibility"><i class="fas fa-shield-halved"></i></span>
              <span class="journey-tool journey-tool-reimbursement"><i class="fas fa-calculator"></i></span>
              <span class="journey-tool journey-tool-automation"><i class="fas fa-layer-group"></i></span>
              <span class="journey-tool journey-tool-access"><i class="fas fa-mobile-screen-button"></i></span>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>

    <section id="features" class="section-block platform-section">
      <div class="page-shell">
        <div class="section-kicker">Platform Features</div>
        <h2 class="section-title">Everything admissions needs.</h2>
        <div class="feature-grid">
          <article class="feature-card feature-card-dark feature-card-tall">
            <div class="feature-card-heading">
              <div class="icon-tile"><i class="fas fa-magnifying-glass"></i></div>
              <h3>Inquiries</h3>
            </div>
            <p>Run a single eligibility inquiry against any payer and get benefits, deductibles and coverage status back in seconds.</p>
            <div class="inquiry-response-preview">
              <div class="inquiry-response-heading">
                <span>Eligibility response</span>
                <small>Aetna</small>
              </div>
              <div class="inquiry-coverage-status">
                <span><i></i> Coverage status</span>
                <strong>Active</strong>
              </div>
              <div class="inquiry-response-meta">
                <div><small>Relationship</small><strong>Self</strong></div>
                <div><small>Insurance type</small><strong>PPO</strong></div>
                <div><small>Plan name</small><strong>Open Access Plus</strong></div>
                <div><small>Coverage period</small><strong>Jan 1–Dec 31, 2026</strong></div>
              </div>
              <div class="inquiry-benefit-context"><span>In-network cost sharing</span><strong>Individual</strong></div>
              <dl class="inquiry-response-grid">
                <div>
                  <dt>Deductible</dt>
                  <dd>$1,250</dd>
                </div>
                <div>
                  <dt>Deductible remaining</dt>
                  <dd>$410</dd>
                </div>
                <div>
                  <dt>Out-of-pocket max</dt>
                  <dd>$6,000</dd>
                </div>
                <div>
                  <dt>OOP remaining</dt>
                  <dd>$2,840</dd>
                </div>
                <div>
                  <dt>Outpatient visit</dt>
                  <dd>$40 copay</dd>
                </div>
                <div>
                  <dt>Inpatient services</dt>
                  <dd>20% coinsurance</dd>
                </div>
              </dl>
              <div class="inquiry-benefit-row">
                <span><i class="fas fa-circle-check"></i> Mental health facility</span>
                <strong>Covered</strong>
              </div>
              <div class="inquiry-benefit-row">
                <span><i class="fas fa-circle-check"></i> Substance use disorder</span>
                <strong>Covered</strong>
              </div>
              <div class="inquiry-benefit-row inquiry-benefit-warning">
                <span><i class="fas fa-circle-info"></i> Prior authorization</span>
                <strong>Required · inpatient</strong>
              </div>
              <div class="inquiry-response-foot">Benefits, limitations and patient responsibility included</div>
            </div>
          </article>
          <article
            v-for="feature in features"
            :key="feature.title"
            class="feature-card feature-card-interactive"
            tabindex="0"
            :aria-label="`${feature.title}. Focus to preview an example result.`"
          >
            <div class="feature-card-heading">
              <div class="icon-tile"><i :class="feature.icon"></i></div>
              <h3>{{ feature.title }}</h3>
            </div>
            <div class="feature-card-stage">
              <p class="feature-card-description">{{ feature.body }}</p>
              <div class="feature-response-preview" :class="`feature-response-${feature.preview.type}`">
                <template v-if="feature.preview.type === 'policies'">
                  <div class="feature-preview-heading">
                    <span>Policies found</span><strong>{{ feature.preview.badge }}</strong>
                  </div>
                  <div
                    v-for="(row, index) in feature.preview.rows"
                    :key="row.label"
                    class="feature-preview-row"
                    :style="{ '--preview-index': index }"
                  >
                    <span>{{ row.label }}</span><em :class="row.tone"><i></i>{{ row.value }}</em>
                  </div>
                </template>

                <template v-else-if="feature.preview.type === 'reimbursement'">
                  <div class="feature-preview-heading">
                    <span>Reimbursement estimate</span><strong>{{ feature.preview.badge }}</strong>
                  </div>
                  <div class="feature-preview-metrics">
                    <div v-for="(metric, index) in feature.preview.metrics" :key="metric.label" :style="{ '--preview-index': index }">
                      <small>{{ metric.label }}</small><b>{{ metric.value }}</b>
                    </div>
                  </div>
                </template>

                <template v-else-if="feature.preview.type === 'alert'">
                  <div class="feature-preview-alert">
                    <i class="fas fa-bell"></i>
                    <span><b>{{ feature.preview.message }}</b><small>{{ feature.preview.criteria }}</small></span>
                  </div>
                </template>

                <template v-else-if="feature.preview.type === 'batch'">
                  <div class="feature-preview-heading">
                    <span>Batch report #184</span><strong class="success">Complete</strong>
                  </div>
                  <div class="feature-preview-progress"><i></i></div>
                  <div class="feature-preview-summary">
                    <span><b>250 / 250</b> progress</span><span><b>241</b> ran</span><span><b>6</b> inactive</span>
                  </div>
                </template>

                <template v-else-if="feature.preview.type === 'report'">
                  <div class="feature-preview-heading">
                    <span>Export audit</span><strong><i class="fas fa-file-csv"></i> CSV</strong>
                  </div>
                  <div class="feature-preview-export">
                    <span><small>Type</small><b>Inquiry</b></span>
                    <span><small>Date range</small><b>Sep 1–18</b></span>
                    <i class="fas fa-download"></i>
                  </div>
                </template>

                <template v-else>
                  <div class="feature-preview-heading">
                    <span>Live payer outages</span><strong>{{ feature.preview.badge }}</strong>
                  </div>
                  <div
                    v-for="(row, index) in feature.preview.rows"
                    :key="row.label"
                    class="feature-preview-row"
                    :style="{ '--preview-index': index }"
                  >
                    <span>{{ row.label }}</span><em :class="row.tone">{{ row.value }}</em>
                  </div>
                </template>
              </div>
            </div>
          </article>
        </div>
        <div class="feature-access-strip">
          <div class="feature-access-copy">
            <div class="icon-tile"><i class="fas fa-mobile-screen-button"></i></div>
            <div>
              <h3>Mobile apps &amp; API access</h3>
              <p>Work from iOS or Android, or connect eligibility, Blanket VOB, batching and payer status directly to your systems through the API.</p>
            </div>
          </div>
          <div class="feature-access-options" aria-label="QuickAdmit access options">
            <a
              class="feature-access-option feature-access-option-ios"
              href="https://apps.apple.com/us/app/quickadmit/id6758116651"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open QuickAdmit in the Apple App Store"
            >
              <i class="fab fa-apple"></i>
              <span><b>iOS app</b><small><i class="status-dot online"></i>Available</small></span>
              <i class="fas fa-arrow-up-right-from-square feature-access-arrow"></i>
            </a>
            <a
              class="feature-access-option feature-access-option-android"
              href="https://play.google.com/store/apps/details?id=com.quickadmit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open QuickAdmit in Google Play"
            >
              <i class="fab fa-android"></i>
              <span><b>Android</b><small><i class="status-dot online"></i>Available</small></span>
              <i class="fas fa-arrow-up-right-from-square feature-access-arrow"></i>
            </a>
            <router-link
              class="feature-access-option feature-access-option-api"
              to="/api-docs"
              aria-label="Open the QuickAdmit REST API documentation"
            >
              <i class="fas fa-code"></i>
              <span><b>REST API</b><small><i class="status-dot online"></i>Live</small></span>
              <i class="fas fa-arrow-right feature-access-arrow"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="workflow-series">
    <section
      id="outages"
      ref="payerIntelligenceSection"
      class="section-block outage-section workflow-detail-section"
      :class="{ 'payer-status-visible': payerStatusVisible }"
    >
      <div class="page-shell outage-grid">
        <div class="payer-status-card">
          <div class="payer-status-heading"><strong><i class="fas fa-tower-broadcast"></i> Payer status</strong><span><i class="status-dot online"></i> Live</span></div>
          <ul>
            <li v-for="(payer, index) in payers" :key="payer.name" :style="{ '--payer-index': index }">
              <strong>{{ payer.name }}</strong><small>{{ payer.uptime }}</small><span :class="payer.status.toLowerCase()"><i class="status-dot"></i>{{ payer.status }}</span>
            </li>
          </ul>
          <div class="status-alert"><strong>Heads up:</strong> BCBS Florida is degraded. Redundant payer connections help reduce disruption when an individual connection is unavailable.</div>
        </div>
        <div>
          <div class="section-kicker">01 · Payer intelligence</div>
          <h2 class="section-title">Outage intelligence,<br />built into every inquiry.</h2>
          <p class="section-copy">We monitor every payer around the clock. Your team sees connection health before running an inquiry, while redundant payer connections significantly reduce outage impact and help keep eligibility available.</p>
          <div class="metric-grid">
            <div><strong>24/7</strong><span>monitoring</span></div>
            <div><strong>Redundant</strong><span>payer connections</span></div>
            <div><strong>Lower</strong><span>outage impact</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="workflows" ref="workflowDemoSection" class="section-block workflow-section workflow-detail-section">
      <div class="page-shell">
        <div class="workflow-heading-row">
          <div>
            <div class="section-kicker">02 · Eligibility workflows</div>
            <h2 class="section-title">Two ways to get coverage.<br />Both take seconds.</h2>
          </div>
          <div class="segmented-control workflow-tabs" role="tablist" aria-label="Coverage workflow">
            <button :class="{ active: workflowType === 'inquiry' }" @click="workflowType = 'inquiry'">Inquiries</button>
            <button :class="{ active: workflowType === 'blanket' }" @click="workflowType = 'blanket'">Blanket VOB</button>
          </div>
        </div>

        <div class="workflow-grid">
          <div class="workflow-copy">
            <h3>{{ activeWorkflow.title }}</h3>
            <p>{{ activeWorkflow.intro }}</p>
            <div class="workflow-note"><i class="fas fa-circle-info"></i> {{ activeWorkflow.note }}</div>
            <ol class="workflow-steps">
              <li v-for="(step, index) in activeWorkflow.steps" :key="step.title">
                <span>{{ index + 1 }}</span>
                <div><strong>{{ step.title }}</strong><p>{{ step.body }}</p></div>
              </li>
            </ol>
          </div>
          <div class="browser-card workflow-form-card">
            <div class="workflow-demo-stage">
              <div
                class="workflow-demo-form"
                :class="[`workflow-demo-${workflowType}`, { 'workflow-demo-hidden': workflowDemo.result }]"
                :aria-hidden="workflowDemo.result"
                :inert="workflowDemo.result"
              >
                <div class="form-card-heading"><h4>{{ activeWorkflow.formTitle }}</h4><span>* required</span></div>
                <template v-if="workflowType === 'inquiry'">
                  <label :class="{ 'demo-field-active': workflowDemo.cursor === 'provider' }">Provider *<input :value="workflowDemo.fields.provider" readonly /></label>
                  <div class="two-fields">
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'payer' }">Payer *<input :value="workflowDemo.fields.payer" readonly /></label>
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'patient' }">Patient name *<input :value="workflowDemo.fields.patient" readonly /></label>
                  </div>
                  <div class="two-fields">
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'dob' }">Date of birth *<input :value="workflowDemo.fields.dob" readonly /></label>
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'asof' }">As of date<input :value="workflowDemo.fields.asof" readonly /></label>
                  </div>
                  <button class="estimate-button" :class="{ 'demo-button-clicked': workflowDemo.clicking }" @click="showWorkflowDemoResult">Run inquiry <span>→</span></button>
                </template>
                <template v-else>
                  <div class="two-fields">
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'first' }">First name *<input :value="workflowDemo.fields.first" readonly /></label>
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'last' }">Last name *<input :value="workflowDemo.fields.last" readonly /></label>
                  </div>
                  <div class="two-fields">
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'dob' }">Date of birth *<input :value="workflowDemo.fields.dob" readonly /></label>
                    <label :class="{ 'demo-field-active': workflowDemo.cursor === 'state' }">State *<input :value="workflowDemo.fields.state" readonly /></label>
                  </div>
                  <label :class="{ 'demo-field-active': workflowDemo.cursor === 'ssn' }">SSN<input :value="workflowDemo.fields.ssn" readonly /></label>
                  <button class="estimate-button" :class="{ 'demo-button-clicked': workflowDemo.clicking }" @click="showWorkflowDemoResult">Run Blanket VOB <span>→</span></button>
                </template>
                <span v-if="workflowDemo.active && workflowDemo.cursor" class="demo-cursor" :class="`workflow-cursor-${workflowDemo.cursor}`" aria-hidden="true"><i class="fas fa-arrow-pointer"></i></span>
              </div>
              <div
                class="workflow-demo-result"
                :class="{ 'workflow-demo-hidden': !workflowDemo.result }"
                :aria-hidden="!workflowDemo.result"
                :inert="!workflowDemo.result"
              >
                <template v-if="workflowType === 'inquiry'">
                  <div class="workflow-result-heading"><span>Eligibility response</span><strong>Aetna</strong></div>
                  <div class="workflow-result-status"><span><i></i> Coverage status</span><b>Active</b></div>
                  <div class="workflow-result-details">
                    <div><small>Relationship</small><strong>Self</strong></div>
                    <div><small>Plan</small><strong>Open Access Plus</strong></div>
                    <div><small>Coverage period</small><strong>Jan 1–Dec 31, 2026</strong></div>
                  </div>
                  <div class="workflow-result-context"><span>In-network cost sharing</span><strong>Individual</strong></div>
                  <dl class="workflow-result-grid">
                    <div><dt>Deductible</dt><dd>$1,250</dd></div>
                    <div><dt>Deductible remaining</dt><dd>$410</dd></div>
                    <div><dt>OOP max</dt><dd>$6,000</dd></div>
                    <div><dt>OOP remaining</dt><dd>$2,840</dd></div>
                    <div><dt>Outpatient visit</dt><dd>$40 copay</dd></div>
                    <div><dt>Inpatient services</dt><dd>20% coinsurance</dd></div>
                  </dl>
                  <div class="workflow-result-benefits">
                    <div><i class="fas fa-circle-check"></i><span><small>Mental health facility</small><strong>Covered</strong></span></div>
                    <div><i class="fas fa-circle-check"></i><span><small>Substance use disorder</small><strong>Covered</strong></span></div>
                    <div class="warning"><i class="fas fa-circle-info"></i><span><small>Prior authorization</small><strong>Required · inpatient</strong></span></div>
                  </div>
                  <div class="workflow-result-foot"><i class="fas fa-circle-check"></i> Benefits, limitations and patient responsibility returned</div>
                </template>
                <template v-else>
                  <div class="workflow-result-heading"><span>Blanket VOB response</span><strong>3 payers found</strong></div>
                  <div class="blanket-result-patient">
                    <span class="blanket-patient-avatar">JS</span>
                    <span><small>Patient</small><strong>John Smith</strong><em>Florida · DOB 05/23/1997</em></span>
                    <span class="blanket-result-count"><strong>2</strong><small>active</small></span>
                  </div>
                  <div class="blanket-policy-list">
                    <div class="blanket-policy-card">
                      <span class="blanket-payer-mark">AE</span>
                      <span><strong>Aetna</strong><small>Choice POS II · Ending 6789</small></span>
                      <b><i></i> Active</b>
                    </div>
                    <div class="blanket-policy-card">
                      <span class="blanket-payer-mark cigna">CG</span>
                      <span><strong>Cigna</strong><small>Open Access Plus · Ending 6789</small></span>
                      <b><i></i> Active</b>
                    </div>
                    <div class="blanket-policy-card blanket-policy-inactive">
                      <span class="blanket-payer-mark uhc">UH</span>
                      <span><strong>UnitedHealthcare</strong><small>Choice Plus · Ended Jun 30, 2025</small></span>
                      <b><i></i> Inactive</b>
                    </div>
                  </div>
                  <div class="workflow-result-foot blanket-result-foot"><span><i class="fas fa-circle-check"></i> Coverage search complete</span><strong>All payer matches reviewed</strong></div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reimbursement" ref="reimbursementDemoSection" class="section-block reimbursement-section workflow-detail-section">
      <div class="page-shell reimbursement-grid">
        <div>
          <div class="section-kicker">03 · Reimbursement search</div>
          <h2 class="section-title">See expected reimbursement percentages before you admit.</h2>
          <p class="section-copy">
            Enter a few details about the reimbursement you're searching for, and QuickAdmit returns any available expected reimbursement estimate for every level of care — from detox to outpatient.
          </p>
          <ul class="check-list-light">
            <li><i class="fas fa-check"></i> Built from real claims data</li>
            <li><i class="fas fa-check"></i> Breakdown by level of care</li>
            <li><i class="fas fa-check"></i> Available in the app from any device</li>
          </ul>
        </div>
        <div class="reimbursement-demo">
          <div class="estimate-form">
            <h3>Reimbursement Search</h3>
            <div class="segmented-control" role="group" aria-label="Payer type">
              <button :class="{ active: reimbursementType === 'bcbs' }" @click="reimbursementType = 'bcbs'">BCBS</button>
              <button :class="{ active: reimbursementType === 'other' }" @click="reimbursementType = 'other'">Other Payers</button>
            </div>
            <label :class="{ 'demo-field-active': reimbursementDemo.cursor === 'query' }">
              {{ reimbursementType === 'bcbs' ? 'Prefix *' : 'Payer *' }}
              <input v-model="reimbursementQuery" :placeholder="reimbursementType === 'bcbs' ? 'E.G. XYZ' : 'Choose a payer'" @focus="stopReimbursementDemo(false)" />
            </label>
            <label :class="{ 'demo-field-active': reimbursementDemo.cursor === 'group' }">Group Number<input v-model="reimbursementGroup" placeholder="Optional" @focus="stopReimbursementDemo(false)" /></label>
            <label :class="{ 'demo-field-active': reimbursementDemo.cursor === 'employer' }">Employer<input v-model="reimbursementEmployer" placeholder="Optional" @focus="stopReimbursementDemo(false)" /></label>
            <button class="estimate-button" :class="{ 'demo-button-clicked': reimbursementDemo.clicking }" :disabled="!reimbursementQuery" @click="showReimbursementDemoResult">
              <i class="fas fa-magnifying-glass"></i> See details
            </button>
            <span v-if="reimbursementDemo.active && reimbursementDemo.cursor" class="demo-cursor" :class="`reimbursement-cursor-${reimbursementDemo.cursor}`" aria-hidden="true"><i class="fas fa-arrow-pointer"></i></span>
          </div>
          <div class="estimate-results" :class="{ 'demo-result-active': showEstimate }">
            <h3>Reimbursement Estimate</h3>
            <p>{{ showEstimate ? 'Percentage allowed on charges' : 'Run a search to see estimates' }}</p>
            <dl>
              <div v-for="item in reimbursementLevels" :key="item.name">
                <dt>{{ item.name }}</dt>
                <dd>{{ showEstimate ? formatPercentage(item.value) : '–' }}</dd>
              </div>
            </dl>
            <p v-if="showEstimate" class="estimate-results-note">
              Based on historical claims data. Actual reimbursement may vary based on plan details, deductibles, coinsurance and other factors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="automation" class="section-block automation-section workflow-detail-section">
      <div class="page-shell">
        <div class="section-kicker">04 · VOB batching &amp; census monitoring</div>
        <h2 class="section-title">Catching lapsed policies has never been easier.</h2>
        <p class="section-copy">Quickly batch reverify your entire census with the click of a button and get results emailed to you when complete.</p>
        <div class="automation-grid">
          <article class="automation-card">
            <div class="icon-tile"><i class="fas fa-users-viewfinder"></i></div>
            <h3>One-click census reverification</h3>
            <p>Upload your census, run one batch, and review every patient's latest coverage status in one place.</p>
            <ul class="batch-list">
              <li><span><strong>Current census</strong><small>250 patients</small></span><em>Complete</em></li>
              <li><span><strong>Lapsed policies</strong><small>6 need review</small></span><em class="review">Review</em></li>
              <li><span><strong>Email delivery</strong><small>Admissions team</small></span><em>Sent</em></li>
            </ul>
          </article>
          <article class="automation-card">
            <div class="icon-tile"><i class="fas fa-file-export"></i></div>
            <h3>Reporting &amp; export</h3>
            <p>Export every inquiry and Blanket VOB you've run — filtered by provider, payer, date or user — to CSV, ready for billing and audits.</p>
            <div class="report-table">
              <div><strong>Date</strong><strong>Type</strong><strong>Payer</strong><strong>Status</strong></div>
              <div><span>Sep 18</span><span>Inquiry</span><span>Aetna</span><em>Active</em></div>
              <div><span>Sep 18</span><span>Blanket VOB</span><span>3 payers</span><em>Found</em></div>
              <div><span>Sep 17</span><span>Inquiry</span><span>Cigna</span><em class="danger">Inactive</em></div>
            </div>
          </article>
          <article class="automation-card">
            <div class="icon-tile"><i class="fas fa-bell"></i></div>
            <h3>Alerting</h3>
            <p>Create color-coded messages that appear on an inquiry when its provider, payer, prefix, group, plan or insurance type matches your criteria.</p>
            <div class="automation-custom-alert">
              <div class="custom-alert-message">
                <i class="fas fa-triangle-exclamation"></i>
                <span><b>Verify benefits before admission</b><small>Appears on matching inquiries</small></span>
              </div>
              <div class="custom-alert-criteria">
                <small>Matching criteria</small>
                <div><span>Payer: Aetna</span><span>Plan: Open Access</span></div>
              </div>
              <div class="automation-alert-foot">Created by Admissions · Yellow alert</div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="access" class="section-block access-section workflow-detail-section">
      <div class="page-shell">
        <div class="section-kicker">05 · Access anywhere</div>
        <h2 class="section-title">On your phone. Inside your systems.</h2>
        <div class="access-grid">
          <article class="mobile-access-card">
            <div class="mobile-access-copy">
              <div class="mobile-access-label">
                <span class="mobile-access-icon"><i class="fas fa-mobile-screen-button"></i></span>
                <span><small>Mobile Apps</small><strong><i class="status-dot online"></i> Available now</strong></span>
              </div>
              <h3>Mobile access for your team</h3>
              <p>Run inquiries and Blanket VOB searches from the office, home, or on the go. Full functionality is available from any device.</p>
              <div class="mobile-store-links">
                <a href="https://apps.apple.com/us/app/quickadmit/id6758116651" target="_blank" rel="noopener noreferrer" aria-label="Download QuickAdmit on the Apple App Store">
                  <i class="fab fa-apple"></i>
                  <span><small>Download on the</small><strong>App Store</strong></span>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.quickadmit" target="_blank" rel="noopener noreferrer" aria-label="Get QuickAdmit on Google Play">
                  <i class="fab fa-google-play"></i>
                  <span><small>Get it on</small><strong>Google Play</strong></span>
                </a>
              </div>
            </div>
            <div class="mobile-device-stage" aria-label="QuickAdmit mobile Blanket VOB result preview">
              <div class="mobile-result-float">
                <i class="fas fa-circle-check"></i>
                <span><small>Blanket VOB complete</small><strong>3 policies found</strong></span>
              </div>
              <div class="phone-mockup">
                <span class="phone-notch"></span>
                <div class="phone-status-bar">
                  <span>9:41</span>
                  <span><i class="fas fa-signal"></i><i class="fas fa-wifi"></i><i class="fas fa-battery-full"></i></span>
                </div>
                <div class="phone-app-heading">
                  <span><small>Blanket VOB</small><strong>John Smith</strong></span>
                  <i class="fas fa-bell"></i>
                </div>
                <div class="phone-patient-meta"><span>Florida</span><span>05/23/1997</span></div>
                <div class="phone-result-heading"><span>Coverage found</span><strong>3 policies</strong></div>
                <div class="phone-policy phone-policy-active">
                  <span><i></i><strong>Cigna</strong><small>Open Access Plus</small></span><b>Active</b>
                </div>
                <div class="phone-policy phone-policy-active">
                  <span><i></i><strong>Aetna</strong><small>Choice POS II</small></span><b>Active</b>
                </div>
                <div class="phone-policy phone-policy-inactive">
                  <span><i></i><strong>Medicaid FL</strong><small>State plan</small></span><b>Inactive</b>
                </div>
                <div class="phone-bottom-nav">
                  <span class="active"><i class="fas fa-house"></i><small>Home</small></span>
                  <span><i class="fas fa-magnifying-glass"></i><small>Search</small></span>
                  <span><i class="fas fa-camera"></i><small>Scan</small></span>
                </div>
              </div>
            </div>
          </article>
          <article class="api-access-card">
            <div class="api-access-copy">
              <div class="icon-tile"><i class="fas fa-code"></i></div>
              <h3>API for organizations</h3>
              <p>Integrate eligibility, Blanket VOB, batching and payer status directly into your EHR, CRM or intake system.</p>
              <ul><li>REST endpoints</li><li>Account-scoped API keys</li><li>Detailed payer schemas</li></ul>
              <router-link to="/api-docs" class="dark-outline-button">Read the API docs</router-link>
            </div>
            <pre><code>POST /api/v2/inquiries
Authorization: Bearer qa_live_••••••••

{
  "providerId": 123,
  "payerId": 456,
  "memberId": "QA123456789",
  "patientBirthDate": "05/23/1997"
}

→ 201 Created  { "id": "inq_..." }</code></pre>
          </article>
        </div>
      </div>
    </section>
    </div>

    <section id="contact" class="section-block cta-section">
      <div class="page-shell">
        <div class="cta-card">
          <div>
            <h2>Ready to admit faster?</h2>
            <p>See how treatment centers use QuickAdmit to verify coverage, estimate reimbursement and stay ahead of payer outages.</p>
          </div>
          <router-link to="/book" class="qa-button qa-button-light">Request a demo <span>→</span></router-link>
        </div>
        <nav class="home-resource-links" aria-label="Explore QuickAdmit">
          <span>Explore QuickAdmit</span>
          <router-link to="/faqs">Frequently asked questions</router-link>
          <router-link to="/blog">Admissions resources</router-link>
          <router-link to="/api-docs">API documentation</router-link>
          <router-link to="/contact">Contact our team</router-link>
          <router-link to="/book">Request a demo</router-link>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      heroSlideIndex: 0,
      heroSlideTimer: null,
      heroSlides: [
        {
          id: "inquiries",
          title: "Inquiries",
          icon: "fas fa-magnifying-glass",
          result: "Coverage found",
          footnote: "Returned in 1.8s",
          status: "Payer online",
          fields: [
            { label: "Provider", value: "Harbor Recovery Center" },
            { label: "Payer", value: "Aetna" },
            { label: "Member ID", value: "QA123456789" },
            { label: "As of date", value: "Today" },
          ],
        },
        {
          id: "blanket-vob",
          title: "Blanket VOB",
          icon: "fas fa-users-viewfinder",
          result: "3 payers found",
          footnote: "",
          status: "3 matches",
          fields: [
            { label: "Patient", value: "John Smith" },
            { label: "State", value: "Florida" },
            { label: "Date of birth", value: "05 / 23 / 1997" },
            { label: "Provider", value: "Harbor Recovery" },
          ],
          results: ["Aetna", "Cigna", "UnitedHealthcare"],
        },
        {
          id: "reimbursement",
          title: "Reimbursement",
          icon: "fas fa-calculator",
          result: "Estimate ready",
          footnote: "",
          status: "Estimate ready",
          fields: [
            { label: "Payer", value: "BCBS Florida" },
            { label: "Prefix", value: "XJF" },
            { label: "Group number", value: "482910" },
            { label: "Employer", value: "Northstar Health" },
          ],
        },
      ],
      reimbursementType: "bcbs",
      reimbursementQuery: "",
      reimbursementGroup: "",
      reimbursementEmployer: "",
      showEstimate: false,
      workflowType: "inquiry",
      demoObserver: null,
      payerStatusVisible: false,
      workflowDemo: {
        active: false,
        token: 0,
        cursor: "",
        clicking: false,
        result: false,
        fields: {
          provider: "Harbor Recovery Center",
          payer: "Aetna  •  Online",
          patient: "John Smith",
          dob: "05/23/1997",
          asof: "Today",
          first: "John",
          last: "Smith",
          state: "Florida",
          ssn: "Optional",
        },
      },
      reimbursementDemo: {
        active: false,
        token: 0,
        cursor: "",
        clicking: false,
      },
      features: [
        {
          title: "Payer intelligence",
          icon: "fas fa-signal",
          body: "See live payer outage severity before submitting an inquiry and avoid preventable delays.",
          preview: {
            type: "outage",
            badge: "3 affected",
            rows: [
              { label: "Aetna", value: "High", tone: "danger" },
              { label: "Auxiant", value: "Medium", tone: "warning" },
              { label: "Meritain", value: "Low", tone: "info" },
            ],
          },
        },
        {
          title: "Blanket VOB",
          icon: "fas fa-shield-halved",
          body: "Don't know the payer? Search by name, DOB and state to find every active policy a patient has across all payers.",
          preview: {
            type: "policies",
            badge: "3 payers",
            rows: [
              { label: "Aetna", value: "Active", tone: "success" },
              { label: "Cigna", value: "Active", tone: "success" },
              { label: "UnitedHealthcare", value: "Inactive", tone: "muted" },
            ],
          },
        },
        {
          title: "Reimbursement",
          icon: "fas fa-calculator",
          body: "Estimate the historical percentage allowed on charges by level of care from a BCBS prefix or any payer, group number and employer.",
          preview: {
            type: "reimbursement",
            badge: "BCBS · XJF",
            metrics: [
              { label: "Average", value: "55.20%" },
              { label: "Detox", value: "55.00%" },
              { label: "Residential", value: "45.00%" },
            ],
          },
        },
        {
          title: "Alerting",
          icon: "fas fa-bell",
          body: "Create color-coded messages that appear on an inquiry when its provider, payer, prefix, group, plan or insurance type matches your criteria.",
          preview: {
            type: "alert",
            message: "Verify COB before admission",
            criteria: "Payer = Aetna · Prefix = WLT",
          },
        },
        {
          title: "VOB batching",
          icon: "fas fa-layer-group",
          body: "Batch reverify your entire census with one click, identify lapsed policies and receive the completed results by email.",
          preview: { type: "batch" },
        },
        {
          title: "Reporting",
          icon: "fas fa-chart-column",
          body: "Filter and export inquiry and Blanket VOB results to CSV for billing, audits and team reporting.",
          preview: { type: "report" },
        },
      ],
      reimbursementLevels: [
        { name: "Average", value: 55.2 }, { name: "Detox", value: 55 }, { name: "Residential", value: 45 },
        { name: "Partial Hosp.", value: 62 }, { name: "Intensive OP", value: 58 }, { name: "Outpatient", value: 56 },
      ],
      workflows: {
        inquiry: {
          title: "One inquiry. Just the patient details you have.",
          intro: "Run a coverage search using the payer, patient name and date of birth — without needing the member ID.",
          note: "QuickAdmit shows the information accepted by the payer you select.",
          formTitle: "New inquiry",
          steps: [
            { title: "Providers", body: "Select any of your previously configured providers, or add a new provider in seconds." },
            { title: "Payers", body: "Choose from available payers and see their live availability before you submit." },
            { title: "Patient identity", body: "Use the patient's name and date of birth without needing their member ID." },
            { title: "As of Date", body: "Choose the coverage date you need. It defaults to today." },
          ],
        },
        blanket: {
          title: "One search. Every active policy.",
          intro: "Blanket VOB searches across supported payers when the patient does not know their current insurance details.",
          note: "Use accurate patient demographics to return the best possible matches.",
          formTitle: "New Blanket VOB",
          steps: [
            { title: "Patient identity", body: "Enter the patient's legal first and last name." },
            { title: "Date of birth", body: "Add the patient's date of birth in MM/DD/YYYY format." },
            { title: "State", body: "Choose the patient's state to focus the coverage search." },
            { title: "Optional SSN", body: "Add the patient SSN when available to improve matching." },
          ],
        },
      },
      payers: [
        { name: "Aetna", uptime: "99.98% 30d", status: "Online" }, { name: "UnitedHealthcare", uptime: "99.95% 30d", status: "Online" },
        { name: "Cigna", uptime: "99.90% 30d", status: "Online" }, { name: "BCBS Florida", uptime: "98.40% 30d", status: "Degraded" },
        { name: "Humana", uptime: "99.97% 30d", status: "Online" }, { name: "Magellan", uptime: "97.10% 30d", status: "Down" },
      ],
    };
  },
  computed: {
    activeHeroSlide() { return this.heroSlides[this.heroSlideIndex]; },
    activeWorkflow() { return this.workflows[this.workflowType]; },
  },
  mounted() {
    this.selectWorkflowFromRoute(this.$route.query.workflow);
    this.startHeroSlider();
    this.setupWorkflowDemos();
  },
  beforeUnmount() {
    window.clearInterval(this.heroSlideTimer);
    this.demoObserver?.disconnect();
    this.stopWorkflowDemo(false);
    this.stopReimbursementDemo(false);
  },
  methods: {
    formatPercentage(value) {
      return `${Number(value).toFixed(2)}%`;
    },
    selectWorkflowFromRoute(workflow) {
      if (workflow === "inquiry" || workflow === "blanket") this.workflowType = workflow;
    },
    advanceHeroSlide() {
      this.heroSlideIndex = (this.heroSlideIndex + 1) % this.heroSlides.length;
    },
    startHeroSlider() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      this.heroSlideTimer = window.setInterval(this.advanceHeroSlide, 5000);
    },
    setHeroSlide(index) {
      this.heroSlideIndex = index;
      window.clearInterval(this.heroSlideTimer);
      this.startHeroSlider();
    },
    setupWorkflowDemos() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        this.payerStatusVisible = true;
        return;
      }
      this.demoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === this.$refs.payerIntelligenceSection && entry.isIntersecting) {
            this.payerStatusVisible = true;
            this.demoObserver.unobserve(entry.target);
          }
          if (entry.target === this.$refs.workflowDemoSection) {
            entry.isIntersecting ? this.startWorkflowDemo() : this.stopWorkflowDemo();
          }
          if (entry.target === this.$refs.reimbursementDemoSection) {
            entry.isIntersecting ? this.startReimbursementDemo() : this.stopReimbursementDemo();
          }
        });
      }, { threshold: 0.18, rootMargin: "-8% 0px -8%" });
      this.demoObserver.observe(this.$refs.payerIntelligenceSection);
      this.demoObserver.observe(this.$refs.workflowDemoSection);
      this.demoObserver.observe(this.$refs.reimbursementDemoSection);
    },
    async demoPause(demo, token, duration) {
      await new Promise((resolve) => window.setTimeout(resolve, duration));
      return demo.active && demo.token === token;
    },
    async typeWorkflowField(field, value, token) {
      this.workflowDemo.fields[field] = "";
      for (const character of value) {
        if (!this.workflowDemo.active || this.workflowDemo.token !== token) return false;
        this.workflowDemo.fields[field] += character;
        if (!await this.demoPause(this.workflowDemo, token, 42)) return false;
      }
      return true;
    },
    resetWorkflowDemoFields() {
      Object.keys(this.workflowDemo.fields).forEach((field) => {
        this.workflowDemo.fields[field] = "";
      });
      this.workflowDemo.cursor = "";
      this.workflowDemo.clicking = false;
      this.workflowDemo.result = false;
    },
    startWorkflowDemo() {
      if (this.workflowDemo.active) return;
      this.workflowDemo.active = true;
      const token = ++this.workflowDemo.token;
      this.runWorkflowDemo(token);
    },
    stopWorkflowDemo(reset = true) {
      this.workflowDemo.active = false;
      this.workflowDemo.token += 1;
      this.workflowDemo.cursor = "";
      this.workflowDemo.clicking = false;
      if (reset) this.workflowDemo.result = false;
    },
    async runWorkflowDemo(token) {
      while (this.workflowDemo.active && this.workflowDemo.token === token) {
        this.resetWorkflowDemoFields();
        if (!await this.demoPause(this.workflowDemo, token, 450)) return;
        const sequence = this.workflowType === "inquiry"
          ? [
              ["provider", "Harbor Recovery Center"],
              ["payer", "Aetna  •  Online"],
              ["patient", "John Smith"],
              ["dob", "05/23/1997"],
              ["asof", "Today"],
            ]
          : [
              ["first", "John"],
              ["last", "Smith"],
              ["dob", "05/23/1997"],
              ["state", "Florida"],
              ["ssn", "Optional"],
            ];
        for (const [field, value] of sequence) {
          this.workflowDemo.cursor = field;
          if (!await this.demoPause(this.workflowDemo, token, 180)) return;
          if (!await this.typeWorkflowField(field, value, token)) return;
          if (!await this.demoPause(this.workflowDemo, token, 120)) return;
        }
        this.workflowDemo.cursor = "button";
        if (!await this.demoPause(this.workflowDemo, token, 480)) return;
        this.workflowDemo.clicking = true;
        if (!await this.demoPause(this.workflowDemo, token, 220)) return;
        this.workflowDemo.clicking = false;
        this.workflowDemo.cursor = "";
        this.workflowDemo.result = true;
        if (!await this.demoPause(this.workflowDemo, token, 2600)) return;
      }
    },
    showWorkflowDemoResult() {
      this.stopWorkflowDemo(false);
      this.workflowDemo.clicking = true;
      window.setTimeout(() => { this.workflowDemo.clicking = false; }, 180);
      this.workflowDemo.result = true;
    },
    async typeReimbursementField(property, value, token) {
      this[property] = "";
      for (const character of value) {
        if (!this.reimbursementDemo.active || this.reimbursementDemo.token !== token) return false;
        this[property] += character;
        if (!await this.demoPause(this.reimbursementDemo, token, 70)) return false;
      }
      return true;
    },
    startReimbursementDemo() {
      if (this.reimbursementDemo.active) return;
      this.reimbursementDemo.active = true;
      const token = ++this.reimbursementDemo.token;
      this.runReimbursementDemo(token);
    },
    stopReimbursementDemo(reset = true) {
      this.reimbursementDemo.active = false;
      this.reimbursementDemo.token += 1;
      this.reimbursementDemo.cursor = "";
      this.reimbursementDemo.clicking = false;
      if (reset) this.showEstimate = false;
    },
    async runReimbursementDemo(token) {
      while (this.reimbursementDemo.active && this.reimbursementDemo.token === token) {
        this.reimbursementQuery = "";
        this.reimbursementGroup = "";
        this.reimbursementEmployer = "";
        this.showEstimate = false;
        if (!await this.demoPause(this.reimbursementDemo, token, 500)) return;
        const sequence = [
          ["query", "reimbursementQuery", this.reimbursementType === "bcbs" ? "XJF" : "Aetna"],
          ["group", "reimbursementGroup", "482910"],
          ["employer", "reimbursementEmployer", "Northstar Health"],
        ];
        for (const [cursor, property, value] of sequence) {
          this.reimbursementDemo.cursor = cursor;
          if (!await this.demoPause(this.reimbursementDemo, token, 220)) return;
          if (!await this.typeReimbursementField(property, value, token)) return;
          if (!await this.demoPause(this.reimbursementDemo, token, 180)) return;
        }
        this.reimbursementDemo.cursor = "button";
        if (!await this.demoPause(this.reimbursementDemo, token, 520)) return;
        this.reimbursementDemo.clicking = true;
        if (!await this.demoPause(this.reimbursementDemo, token, 220)) return;
        this.reimbursementDemo.clicking = false;
        this.reimbursementDemo.cursor = "";
        this.showEstimate = true;
        if (!await this.demoPause(this.reimbursementDemo, token, 2800)) return;
      }
    },
    showReimbursementDemoResult() {
      this.stopReimbursementDemo(false);
      this.reimbursementDemo.clicking = true;
      window.setTimeout(() => { this.reimbursementDemo.clicking = false; }, 180);
      this.showEstimate = true;
    },
  },
  watch: {
    "$route.query.workflow"(workflow) {
      this.selectWorkflowFromRoute(workflow);
    },
    workflowType() {
      if (!this.workflowDemo.active) return;
      this.stopWorkflowDemo();
      this.$nextTick(() => this.startWorkflowDemo());
    },
    reimbursementType() {
      this.reimbursementQuery = "";
      this.reimbursementGroup = "";
      this.reimbursementEmployer = "";
      this.showEstimate = false;
      if (!this.reimbursementDemo.active) return;
      this.stopReimbursementDemo();
      this.$nextTick(() => this.startReimbursementDemo());
    },
  },
};
</script>

<style scoped>
.home-page { background: var(--qa-background); color: var(--qa-ink); overflow: hidden; }
.hero-flow { background-color: #fff; background-image: var(--qa-hero-gradient); }
.section-block { scroll-margin-top: 64px; padding: 96px 32px; }
.page-shell { width: min(1216px, 100%); margin: 0 auto; }
.hero-section { min-height: 720px; padding-top: 112px; display: flex; align-items: center; position: relative; }
.hero-section::before { content: ""; position: absolute; inset: 0; opacity: .28; background-image: radial-gradient(circle at 1px 1px, rgba(124, 77, 222, .18) 1px, transparent 0); background-size: 28px 28px; mask-image: linear-gradient(to bottom, #000, transparent 80%); }
.hero-grid, .reimbursement-grid, .workflow-grid, .outage-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: center; gap: 64px; position: relative; z-index: 1; }
.hero-grid { grid-template-columns: 1.05fr 1fr; gap: 56px; }
.eyebrow, .section-kicker { display: inline-flex; align-items: center; gap: 8px; width: fit-content; padding: 4.8px 12.8px; border-radius: 999px; color: oklch(40% .15 293); background: var(--qa-primary-soft); font-size: 12px; font-weight: 700; line-height: 18px; letter-spacing: .08em; text-transform: uppercase; }
.eyebrow-icon { flex: none; width: 14px; height: 14px; }
.hero-copy h1 { margin: 24px 0; max-width: 680px; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 60px; font-weight: 700; line-height: 1.05; letter-spacing: -.02em; }
.hero-copy h1 span { color: var(--qa-primary); }
.hero-lead, .section-copy { color: var(--qa-muted); font-size: 18px; line-height: 1.625; }
.hero-lead { max-width: 680px; }
.qa-button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 22px; border: 1px solid transparent; border-radius: 14px; font-size: .9rem; font-weight: 600; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
.qa-button:hover { transform: translateY(-2px); }
.estimate-button { color: white; background: var(--qa-brand-gradient); box-shadow: var(--qa-shadow-glow); }
.hero-proof { display: flex; flex-wrap: wrap; gap: 24px; margin: 28px 0 0; padding: 0; list-style: none; color: var(--qa-muted); font-size: 13px; }
.hero-proof i { color: var(--qa-primary); margin-right: 6px; }
.hero-visual { position: relative; min-width: 0; min-height: 426px; padding-bottom: 34px; }
.hero-card-frame { position: absolute; top: 0; left: 0; width: 100%; height: 392px; animation: hero-float 7s ease-in-out infinite; }
.browser-card { background: white; border: 1px solid var(--qa-border); border-radius: 20px; box-shadow: var(--qa-shadow-float); }
.inquiry-card { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; padding: 16px; }
.browser-bar { display: flex; align-items: center; justify-content: space-between; color: var(--qa-muted); font-size: 11px; padding: 0 2px 14px; }
.browser-dots { display: flex; gap: 5px; }.browser-dots span { width: 8px; height: 8px; border-radius: 50%; background: #ff7d76; }.browser-dots span:nth-child(2) { background: #ffc65e; }.browser-dots span:nth-child(3) { background: #6ed497; }
.inquiry-fields { display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px; }.inquiry-fields div { padding: 12px; border-radius: 10px; background: var(--qa-muted-surface); }.inquiry-fields small, .coverage-values small { display: block; margin-bottom: 4px; color: var(--qa-muted); font-size: 9px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }.inquiry-fields strong { font-size: 13px; }
.coverage-panel { margin-top: 11px; padding: 17px; border: 1px solid #bde9cc; border-radius: 13px; background: #edfbf2; }.coverage-status { color: #23864a; font-size: 12px; font-weight: 700; }.coverage-status i { margin-right: 6px; }.coverage-values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 14px; }.coverage-values strong { display: block; font-family: var(--qa-heading-font); font-size: 20px; }.card-foot { display: flex; min-height: 20px; justify-content: space-between; margin-top: 12px; color: var(--qa-muted); font-size: 10px; }
.status-dot { display: inline-block; width: 7px; height: 7px; margin-right: 6px; border-radius: 50%; background: currentColor; }.status-dot.online { animation: pulse-dot 1.8s ease-in-out infinite; }.online { color: #2caa65; }.warning, .degraded { color: #c08a19 !important; }.down { color: #d35151; }
.hero-visual .status-dot.online { width: 8px; height: 8px; color: #2caa65; background: #43d17d; box-shadow: 0 0 0 3px rgba(67,209,125,.18), 0 0 10px rgba(67,209,125,.72); animation: hero-status-glow 1.6s ease-in-out infinite; }
.floating-result { position: absolute; z-index: 2; left: -24px; bottom: 14px; display: flex; align-items: center; gap: 10px; padding: 12px 16px; border: 1px solid var(--qa-border); border-radius: 14px; background: white; box-shadow: var(--qa-shadow-float); color: var(--qa-primary); }.floating-result span { color: var(--qa-muted); font-size: 10px; }.floating-result strong { display: block; color: var(--qa-ink); font-size: 13px; }
.slide-result-list { margin-top: 11px; padding: 8px 16px; border: 1px solid var(--qa-border); border-radius: 13px; background: #fcfbfd; }.slide-result-list div { display: flex; align-items: center; justify-content: space-between; padding: 11px 0; border-bottom: 1px solid var(--qa-border); font-size: 13px; }.slide-result-list div:last-child { border-bottom: 0; }.slide-result-list span { color: #2caa65; font-size: 11px; }.slide-result-list i { margin-right: 5px; }
.reimbursement-slide-panel { border-color: #d8caf8; background: #f0ebff; }.reimbursement-slide-panel .coverage-status { color: #6240aa; }
.hero-slide-controls { position: absolute; right: 22%; bottom: -30px; display: flex; align-items: center; justify-content: center; gap: 10px; }.hero-slide-controls button { width: 9px; height: 9px; padding: 0; border: 0; border-radius: 50%; background: #e4dcef; cursor: pointer; transition: width .2s ease, background .2s ease, box-shadow .2s ease; }.hero-slide-controls button.active { width: 13px; height: 13px; background: var(--qa-primary); box-shadow: 0 0 0 5px rgba(123, 77, 221, .12); }
.hero-slide-enter-active, .hero-slide-leave-active { transition: opacity .24s ease, transform .24s ease; }.hero-slide-enter-from { opacity: 0; transform: translateX(14px); }.hero-slide-leave-to { opacity: 0; transform: translateX(-14px); }
@keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes pulse-dot { 0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklab, currentColor 60%, transparent); } 70% { box-shadow: 0 0 0 8px transparent; } }
@keyframes hero-status-glow { 0%, 100% { transform: scale(.95); box-shadow: 0 0 0 3px rgba(67,209,125,.18), 0 0 9px rgba(67,209,125,.65); } 50% { transform: scale(1.12); box-shadow: 0 0 0 7px rgba(67,209,125,.04), 0 0 18px rgba(67,209,125,.95); } }
.platform-section, .workflow-section, .automation-section, .access-section { background: #fff; }
.section-title { margin: 20px 0 48px; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 48px; font-weight: 700; line-height: 1; letter-spacing: -.02em; }
.workflow-series { background: #fff; }
.workflow-series-intro { padding: 72px 32px 52px; background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,.18) 76%, #fff 100%); }
.hero-flow + .platform-section { padding-top: 76px; }
.platform-section { padding-bottom: 72px; }
.platform-section .section-title { margin-bottom: 32px; }
.workflow-series-intro-layout { display: grid; grid-template-columns: minmax(260px, .72fr) minmax(0, 1.28fr); align-items: center; gap: 42px; }
.workflow-series-intro h2 { max-width: 430px; margin: 20px 0 14px; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 44px; line-height: 1.05; letter-spacing: -.02em; }
.workflow-series-intro p { max-width: 410px; margin: 0; color: var(--qa-muted); font-size: 16px; line-height: 1.65; }
.workflow-journey-map { position: relative; height: 250px; }
.workflow-journey-route { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.workflow-journey-route path { fill: none; vector-effect: non-scaling-stroke; }
.workflow-journey-route-base { stroke: rgba(124,77,222,.13); stroke-width: 7; }
.workflow-journey-route-dots { stroke: rgba(124,77,222,.64); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 1.35 2.15; animation: journey-route-s 9s linear infinite; }
.workflow-journey { position: absolute; inset: 0; margin: 0; padding: 0; list-style: none; }
.workflow-journey li { position: absolute; z-index: 1; width: min(150px, 28vw); transform: translate(-50%, -50%); }
.workflow-journey li:nth-child(1) { top: 38%; left: 14%; }
.workflow-journey li:nth-child(2) { top: 38%; left: 50%; }
.workflow-journey li:nth-child(3) { top: 38%; left: 86%; }
.workflow-journey li:nth-child(4) { top: 82%; left: 86%; }
.workflow-journey li:nth-child(5) { top: 82%; left: 50%; }
.workflow-journey li:nth-child(6) { top: 82%; left: 14%; }
.workflow-journey a { display: flex; align-items: center; flex-direction: column; color: inherit; text-align: center; text-decoration: none; }
.workflow-journey-marker { position: relative; display: grid; width: 58px; height: 58px; place-items: center; border: 1px solid #d9ccf8; border-radius: 50%; color: var(--qa-primary); background: white; box-shadow: 0 8px 24px rgba(74,43,135,.13); font-size: 18px; animation: journey-marker-float 4s ease-in-out infinite; }
.workflow-journey-marker::before { position: absolute; inset: -7px; border: 2px solid rgba(124,77,222,.42); border-radius: 50%; box-shadow: 0 0 0 5px rgba(124,77,222,.07), 0 0 20px rgba(124,77,222,.2); content: ""; opacity: 0; }
.workflow-journey li:nth-child(1) .workflow-journey-marker::before { animation: journey-marker-active-call 36s step-end infinite; }
.workflow-journey li:nth-child(2) .workflow-journey-marker::before { animation: journey-marker-active-payer 36s step-end infinite; }
.workflow-journey li:nth-child(3) .workflow-journey-marker::before { animation: journey-marker-active-eligibility 36s step-end infinite; }
.workflow-journey li:nth-child(4) .workflow-journey-marker::before { animation: journey-marker-active-reimbursement 36s step-end infinite; }
.workflow-journey li:nth-child(5) .workflow-journey-marker::before { animation: journey-marker-active-automation 36s step-end infinite; }
.workflow-journey li:nth-child(6) .workflow-journey-marker::before { animation: journey-marker-active-access 36s step-end infinite; }
.workflow-journey li:nth-child(2) .workflow-journey-marker { animation-delay: -.8s; }
.workflow-journey li:nth-child(3) .workflow-journey-marker { animation-delay: -1.6s; }
.workflow-journey li:nth-child(4) .workflow-journey-marker { animation-delay: -2.4s; }
.workflow-journey li:nth-child(5) .workflow-journey-marker { animation-delay: -3.2s; }
.workflow-journey li:nth-child(6) .workflow-journey-marker { animation-delay: -4s; }
.workflow-journey-flag { position: absolute; right: -4px; bottom: -2px; display: grid; width: 21px; height: 21px; place-items: center; border: 3px solid white; border-radius: 50%; color: white; background: #2caa65; box-shadow: 0 0 0 3px rgba(44,170,101,.1); font-size: 7px; animation: journey-flag-pulse 2.4s ease-in-out infinite; }
.workflow-journey-copy { margin-top: 13px; }
.workflow-journey-copy strong, .workflow-journey-copy small { display: block; }
.workflow-journey-copy strong { color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 12px; }
.workflow-journey-copy small { margin-top: 3px; color: var(--qa-muted); font-size: 9px; }
.workflow-journey a:hover .workflow-journey-marker { border-color: var(--qa-primary); box-shadow: 0 10px 28px rgba(74,43,135,.2); }
.workflow-journey-hud { position: absolute; z-index: 5; bottom: 90px; left: 0; width: min(210px, 44vw); height: 58px; transform: translateX(-50%); pointer-events: none; }
.workflow-journey-hud::before { content: "A new admissions call just came in."; display: block; width: 100%; padding: 8px 11px; border: 1px solid #dacdf6; border-radius: 11px; color: #5f419d; background: rgba(255,255,255,.97); box-shadow: 0 9px 24px rgba(74,43,135,.16); font-size: 9px; font-weight: 750; line-height: 1.4; text-align: center; backdrop-filter: blur(8px); animation: journey-guide-message 36s step-end infinite, journey-guide-bubble 36s step-end infinite; }
.workflow-journey-guide { position: absolute; z-index: 4; top: 38%; left: 14%; width: 0; height: 0; pointer-events: none; animation: journey-guide-route 36s linear infinite; }
.workflow-journey-guide::before { position: absolute; top: 0; left: 0; width: 38px; height: 13px; border-radius: 50%; background: rgba(124,77,222,.12); box-shadow: 0 0 0 6px rgba(124,77,222,.045), 0 5px 16px rgba(72,42,128,.18); content: ""; transform: translate(-50%, -50%); animation: journey-guide-glow 1.8s ease-in-out infinite; }
.workflow-journey-record { position: absolute; top: 0; left: 0; width: 116px; padding: 8px 9px 7px; border: 1px solid rgba(124,77,222,.2); border-radius: 11px; background: rgba(255,255,255,.97); box-shadow: 0 9px 25px rgba(55,32,96,.2); transform: translateX(-50%); transform-origin: 50% 100%; translate: 0 -165%; backdrop-filter: blur(8px); animation: journey-record-actions 36s ease-in-out infinite; }
.journey-record-main { display: grid; grid-template-columns: 26px minmax(0, 1fr) 10px; gap: 7px; align-items: center; }
.journey-record-patient { display: grid; width: 26px; height: 26px; place-items: center; border-radius: 8px; color: var(--qa-primary); background: var(--qa-primary-soft); font-size: 10px; }
.journey-record-copy, .journey-record-copy small, .journey-record-copy strong { display: block; min-width: 0; }
.journey-record-copy small { color: #8d8298; font-size: 5px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.journey-record-copy strong { margin-top: 2px; overflow: hidden; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 7px; text-overflow: ellipsis; white-space: nowrap; }
.journey-record-status::before { content: "New caller"; animation: journey-record-status 36s step-end infinite; }
.journey-record-check { color: #36ad68; font-size: 9px; }
.journey-record-progress { display: block; height: 3px; margin-top: 7px; overflow: hidden; border-radius: 999px; background: #ece6f5; }
.journey-record-progress i { display: block; width: 12%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--qa-primary), #48c97c); animation: journey-record-progress 36s step-end infinite; }
.journey-tool { position: absolute; top: -9px; right: -8px; display: grid; width: 22px; height: 22px; place-items: center; border: 2px solid white; border-radius: 7px; color: white; background: var(--qa-primary); box-shadow: 0 5px 12px rgba(55,32,96,.28); font-size: 8px; opacity: 0; }
.journey-tool-call { animation: journey-tool-call 36s step-end infinite; }
.journey-tool-payer { background: #3d79c7; animation: journey-tool-payer 36s step-end infinite; }
.journey-tool-eligibility { background: #2caa65; animation: journey-tool-eligibility 36s step-end infinite; }
.journey-tool-reimbursement { color: #5d4513; background: #f3c85c; animation: journey-tool-reimbursement 36s step-end infinite; }
.journey-tool-automation { animation: journey-tool-automation 36s step-end infinite; }
.journey-tool-access { background: #286f9f; animation: journey-tool-access 36s step-end infinite; }
.journey-reward { position: absolute; z-index: 5; top: 31px; left: 50%; display: flex; width: max-content; align-items: center; gap: 4px; translate: -50% 0; padding: 4px 6px; border: 2px solid white; border-radius: 999px; color: white; box-shadow: 0 6px 16px rgba(49,33,83,.22); font-size: 7px; opacity: 0; }
.journey-reward i { width: 10px; text-align: center; }
.journey-reward b { font-size: 7px; white-space: nowrap; }
.journey-reward-call { background: #7c4dde; animation: journey-reward-call 36s linear infinite; }
.journey-reward-call i { animation: journey-reward-phone 1.1s ease-in-out infinite; }
.journey-reward-payer { background: #3d79c7; animation: journey-reward-payer 36s linear infinite; }
.journey-reward-payer i { animation: journey-reward-signal 1s ease-in-out infinite; }
.journey-reward-eligibility { background: #2caa65; animation: journey-reward-eligibility 36s linear infinite; }
.journey-reward-eligibility i { animation: journey-reward-pop 1.1s ease-in-out infinite; }
.journey-reward-reimbursement { color: #533d11; background: #f3c85c; animation: journey-reward-reimbursement 36s linear infinite; }
.journey-reward-reimbursement i { animation: journey-reward-count .8s ease-in-out infinite alternate; }
.journey-reward-automation { background: #7c4dde; animation: journey-reward-automation 36s linear infinite; }
.journey-reward-automation i { animation: journey-reward-spin 2s linear infinite; }
.journey-reward-access { background: #286f9f; animation: journey-reward-access 36s linear infinite; }
.journey-reward-access i { animation: journey-reward-phone 1.1s ease-in-out infinite; }
@keyframes journey-route-s { to { stroke-dashoffset: -28; } }
@keyframes journey-marker-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
@keyframes journey-flag-pulse { 0%, 100% { box-shadow: 0 0 0 3px rgba(44,170,101,.1); } 50% { box-shadow: 0 0 0 7px rgba(44,170,101,.03); } }
@keyframes journey-marker-active-call { 0%, 16.5% { opacity: 1; } 16.6%, 100% { opacity: 0; } }
@keyframes journey-marker-active-payer { 0%, 16.5%, 33.3%, 100% { opacity: 0; } 16.6%, 33.2% { opacity: 1; } }
@keyframes journey-marker-active-eligibility { 0%, 33.2%, 50%, 100% { opacity: 0; } 33.3%, 49.9% { opacity: 1; } }
@keyframes journey-marker-active-reimbursement { 0%, 49.9%, 66.6%, 100% { opacity: 0; } 50%, 66.5% { opacity: 1; } }
@keyframes journey-marker-active-automation { 0%, 66.5%, 83.3%, 100% { opacity: 0; } 66.6%, 83.2% { opacity: 1; } }
@keyframes journey-marker-active-access { 0%, 83.2% { opacity: 0; } 83.3%, 100% { opacity: 1; } }
@keyframes journey-guide-glow { 50% { opacity: .55; transform: translate(-50%, -50%) scale(.82); } }
@keyframes journey-guide-route {
  0%, 16% { top: 38%; left: 14%; opacity: 1; }
  18% { top: 25.694%; left: 26%; }
  20% { top: 25.694%; left: 38%; }
  22%, 33% { top: 38%; left: 50%; }
  35% { top: 50.139%; left: 62%; }
  37% { top: 50.139%; left: 74%; }
  39%, 50% { top: 38%; left: 86%; }
  53% { top: 51.312%; left: 92.667%; }
  56% { top: 68.688%; left: 92.667%; }
  58%, 66% { top: 82%; left: 86%; }
  69% { top: 69.861%; left: 74%; }
  72% { top: 69.861%; left: 62%; }
  75%, 83% { top: 82%; left: 50%; }
  86% { top: 94.306%; left: 38%; }
  89% { top: 94.306%; left: 26%; }
  92%, 97% { top: 82%; left: 14%; opacity: 1; }
  99% { top: 82%; left: 14%; opacity: 0; }
  100% { top: 38%; left: 14%; opacity: 0; }
}
@keyframes journey-guide-message {
  0%, 7.9% { content: "A new admissions call just came in."; }
  8%, 16.5% { content: "Caller connected — ready to help!"; }
  16.6%, 24.9% { content: "Is the patient's payer available right now?"; }
  25%, 33.2% { content: "Payer is online — ready to verify!"; }
  33.3%, 41.5% { content: "I want to check patient eligibility in seconds."; }
  41.6%, 49.9% { content: "Coverage found — ready to admit!"; }
  50%, 58.2% { content: "What should we expect to be paid?"; }
  58.3%, 66.5% { content: "Reimbursement estimate ready!"; }
  66.6%, 74.9% { content: "Can I reverify my entire census at once?"; }
  75%, 83.2% { content: "Census complete — results emailed!"; }
  83.3%, 91.5% { content: "Can I access results from anywhere?"; }
  91.6%, 100% { content: "Mobile and API access connected!"; }
}
@keyframes journey-guide-bubble {
  0%, 7.9%, 16.6%, 24.9%, 33.3%, 41.5%, 50%, 58.2%, 66.6%, 74.9%, 83.3%, 91.5% { color: #5f419d; border-color: #dacdf6; background: white; }
  8%, 16.5%, 25%, 33.2%, 41.6%, 49.9%, 58.3%, 66.5%, 75%, 83.2%, 91.6%, 100% { color: #207a45; border-color: #afe0c2; background: #effbf3; }
}
@keyframes journey-record-actions {
  0%, 7.8%, 16.5%, 24.8%, 33.2%, 41.5%, 49.9%, 58.2%, 66.5%, 74.9%, 83.2%, 91.5%, 100% { translate: 0 -165%; scale: 1; }
  8.6%, 25.8%, 42.5%, 59.2%, 75.6%, 92.4% { translate: 0 -175%; scale: 1.04; }
  10.2%, 27.4%, 44.1%, 60.8%, 77.2%, 94% { translate: 0 -165%; scale: 1; }
}
@keyframes journey-record-status {
  0%, 16.5% { content: "New caller"; }
  16.6%, 33.2% { content: "Payer available"; }
  33.3%, 49.9% { content: "Coverage active"; }
  50%, 66.5% { content: "55.20% allowed"; }
  66.6%, 83.2% { content: "Batch complete"; }
  83.3%, 100% { content: "Access connected"; }
}
@keyframes journey-record-progress {
  0%, 16.5% { width: 12%; }
  16.6%, 33.2% { width: 30%; }
  33.3%, 49.9% { width: 48%; }
  50%, 66.5% { width: 66%; }
  66.6%, 83.2% { width: 84%; }
  83.3%, 100% { width: 100%; }
}
@keyframes journey-tool-call { 0%, 16.5% { opacity: 1; } 16.6%, 100% { opacity: 0; } }
@keyframes journey-tool-payer { 0%, 16.5%, 33.3%, 100% { opacity: 0; } 16.6%, 33.2% { opacity: 1; } }
@keyframes journey-tool-eligibility { 0%, 33.2%, 50%, 100% { opacity: 0; } 33.3%, 49.9% { opacity: 1; } }
@keyframes journey-tool-reimbursement { 0%, 49.9%, 66.6%, 100% { opacity: 0; } 50%, 66.5% { opacity: 1; } }
@keyframes journey-tool-automation { 0%, 66.5%, 83.3%, 100% { opacity: 0; } 66.6%, 83.2% { opacity: 1; } }
@keyframes journey-tool-access { 0%, 83.2% { opacity: 0; } 83.3%, 100% { opacity: 1; } }
@keyframes journey-reward-call {
  0%, 7.8% { opacity: 0; transform: translateY(4px) scale(.7); }
  8.5% { opacity: 1; transform: translateY(-4px) scale(1.15); }
  10%, 16.5% { opacity: 1; transform: translateY(0) scale(1); }
  16.7%, 100% { opacity: 0; transform: translateY(4px) scale(.7); }
}
@keyframes journey-reward-payer {
  0%, 24.8% { opacity: 0; transform: translateY(4px) scale(.7); }
  25.5% { opacity: 1; transform: translateY(-4px) scale(1.15); }
  27%, 33.2% { opacity: 1; transform: translateY(0) scale(1); }
  33.4%, 100% { opacity: 0; transform: translateY(4px) scale(.7); }
}
@keyframes journey-reward-eligibility {
  0%, 41.5% { opacity: 0; transform: translateY(4px) scale(.7); }
  42.2% { opacity: 1; transform: translateY(-5px) scale(1.15); }
  43.7%, 49.9% { opacity: 1; transform: translateY(0) scale(1); }
  50.1%, 100% { opacity: 0; transform: translateY(4px) scale(.7); }
}
@keyframes journey-reward-reimbursement {
  0%, 58.2% { opacity: 0; transform: translateY(4px) scale(.7); }
  58.9% { opacity: 1; transform: translateY(-5px) scale(1.15); }
  60.4%, 66.5% { opacity: 1; transform: translateY(0) scale(1); }
  66.7%, 100% { opacity: 0; transform: translateY(4px) scale(.7); }
}
@keyframes journey-reward-automation {
  0%, 74.9% { opacity: 0; transform: translateY(4px) scale(.7); }
  75.6% { opacity: 1; transform: translateY(-5px) scale(1.15); }
  77.1%, 83.2% { opacity: 1; transform: translateY(0) scale(1); }
  83.4%, 100% { opacity: 0; transform: translateY(4px) scale(.7); }
}
@keyframes journey-reward-access {
  0%, 91.5% { opacity: 0; transform: translateY(4px) scale(.7); }
  92.2% { opacity: 1; transform: translateY(-5px) scale(1.15); }
  93.7%, 99% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(4px) scale(.7); }
}
@keyframes journey-reward-signal { 50% { opacity: .45; transform: scale(.82); } }
@keyframes journey-reward-pop { 50% { transform: translateY(-1px) scale(1.18); } }
@keyframes journey-reward-count { to { transform: translateY(-2px) rotate(-6deg); } }
@keyframes journey-reward-spin { to { transform: rotate(360deg); } }
@keyframes journey-reward-phone { 50% { transform: rotate(9deg) translateY(-1px); } }
.workflow-detail-section { border-top: 1px solid rgba(124,77,222,.1); }
.workflow-series .workflow-section { background: #fff; }
.workflow-series .reimbursement-section { background: #f8f5ff; }
.workflow-series .outage-section { background: #f8f5ff; }
.workflow-series .automation-section { background: #fff; }
.workflow-series .access-section { background: #f8f5ff; }
.check-list-light { margin: 24px 0 0; padding: 0; list-style: none; color: var(--qa-muted); }
.check-list-light li { margin-top: 12px; }
.check-list-light i { margin-right: 10px; color: var(--qa-primary); }
.feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }.feature-card { min-height: 225px; padding: 24px; border: 1px solid var(--qa-border); border-radius: 18px; background: white; box-shadow: var(--qa-shadow-card); }.feature-card h3, .automation-card h3, .mobile-access-card h3, .api-access-card h3 { margin: 18px 0 10px; font-family: var(--qa-heading-font); font-size: 20px; }.feature-card-heading { display: flex; align-items: center; gap: 14px; }.feature-card-heading h3 { margin: 0; }.feature-card p, .automation-card p, .mobile-access-card p, .api-access-card p { color: var(--qa-muted); line-height: 1.625; }.feature-card-dark { grid-row: span 2; color: white; background: radial-gradient(circle at 80% 0, #3b275f, transparent 45%), var(--qa-dark); }.feature-card-dark h3 { color: white; }.feature-card-dark p { color: var(--qa-ink-muted); }.feature-card-tall { min-height: 468px; }.icon-tile { display: grid; flex: none; width: 42px; height: 42px; place-items: center; border-radius: 12px; color: var(--qa-primary); background: var(--qa-primary-soft); }.inquiry-response-preview { margin-top: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,.1); border-radius: 12px; background: rgba(255,255,255,.05); }.inquiry-response-heading, .inquiry-coverage-status { display: flex; align-items: center; justify-content: space-between; }.inquiry-response-heading { padding: 9px 12px; border-bottom: 1px solid rgba(255,255,255,.08); color: #cfc8dc; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }.inquiry-response-heading small { color: #948ba4; font-size: 10px; letter-spacing: 0; text-transform: none; }.inquiry-coverage-status { padding: 9px 12px 8px; font-size: 11px; }.inquiry-coverage-status span { display: flex; align-items: center; gap: 7px; color: #bcb4c9; }.inquiry-coverage-status i { width: 7px; height: 7px; border-radius: 50%; background: #63c88d; box-shadow: 0 0 0 4px rgba(99,200,141,.1), 0 0 12px rgba(99,200,141,.75); }.inquiry-coverage-status strong { color: #75d69c; font-size: 11px; }.inquiry-response-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin: 0; padding: 0 12px 10px; gap: 6px; }.inquiry-response-grid div { min-width: 0; padding: 7px 8px; border: 1px solid rgba(255,255,255,.07); border-radius: 8px; background: rgba(255,255,255,.035); }.inquiry-response-grid dt { color: #91889f; font-size: 8px; line-height: 1.3; }.inquiry-response-grid dd { margin: 3px 0 0; color: white; font-family: var(--qa-heading-font); font-size: 13px; font-weight: 700; }.inquiry-response-foot { padding: 8px 12px; border-top: 1px solid rgba(255,255,255,.08); color: #91889f; font-size: 9px; }
.feature-card:not(.feature-card-dark) { min-height: 170px; padding: 18px; }
.feature-card:not(.feature-card-dark) p { margin: 14px 0 0; font-size: 14px; line-height: 1.55; }
.feature-card-dark { grid-row: span 3; }
.feature-card-tall { min-height: 546px; }
.feature-card-interactive { position: relative; min-height: 178px !important; overflow: hidden; outline: none; cursor: default; transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease; }
.feature-card-interactive:hover, .feature-card-interactive:focus-visible { z-index: 1; border-color: rgba(124,77,222,.36); box-shadow: 0 18px 44px -18px rgba(76,44,139,.3); transform: translateY(-3px); }
.feature-card-interactive:focus-visible { box-shadow: 0 0 0 3px rgba(124,77,222,.16), 0 18px 44px -18px rgba(76,44,139,.3); }
.feature-card-stage { position: relative; height: 92px; margin-top: 8px; }
.feature-card-description, .feature-response-preview { position: absolute; inset: 0; margin: 0 !important; transition: opacity .22s ease, transform .28s ease; }
.feature-card-description { padding-bottom: 15px; }
.feature-response-preview { display: flex; overflow: hidden; flex-direction: column; padding: 6px 8px; border: 1px solid #e6def7; border-radius: 11px; background: linear-gradient(145deg, #fff, #faf8ff); box-shadow: 0 10px 25px -20px rgba(57,35,103,.55); opacity: 0; transform: translateY(9px); pointer-events: none; }
.feature-card-interactive:hover .feature-card-description, .feature-card-interactive:focus .feature-card-description { opacity: 0; transform: translateY(-7px); }
.feature-card-interactive:hover .feature-response-preview, .feature-card-interactive:focus .feature-response-preview { opacity: 1; transform: translateY(0); }
.feature-preview-heading { display: flex; min-height: 17px; align-items: center; justify-content: space-between; gap: 8px; padding-bottom: 4px; border-bottom: 1px solid #eee9f6; color: #847995; font-size: 8px; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.feature-preview-heading strong { color: var(--qa-primary); font-size: 8px; letter-spacing: 0; text-transform: none; }
.feature-preview-heading strong.success { color: #26854c; }
.feature-preview-heading strong i { margin-right: 3px; }
.feature-preview-row { display: flex; min-height: 19px; align-items: center; justify-content: space-between; gap: 8px; border-bottom: 1px solid #f0edf4; color: #4b4455; font-size: 9px; opacity: 0; transform: translateX(-5px); transition: opacity .2s ease calc(var(--preview-index) * 45ms + 70ms), transform .22s ease calc(var(--preview-index) * 45ms + 70ms); }
.feature-preview-row:last-child { border-bottom: 0; }
.feature-card-interactive:hover .feature-preview-row, .feature-card-interactive:focus .feature-preview-row { opacity: 1; transform: translateX(0); }
.feature-preview-row em { display: inline-flex; align-items: center; gap: 4px; padding: 2px 5px; border-radius: 999px; font-size: 7px; font-style: normal; font-weight: 800; }
.feature-preview-row em i { width: 4px; height: 4px; border-radius: 50%; background: currentColor; }
.feature-preview-row em.success { color: #26854c; background: #eaf8ef; }
.feature-preview-row em.muted { color: #81798b; background: #f0edf3; }
.feature-preview-row em.danger { color: #c23f4f; background: #fff0f2; }
.feature-preview-row em.warning { color: #9a6b0d; background: #fff7df; }
.feature-preview-row em.info { color: #3977aa; background: #eaf5fc; }
.feature-preview-metrics { display: grid; flex: 1; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: center; gap: 5px; }
.feature-preview-metrics div { padding: 6px 4px; border: 1px solid #eee8f8; border-radius: 7px; background: white; text-align: center; opacity: 0; transform: translateY(5px); transition: opacity .2s ease calc(var(--preview-index) * 55ms + 70ms), transform .22s ease calc(var(--preview-index) * 55ms + 70ms); }
.feature-card-interactive:hover .feature-preview-metrics div, .feature-card-interactive:focus .feature-preview-metrics div { opacity: 1; transform: translateY(0); }
.feature-preview-metrics small, .feature-preview-metrics b { display: block; }
.feature-preview-metrics small { color: #8c8398; font-size: 6px; }
.feature-preview-metrics b { margin-top: 2px; color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 11px; }
.feature-response-alert { justify-content: center; border-color: #f1d88a; background: #fff9e8; }
.feature-preview-alert { display: flex; align-items: flex-start; gap: 9px; color: #725b19; }
.feature-preview-alert > i { display: grid; flex: none; width: 25px; height: 25px; place-items: center; border-radius: 7px; color: #9a720b; background: #ffedb7; font-size: 10px; transform-origin: top center; }
.feature-card-interactive:hover .feature-preview-alert > i, .feature-card-interactive:focus .feature-preview-alert > i { animation: feature-alert-ring .48s ease 1; }
.feature-preview-alert span, .feature-preview-alert b, .feature-preview-alert small { display: block; }
.feature-preview-alert b { color: #604b11; font-size: 10px; line-height: 1.35; }
.feature-preview-alert small { margin-top: 6px; color: #95782b; font-size: 7px; }
.feature-preview-progress { height: 5px; margin: 6px 0; overflow: hidden; border-radius: 999px; background: #e9e4f0; }
.feature-preview-progress i { display: block; width: 100%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #7c4dde, #56b77b); transform: scaleX(0); transform-origin: left; transition: transform .48s cubic-bezier(.22,.78,.22,1) .08s; }
.feature-card-interactive:hover .feature-preview-progress i, .feature-card-interactive:focus .feature-preview-progress i { transform: scaleX(1); }
.feature-preview-summary { display: grid; grid-template-columns: 1.2fr .75fr 1fr; gap: 5px; color: #91889e; font-size: 6px; }
.feature-preview-summary span, .feature-preview-summary b { display: block; }
.feature-preview-summary b { margin-bottom: 1px; color: #4d405e; font-size: 8px; }
.feature-preview-export { display: grid; flex: 1; grid-template-columns: 1fr 1fr 26px; align-items: center; gap: 6px; }
.feature-preview-export > span { padding: 5px 6px; border-radius: 7px; background: #f7f4fb; }
.feature-preview-export small, .feature-preview-export b { display: block; }
.feature-preview-export small { color: #92889e; font-size: 6px; }
.feature-preview-export b { margin-top: 2px; color: #4d405e; font-size: 8px; }
.feature-preview-export > i { display: grid; width: 25px; height: 25px; place-items: center; border-radius: 50%; color: white; background: var(--qa-primary); font-size: 8px; transform: translateY(-3px); transition: transform .22s ease .16s; }
.feature-card-interactive:hover .feature-preview-export > i, .feature-card-interactive:focus .feature-preview-export > i { transform: translateY(0); }
@keyframes feature-alert-ring { 0%, 100% { transform: rotate(0); } 30% { transform: rotate(9deg); } 60% { transform: rotate(-8deg); } 82% { transform: rotate(4deg); } }
.inquiry-response-meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; padding: 0 12px 8px; }
.inquiry-response-meta div { padding: 7px 8px; border: 1px solid rgba(255,255,255,.07); border-radius: 8px; background: rgba(255,255,255,.025); }
.inquiry-response-meta small, .inquiry-response-meta strong { display: block; }
.inquiry-response-meta small { color: #91889f; font-size: 8px; }
.inquiry-response-meta strong { margin-top: 2px; color: #ddd7e5; font-size: 10px; }
.inquiry-benefit-context { display: flex; align-items: center; justify-content: space-between; padding: 2px 12px 7px; color: #91889f; font-size: 8px; font-weight: 700; letter-spacing: .055em; text-transform: uppercase; }
.inquiry-benefit-context strong { color: #bcb4c9; font-size: 8px; }
.inquiry-benefit-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; border-top: 1px solid rgba(255,255,255,.08); font-size: 9px; }
.inquiry-benefit-row span { color: #bcb4c9; }
.inquiry-benefit-row span i { margin-right: 5px; color: #63c88d; }
.inquiry-benefit-row strong { color: #75d69c; font-size: 9px; }
.inquiry-benefit-warning span i, .inquiry-benefit-warning strong { color: #e8bd63; }
.feature-card-dark > p { margin: 12px 0 0; font-size: 14px; line-height: 1.5; }
.feature-access-strip { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin-top: 14px; padding: 18px 22px; border: 1px solid #dcd0fa; border-radius: 18px; background: linear-gradient(110deg, #fbf9ff, #f3efff); box-shadow: var(--qa-shadow-card); }
.feature-access-copy { display: flex; min-width: 0; align-items: center; gap: 14px; }
.feature-access-copy h3 { margin: 0; font-family: var(--qa-heading-font); font-size: 18px; }
.feature-access-copy p { max-width: 520px; margin: 4px 0 0; color: var(--qa-muted); font-size: 12px; line-height: 1.5; }
.feature-access-options { display: flex; flex: none; gap: 8px; }
.feature-access-option { display: flex; min-width: 138px; align-items: center; gap: 9px; padding: 9px 11px; border: 1px solid rgba(124,77,222,.13); border-radius: 11px; color: inherit; background: rgba(255,255,255,.76); text-decoration: none; transition: transform .22s ease, border-color .22s ease, background .22s ease, box-shadow .22s ease; }
.feature-access-option:hover, .feature-access-option:focus-visible { border-color: rgba(124,77,222,.38); background: white; box-shadow: 0 10px 24px -17px rgba(72,42,134,.55); transform: translateY(-2px); outline: none; }
.feature-access-option > i:first-child { width: 18px; color: var(--qa-primary); font-size: 16px; text-align: center; transform-origin: center; }
.feature-access-option span, .feature-access-option b, .feature-access-option small { display: block; }
.feature-access-option b { color: var(--qa-ink); font-size: 10px; }
.feature-access-option small { margin-top: 2px; color: #2caa65; font-size: 8px; }
.feature-access-option .status-dot { width: 5px; height: 5px; margin-right: 4px; }
.feature-access-arrow { width: auto !important; margin-left: auto; color: #a294bd !important; font-size: 8px !important; transition: color .2s ease, transform .2s ease; }
.feature-access-option:hover .feature-access-arrow, .feature-access-option:focus-visible .feature-access-arrow { color: var(--qa-primary) !important; transform: translate(2px, -2px); }
.feature-access-option-api:hover .feature-access-arrow, .feature-access-option-api:focus-visible .feature-access-arrow { transform: translateX(3px); }
.feature-access-option-ios:hover > i:first-child, .feature-access-option-ios:focus-visible > i:first-child { animation: feature-access-ios .48s ease 1; }
.feature-access-option-android:hover > i:first-child, .feature-access-option-android:focus-visible > i:first-child { animation: feature-access-android .52s cubic-bezier(.2,.8,.25,1) 1; }
.feature-access-option-api:hover > i:first-child, .feature-access-option-api:focus-visible > i:first-child { animation: feature-access-api .5s ease 1; }
@keyframes feature-access-ios { 0%, 100% { transform: translateY(0) rotate(0); } 35% { transform: translateY(-3px) rotate(-8deg) scale(1.08); } 68% { transform: translateY(-1px) rotate(5deg); } }
@keyframes feature-access-android { 0%, 100% { transform: translateY(0) scale(1); } 38% { transform: translateY(-4px) scale(1.08,.95); } 70% { transform: translateY(1px) scale(.98,1.04); } }
@keyframes feature-access-api { 0%, 100% { transform: translateX(0); } 30% { transform: translateX(-2px) scale(.94); } 65% { transform: translateX(2px) scale(1.08); } }
.custom-alert-message { display: flex; align-items: flex-start; gap: 9px; margin: 12px; padding: 11px; border-left: 3px solid #e3b52f; border-radius: 7px; color: #745d18; background: #fff6d8; }
.custom-alert-message > i { flex: none; margin-top: 2px; color: #c49305; font-size: 12px; }
.custom-alert-message > span, .custom-alert-message b, .custom-alert-message small { display: block; }
.custom-alert-message b { color: #5f4b10; font-size: 10px; line-height: 1.35; }
.custom-alert-message small { margin-top: 3px; color: #9a7f31; font-size: 8px; }
.custom-alert-criteria { padding: 0 12px 12px; }
.custom-alert-criteria > small { display: block; margin-bottom: 7px; color: #9a91a6; font-size: 8px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.custom-alert-criteria > div { display: flex; flex-wrap: wrap; gap: 5px; }
.custom-alert-criteria > div span { padding: 4px 6px; border-radius: 999px; color: #6f4aac; background: var(--qa-primary-soft); font-size: 8px; font-weight: 700; }
.automation-custom-alert { margin-top: 18px; overflow: hidden; border: 1px solid var(--qa-border); border-radius: 10px; background: #fcfbfd; }
.automation-alert-foot { padding: 9px 12px; border-top: 1px solid var(--qa-border); color: #9a91a6; font-size: 9px; }
.dark-section { color: white; background: var(--qa-dark); }.section-kicker-dark { color: #c9b4ff; background: rgba(124, 77, 222, .18); }.section-title-light { color: white; margin-bottom: 22px; }.section-copy-dark { color: var(--qa-ink-muted); }.check-list-dark { margin: 24px 0 0; padding: 0; list-style: none; color: #c5c1cc; }.check-list-dark li { margin-top: 12px; }.check-list-dark i { margin-right: 10px; color: #b894ff; }
.reimbursement-demo { display: grid; grid-template-columns: 1.05fr .95fr; overflow: hidden; border-radius: 20px; background: white; color: var(--qa-ink); box-shadow: var(--qa-shadow-float); }.estimate-form, .estimate-results { padding: 28px; }.estimate-form { position: relative; }.estimate-results { border-left: 1px solid var(--qa-border); background: #fcfbfd; transition: background .35s ease, box-shadow .35s ease; }.estimate-results.demo-result-active { background: #fbf9ff; box-shadow: inset 0 0 0 2px rgba(124,77,222,.12); }.estimate-form h3, .estimate-results h3 { margin: 0 0 5px; font-family: var(--qa-heading-font); font-size: 18px; }.estimate-results > p { margin: 0 0 16px; color: var(--qa-muted); font-size: 11px; }.segmented-control { display: inline-flex; gap: 3px; padding: 4px; border-radius: 14px; background: var(--qa-muted-surface); }.segmented-control button { padding: 7px 13px; border: 0; border-radius: 10px; background: transparent; color: var(--qa-muted); cursor: pointer; }.segmented-control button.active { color: white; background: var(--qa-primary); }.estimate-form label, .workflow-form-card label { display: block; margin-top: 13px; color: var(--qa-muted); font-size: 11px; font-weight: 700; }.estimate-form input, .workflow-form-card input { width: 100%; height: 39px; margin-top: 5px; padding: 0 11px; border: 1px solid var(--qa-border); border-radius: 8px; color: var(--qa-ink); background: white; outline: none; transition: border-color .2s ease, box-shadow .2s ease, background .2s ease; }.estimate-form input:focus, .demo-field-active input { border-color: var(--qa-primary); background: #fdfcff; box-shadow: 0 0 0 3px var(--qa-primary-soft); }.demo-field-active input { caret-color: var(--qa-primary); }.estimate-button { width: 100%; min-height: 42px; margin-top: 16px; border: 0; border-radius: 14px; font-weight: 700; cursor: pointer; transition: transform .18s ease, box-shadow .18s ease, filter .18s ease; }.estimate-button.demo-button-clicked { box-shadow: 0 4px 12px -5px rgba(91,52,170,.55); filter: brightness(.96); transform: translateY(2px) scale(.985); }.estimate-button:disabled { opacity: .48; cursor: not-allowed; box-shadow: none; }.estimate-results dl { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin: 0; }.estimate-results dl div { padding: 10px 7px; border: 1px solid var(--qa-border); border-radius: 9px; background: white; text-align: center; }.estimate-results dl div:first-child { grid-column: 1 / -1; padding: 13px 10px; border-color: #dfd4f7; background: var(--qa-primary-soft); }.estimate-results dt { color: var(--qa-muted); font-size: 9px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }.estimate-results dd { margin: 4px 0 0; color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 16px; font-weight: 800; }.estimate-results dl div:first-child dd { font-size: 22px; }.estimate-results .estimate-results-note { margin: 12px 0 0; padding: 9px 10px; border-radius: 8px; color: #73698a; background: #f2eef9; font-size: 8px; line-height: 1.45; }.estimate-results.demo-result-active dd { animation: demo-value-pop .42s ease both; }.estimate-results.demo-result-active dl div:nth-child(2) dd { animation-delay: .05s; }.estimate-results.demo-result-active dl div:nth-child(3) dd { animation-delay: .1s; }.estimate-results.demo-result-active dl div:nth-child(4) dd { animation-delay: .15s; }.estimate-results.demo-result-active dl div:nth-child(5) dd { animation-delay: .2s; }.estimate-results.demo-result-active dl div:nth-child(6) dd { animation-delay: .25s; }
.workflow-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }.workflow-tabs { margin-bottom: 48px; }.workflow-grid { align-items: start; }.workflow-copy h3 { margin: 0 0 8px; font-family: var(--qa-heading-font); font-size: 24px; }.workflow-copy > p { color: var(--qa-muted); }.workflow-note { margin: 24px 0; padding: 14px; border: 1px solid #dfd1ff; border-radius: 11px; color: #6f4aac; background: var(--qa-primary-soft); font-size: 13px; }.workflow-note i { margin-right: 8px; }.workflow-steps { margin: 0; padding: 0; list-style: none; }.workflow-steps li { display: grid; grid-template-columns: 34px 1fr; gap: 13px; margin-top: 19px; }.workflow-steps li > span { display: grid; width: 28px; height: 28px; place-items: center; border-radius: 50%; color: white; background: var(--qa-primary); font-size: 12px; font-weight: 800; }.workflow-steps strong { font-family: var(--qa-heading-font); }.workflow-steps p { margin: 3px 0 0; color: var(--qa-muted); font-size: 13px; line-height: 1.55; }.workflow-form-card { min-height: 350px; padding: 26px; }.workflow-demo-stage { display: grid; min-height: 296px; }.workflow-demo-stage > * { min-width: 0; grid-area: 1 / 1; }.workflow-demo-form { position: relative; min-height: 296px; }.workflow-demo-hidden { visibility: hidden; pointer-events: none; }.form-card-heading { display: flex; align-items: center; justify-content: space-between; }.form-card-heading h4 { margin: 0; font-family: var(--qa-heading-font); font-size: 18px; }.form-card-heading span { color: var(--qa-muted); font-size: 10px; }.two-fields { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.demo-cursor { position: absolute; z-index: 8; display: grid; width: 27px; height: 27px; place-items: center; border: 1px solid #d9ccf8; border-radius: 9px; color: var(--qa-primary); background: white; box-shadow: 0 8px 22px rgba(74,43,135,.22); font-size: 11px; pointer-events: none; transition: top .38s cubic-bezier(.2,.8,.2,1), left .38s cubic-bezier(.2,.8,.2,1), transform .18s ease; }
.workflow-cursor-provider { top: 67px; left: 76%; }.workflow-cursor-payer { top: 132px; left: 31%; }.workflow-cursor-patient { top: 132px; left: 82%; }.workflow-demo-inquiry .workflow-cursor-dob { top: 197px; left: 31%; }.workflow-cursor-asof { top: 197px; left: 82%; }.workflow-cursor-first { top: 67px; left: 31%; }.workflow-cursor-last { top: 67px; left: 82%; }.workflow-demo-blanket .workflow-cursor-dob { top: 132px; left: 31%; }.workflow-cursor-state { top: 132px; left: 82%; }.workflow-cursor-ssn { top: 197px; left: 76%; }.workflow-cursor-button { top: 266px; left: 50%; transform: translate(-50%, -50%); }
.reimbursement-cursor-query { top: 119px; left: 78%; }.reimbursement-cursor-group { top: 190px; left: 78%; }.reimbursement-cursor-employer { top: 261px; left: 78%; }.reimbursement-cursor-button { right: auto; bottom: 24px; left: 50%; transform: translate(-50%, 0); }
.workflow-demo-result { min-height: 296px; overflow: hidden; border: 1px solid #ded4f4; border-radius: 13px; background: linear-gradient(145deg, #fff, #faf8ff); }.workflow-result-heading, .workflow-result-status { display: flex; align-items: center; justify-content: space-between; }.workflow-result-heading { padding: 14px 16px; border-bottom: 1px solid #ece7f4; color: #81758f; font-size: 9px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }.workflow-result-heading strong { color: var(--qa-primary); font-size: 10px; letter-spacing: 0; text-transform: none; }.workflow-result-status { padding: 16px; color: #81788c; font-size: 11px; }.workflow-result-status span { display: flex; align-items: center; gap: 7px; }.workflow-result-status span i { width: 7px; height: 7px; border-radius: 50%; background: #43c979; box-shadow: 0 0 0 4px rgba(67,201,121,.12); }.workflow-result-status b { color: #26854c; }.workflow-result-patient { margin: 0 16px 12px; padding: 10px 12px; border-radius: 9px; background: #f5f2fa; }.workflow-result-patient small, .workflow-result-patient strong { display: block; }.workflow-result-patient small { color: #91879c; font-size: 8px; }.workflow-result-patient strong { margin-top: 3px; font-size: 11px; }.workflow-result-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 0; padding: 0 16px 14px; }.workflow-result-grid div { padding: 10px; border: 1px solid #ece7f4; border-radius: 8px; background: white; }.workflow-result-grid dt { color: #91879c; font-size: 7px; }.workflow-result-grid dd { margin: 4px 0 0; color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 12px; font-weight: 800; }.workflow-result-foot { padding: 11px 16px; border-top: 1px solid #ece7f4; color: #26854c; font-size: 9px; }.workflow-result-foot i { margin-right: 5px; }.blanket-result-patient { display: grid; grid-template-columns: 34px 1fr auto; align-items: center; gap: 9px; margin: 10px 12px 8px; padding: 9px 10px; border: 1px solid #ebe5f3; border-radius: 9px; background: linear-gradient(115deg, #f8f5ff, #fff); }.blanket-result-patient > span, .blanket-result-patient small, .blanket-result-patient strong, .blanket-result-patient em { display: block; }.blanket-patient-avatar { display: grid !important; width: 34px; height: 34px; place-items: center; border-radius: 9px; color: white; background: linear-gradient(145deg, #8f64e3, #6d3fc8); font-family: var(--qa-heading-font); font-size: 10px; font-weight: 800; box-shadow: 0 8px 16px -11px rgba(89,47,171,.7); }.blanket-result-patient small { color: #94899f; font-size: 6px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }.blanket-result-patient > span:nth-child(2) strong { margin-top: 2px; color: #4b4354; font-size: 10px; }.blanket-result-patient em { margin-top: 2px; color: #968d9f; font-size: 6px; font-style: normal; }.blanket-result-count { min-width: 40px; padding-left: 9px; border-left: 1px solid #e8e1ef; text-align: center; }.blanket-result-count strong { color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 15px; }.blanket-result-count small { margin-top: 1px; color: #3b9c61; font-size: 6px; font-weight: 800; text-transform: uppercase; }.blanket-policy-list { padding: 0 12px 8px; }.blanket-policy-card { display: grid; grid-template-columns: 28px minmax(0, 1fr) auto; align-items: center; gap: 8px; margin-top: 6px; padding: 8px 9px; border: 1px solid #ebe7f0; border-radius: 8px; background: rgba(255,255,255,.92); box-shadow: 0 6px 15px -14px rgba(49,34,68,.7); }.blanket-policy-card > span, .blanket-policy-card strong, .blanket-policy-card small { display: block; min-width: 0; }.blanket-policy-card > span:nth-child(2) strong { overflow: hidden; color: #4b4354; font-size: 9px; text-overflow: ellipsis; white-space: nowrap; }.blanket-policy-card > span:nth-child(2) small { margin-top: 2px; overflow: hidden; color: #958b9e; font-size: 6px; text-overflow: ellipsis; white-space: nowrap; }.blanket-payer-mark { display: grid !important; width: 27px; height: 27px; place-items: center; border-radius: 7px; color: #6a43b0; background: #eee7fb; font-size: 7px; font-weight: 900; }.blanket-payer-mark.cigna { color: #267d6a; background: #e3f4ef; }.blanket-payer-mark.uhc { color: #426a9c; background: #e8f0fa; }.blanket-policy-card > b { display: flex; align-items: center; gap: 4px; padding: 4px 6px; border-radius: 6px; color: #26854c; background: #eaf8ef; font-size: 6px; }.blanket-policy-card > b i { width: 4px; height: 4px; border-radius: 50%; background: #43c979; box-shadow: 0 0 0 2px rgba(67,201,121,.1); }.blanket-policy-inactive { opacity: .78; }.blanket-policy-inactive > b { color: #7d7487; background: #efedf2; }.blanket-policy-inactive > b i { background: #9b92a4; box-shadow: none; }.blanket-result-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 9px 12px; }.blanket-result-foot span { white-space: nowrap; }.blanket-result-foot strong { overflow: hidden; color: #91879c; font-size: 7px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }.workflow-demo-result:not(.workflow-demo-hidden) .blanket-result-patient { animation: blanket-result-enter .38s ease both; }.workflow-demo-result:not(.workflow-demo-hidden) .blanket-policy-card { animation: blanket-result-enter .4s ease both; }.workflow-demo-result:not(.workflow-demo-hidden) .blanket-policy-card:nth-child(1) { animation-delay: .08s; }.workflow-demo-result:not(.workflow-demo-hidden) .blanket-policy-card:nth-child(2) { animation-delay: .15s; }.workflow-demo-result:not(.workflow-demo-hidden) .blanket-policy-card:nth-child(3) { animation-delay: .22s; }
@keyframes blanket-result-enter { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.workflow-demo-result { display: flex; flex-direction: column; }
.workflow-result-foot { margin-top: auto; }
.blanket-policy-list { display: flex; flex: 1; flex-direction: column; justify-content: space-evenly; }
.workflow-result-details { display: grid; grid-template-columns: .7fr 1fr 1.35fr; gap: 7px; padding: 0 16px 12px; }
.workflow-result-details div { min-width: 0; padding: 8px 9px; border-radius: 8px; background: #f5f2fa; }
.workflow-result-details small, .workflow-result-details strong { display: block; }
.workflow-result-details small { color: #91879c; font-size: 7px; }
.workflow-result-details strong { margin-top: 3px; overflow: hidden; color: #4f465a; font-size: 9px; text-overflow: ellipsis; white-space: nowrap; }
.workflow-result-context { display: flex; align-items: center; justify-content: space-between; padding: 0 16px 8px; color: #91879c; font-size: 7px; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
.workflow-result-context strong { color: #6e627c; font-size: 7px; }
.workflow-result-benefits { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px; padding: 0 16px 13px; }
.workflow-result-benefits > div { display: flex; min-width: 0; align-items: center; gap: 6px; padding: 8px; border: 1px solid #e4f1e8; border-radius: 8px; background: #f5fbf7; }
.workflow-result-benefits i { flex: none; color: #36a962; font-size: 8px; }
.workflow-result-benefits span, .workflow-result-benefits small, .workflow-result-benefits strong { display: block; min-width: 0; }
.workflow-result-benefits small { overflow: hidden; color: #7b7285; font-size: 6px; text-overflow: ellipsis; white-space: nowrap; }
.workflow-result-benefits strong { margin-top: 2px; color: #26854c; font-size: 8px; }
.workflow-result-benefits .warning { border-color: #f1e3bc; background: #fffaf0; }
.workflow-result-benefits .warning i, .workflow-result-benefits .warning strong { color: #a77717; }
@keyframes demo-value-pop { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
.outage-section { background: #f8f5ff; }.payer-status-card { overflow: hidden; border: 1px solid var(--qa-border); border-radius: 18px; background: white; box-shadow: var(--qa-shadow-card); }.payer-status-heading { display: flex; justify-content: space-between; padding: 18px 20px; border-bottom: 1px solid var(--qa-border); }.payer-status-heading span { color: #2caa65; font-size: 12px; }.payer-status-card ul { margin: 0; padding: 0 20px; list-style: none; }.payer-status-card li { display: grid; grid-template-columns: 1fr auto 85px; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--qa-border); font-size: 12px; }.payer-status-card li small { color: var(--qa-muted); }.payer-status-card li > span { text-align: right; font-size: 11px; }.payer-status-card li > span.online { color: #2caa65; }.payer-status-card li > span.degraded { color: #c08a19; }.payer-status-card li > span.down { color: #d35151; }.status-alert { padding: 13px 20px; background: #fff8e9; color: #8b6a22; font-size: 10px; }.outage-grid .section-title { margin-bottom: 22px; }.metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 30px; }.metric-grid div { padding: 19px; border: 1px solid var(--qa-border); border-radius: 14px; background: white; }.metric-grid strong, .metric-grid span { display: block; }.metric-grid strong { color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 24px; }.metric-grid span { margin-top: 4px; color: var(--qa-muted); font-size: 11px; }
.payer-status-visible .payer-status-card li { animation: payer-row-enter .52s cubic-bezier(.22,.78,.22,1) both; animation-delay: calc(var(--payer-index) * 85ms); }
.payer-status-visible .payer-status-card li > span { animation: payer-status-enter .36s ease both; animation-delay: calc(var(--payer-index) * 85ms + 240ms); }
.payer-status-visible .payer-status-card li > span.online .status-dot { animation: payer-online-confirm .62s ease both; animation-delay: calc(var(--payer-index) * 85ms + 350ms); }
.payer-status-visible .payer-status-card li > span.degraded .status-dot { animation: payer-degraded-confirm .72s ease both; animation-delay: calc(var(--payer-index) * 85ms + 350ms); }
.payer-status-visible .payer-status-card li > span.down .status-dot { animation: payer-down-confirm .52s ease both; animation-delay: calc(var(--payer-index) * 85ms + 350ms); }
@keyframes payer-row-enter { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
@keyframes payer-status-enter { from { opacity: 0; transform: translateX(7px); } to { opacity: 1; transform: translateX(0); } }
@keyframes payer-online-confirm { 0% { box-shadow: 0 0 0 0 rgba(44,170,101,0); transform: scale(.7); } 55% { box-shadow: 0 0 0 5px rgba(44,170,101,.14); transform: scale(1.25); } 100% { box-shadow: 0 0 0 0 rgba(44,170,101,0); transform: scale(1); } }
@keyframes payer-degraded-confirm { 0%, 100% { box-shadow: 0 0 0 0 rgba(192,138,25,0); transform: scale(1); } 45% { box-shadow: 0 0 0 5px rgba(192,138,25,.16); transform: scale(1.25); } }
@keyframes payer-down-confirm { 0%, 100% { transform: translateX(0) scale(1); } 30% { transform: translateX(-2px) scale(1.12); } 60% { transform: translateX(2px) scale(1.12); } }
.automation-section .section-title { margin-bottom: 20px; }.automation-section > .page-shell > .section-copy { max-width: 790px; margin: 0 0 40px; }.automation-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }.automation-card, .mobile-access-card { padding: 28px; border: 1px solid var(--qa-border); border-radius: 18px; box-shadow: var(--qa-shadow-card); }.batch-list, .alert-list { margin: 22px 0 0; padding: 0; list-style: none; }.batch-list li, .alert-list li { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 8px; padding: 11px; border: 1px solid var(--qa-border); border-radius: 9px; font-size: 10px; }.batch-list span, .batch-list strong, .batch-list small, .alert-list span, .alert-list strong, .alert-list small { display: block; }.batch-list small, .alert-list small { margin-top: 2px; color: var(--qa-muted); }.batch-list em { padding: 4px 7px; border-radius: 999px; color: #2caa65; background: #eaf8ef; font-style: normal; }.batch-list em.review { color: #9a6b0d; background: #fff7df; }.report-table { margin-top: 22px; overflow: hidden; border: 1px solid var(--qa-border); border-radius: 9px; font-size: 9px; }.report-table > div { display: grid; grid-template-columns: .8fr 1.2fr 1fr .8fr; padding: 9px; border-bottom: 1px solid var(--qa-border); }.report-table > div:last-child { border-bottom: 0; }.report-table em { color: #2caa65; font-style: normal; }.report-table em.danger { color: #d35151; }.alert-list { margin-top: 17px; }.alert-list li { justify-content: flex-start; }
.access-grid { display: grid; grid-template-columns: .82fr 1.48fr; gap: 18px; }.mobile-access-card { position: relative; min-height: 520px; overflow: hidden; background: radial-gradient(circle at 12% 8%, rgba(255,255,255,.96), transparent 34%), linear-gradient(155deg, #fbf9ff 0%, #f1ebff 100%); }.mobile-access-card::after { position: absolute; right: -80px; bottom: -95px; width: 320px; height: 320px; border: 1px solid rgba(124,77,222,.1); border-radius: 50%; box-shadow: 0 0 0 42px rgba(124,77,222,.035), 0 0 0 84px rgba(124,77,222,.025); content: ""; pointer-events: none; }.mobile-access-copy { position: relative; z-index: 3; }.mobile-access-label { display: flex; align-items: center; gap: 10px; }.mobile-access-label > span:last-child, .mobile-access-label small, .mobile-access-label strong { display: block; }.mobile-access-label small { color: #887e94; font-size: 8px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }.mobile-access-label strong { display: flex; align-items: center; gap: 6px; margin-top: 2px; color: #27824b; font-size: 10px; }.mobile-access-label .status-dot { width: 6px; height: 6px; }.mobile-access-icon { display: grid; width: 38px; height: 38px; place-items: center; border: 1px solid rgba(124,77,222,.12); border-radius: 11px; color: var(--qa-primary); background: rgba(255,255,255,.8); box-shadow: 0 8px 18px -14px rgba(77,42,142,.7); }.mobile-access-card h3 { margin-top: 17px; }.mobile-access-card p { max-width: 340px; margin-bottom: 0; font-size: 13px; }.mobile-store-links { display: flex; gap: 8px; margin-top: 18px; }.mobile-store-links a { display: flex; min-width: 126px; align-items: center; gap: 8px; padding: 8px 11px; border: 1px solid rgba(255,255,255,.08); border-radius: 11px; color: white; background: var(--qa-ink); box-shadow: 0 9px 20px -14px rgba(31,27,38,.85); text-decoration: none; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }.mobile-store-links a:hover, .mobile-store-links a:focus-visible { border-color: rgba(255,255,255,.22); box-shadow: 0 14px 24px -15px rgba(31,27,38,.95); outline: none; transform: translateY(-2px); }.mobile-store-links a > i { width: 17px; font-size: 18px; text-align: center; }.mobile-store-links span, .mobile-store-links small, .mobile-store-links strong { display: block; }.mobile-store-links small { color: #bab5c1; font-size: 6px; letter-spacing: .01em; }.mobile-store-links strong { margin-top: 1px; color: white; font-size: 10px; }.mobile-device-stage { position: absolute; z-index: 2; right: 0; bottom: 0; left: 0; height: 248px; }.phone-mockup { position: absolute; left: 50%; bottom: -58px; width: 224px; height: 304px; transform: translateX(-50%); padding: 18px 13px 50px; border: 7px solid #25222b; border-radius: 34px; background: #fcfbfe; box-shadow: 0 28px 55px -25px rgba(54,37,85,.55); animation: mobile-device-float 7s ease-in-out infinite; }.phone-notch { position: absolute; top: 6px; left: 50%; width: 58px; height: 14px; border-radius: 0 0 9px 9px; background: #25222b; transform: translateX(-50%); }.phone-status-bar { display: flex; align-items: center; justify-content: space-between; padding: 0 4px 10px; color: #574f60; font-size: 7px; font-weight: 800; }.phone-status-bar > span:last-child { display: flex; gap: 4px; }.phone-app-heading { display: flex; align-items: center; justify-content: space-between; padding: 11px 3px 9px; }.phone-app-heading span, .phone-app-heading small, .phone-app-heading strong { display: block; }.phone-app-heading small { color: #8d829b; font-size: 6px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }.phone-app-heading strong { margin-top: 2px; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 13px; }.phone-app-heading > i { display: grid; width: 25px; height: 25px; place-items: center; border-radius: 8px; color: var(--qa-primary); background: var(--qa-primary-soft); font-size: 8px; }.phone-patient-meta { display: flex; gap: 5px; }.phone-patient-meta span { padding: 4px 6px; border-radius: 5px; color: #82788e; background: #f0edf4; font-size: 6px; }.phone-result-heading { display: flex; align-items: center; justify-content: space-between; margin-top: 10px; padding-bottom: 6px; color: #8a8094; font-size: 7px; }.phone-result-heading strong { color: var(--qa-primary); font-size: 7px; }.phone-policy { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 5px; padding: 8px; border: 1px solid #e8e3ed; border-radius: 8px; background: white; box-shadow: 0 5px 13px -12px rgba(42,31,57,.7); }.phone-policy > span { position: relative; display: grid; min-width: 0; grid-template-columns: 7px 1fr; column-gap: 5px; }.phone-policy > span > i { width: 6px; height: 6px; margin-top: 2px; border-radius: 50%; background: #43c979; box-shadow: 0 0 0 3px rgba(67,201,121,.1); animation: mobile-policy-confirm 4.8s ease-in-out infinite; }.phone-policy strong, .phone-policy small { grid-column: 2; }.phone-policy strong { color: #4f4758; font-size: 8px; }.phone-policy small { margin-top: 2px; overflow: hidden; color: #9b92a4; font-size: 6px; text-overflow: ellipsis; white-space: nowrap; }.phone-policy b { padding: 4px 5px; border-radius: 5px; color: #27824b; background: #eaf8ef; font-size: 6px; }.phone-policy-inactive > span > i { background: #bd6670; box-shadow: 0 0 0 3px rgba(189,102,112,.09); animation-delay: 1.3s; }.phone-policy-inactive b { color: #a64e58; background: #fff0f1; }.phone-policy:nth-of-type(6) > span > i { animation-delay: .65s; }.phone-bottom-nav { position: absolute; right: 13px; bottom: 12px; left: 13px; display: flex; justify-content: space-around; padding-top: 8px; border-top: 1px solid #ece7f0; }.phone-bottom-nav span, .phone-bottom-nav small { display: block; text-align: center; }.phone-bottom-nav span { color: #aaa1b2; font-size: 8px; }.phone-bottom-nav small { margin-top: 2px; color: inherit; font-size: 5px; }.phone-bottom-nav .active { color: var(--qa-primary); }.mobile-result-float { position: absolute; z-index: 3; right: 12px; top: 24px; display: flex; align-items: center; gap: 8px; padding: 10px 12px; border: 1px solid rgba(124,77,222,.14); border-radius: 11px; background: rgba(255,255,255,.94); box-shadow: 0 14px 28px -18px rgba(67,36,124,.6); backdrop-filter: blur(8px); animation: mobile-result-drift 6s ease-in-out infinite; }.mobile-result-float > i { color: #38ac68; font-size: 14px; }.mobile-result-float span, .mobile-result-float small, .mobile-result-float strong { display: block; }.mobile-result-float small { color: #8d8298; font-size: 6px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }.mobile-result-float strong { margin-top: 2px; color: #484052; font-size: 9px; }.api-access-card { position: relative; display: grid; grid-template-columns: .85fr 1.15fr; overflow: hidden; border: 1px solid rgba(124,77,222,.22); border-radius: 18px; color: white; background: radial-gradient(circle at 8% 6%, rgba(190,164,255,.34), transparent 38%), linear-gradient(145deg, #6945b8 0%, #4b307f 50%, #372650 100%); box-shadow: 0 24px 58px -34px rgba(82,47,148,.72); }.api-access-card .icon-tile { color: white; background: rgba(255,255,255,.12); }.api-access-copy { position: relative; z-index: 1; padding: 30px; }.api-access-card p, .api-access-card li { color: #ddd5eb; }.api-access-card ul { padding-left: 18px; font-size: 12px; }.dark-outline-button { display: inline-flex; margin-top: 18px; padding: 10px 14px; border: 1px solid rgba(255,255,255,.28); border-radius: 14px; color: white; background: rgba(255,255,255,.06); text-decoration: none; font-size: 12px; font-weight: 700; }.api-access-card pre { position: relative; z-index: 1; margin: 0; padding: 34px 28px; overflow: auto; border-left: 1px solid rgba(255,255,255,.1); background: rgba(29,19,45,.48); color: #eee9f7; font-size: 11px; line-height: 1.7; }
@keyframes mobile-device-float { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-5px); } }
@keyframes mobile-result-drift { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-4px) rotate(-.6deg); } }
@keyframes mobile-policy-confirm { 0%, 70%, 100% { box-shadow: 0 0 0 3px rgba(67,201,121,.1); } 78% { box-shadow: 0 0 0 6px rgba(67,201,121,.04), 0 0 10px rgba(67,201,121,.45); } }
.cta-section { padding-top: 32px; background: white; }.cta-card { display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 58px 68px; border-radius: 24px; color: white; background: var(--qa-brand-gradient); box-shadow: var(--qa-shadow-float); }.cta-card h2 { margin: 0 0 10px; color: white; font-family: var(--qa-heading-font); font-size: 42px; }.cta-card p { max-width: 620px; margin: 0; color: rgba(255,255,255,.8); }.qa-button-light { flex: none; color: var(--qa-primary); background: white; }
.home-resource-links { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px 22px; padding: 24px 16px 0; }.home-resource-links span { color: var(--qa-ink); font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }.home-resource-links a { color: var(--qa-muted); font-size: 13px; font-weight: 650; text-decoration: none; transition: color .2s ease; }.home-resource-links a:hover, .home-resource-links a:focus-visible { color: var(--qa-primary); }
@media (min-width: 601px) {
  .workflow-form-card { padding-bottom: 12px; }
  .workflow-result-details, .workflow-result-context { display: none; }
}
@media (max-width: 900px) {
  .section-block { padding: 96px 20px; }.hero-section { min-height: auto; padding-top: 80px; }.hero-grid, .reimbursement-grid, .workflow-grid, .outage-grid { grid-template-columns: 1fr; gap: 56px; }.hero-copy h1 { font-size: 52px; }.feature-grid { grid-template-columns: repeat(2, 1fr); }.feature-card-dark { grid-row: auto; }.feature-card-tall { min-height: 360px; }.automation-grid { grid-template-columns: 1fr; }.access-grid { grid-template-columns: 1fr; }.mobile-access-card { min-height: 520px; }.cta-card { padding: 48px; }.reimbursement-grid > div:first-child { max-width: 680px; }.workflow-heading-row { align-items: flex-start; flex-direction: column; }.workflow-tabs { margin: -24px 0 36px; }
  .workflow-series-intro { padding: 64px 20px 44px; }
  .hero-flow + .platform-section { padding-top: 68px; }
  .workflow-series-intro-layout { grid-template-columns: minmax(190px, .72fr) minmax(0, 1.28fr); gap: 20px; }
  .workflow-series-intro h2 { font-size: 36px; }
  .workflow-series-intro p { font-size: 14px; }
  .feature-access-strip { align-items: flex-start; flex-direction: column; }.feature-access-options { display: grid; width: 100%; grid-template-columns: repeat(3, minmax(0, 1fr)); }.feature-access-option { min-width: 0; }
}
@media (max-width: 600px) {
  .hero-copy h1 { font-size: 42px; }.hero-proof { gap: 12px; flex-direction: column; }.floating-result { left: 8px; bottom: 14px; }.feature-grid { grid-template-columns: 1fr; }.feature-card, .automation-card, .mobile-access-card { padding: 22px; }.feature-card-tall { min-height: 440px; }.section-title { font-size: 36px; }.reimbursement-demo, .api-access-card { grid-template-columns: 1fr; }.estimate-results { border-top: 1px solid var(--qa-border); border-left: 0; }.workflow-grid { gap: 34px; }.two-fields { grid-template-columns: 1fr; gap: 0; }.outage-grid { gap: 42px; }.payer-status-card li { grid-template-columns: 1fr auto; }.payer-status-card li small { display: none; }.metric-grid { grid-template-columns: 1fr; }.access-section .section-title { font-size: 36px; }.api-access-card pre { border-top: 1px solid rgba(255,255,255,.08); }.cta-card { align-items: stretch; flex-direction: column; padding: 38px 28px; }.cta-card h2 { font-size: 35px; }.mobile-store-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }.mobile-store-links a { min-width: 0; }.mobile-result-float { right: 6px; }
  .workflow-series-intro { padding: 44px 14px 26px; }
  .hero-flow + .platform-section { padding-top: 56px; }
  .workflow-series-intro-layout { grid-template-columns: minmax(128px, .7fr) minmax(0, 1.3fr); gap: 8px; }
  .workflow-series-intro .section-kicker { padding: 4px 8px; font-size: 8px; letter-spacing: .05em; }
  .workflow-series-intro h2 { margin-top: 14px; font-size: 26px; line-height: 1.08; }
  .workflow-series-intro p { font-size: 11px; line-height: 1.5; }
  .workflow-journey-map { height: 245px; }.workflow-journey-marker { width: 42px; height: 42px; font-size: 14px; }.workflow-journey-flag { width: 18px; height: 18px; }.workflow-journey-copy { width: 88px; margin-top: 7px; padding: 3px 4px; border-radius: 6px; background: rgba(255,255,255,.84); }.workflow-journey-copy strong { font-size: 7px; line-height: 1.15; white-space: nowrap; }.workflow-journey-copy small { display: none; }.workflow-journey-hud { bottom: 53px; width: 118px; animation: journey-hud-mobile-position 36s step-end infinite; }.workflow-journey-hud::before { padding: 5px 6px; font-size: 5.5px; }.journey-reward { top: 24px; padding: 3px 5px; }.workflow-journey-record { width: 82px; padding: 5px 6px 4px; border-radius: 8px; animation: journey-record-actions 36s ease-in-out infinite, journey-record-mobile-anchor 36s step-end infinite; }.journey-record-main { grid-template-columns: 19px minmax(0, 1fr) 7px; gap: 4px; }.journey-record-patient { width: 19px; height: 19px; border-radius: 6px; font-size: 7px; }.journey-record-copy small { font-size: 3.8px; }.journey-record-copy strong { font-size: 5.4px; }.journey-record-check { font-size: 6px; }.journey-record-progress { height: 2px; margin-top: 4px; }.journey-tool { top: -7px; right: -7px; width: 16px; height: 16px; font-size: 5px; }
  .platform-section { padding-bottom: 64px; }.platform-section .section-title { margin-bottom: 28px; }.platform-section .feature-card { padding: 18px; }.feature-card:not(.feature-card-dark) { min-height: 0; padding: 18px; }.feature-access-options { grid-template-columns: 1fr; }.feature-access-strip { padding: 18px; }.inquiry-response-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .workflow-form-card { min-height: 445px; }.workflow-demo-stage, .workflow-demo-form, .workflow-demo-result { min-height: 391px; }.workflow-cursor-provider, .workflow-cursor-first { top: 67px; left: 78%; }.workflow-cursor-payer, .workflow-cursor-last { top: 132px; left: 78%; }.workflow-cursor-patient, .workflow-demo-blanket .workflow-cursor-dob { top: 197px; left: 78%; }.workflow-demo-inquiry .workflow-cursor-dob, .workflow-cursor-state { top: 262px; left: 78%; }.workflow-cursor-asof, .workflow-cursor-ssn { top: 327px; left: 78%; }.workflow-cursor-button { top: 396px; }
  .blanket-policy-card { padding: 11px 10px; }.blanket-policy-card > span:nth-child(2) strong { font-size: 10px; }.blanket-policy-card > span:nth-child(2) small, .blanket-policy-card > b { font-size: 7px; }
}
@media (max-width: 360px) {
  .hero-visual { min-height: 450px; }.hero-card-frame { height: 416px; }
}
@keyframes journey-hud-mobile-position {
  0%, 16.5%, 83.3%, 100% { transform: translateX(-5%); }
  16.6%, 33.2%, 66.6%, 83.2% { transform: translateX(-50%); }
  33.3%, 66.5% { transform: translateX(-95%); }
}
@keyframes journey-record-mobile-anchor {
  0%, 16.5%, 83.3%, 100% { transform: translateX(-5%); }
  16.6%, 33.2%, 66.6%, 83.2% { transform: translateX(-50%); }
  33.3%, 66.5% { transform: translateX(-95%); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-card-frame, .status-dot.online, .workflow-journey-route-dots, .workflow-journey-marker, .workflow-journey-marker::before, .workflow-journey-flag, .workflow-journey-guide, .workflow-journey-guide::before, .workflow-journey-hud, .workflow-journey-hud::before, .workflow-journey-record, .journey-record-status::before, .journey-record-progress i, .journey-tool, .journey-reward, .journey-reward i, .feature-preview-alert > i, .feature-access-option > i:first-child, .payer-status-card li, .payer-status-card li > span, .payer-status-card li > span .status-dot, .phone-mockup, .mobile-result-float, .phone-policy > span > i, .blanket-result-patient, .blanket-policy-card { animation: none; }
  .feature-card-interactive, .feature-card-description, .feature-response-preview, .feature-preview-row, .feature-preview-metrics div, .feature-preview-progress i, .feature-preview-export > i, .feature-access-option, .feature-access-arrow, .mobile-store-links a { transition: none; }
}
</style>
