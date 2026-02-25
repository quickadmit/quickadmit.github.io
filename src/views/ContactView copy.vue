<template>
    <div class="contact-outer-wrapper">

        <!-- MAIN CARD -->
        <div class="contact-main-card columns is-variable is-8 is-multiline">

            <!-- LEFT INFO SECTION -->
            <div class="column is-5 left-info reveal" ref="leftInfo">

                <h1 class="qa-display-title">Get In Touch with QuickAdmit</h1>
                <p class="qa-display-subtitle">
                    Fill out the form below or reach out directly, and let's start a conversation about modernizing your
                    admissions.
                </p>

                <div class="info-box-container">

                    <!-- SALES CARD -->
                    <div class="info-item-card">
                        <div class="info-icon">
                            <b-icon pack="fas" icon="comments"></b-icon>
                        </div>
                        <div class="info-content">
                            <label>Sales Inquiries</label>
                            <span>Learn how we can transform your workflow.</span>
                            <a href="mailto:info@quickadmit.com">info@quickadmit.com</a>
                        </div>
                    </div>

                    <!-- SUPPORT CARD -->
                    <div class="info-item-card">
                        <div class="info-icon">

                            <b-icon pack="fas" icon="circle-info" size="is-small"></b-icon>
                        </div>
                        <div class="info-content">
                            <label>Support</label>
                            <span>Get help with your existing account.</span>
                            <a href="mailto:support@quickadmit.com">support@quickadmit.com</a>
                        </div>
                    </div>

                    <!-- Phone CARD -->
                    <div class="info-item-card">
                        <div class="phone-icon">
                            <b-icon pack="fas" icon="phone"></b-icon>
                        </div>
                        <div class="info-content">
                            <label>Phone</label>
                            <span>(800) 995 - 7776</span>
                            <small>Mon-Fri, 9am-5pm EST</small>
                        </div>
                    </div>



                </div>
            </div>

            <!-- RIGHT FORM SECTION -->
            <div class="column is-7 reveal" ref="formCard">
                <div class="form-inner-card">
                    <h2 class="form-heading">Send us a message</h2>

                    <!-- FULL NAME -->
                    <div class="field">
                        <label class="label">Full Name</label>
                        <input v-model="form.name" class="input" type="text" placeholder="First Name">
                    </div>

                    <!-- EMAIL -->
                    <div class="field">
                        <label class="label">Work Email</label>
                        <input v-model="form.email" class="input" type="email" placeholder="Email Address">
                    </div>

                    <!-- PHONE -->
                    <div class="field">
                        <label class="label">Phone Number</label>
                        <input v-model="form.phone" class="input" type="text" placeholder="Phone Number">
                    </div>

                    <!-- COMPANY -->
                    <div class="field">
                        <label class="label">Company Name</label>
                        <input v-model="form.company" class="input" type="text" placeholder="Hospital, Clinic">
                    </div>

                    <!-- MESSAGE -->
                    <div class="field">
                        <label class="label">Message</label>
                        <textarea v-model="form.message" class="textarea" rows="4"
                            placeholder="Your Message"></textarea>
                    </div>


                    <!-- SUBMIT BUTTON -->
                    <div class="has-text-right mt-5">
                        <button class="btn-message" @click="submitForm">Send Message</button>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "ContactView",
    data() {
        return {
            agreed: false,
            form: {
                name: "",
                email: "",
                phone: "",
                company: "",
                industry: "",
                message: ""
            }
        };
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(this.$refs.leftInfo);
        observer.observe(this.$refs.formCard);
    }
    ,
    methods: {
        submitForm() {

            // TODO: handle submission
            console.log("Form submitted:", this.form);
            this.$buefy.toast.open({
                message: 'Message sent successfully!',
                type: 'is-success',
                duration: 3000,
                position: 'is-top-right'
            });

            this.form = { name: "", email: "", phone: "", company: "", industry: "", message: "" };
            this.agreed = false;
        }
    }
};
</script>

<style scoped>
/* OUTER WRAPPER */
.contact-outer-wrapper {
    background-color: #F4F7FA;
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
}

/* MAIN CARD */
.contact-main-card {
    background: #F9FBFF;
    border-radius: 24px;
    max-width: 1100px;
    width: 100%;
    padding: 3rem;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
}

/* LEFT INFO */
.qa-display-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #0A1E43;
    margin-bottom: 1rem;
}

.qa-display-subtitle {
    font-size: 1.1rem;
    color: #4A5568;
    margin-bottom: 3rem;
}

