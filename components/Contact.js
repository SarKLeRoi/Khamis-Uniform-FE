/* eslint-disable @next/next/no-html-link-for-pages */
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const t = {
    he: {
      title: "צור קשר",
      name: "שם*",
      phone: "טלפון*",
      email: "מייל*",
      message: "הודעה*",
      send: "שלח",
      terms:
        'אני מאשר/ת את <a href="/termsOfUse" target="_blank">תקנון השימוש</a> ואת <a href="/privacyPolicy" target="_blank">מדיניות הפרטיות</a>, ומסכים/ה ליצור עמי קשר.',
      thankYou: "תודה על פנייתך, נחזור אליך בהקדם.",
      captchaAlert: "אנא אשר שאינך רובוט.",
      termsAlert: "יש לאשר את תקנון השימוש ומדיניות הפרטיות לפני שליחה.",
      recaptchaFail: "אימות ה-ReCAPTCHA נכשל. נסה שוב.",
      networkError: "שגיאת רשת. נסה שוב מאוחר יותר.",
      sendFail: "שליחת האימייל נכשלה. נסה שוב מאוחר יותר.",
    },
    en: {
      title: "Contact Us",
      name: "Name*",
      phone: "Phone*",
      email: "Email*",
      message: "Message*",
      send: "Send",
      terms:
        'I agree to the <a href="/termsOfUse" target="_blank">Terms of Use</a> and <a href="/privacyPolicy" target="_blank">Privacy Policy</a>, and consent to be contacted.',
      thankYou: "Thank you for reaching out, we will get back to you soon.",
      captchaAlert: "Please verify that you are not a robot.",
      termsAlert:
        "Please accept the Terms and Privacy Policy before submitting.",
      recaptchaFail: "ReCAPTCHA verification failed. Please try again.",
      networkError: "Network error. Please try again later.",
      sendFail: "Failed to send email. Please try again later.",
    },
    ar: {
      title: "اتصل بنا",
      name: "الاسم*",
      phone: "الهاتف*",
      email: "البريد الإلكتروني*",
      message: "الرسالة*",
      send: "إرسال",
      terms:
        'أوافق على <a href="/termsOfUse" target="_blank">شروط الاستخدام</a> و <a href="/privacyPolicy" target="_blank">سياسة الخصوصية</a>، وأوافق على الاتصال بي.',
      thankYou: "شكراً لتواصلك معنا، سنرد عليك قريباً.",
      captchaAlert: "يرجى التحقق من أنك لست روبوتاً.",
      termsAlert: "يرجى قبول الشروط وسياسة الخصوصية قبل الإرسال.",
      recaptchaFail: "فشل التحقق من ReCAPTCHA. يرجى المحاولة مرة أخرى.",
      networkError: "خطأ في الشبكة. يرجى المحاولة مرة أخرى لاحقاً.",
      sendFail:
        "فشل في إرسال البريد الإلكتروني. يرجى المحاولة مرة أخرى لاحقاً.",
    },
  }[lang];

  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleRecaptcha = (value) => {
    setRecaptchaValue(value);
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaValue) return alert(t.captchaAlert);
    if (!agreedToTerms) return alert(t.termsAlert);

    try {
      const response = await fetch("/.netlify/functions/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: recaptchaValue }),
      });
      const data = await response.json();
      if (data.success) {
        const formData = {
          to: "info@khamisuniform.com",
          from: {
            email: "info@khamisuniform.com",
            name: "חמיס יוניפורם",
          },
          reply_to: email,
          templateId: "d-611d95905e7e4667af1c101ea32b8581",
          dynamic_template_data: { fullName, message, email, phoneNumber },
        };
        const initialEmail = {
          to: email,
          from: {
            email: "info@khamisuniform.com",
            name: "חמיס יוניפורם",
          },
          templateId: "d-b164580530034754ae08e87070f15a82",
          dynamic_template_data: { fullName },
        };

        const emailRes = await fetch("/.netlify/functions/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const responseData = await emailRes.json();
        if (emailRes.ok) {
          await fetch("/.netlify/functions/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(initialEmail),
          });
          setSubmissionMessage(t.thankYou);
          setTimeout(() => setSubmissionMessage(""), 10000);
        } else {
          console.error("Email sending error", responseData.error);
          alert(t.sendFail);
        }
      } else {
        alert(t.recaptchaFail);
      }
    } catch (error) {
      console.error("Network error", error);
      alert(t.networkError);
    }

    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="contact-us">
        <div className="right-overlay"></div>
        <div className="contact-form-container">
          <h2 id="contact-title">{t.title}</h2>
          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            aria-labelledby="contact-title"
            lang={lang}
            dir={lang === "he" || lang === "ar" ? "rtl" : "ltr"}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-row">
              <label className="visually-hidden" htmlFor="fullName">
                {t.name}
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => handleInputChange(e, setFullName)}
                name="fullName"
                placeholder={t.name}
                required
                aria-required="true"
              />
            </div>
            <div className="input-row">
              <label className="visually-hidden" htmlFor="phoneNumber">
                {t.phone}
              </label>
              <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e, setPhoneNumber)}
                name="phoneNumber"
                placeholder={t.phone}
                required
                aria-required="true"
              />
            </div>
            <div className="input-row">
              <label className="visually-hidden" htmlFor="email">
                {t.email}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                name="email"
                placeholder={t.email}
                required
                aria-required="true"
              />
            </div>
            <div className="textarea-row">
              <label className="visually-hidden" htmlFor="message">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => handleInputChange(e, setMessage)}
                placeholder={t.message}
                required
                aria-required="true"
              ></textarea>
            </div>
            <div className="recaptcha-container">
              <label htmlFor="recaptcha" className="visually-hidden">
                {lang === "he"
                  ? "אימות שאינך רובוט"
                  : lang === "ar"
                  ? "التحقق من أنك لست روبوتاً"
                  : "Verify you are not a robot"}
              </label>
              <ReCAPTCHA
                id="recaptcha"
                sitekey={key}
                onChange={handleRecaptcha}
                aria-required="true"
              />
            </div>
            <div
              className={`terms-checkbox ${
                lang === "he" || lang === "ar" ? "rtl" : "ltr"
              }`}
            >
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
                aria-required="true"
              />
              <label
                htmlFor="terms"
                className="terms-label"
                dangerouslySetInnerHTML={{ __html: t.terms }}
              ></label>
            </div>
            <div className="submit-btn">
              <button type="submit">{t.send}</button>
            </div>
            {submissionMessage && (
              <div
                className="submission-message"
                role="status"
                aria-live="polite"
                tabIndex={-1}
              >
                {submissionMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </motion.div>
  );
}
