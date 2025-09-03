import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";
import StatCounter from "../components/StartCounter";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import ServicesShowcase from "../components/Services";
import { useLanguage } from "../context/LanguageContext";
import Script from "next/script";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import VideoBackground from "../components/VideoBackground";
import TitleRow from "../components/TitleRow";
import WorkWearPhotoSection from "../components/WorkWearPhotoSection";
import Line from "../components/Line";
import HomePageEndingSection from "../components/HomePageEndingSection";
export default function HomePage() {
  const { lang, toggleLanguage } = useLanguage();

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const PrevArrow = ({ className, style, onClick }) => (
    <IoIosArrowBack
      className={className}
      style={{ ...style, display: "block", fontSize: "2rem", color: "black" }}
      onClick={onClick}
    />
  );

  // Custom Next Arrow
  const NextArrow = ({ className, style, onClick }) => (
    <IoIosArrowForward
      className={className}
      style={{ ...style, display: "block", fontSize: "2rem", color: "black" }}
      onClick={onClick}
    />
  );
  const customers = [
    {
      image: "/images/HomePage-Customers/BayatResturanat.jpg",
    },
    {
      image: "/images/HomePage-Customers/Chickers.jpg",
    },
    {
      image: "/images/HomePage-Customers/EMMSHospital.jpg",
    },
    {
      image: "/images/HomePage-Customers/FrenchHospital.jpg",
    },
    {
      image: "/images/HomePage-Customers/LunaBistro.jpg",
    },
    {
      image: "/images/HomePage-Customers/TheBlend.jpg",
    },
    {
      image: "/images/HomePage-Customers/Tishreen.jpg",
    },
    {
      image: "/images/HomePage-Customers/GoldenCrown.png",
    },
  ];

  const CustomerSliderSettings = {
    infinite: true, // You might want to set this to true for a continuous loop
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 7, // Show 8 items at a time
    slidesToScroll: 1, // Scroll 1 item at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, // Adjust based on your responsiveness needs
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5, // Adjust based on your responsiveness needs
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      // You can add more breakpoints as needed
    ],
  };
  const content = {
    he: {
      title: "חמיס יוניפורם - בגדי עבודה",
      description:
        "מתמחים מאז 1989 באספקת בגדי עבודה, בגדי רפואה, מדים ומוצרי פרסום ממותגים בהתאמה אישית לתחומי הבריאות, התעשייה והשירות.",
      ogDescription:
        "בגדי עבודה ומדים איכותיים בהתאמה אישית עם רקמה או הדפסה מקצועית. פתרונות תפירה, שירות אישי ואיכות בלתי מתפשרת מאז 1989.",
      aboutUs: "אודותינו",
      keywords:
        "בגדי עבודה, מדים רפואיים, הדפסה על בגדים, רקמה על מדים, מדים לתעשייה, מדים לבריאות, מוצרי פרסום ממותגים, חולצות עבודה, בגדי רפואה בהתאמה אישית, ע. אליאס בע״מ, אספקת מדים לעסקים, מדים לחברות, מדים ממותגים",
      whoWeAre: "חמיס יוניפורם - מי אנחנו?",
      whoWeAreText: `מאז שנת 1989, אנו מתמחים באספקת בגדי עבודה איכותיים, בגדי רפואה ומדי עבודה מותאמים אישית לתחומי הבריאות, התעשייה והשירות. אנו מציעים מגוון רחב של פתרונות תפירה, הדפסה ורקמה בהתאמה אישית, מתוך הקפדה על איכות בלתי מתפשרת, עמידות ונוחות מירבית.
      
        אנו מאמינים בשירות אישי ומקצועי לכל לקוח, החל מעסקים קטנים ועד מוסדות גדולים, ומלווים את לקוחותינו לאורך כל הדרך – מבחירת הדגמים, דרך תכנון הרקמה או ההדפס, ועד קבלת מוצר מוגמר שמייצג את העסק בגאווה.
      
        בנוסף, אנו מציעים גם מגוון רחב של מוצרי פרסום ומתנות ממותגות בהתאמה אישית, המסייעים לעסק שלך לבלוט ולהגיע ליותר לקוחות בצורה איכותית ואלגנטית.`,

      specialization: "תחומי התמחות באספקת מדים ומוצרי מיתוג",
      specializationText: `<strong>• אספקת בגדי עבודה ומדים</strong> לכל התחומים – תעשייה, מוסדות רפואיים, חינוך, נגרות, מסגרות ועוד.
        <strong>• שירות רקמה והדפסה מותאמים אישית</strong> עם לוגו העסק שלך – ליצירת נראות מיתוגית מקצועית.
        <strong>• תפירה והתאמות מיוחדות</strong> לפי צרכי הלקוח – כולל מידות מיוחדות וגזרות מותאמות.
        <strong>• ייעוץ אישי ומקצועי</strong> בבחירת בגדי עבודה – תוך דגש על נוחות, איכות וחיסכון.
        <strong>• אספקת מוצרי פרסום ומתנות ממותגות</strong> בהתאמה אישית – לקידום העסק באלגנטיות וביעילות.
        <strong>• שירות מהיר, אמין וליווי צמוד</strong> לאורך כל שלבי ההזמנה – לעסקים קטנים ומוסדות גדולים כאחד.`,
      stats: [
        { label: "לקוחות מרוצים", value: 2000 },
        { label: "שנות ניסיון", value: 35 },
        { label: "תחומים", value: 20 },
      ],
      // Additional sections
      clientsTitle: "הלקוחות שלנו",
      workWearSection: {
        row1: {
          title: "מחייך בכל",
          title2: "הכנה",
          subtitle: "לכל הדגמים",
        },
        row2: {
          doctors: {
            title: "רופאים במדים מותאמים לכל מחלקה",
            description: "חלוקים רפואיים איכותיים מחכים לכם כאן",
            subtitle: "לכל הדגמים",
          },
          construction: {
            title: "בטיחות ואיכות במדי עבודה",
            description: "בגדי עבודה בטיחותיים ואיכותיים מחכים לכם כאן",
            subtitle: "לכל הדגמים",
          },
        },
      },
      endingSection: {
        question: "יש לכם",
        question2: "שאלה?",
        button: "דברו איתנו",
      },
    },
    en: {
      title: "Khamis Uniform - Workwear & Uniforms",
      description:
        "Specializing since 1989 in providing workwear, medical clothing, uniforms and branded promotional products customized for healthcare, industry and service sectors.",
      ogDescription:
        "Quality workwear and uniforms customized with professional embroidery or printing. Tailoring solutions, personal service and uncompromising quality since 1989.",
      aboutUs: "About Us",
      keywords:
        "workwear, medical uniforms, printing on clothes, embroidery on uniforms, industrial uniforms, healthcare uniforms, branded promotional products, work shirts, custom medical clothing, Elias Ltd, business uniform supply, corporate uniforms, branded uniforms",
      whoWeAre: "Khamis Uniform - Who We Are?",
      whoWeAreText: `Since 1989, we have specialized in providing quality workwear, medical clothing and custom work uniforms for healthcare, industry and service sectors. We offer a wide range of tailoring, printing and embroidery solutions customized to your needs, with uncompromising quality, durability and maximum comfort.
      
        We believe in personal and professional service for every client, from small businesses to large institutions, and accompany our clients throughout the journey - from choosing models, through designing embroidery or printing, to receiving a finished product that represents the business with pride.
      
        Additionally, we also offer a wide range of branded promotional products and gifts customized to help your business stand out and reach more customers in a quality and elegant way.`,

      specialization:
        "Areas of Expertise in Uniform Supply and Branding Products",
      specializationText: `<strong>• Supply of workwear and uniforms</strong> for all fields - industry, medical institutions, education, carpentry, metalwork and more.
        <strong>• Custom embroidery and printing services</strong> with your business logo - for professional branding visibility.
        <strong>• Tailoring and special adjustments</strong> according to customer needs - including special sizes and custom cuts.
        <strong>• Personal and professional consultation</strong> in choosing workwear - with emphasis on comfort, quality and savings.
        <strong>• Supply of branded promotional products and gifts</strong> customized - to promote the business with elegance and efficiency.
        <strong>• Fast, reliable service and close accompaniment</strong> throughout all stages of the order - for small businesses and large institutions alike.`,
      stats: [
        { label: "Satisfied Customers", value: 2000 },
        { label: "Years of Experience", value: 35 },
        { label: "Fields", value: 20 },
      ],
      // Additional sections
      clientsTitle: "Our Clients",
      workWearSection: {
        row1: {
          title: "Smile in every",
          title2: "preparation",
          subtitle: "For all models",
        },
        row2: {
          doctors: {
            title: "Doctors in uniforms adapted for each department",
            description: "Quality medical gowns are waiting for you here",
            subtitle: "For all models",
          },
          construction: {
            title: "Safety and quality in workwear",
            description: "Safe and quality workwear is waiting for you here",
            subtitle: "For all models",
          },
        },
      },
      endingSection: {
        question: "Do you have a",
        question2: "question?",
        button: "Talk to us",
      },
    },
    ar: {
      title: "خميس يونيفورم - ملابس عمل",
      description:
        "مع خبرة أكثر من ٣٥ سنة، نختص في تصميم وتوفير ملابس عمل لمختلف الفئات مثل الصناعة، المدارس، البناء، المطاعم والفنادق وغيرهم. نوفر لكم خدمة تطريز وطباعة بهويتكم الخاصة بجودة عالية وخدمة شخصية.",
      ogDescription:
        "ملابس عمل وأزياء موحدة بخبرة تتجاوز ٣٥ سنة. حلول مخصصة للصناعة، المدارس، المستشفيات، المطاعم والفنادق، مع تطريز وطباعة احترافية بهوية عملكم.",
      aboutUs: "من نحن",
      keywords:
        "ملابس عمل، زي طبي، طباعة على الملابس، تطريز على الزي، زي للصناعة، زي مستشفيات، زي للمدارس، زي للمطاعم، زي للفنادق، منتجات دعائية، قمصان عمل، ملابس طبية حسب الطلب، تجهيز زي للشركات، زي للمؤسسات، زي موحد",
      whoWeAre: "خميس يونيفورم - من نحن؟",
      whoWeAreText: `مع خبرة أكثر من ٣٥ سنة، نعمل في تصميم وتوفير ملابس عمل لعدة مجالات تشمل الصناعة، المدارس، البناء، المستشفيات، المطاعم، الفنادق وغيرها.
    
    نوفر حلولًا متكاملة في الطباعة والتطريز المخصص، بما يعكس هوية عملكم ويمنحكم مظهر احترافي.
    
    نلتزم بتقديم جودة عالية، متانة وراحة في كل قطعة، مع خدمة شخصية تلائم احتياجاتم. هدفنا أن نكون الشريك الموثوق لكم في كل ما يتعلق بالزي الموحد والمنتجات الدعائية.`,

      specialization: "مجالات التخصص في توفير ملابس عمل والمنتجات الدعائية",
      specializationText: `<strong>• توفير ملابس عمل وأزياء موحدة</strong> لمختلف الفئات – الصناعة، المؤسسات الطبية، التعليم، النجارة، البناء، وغيرها.  
    <strong>• خدمة تطريز وطباعة مخصصة</strong> مع شعار شركتكم – لخلق مظهر احترافي يعزز الهوية المؤسسية.  
    <strong>• خياطة وتعديلات خاصة</strong> وفق احتياجات العميل – بما يشمل المقاسات الخاصة والتصاميم المخصصة.  
    <strong>• استشارات شخصية ومهنية</strong> في اختيار ملابس العمل – مع التركيز على الراحة، الجودة والتوفير.  
    <strong>• تجهيز منتجات دعائية وهدايا مميزة</strong> بتصميم خاص – لتعزيز أعمالكم بأناقة وكفاءة.  
    <strong>• خدمة سريعة وموثوقة ومتابعة مستمرة</strong> في جميع مراحل الطلب – للشركات الصغيرة والمؤسسات الكبرى على حد سواء.`,

      stats: [
        { label: "زبائن", value: 2000 },
        { label: "سنوات خبرة", value: 35 },
        { label: "مجال", value: 20 },
      ],
    },
  };

  const t = content[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.ogDescription} />
        <meta name="keywords" content={t.keywords} />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://khamisuniform.com" />
        <meta name="author" content="Khamis Uniform Ltd" />
        <meta name="theme-color" content="#2a2a2a" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://khamisuniform.com" />
        <link rel="alternate" href="https://khamisuniform.com/" hreflang="he" />
        <link
          rel="alternate"
          href="https://khamisuniform.com/en"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://khamisuniform.com/ar"
          hreflang="ar"
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "בגדי עבודה ומוצרי מיתוג",
              provider: {
                "@type": "Organization",
                name: "חמיס יוניפורם בע״מ",
                url: "https://khamisuniform.com",
                logo: "https://khamisuniform.com/images/logo.png",
              },
              areaServed: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IL",
                },
              },
              description:
                "שירותי אספקת בגדי עבודה, מדים רפואיים ומוצרי פרסום ממותגים עם רקמה והדפסה מקצועית בהתאמה אישית.",
              offers: {
                "@type": "Offer",
                priceCurrency: "ILS",
                price: "0",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "דף הבית",
                  item: "https://khamisuniform.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "אודותינו",
                  item: "https://khamisuniform.com/#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "השירותים שלנו",
                  item: "https://khamisuniform.com/#services",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "צור קשר",
                  item: "https://khamisuniform.com/#contact",
                },
              ],
            }),
          }}
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "חמיס יוניפורם",
              url: "https://khamisuniform.com",
              image: "https://khamisuniform.com/images/logo-white.png",
              logo: "https://khamisuniform.com/images/logo.png",
              telephone: "972-46-57606",
              email: "info@khamisuniform.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "חיפה",
                addressCountry: "ישראל",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "info@khamisuniform.com",
                  contactType: "customer service",
                },
              ],
            }),
          }}
        />
      </Head>
      <Script src="/nagishli_beta.js" strategy="lazyOnload">
        {`nl_link = "http://localhost:3000/accessibilityStatement";`}
      </Script>
      <Script
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=YOUR_ID"
        strategy="afterInteractive"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-N4K3ZKECFZ`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N4K3ZKECFZ');
        `}
      </Script>
      <div className="sticky-header-wrapper">
        <TitleRow />
        <Navbar />
      </div>
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div
        className="main-wrapper"
        lang={lang === "he" || lang === "ar" ? "he" : "en"}
      >
        <main id="main-content" role="main" aria-label="Main content">
          <section id="" aria-labelledby="main-title-section">
            {/* Visually hidden h1 for screen readers */}
            <h1 id="main-title-section" className="visually-hidden">
              {t.title} {t.subtitle}
            </h1>
            <VideoBackground />
          </section>
          <section id="about" aria-labelledby="about-section">
            <div className="white-seciton">
              <motion.div
                className={`about-us-container ${
                  lang === "he" || lang === "ar" ? "rtl" : "ltr"
                }`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 id="about-section">{t.aboutUs}</h2>
                <h3>{t.whoWeAre}</h3>
                <p>{t.whoWeAreText}</p>
                <h3>{t.specialization}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.specializationText.replace(/\n/g, "<br />"),
                  }}
                ></p>
                <h3>{t.team}</h3>
                <p>{t.teamText}</p>
              </motion.div>
            </div>
          </section>
          <motion.div
            className={`stats-section ${
              lang === "he" || lang === "ar" ? "rtl" : "ltr"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            role="region"
            aria-label="Statistics"
          >
            {t.stats.map((stat, i) => (
              <StatCounter key={i} target={stat.value} label={stat.label} />
            ))}
          </motion.div>
          <section id="services" aria-labelledby="services-section">
            <h2 id="services-section" className="visually-hidden">
              {lang === "he"
                ? "השירותים שלנו"
                : lang === "ar"
                ? "خدماتنا"
                : "Our Services"}
            </h2>
            <ServicesShowcase />
          </section>
          <WorkWearPhotoSection />
          <Line />
          <h2 id="projects-section" className="visually-hidden">
            {lang === "he"
              ? "פרויקטים"
              : lang === "ar"
              ? "المشاريع"
              : "Projects"}
          </h2>
          <h2 className="homepage-h2">{t.clientsTitle}</h2>
          <div className="customer-slider-wrapper">
            <Slider {...CustomerSliderSettings}>
              {customers.map((customer, index) => (
                <div key={index} className="customer-slide">
                  <img
                    src={customer.image}
                    alt={customer.title}
                    className="customer-logo"
                  />
                  <h4 className="customer-title">{customer.title}</h4>
                </div>
              ))}
            </Slider>
          </div>
          <section id="gallery" aria-labelledby="gallery-section">
            <h2 id="gallery-section" className="visually-hidden">
              {lang === "he"
                ? "גלריה"
                : lang === "ar"
                ? "معرض الصور"
                : "Gallery"}
            </h2>
            <GalleryGrid />
          </section>
        </main>
        <section id="contact" aria-labelledby="contact-section">
          <HomePageEndingSection />
        </section>
        <footer role="contentinfo" aria-label="Footer">
          <EndingSection />
        </footer>
      </div>
    </>
  );
}