/* INFO CARDS */
.info-item-card {
    background: #FFFFFF;
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.info-icon span {
    font-size: 1.5rem;
}

.info-content label {
    font-weight: 700;
    color: #0A1E43;
    display: block;
}

.info-content span {
    font-size: 0.85rem;
    color: #718096;
    display: block;
    margin-bottom: 0.25rem;
}

.info-content a {
    color: #7b5cff;
    font-size: 0.9rem;
    text-decoration: underline;
}

.phone-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.phone-icon {
    font-size: 1.2rem;
}

/* SOCIAL LINKS */
.social-links {
    display: flex;
    gap: 0.75rem;
    margin-top: 2rem;
}

.social-dot {
    display: inline-flex;
    width: 30px;
    height: 30px;
    background: #7b5cff;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    transition: opacity 0.2s;
}

.social-dot:hover {
    opacity: 0.8;
}

/* FORM CARD */
.form-inner-card {
    background: #FFFFFF;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

.form-heading {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0A1E43;
    margin-bottom: 2rem;
}

.field label {
    font-size: 0.9rem;
    color: #4A5568;
    margin-bottom: 0.25rem;
    display: block;
}

.input,
.textarea {
    background: #F9FBFF;
    color: black;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 0.65rem 0.75rem;
    width: 100%;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus,
.textarea:focus {
    border-color: #7b5cff;
    box-shadow: 0 0 0 2px rgba(123, 92, 255, 0.15);
    outline: none;
}

/* TERMS */
.terms-text {
    font-size: 0.85rem;
    color: #4A5568;
}

.terms-text a {
    color: #7b5cff;
    text-decoration: underline;
}

.columns.is-8 {
    --bulma-column-gap: 0.5rem;
}

/* BUTTON */
.button-primary {
    background: linear-gradient(135deg, #2C5ACF, #3E6EDC);
    color: #FFFFFF;
    font-weight: 600;
    border-radius: 8px;
    padding: 0.75rem 2rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
}

.button-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(62, 110, 220, 0.3);
}


.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.info-icon b-icon {
    color: #7b5cff;
    font-size: 1.5rem;
    transition: transform 0.2s;
}

.info-icon b-icon:hover {
    transform: scale(1.2);
}

.btn-message {
    background-color: #7b5cff !important;
    border-color: transparent;
    color: #ffffff !important;
    font-weight: 600;
    height: 3rem;
    border-radius: 8px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: transform 0.2s ease;
}

.btn-message:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(123, 92, 255, 0.3);
}



/* ============================= */
/* 📱 TABLET (≤ 1023px) */
/* ============================= */
@media screen and (max-width: 1023px) {

    .contact-outer-wrapper {
        padding: 2rem 1rem;
    }

    .contact-main-card {
        padding: 2rem;
        border-radius: 20px;
    }

    .column.is-5,
    .column.is-7 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .left-info {
        margin-bottom: 2rem;
    }
}


/* ============================= */
/* 📱 MOBILE (≤ 768px) */
/* ============================= */
@media screen and (max-width: 768px) {

    /* Reduce outer spacing */
    .contact-outer-wrapper {
        padding: 1rem 0.5rem;
    }

    /* Make card take most of screen */
    .contact-main-card {
        padding: 1.25rem;
        border-radius: 16px;
        width: 100%;
    }

    /* Reduce typography sizes */
    .qa-display-title {
        font-size: 1.8rem;
        line-height: 1.2;
    }

    .qa-display-subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
    }

    .form-heading {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }

    /* Compact info cards */
    .info-item-card {
        padding: 1rem;
        gap: 0.75rem;
    }

    .info-content label {
        font-size: 0.95rem;
    }

    .info-content span,
    .info-content a {
        font-size: 0.8rem;
    }

    /* Reduce form padding */
    .form-inner-card {
        padding: 1.25rem;
    }

    /* Improve mobile input usability */
    .input,
    .textarea {
        font-size: 16px;
        /* Prevent iOS zoom */
    }

    .field {
        margin-bottom: 1.25rem;
    }

    /* Center button and make full width */
    .has-text-right {
        text-align: center !important;
    }

    .btn-message {
        width: 100%;
        height: 3.2rem;
    }
}


/* ============================= */
/* 📱 SMALL MOBILE (≤ 480px) */
/* ============================= */
@media screen and (max-width: 480px) {

    .contact-outer-wrapper {
        padding: 0.75rem 0.5rem;
    }

    .contact-main-card {
        padding: 1rem;
        border-radius: 14px;
    }

    .form-inner-card {
        padding: 1rem;
    }
}
</style>
