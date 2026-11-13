/**
 * THENG SOTHEA PORTFOLIO — INTERACTIVE ENGINE
 * Handcrafted vanilla JavaScript with multi-language (EN/KM), typewriter, theme toggle, and filters
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MULTI-LANGUAGE TRANSLATION SYSTEM (ENGLISH & KHMER)
     ========================================================================== */
  const translations = {
    en: {
      "nav.logo": "<span class=\"logo-bracket\">&lt;</span>Theng <span class=\"text-cyan\">Sothea</span><span class=\"logo-bracket\">/&gt;</span>",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.guestbook": "Guestbook",
      "nav.contact": "Contact",

      "welcome.title": "Welcome to my <span class=\"text-cyan\">Portfolio</span> website",
      "welcome.subtitle": "Full Stack Web Developer & Laravel Specialist based in Cambodia",
      "welcome.enter": "Enter Portfolio",
      "welcome.hint": "Press <kbd>Enter</kbd> or click to explore",

      "hero.greeting": "Hello, I'm",
      "hero.title": "Theng <span class=\"hero-title-accent text-cyan\">Sothea<span class=\"pulsing-cursor\"></span></span>",
      "hero.tagline": "Full Stack Web Development & Software Engineering",
      "hero.bio": "I am a dedicated Web Developer passionate about building modern, responsive, and user-friendly websites. I specialize in front-end development with HTML, CSS, JavaScript, React, and crafting robust back-end solutions using Laravel & PHP.",
      "hero.viewCv": "View CV",
      "hero.contactMe": "Contact Me",
      "hero.available": "Available for Work",
      "hero.badgeRole": "Full Stack Developer",
      "hero.badgeEdu": "SETEC Graduate (2026)",
      "hero.orbitName": "THENG SOTHEA",
      "hero.orbitRole": "SOFTWARE DEV",

      "about.title": "About <span class=\"text-cyan\">Me</span>",
      "about.lanyardHint": "Drag or click to flip",
      "about.bio1": "Hi, I’m <strong>Theng Sothea</strong>, a dedicated Web Developer passionate about building modern, responsive, and user-friendly websites. I specialize in front-end development with HTML, CSS, and JavaScript, and enjoy crafting powerful back-end solutions using Laravel.",
      "about.bio2": "I focus on creating dynamic web applications that blend clean design, smooth functionality, and optimal performance. From multi-step forms to data-driven dashboards, I aim to turn complex ideas into simple, effective solutions. Always eager to learn, I stay updated with new technologies and best practices to deliver projects that meet both user needs and business goals.",
      "about.location": "Location",
      "about.locationVal": "Phnom Penh, Cambodia",
      "about.education": "Education",
      "about.educationVal": "SETEC Institute (Bachelor of MIS - 2026)",
      "about.experience": "Experience",
      "about.experienceVal": "2+ Years (Frontend & Backend)",
      "about.stack": "Core Stack",
      "about.stackVal": "Laravel, PHP, React.js, MySQL, PostgreSQL",

      "skills.title": "Skills & <span class=\"text-cyan\">Technologies</span>",
      "skills.subtitle": "Tools, languages, frameworks, and databases I use to build scalable web applications.",
      "skills.frontend": "Frontend Development",
      "skills.backend": "Backend & ERP Development",
      "skills.databaseTools": "Database & DevOps",

      "experience.title": "Professional <span class=\"text-cyan\">Experience</span>",
      "experience.subtitle": "My journey as a software developer and educational background.",
      "exp1.period": "2022 - Present",
      "exp1.role": "Full Stack Web Developer",
      "exp1.company": "Freelance & Personal Projects",
      "exp1.desc": "Building dynamic web applications, MIS solutions, e-commerce stores, and custom ERP systems using Laravel, PHP, MySQL, and modern JavaScript frontend frameworks.",
      "exp2.period": "2022 - 2026",
      "exp2.role": "Bachelor of MIS (Management Info Systems)",
      "exp2.company": "SETEC Institute, Phnom Penh",
      "exp2.desc": "Graduated in 2026. Specialized in enterprise database systems, software engineering, systems analysis, and modern web application development.",
      "exp3.period": "2016 - 2019",
      "exp3.role": "High School Baccalaureate (BacII)",
      "exp3.company": "Hun Sen Steong Trang High School",
      "exp3.desc": "Successfully graduated BacII in 2019 with honors in Mathematics and physical sciences.",

      "projects.title": "Featured <span class=\"text-cyan\">Projects</span>",
      "projects.subtitle": "Explore my real-world applications, institutional management systems, and web projects.",
      "projects.filterAll": "All Projects",
      "projects.filterWeb": "Web & Full-Stack",
      "projects.filterSystems": "Systems & Software",
      "projects.liveDemo": "Live Demo",
      "projects.videoDemo": "Video Demo",
      "projects.github": "GitHub",
      "proj1.title": "Business Cambodia Clone",
      "proj1.desc": "A modern clone of the popular Business Cambodia news portal featuring responsive editorial layout, news cards, categorized article streams, and smooth navigation.",
      "proj2.title": "School Management System",
      "proj2.desc": "Comprehensive educational ERP solution handling student registrations, course management, grading systems, attendance logs, and administrative analytical dashboards.",
      "proj3.title": "CMS Gaming Product",
      "proj3.desc": "Dynamic content management system crafted for gaming gear and digital products, with customizable catalog filters, secure inventory handling, and user reviews.",
      "proj4.title": "BookStore POS System",
      "proj4.desc": "A desktop Point of Sale and inventory tracking software built in Java with Maven and MySQL for retail bookstores, including sales invoices, receipt generation, and stock alerts.",
      "proj5.title": "E-Commerce Application",
      "proj5.desc": "Full-featured online e-commerce platform built with Python Django framework, featuring product catalog categorization, cart management, customer accounts, and order processing.",
      "proj6.title": "Depreciation System",
      "proj6.desc": "Specialized asset management and accounting system for calculating fixed-asset depreciation schedules, salvage estimations, ledger tracking, and exporting financial asset reports.",

      "education.title": "Academic <span class=\"text-cyan\">Background</span>",
      "education.subtitle": "Formal education and certifications.",
      "edu1.degree": "Bachelor of Management Information Systems (MIS)",
      "edu1.school": "SETEC Institute",
      "edu1.status": "Graduated: 2026",
      "edu1.desc": "Comprehensive studies in database management (PostgreSQL/MySQL), web architecture, ERP systems, and modern software design.",
      "edu2.degree": "High School Diploma (BACII)",
      "edu2.school": "Hun Sen Steong Trang High School",
      "edu2.status": "Graduated: 2019",
      "edu2.desc": "Completed upper secondary national examinations with strong foundational knowledge in sciences and mathematics.",

      "guestbook.title": "Community <span class=\"text-cyan\">Guestbook</span>",
      "guestbook.subtitle": "Leave a friendly comment, say hi, or share your feedback!",
      "guestbook.sign": "Sign the Guestbook",
      "guestbook.nameLabel": "Your Name",
      "guestbook.messageLabel": "Your Message",
      "guestbook.submit": "Post Message",
      "guestbook.recentNotes": "Recent Notes",

      "contact.title": "Get In <span class=\"text-cyan\">Touch</span>",
      "contact.subtitle": "Interested in collaborating or hiring me? Let's talk!",
      "contact.email": "Email",
      "contact.emailDesc": "sotheatheng2002@gmail.com",
      "contact.phone": "Phone",
      "contact.phoneDesc": "+855 867 248 55",
      "contact.telegram": "Telegram",
      "contact.telegramDesc": "@sotheatheng2002",
      "contact.linkedin": "LinkedIn",
      "contact.linkedinDesc": "Theng Sothea",
      "contact.sendMsg": "Send a Direct Message",
      "contact.nameLabel": "Full Name",
      "contact.emailLabel": "Email Address",
      "contact.subjectLabel": "Subject",
      "contact.messageLabel": "Message",
      "contact.submitBtn": "Send Message",
      "contact.sending": "Sending message...",
      "contact.success": "Thank you! Your message has been sent successfully. I will reach out soon.",
      "contact.error": "Oops! Something went wrong. Please try again or email directly to sotheatheng2002@gmail.com.",
      "contact.keyNotice": "Web3Forms Access Key is not configured yet. Opening your email app instead...",

      "scroll.top": "Scroll to top",
      "scroll.bottom": "Scroll to bottom",
      "footer.copy": "&copy; 2026 <strong class=\"text-cyan\">Theng Sothea</strong>. All rights reserved."
    },

    km: {
      "nav.logo": "<span class=\"logo-bracket\">&lt;</span>ថេង <span class=\"text-cyan\">សុធា</span><span class=\"logo-bracket\">/&gt;</span>",
      "nav.home": "ទំព័រដើម",
      "nav.about": "អំពីខ្ញុំ",
      "nav.skills": "ជំនាញ",
      "nav.experience": "បទពិសោធន៍",
      "nav.projects": "គម្រោងស្នាដៃ",
      "nav.education": "ការអប់រំ",
      "nav.guestbook": "សៀវភៅភ្ញៀវ",
      "nav.contact": "ទំនាក់ទំនង",

      "welcome.title": "សូមស្វាគមន៍មកកាន់គេហទំព័រ <span class=\"text-cyan\">Portfolio</span> របស់ខ្ញុំ",
      "welcome.subtitle": "អ្នកបង្កើតគេហទំព័រ Full Stack & អ្នកឯកទេស Laravel នៅកម្ពុជា",
      "welcome.enter": "ចូលមើល Portfolio",
      "welcome.hint": "ចុច <kbd>Enter</kbd> ឬចុចប៊ូតុងដើម្បីរុករក",

      "hero.greeting": "សួស្តី! ខ្ញុំបាទ",
      "hero.title": "ថេង <span class=\"hero-title-accent text-cyan\">សុធា<span class=\"pulsing-cursor\"></span></span>",
      "hero.tagline": "ការអភិវឌ្ឍគេហទំព័រ Full Stack & វិស្វកម្មសូហ្វវែរ",
      "hero.bio": "ខ្ញុំបាទ ថេង សុធា ជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ (Web Developer) មួយរូប ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រទំនើប ស្រស់ស្អាត Responsive និងងាយស្រួលប្រើប្រាស់។ ខ្ញុំមានជំនាញផ្នែក Front-end ដោយប្រើ HTML, CSS, JavaScript, React និង Back-end ដោយប្រើប្រាស់ Laravel & PHP។",
      "hero.viewCv": "មើល CV",
      "hero.contactMe": "ទាក់ទងមកខ្ញុំ",
      "hero.available": "ត្រៀមខ្លួនសម្រាប់ធ្វើការងារ",
      "hero.badgeRole": "Full Stack Developer",
      "hero.badgeEdu": "បញ្ចប់ការសិក្សា SETEC (២០២៦)",
      "hero.orbitName": "ថេង សុធា",
      "hero.orbitRole": "SOFTWARE DEV",

      "about.title": "អំពី <span class=\"text-cyan\">ខ្ញុំ</span>",
      "about.lanyardHint": "អូស ឬចុចដើម្បីបង្វិល",
      "about.bio1": "សួស្តី! ខ្ញុំបាទ <strong>ថេង សុធា</strong> ជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ (Web Developer) មួយរូប ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រទំនើប ស្រស់ស្អាត Responsive និងងាយស្រួលប្រើប្រាស់។ ខ្ញុំមានជំនាញផ្នែក Front-end ដោយប្រើ HTML, CSS, JavaScript និង Back-end ដោយប្រើប្រាស់ Laravel។",
      "about.bio2": "ខ្ញុំផ្តោតលើការបង្កើតកម្មវិធីគេហទំព័រដែលមានល្បឿនលឿន សុវត្ថិភាព និងប្រសិទ្ធភាពខ្ពស់។ ខ្ញុំតែងតែរៀនសូត្របច្ចេកវិទ្យាថ្មីៗជាប្រចាំ ដើម្បីសម្រេចបាននូវគម្រោងប្រកបដោយគុណភាពខ្ពស់សម្រាប់អ្នកប្រើប្រាស់ និងអាជីវកម្ម។",
      "about.location": "ទីតាំង",
      "about.locationVal": "រាជធានីភ្នំពេញ កម្ពុជា",
      "about.education": "ការអប់រំ",
      "about.educationVal": "វិទ្យាស្ថាន SETEC (បរិញ្ញាបត្រ MIS - ២០២៦)",
      "about.experience": "បទពិសោធន៍",
      "about.experienceVal": "២+ ឆ្នាំ (Frontend & Backend)",
      "about.stack": "បច្ចេកវិទ្យាចម្បង",
      "about.stackVal": "Laravel, PHP, React.js, MySQL, PostgreSQL",

      "skills.title": "ជំនាញ & <span class=\"text-cyan\">បច្ចេកវិទ្យា</span>",
      "skills.subtitle": "ឧបករណ៍ ភាសាសរសេរកូដ Frameworks និងប្រព័ន្ធ Database ដែលខ្ញុំប្រើប្រាស់។",
      "skills.frontend": "ការអភិវឌ្ឍ Frontend",
      "skills.backend": "ការអភិវឌ្ឍ Backend & ERP",
      "skills.databaseTools": "Database & DevOps",

      "experience.title": "បទពិសោធន៍ <span class=\"text-cyan\">ការងារ</span>",
      "experience.subtitle": "ដំណើរនៃការអភិវឌ្ឍសូហ្វវែរ និងប្រវត្តិការសិក្សារបស់ខ្ញុំ។",
      "exp1.period": "២០២២ - បច្ចុប្បន្ន",
      "exp1.role": "អ្នកបង្កើតគេហទំព័រ Full Stack Web Developer",
      "exp1.company": "គម្រោងផ្ទាល់ខ្លួន & ឯករាជ្យ",
      "exp1.desc": "បង្កើតគេហទំព័រ និងប្រព័ន្ធគ្រប់គ្រងសាលា ហាងទំនិញអនឡាញ និងដំណោះស្រាយ ERP តាមរយៈ Laravel, PHP, MySQL និង React.js។",
      "exp2.period": "២០២២ - ២០២៦",
      "exp2.role": "បរិញ្ញាបត្រ MIS (ប្រព័ន្ធព័ត៌មានគ្រប់គ្រង)",
      "exp2.company": "វិទ្យាស្ថាន SETEC រាជធានីភ្នំពេញ",
      "exp2.desc": "បញ្ចប់ការសិក្សាឆ្នាំ ២០២៦។ ជំនាញលើប្រព័ន្ធទិន្នន័យសាជីវកម្ម វិស្វកម្មសូហ្វវែរ ការវិភាគប្រព័ន្ធ និងការបង្កើត Web Application ទំនើប។",
      "exp3.period": "២០១៦ - ២០១៩",
      "exp3.role": "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)",
      "exp3.company": "វិទ្យាល័យ ហ៊ុន សែន ស្ទឹងត្រង់",
      "exp3.desc": "បានបញ្ចប់ការសិក្សាបាក់ឌុបនៅឆ្នាំ ២០១៩ ដោយជោគជ័យ។",

      "projects.title": "គម្រោង <span class=\"text-cyan\">ស្នាដៃ</span>",
      "projects.subtitle": "សូមស្វែងយល់ពីគម្រោងពិត ប្រព័ន្ធគ្រប់គ្រង និងគេហទំព័រដែលខ្ញុំបានបង្កើត។",
      "projects.filterAll": "គម្រោងទាំងអស់",
      "projects.filterWeb": "គេហទំព័រ & Full-Stack",
      "projects.filterSystems": "ប្រព័ន្ធ & សូហ្វវែរ",
      "projects.liveDemo": "សាកល្បងផ្ទាល់",
      "projects.videoDemo": "វីដេអូបង្ហាញ",
      "projects.github": "GitHub",
      "proj1.title": "គេហទំព័រព័ត៌មាន Business Cambodia (Clone)",
      "proj1.desc": "ការចម្លងគេហទំព័រសារព័ត៌មាន Business Cambodia ដ៏ពេញនិយម ដែលមានទម្រង់ប្លង់បែប Responsive ការបង្ហាញអត្ថបទតាមប្រភេទច្បាស់លាស់ និងការរុករកយ៉ាងរលូន។",
      "proj2.title": "ប្រព័ន្ធគ្រប់គ្រងសាលារៀន (School Management System)",
      "proj2.desc": "ប្រព័ន្ធ ERP គ្រប់គ្រងការអប់រំដ៏ទូលំទូលាយ សម្រួលដល់ការចុះឈ្មោះសិស្ស ការគ្រប់គ្រងមុខវិជ្ជា ប្រព័ន្ធដាក់ពិន្ទុ ការកត់ត្រាវត្តមាន និងផ្ទាំង Dashboard វិភាគទិន្នន័យរដ្ឋបាល។",
      "proj3.title": "ប្រព័ន្ធគ្រប់គ្រងទំនិញ Gaming (CMS Gaming Product)",
      "proj3.desc": "ប្រព័ន្ធគ្រប់គ្រងមាតិកា (CMS) សម្រាប់ឧបករណ៍ហ្គេម និងផលិតផលឌីជីថល រួមមានមុខងារតម្រងកាតាឡុកទំនិញ ការគ្រប់គ្រងស្តុកប្រកបដោយសុវត្ថិភាព និងការវាយតម្លៃពីអ្នកប្រើប្រាស់។",
      "proj4.title": "ប្រព័ន្ធ POS ហាងលក់សៀវភៅ (BookStore POS)",
      "proj4.desc": "កម្មវិធីកុំព្យូទ័រ Desktop POS និងតាមដានស្តុកទំនិញ បង្កើតឡើងដោយ Java, Maven និង MySQL សម្រាប់ហាងលក់សៀវភៅ រួមមានការចេញវិក្កយបត្រ បោះពុម្ពបង្កាន់ដៃ និងការជូនដំណឹងពីចំនួនស្តុក។",
      "proj5.title": "កម្មវិធីទិញលក់ទំនិញអនឡាញ (E-Commerce App)",
      "proj5.desc": "គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិចពេញលេញ បង្កើតឡើងដោយ Python Django Framework មានមុខងារចាត់ថ្នាក់ទំនិញ ការគ្រប់គ្រងកន្ត្រកទំនិញ គណនីអតិថិជន និងដំណើរការបញ្ជាទិញ។",
      "proj6.title": "ប្រព័ន្ធគណនារំលស់ទ្រព្យសកម្ម (Depreciation System)",
      "proj6.desc": "ប្រព័ន្ធគ្រប់គ្រងទ្រព្យសកម្ម និងគណនេយ្យ សម្រាប់គណនាកាលវិភាគរំលស់ទ្រព្យសកម្មថេរ ការប៉ាន់ស្មានតម្លៃសល់ ការតាមដានសៀវភៅធំ និងការទាញយករបាយការណ៍ហិរញ្ញវត្ថុ។",

      "education.title": "ប្រវត្តិ <span class=\"text-cyan\">ការសិក្សា</span>",
      "education.subtitle": "ការអប់រំ និងសញ្ញាបត្រផ្លូវការ។",
      "edu1.degree": "បរិញ្ញាបត្រ MIS វិទ្យាស្ថាន SETEC",
      "edu1.school": "វិទ្យាស្ថាន SETEC",
      "edu1.status": "បញ្ចប់ការសិក្សា៖ ២០២៦",
      "edu1.desc": "ការសិក្សាស៊ីជម្រៅលើប្រព័ន្ធមូលដ្ឋានទិន្នន័យ (PostgreSQL/MySQL) រចនាសម្ព័ន្ធគេហទំព័រ ប្រព័ន្ធ ERP និងការរចនាសូហ្វវែរទំនើប។",
      "edu2.degree": "សញ្ញាបត្របាក់ឌុប (BACII)",
      "edu2.school": "វិទ្យាល័យ ហ៊ុន សែន ស្ទឹងត្រង់",
      "edu2.status": "បញ្ចប់ការសិក្សា៖ ២០១៩",
      "edu2.desc": "បានប្រឡងជាប់សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិថ្នាក់ជាតិប្រកបដោយជោគជ័យ។",

      "guestbook.title": "សៀវភៅ <span class=\"text-cyan\">ភ្ញៀវ</span>",
      "guestbook.subtitle": "សូមទុកមតិយោបល់ ពាក្យជូនពរ ឬសារសួរសុខទុក្ខនៅទីនេះ!",
      "guestbook.sign": "ចុះឈ្មោះក្នុងសៀវភៅភ្ញៀវ",
      "guestbook.nameLabel": "ឈ្មោះរបស់អ្នក",
      "guestbook.messageLabel": "សាររបស់អ្នក",
      "guestbook.submit": "ផ្ញើសារ",
      "guestbook.recentNotes": "សារថ្មីៗ",

      "contact.title": "ទំនាក់ <span class=\"text-cyan\">ទំនង</span>",
      "contact.subtitle": "មានបំណងសហការ ឬជ្រើសរើសខ្ញុំធ្វើការងារ? សូមទាក់ទងមកខ្ញុំគ្រប់ពេល!",
      "contact.email": "អ៊ីមែល",
      "contact.emailDesc": "sotheatheng2002@gmail.com",
      "contact.phone": "លេខទូរស័ព្ទ",
      "contact.phoneDesc": "+855 867 248 55",
      "contact.telegram": "តេឡេក្រាម",
      "contact.telegramDesc": "@sotheatheng2002",
      "contact.linkedin": "LinkedIn",
      "contact.linkedinDesc": "Theng Sothea",
      "contact.sendMsg": "ផ្ញើសារមកកាន់ខ្ញុំផ្ទាល់",
      "contact.nameLabel": "ឈ្មោះពេញ",
      "contact.emailLabel": "អាសយដ្ឋានអ៊ីមែល",
      "contact.subjectLabel": "ប្រធានបទ",
      "contact.messageLabel": "សាររបស់អ្នក",
      "contact.submitBtn": "ផ្ញើសារ",
      "contact.sending": "កំពុងផ្ញើសារ...",
      "contact.success": "សូមអរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។ ខ្ញុំនឹងទាក់ទងត្រឡប់ទៅវិញឆាប់ៗ។",
      "contact.error": "សូមអភ័យទោស! មានបញ្ហាក្នុងការផ្ញើសារ។ សូមព្យាយាមម្តងទៀត ឬផ្ញើអ៊ីមែលមក sotheatheng2002@gmail.com ដោយផ្ទាល់។",
      "contact.keyNotice": "ចំណាំ៖ មិនទាន់បានកំណត់ Web3Forms Key នៅឡើយ។ កំពុងបើកកម្មវិធីអ៊ីមែលជំនួសវិញ...",

      "scroll.top": "រំកិលឡើងលើបង្អស់",
      "scroll.bottom": "រំកិលចុះក្រោមបង្អស់",
      "footer.copy": "&copy; ២០២៦ រចនា និងបង្កើតដោយ <strong class=\"text-cyan\">ថេង សុធា</strong>។ រក្សាសិទ្ធិគ្រប់យ៉ាង។"
    }
  };

  const rolesData = {
    en: [
      "Full Stack Web Developer",
      "Laravel & PHP Specialist",
      "React & JavaScript Enthusiast",
      "UI/UX Minded Creator"
    ],
    km: [
      "អ្នកបង្កើតគេហទំព័រ Full Stack",
      "អ្នកឯកទេស Laravel & PHP",
      "អ្នកអភិវឌ្ឍន៍ React & JS",
      "អ្នករចនា UI/UX"
    ]
  };

  let currentLang = localStorage.getItem("sothea_lang_pref") || "en";
  let roles = rolesData[currentLang] || rolesData.en;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimeoutId = null;

  function applyLanguage(langSetting) {
    currentLang = langSetting === "km" ? "km" : "en";
    localStorage.setItem("sothea_lang_pref", currentLang);
    document.documentElement.setAttribute("lang", currentLang);

    // Update text content of data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang] && translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });

    // Update title and aria-label of data-i18n-title elements
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (translations[currentLang] && translations[currentLang][key]) {
        const text = translations[currentLang][key];
        el.setAttribute("title", text);
        el.setAttribute("aria-label", text);
      }
    });

    // Update active class on language pills
    document.querySelectorAll(".lang-pill-btn").forEach((btn) => {
      const val = btn.getAttribute("data-lang-val");
      if (val === currentLang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Reset typewriter for the selected language
    roles = rolesData[currentLang] || rolesData.en;
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingTimeoutId) clearTimeout(typingTimeoutId);
    typeRole();

    // Update CardNav language if initialized
    if (window.cardNavInstance && typeof window.cardNavInstance.update === 'function') {
      window.cardNavInstance.update({
        lang: currentLang
      });
    }
  }

  // Typewriter Animation
  const typingElement = document.getElementById("typing-text");

  function typeRole() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 45 : 95;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 500;
    }

    typingTimeoutId = setTimeout(typeRole, speed);
  }

  // Bind Language Button Clicks
  document.querySelectorAll(".lang-pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang-val");
      applyLanguage(targetLang);
    });
  });

  /* ==========================================================================
     SCROLL REVEALS OBSERVER
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  function triggerScrollReveals() {
    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  }

  /* ==========================================================================
     2. WELCOME SCREEN CONTROLLER & TOPOGRAPHY 3D BACKGROUND (REACT BITS)
     ========================================================================== */
  const welcomeOverlay = document.getElementById('welcome-overlay');
  const btnEnter = document.getElementById('btn-enter-portfolio');
  const topographyBg = document.getElementById('welcome-topography-bg');

  if (topographyBg && typeof initTopography === 'function') {
    const isPageCyan = window.location.pathname.includes('template-cyan') || (document.documentElement.getAttribute('data-template') === 'cyan' && !window.location.pathname.includes('template-forest'));
    const curTemplate = isPageCyan ? 'cyan' : (localStorage.getItem('sothea_portfolio_template') || document.documentElement.getAttribute('data-template') || 'forest');
    const isCyan = curTemplate === 'cyan';
    const isLight = document.body.classList.contains('light-theme') || (localStorage.getItem('sothea_portfolio_theme') === 'light');
    const topoColor = isCyan ? (isLight ? '#0891b2' : '#06b6d4') : (isLight ? '#00371c' : '#fffbda');

    window.topographyInstance = initTopography(topographyBg, {
      color: topoColor,
      lineCount: 22,
      lineWidth: 1.2,
      elevation: 1,
      foreground: 0.2,
      tilt: 32,
      speed: 0.25,
      direction: 'forward',
      glow: 0.6,
      depthOfField: 0.4,
      fog: 0.35,
      hoverEffect: 'lift',
      clickEffect: 'pulse',
      mouseInteraction: true,
      parallax: 0.5,
      intro: true
    });
  }

  function dismissWelcomeScreen() {
    if (!welcomeOverlay) return;
    welcomeOverlay.classList.add('fade-out');
    if (window.topographyInstance && typeof window.topographyInstance.pause === 'function') {
      window.topographyInstance.pause();
    }
    setTimeout(() => {
      welcomeOverlay.style.display = 'none';
      triggerScrollReveals();
    }, 800);
  }

  if (btnEnter) {
    btnEnter.addEventListener('click', dismissWelcomeScreen);
  }

  // Allow bypassing welcome screen directly via ?skipWelcome query param
  if (new URLSearchParams(window.location.search).has('skipWelcome')) {
    if (welcomeOverlay) {
      welcomeOverlay.style.display = 'none';
      triggerScrollReveals();
    }
  }

  window.addEventListener('keydown', (e) => {
    if (welcomeOverlay && welcomeOverlay.style.display !== 'none' && !welcomeOverlay.classList.contains('fade-out')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dismissWelcomeScreen();
      }
    }
  });

  /* ==========================================================================
     2b. GYROSCOPE CURSOR (REACT BITS PRO)
     An arrow cursor that dynamically turns toward where it moves
     ========================================================================== */
  if (typeof initGyroscopeCursor === 'function') {
    const isPageCyan = window.location.pathname.includes('template-cyan') || (document.documentElement.getAttribute('data-template') === 'cyan' && !window.location.pathname.includes('template-forest'));
    const curTemplate = isPageCyan ? 'cyan' : (localStorage.getItem('sothea_portfolio_template') || document.documentElement.getAttribute('data-template') || 'forest');
    const isCyan = curTemplate === 'cyan';
    const isLight = document.body.classList.contains('light-theme') || (localStorage.getItem('sothea_portfolio_theme') === 'light');

    window.gyroCursorInstance = initGyroscopeCursor({
      color: isCyan ? (isLight ? '#0891b2' : '#06b6d4') : (isLight ? '#00371c' : '#fffbda'),
      glow: isCyan
        ? (isLight ? 'rgba(8, 145, 178, 0.45)' : 'rgba(6, 182, 212, 0.45)')
        : (isLight ? 'rgba(0, 55, 28, 0.25)' : 'rgba(255, 251, 218, 0.45)'),
      badgeText: isCyan ? (isLight ? '#ffffff' : '#07080c') : (isLight ? '#fffbda' : '#00371c')
    });
  }

  /* ==========================================================================
     2c. CARDNAV COMPONENT (REACT BITS)
     Interactive expandable floating card navigation bar with spring physics
     ========================================================================== */
  const cardNavContainer = document.getElementById('card-nav-container');
  if (cardNavContainer && typeof initCardNav === 'function') {
    const isPageCyan = window.location.pathname.includes('template-cyan') || (document.documentElement.getAttribute('data-template') === 'cyan' && !window.location.pathname.includes('template-forest'));
    const curTemplate = isPageCyan ? 'cyan' : (localStorage.getItem('sothea_portfolio_template') || document.documentElement.getAttribute('data-template') || 'forest');
    const isLight = document.body.classList.contains('light-theme') || (localStorage.getItem('sothea_portfolio_theme') === 'light');
    const currentLang = (document.documentElement.getAttribute('lang') || 'en').startsWith('km') ? 'km' : 'en';

    window.cardNavInstance = initCardNav(cardNavContainer, {
      template: curTemplate,
      theme: isLight ? 'light' : 'dark',
      lang: currentLang,
      cardEffect: 'rise',
      stagger: 0.12,
      bounce: 0.22,
      speed: 1.05,
      maxWidth: 1000,
      surface: 'glass',
      menuLabel: true,
      intro: true,
      logo: '<span class="logo-bracket">&lt;</span>Theng <span class="text-cyan">Sothea</span><span class="logo-bracket">/&gt;</span>',
      logoHref: '#home',
      cta: {
        label: currentLang === 'km' ? 'ទាក់ទងមកខ្ញុំ' : 'Get in touch',
        href: '#contact'
      }
    });
  }

  /* ==========================================================================
     3. NAVBAR SCROLL EFFECT & SCROLL SPY
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-item');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 220;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
      mobileNavLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  /* ==========================================================================
     4. THEME SWITCHER (DARK / LIGHT MODE) WITH VIEW TRANSITION RIPPLE
     ========================================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('sothea_portfolio_theme') || localStorage.getItem('theme-preference') || 'dark';

  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('sothea_portfolio_theme', theme);
    localStorage.setItem('theme-preference', theme);

    const isLight = theme === 'light';
    const curTemplate = document.documentElement.getAttribute('data-template') || 'forest';
    const isCyan = curTemplate === 'cyan';

    // Update CardNav theme if initialized
    if (window.cardNavInstance && typeof window.cardNavInstance.update === 'function') {
      window.cardNavInstance.update({
        theme: isLight ? 'light' : 'dark'
      });
    }

    // Update Topography 3D background if initialized
    if (window.topographyInstance && typeof window.topographyInstance.update === 'function') {
      window.topographyInstance.update({
        color: isCyan ? (isLight ? '#0891b2' : '#06b6d4') : (isLight ? '#00371c' : '#fffbda')
      });
    }

    // Update Gyroscope Cursor if initialized
    if (window.gyroCursorInstance && typeof window.gyroCursorInstance.update === 'function') {
      window.gyroCursorInstance.update({
        color: isCyan ? (isLight ? '#0891b2' : '#06b6d4') : (isLight ? '#00371c' : '#fffbda'),
        glow: isCyan
          ? (isLight ? 'rgba(8, 145, 178, 0.45)' : 'rgba(6, 182, 212, 0.45)')
          : (isLight ? 'rgba(0, 55, 28, 0.25)' : 'rgba(255, 251, 218, 0.45)'),
        badgeText: isCyan ? (isLight ? '#ffffff' : '#07080c') : (isLight ? '#fffbda' : '#00371c')
      });
    }

    // Update 3D Lanyard if initialized
    if (window.lanyardInstance && typeof window.lanyardInstance.update === 'function') {
      const backImg = typeof generateBadgeBack === 'function' ? generateBadgeBack(curTemplate) : undefined;
      const strapImg = typeof generateStrap === 'function' ? generateStrap(curTemplate) : undefined;

      window.lanyardInstance.update({
        cardColor: isCyan ? (isLight ? '#f0f9ff' : '#07080c') : (isLight ? '#fffbda' : '#00371c'),
        strapColor: isCyan ? '#06b6d4' : (isLight ? '#00371c' : '#fffbda'),
        backImage: backImg,
        strapImage: strapImg
      });
    }
  };

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      const newTheme = isLight ? 'dark' : 'light';

      // Fallback for browsers without View Transitions or users who prefer reduced motion
      if (!document.startViewTransition || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
        applyTheme(newTheme);
        return;
      }

      // Calculate origin coordinates from the exact center of the toggle button
      const rect = themeToggle.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Calculate maximum radius to fully cover the entire viewport
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Start the view transition and suppress conflicting CSS transitions during DOM update
      const transition = document.startViewTransition(() => {
        const disableTransitions = document.createElement('style');
        disableTransitions.textContent = '*, *::before, *::after { transition: none !important; }';
        document.head.appendChild(disableTransitions);

        applyTheme(newTheme);

        // Force synchronous style computation so snapshot captures the final crisp theme
        void document.body.offsetHeight;

        document.head.removeChild(disableTransitions);
      });

      // Drive the circular wipe using the Web Animations API on the incoming pseudo-element
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${Math.round(x)}px ${Math.round(y)}px)`,
              `circle(${Math.ceil(endRadius)}px at ${Math.round(x)}px ${Math.round(y)}px)`
            ]
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      }).catch(() => {
        // Silently ignore aborts if user triggers rapid successive clicks
      });
    });
  }

  /* ==========================================================================
     4b. TEMPLATE PRESET SWITCHER (FOREST & CREAM vs MODERN CYAN)
     Template 1 (Forest): Accent #00371c & #fffbda
     Template 2 (Cyan):   Accent #06b6d4 & #22d3ee
     ========================================================================== */
  const templateButtons = document.querySelectorAll('.template-pill-btn');
  const isPageCyan = window.location.pathname.includes('template-cyan') || (document.documentElement.getAttribute('data-template') === 'cyan' && !window.location.pathname.includes('template-forest'));
  const savedTemplate = isPageCyan ? 'cyan' : (localStorage.getItem('sothea_portfolio_template') || document.documentElement.getAttribute('data-template') || 'forest');

  const applyTemplate = (templateName) => {
    const validTemplate = (templateName === 'cyan') ? 'cyan' : 'forest';
    document.documentElement.setAttribute('data-template', validTemplate);
    document.body.setAttribute('data-template', validTemplate);
    localStorage.setItem('sothea_portfolio_template', validTemplate);

    templateButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-template-val') === validTemplate);
    });

    const isCyan = validTemplate === 'cyan';
    const isLight = document.body.classList.contains('light-theme');

    // Update 3D Lanyard if initialized
    if (window.lanyardInstance && typeof window.lanyardInstance.update === 'function') {
      const backImg = typeof generateBadgeBack === 'function' ? generateBadgeBack(validTemplate) : undefined;
      const strapImg = typeof generateStrap === 'function' ? generateStrap(validTemplate) : undefined;

      window.lanyardInstance.update({
        cardColor: isCyan ? (isLight ? '#f0f9ff' : '#07080c') : (isLight ? '#fffbda' : '#00371c'),
        strapColor: isCyan ? '#06b6d4' : (isLight ? '#00371c' : '#fffbda'),
        backImage: backImg,
        strapImage: strapImg
      });
    }

    // Update Topography 3D background if initialized
    if (window.topographyInstance && typeof window.topographyInstance.update === 'function') {
      window.topographyInstance.update({
        color: isCyan ? (isLight ? '#0891b2' : '#06b6d4') : (isLight ? '#00371c' : '#fffbda')
      });
    }

    // Update Gyroscope Cursor if initialized
    if (window.gyroCursorInstance && typeof window.gyroCursorInstance.update === 'function') {
      window.gyroCursorInstance.update({
        color: isCyan ? (isLight ? '#0891b2' : '#06b6d4') : (isLight ? '#00371c' : '#fffbda'),
        glow: isCyan
          ? (isLight ? 'rgba(8, 145, 178, 0.45)' : 'rgba(6, 182, 212, 0.45)')
          : (isLight ? 'rgba(0, 55, 28, 0.25)' : 'rgba(255, 251, 218, 0.45)'),
        badgeText: isCyan ? (isLight ? '#ffffff' : '#07080c') : (isLight ? '#fffbda' : '#00371c')
      });
    }

    // Update CardNav if initialized
    if (window.cardNavInstance && typeof window.cardNavInstance.update === 'function') {
      window.cardNavInstance.update({
        template: validTemplate
      });
    }
  };

  applyTemplate(savedTemplate);

  templateButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTemplate = btn.getAttribute('data-template-val');
      applyTemplate(targetTemplate);
    });
  });

  /* ==========================================================================
     5. MOBILE MENU DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      const hamburger = mobileToggle.querySelector('.hamburger-icon');
      const closeIcon = mobileToggle.querySelector('.close-icon');

      if (hamburger && closeIcon) {
        hamburger.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      }
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        const hamburger = mobileToggle.querySelector('.hamburger-icon');
        const closeIcon = mobileToggle.querySelector('.close-icon');
        if (hamburger && closeIcon) {
          hamburger.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }

  /* ==========================================================================
     6. PROJECTS CATEGORY FILTERING & SLIDER ENGINE
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const sliderTrack = document.getElementById('projects-slider-track');
  const prevBtn = document.getElementById('projects-prev-btn');
  const nextBtn = document.getElementById('projects-next-btn');
  const counterEl = document.getElementById('projects-slider-counter');
  const dotsContainer = document.getElementById('projects-slider-dots');

  // Slider State & Helper functions
  const getVisibleCards = () => {
    if (!sliderTrack) return [];
    return Array.from(sliderTrack.querySelectorAll('.project-card')).filter(
      (card) => card.style.display !== 'none'
    );
  };

  const updateSliderUI = () => {
    if (!sliderTrack) return;
    const visibleCards = getVisibleCards();
    if (!visibleCards.length) return;

    const trackScroll = sliderTrack.scrollLeft;
    const cardWidth = visibleCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(sliderTrack).gap) || 28;
    const step = cardWidth + gap;

    const activeIndex = Math.min(
      Math.max(0, Math.round(trackScroll / step)),
      visibleCards.length - 1
    );

    // Update Counter
    if (counterEl) {
      counterEl.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(visibleCards.length).padStart(2, '0')}`;
    }

    // Update Dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
        dot.setAttribute('aria-selected', idx === activeIndex ? 'true' : 'false');
      });
    }

    // Update Arrow disabled state
    if (prevBtn) {
      prevBtn.classList.toggle('is-disabled', trackScroll <= 5);
      prevBtn.setAttribute('aria-disabled', trackScroll <= 5 ? 'true' : 'false');
    }
    if (nextBtn) {
      const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth - 5;
      nextBtn.classList.toggle('is-disabled', trackScroll >= maxScroll);
      nextBtn.setAttribute('aria-disabled', trackScroll >= maxScroll ? 'true' : 'false');
    }
  };

  const buildDots = () => {
    if (!dotsContainer || !sliderTrack) return;
    dotsContainer.innerHTML = '';
    const visibleCards = getVisibleCards();

    visibleCards.forEach((card, idx) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot${idx === 0 ? ' active' : ''}`;
      dot.setAttribute('type', 'button');
      dot.setAttribute('aria-label', `Go to project ${idx + 1}`);
      dot.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => {
        scrollToCard(idx);
      });
      dotsContainer.appendChild(dot);
    });
    updateSliderUI();
  };

  const scrollToCard = (index) => {
    if (!sliderTrack) return;
    const visibleCards = getVisibleCards();
    if (!visibleCards[index]) return;
    const card = visibleCards[index];
    const offset = card.offsetLeft - sliderTrack.offsetLeft;
    sliderTrack.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  };

  if (sliderTrack) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let isDragging = false;

    // Arrow Prev
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const visibleCards = getVisibleCards();
        if (!visibleCards.length) return;
        const cardWidth = visibleCards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(sliderTrack).gap) || 28;
        sliderTrack.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      });
    }

    // Arrow Next
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const visibleCards = getVisibleCards();
        if (!visibleCards.length) return;
        const cardWidth = visibleCards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(sliderTrack).gap) || 28;
        sliderTrack.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      });
    }

    // Mouse Drag Scroll for desktop
    sliderTrack.addEventListener('mousedown', (e) => {
      if (e.target.closest('a, button')) return;
      isDown = true;
      isDragging = false;
      sliderTrack.classList.add('is-dragging');
      startX = e.pageX - sliderTrack.offsetLeft;
      scrollLeft = sliderTrack.scrollLeft;
    });

    sliderTrack.addEventListener('mouseleave', () => {
      isDown = false;
      sliderTrack.classList.remove('is-dragging');
    });

    sliderTrack.addEventListener('mouseup', () => {
      isDown = false;
      sliderTrack.classList.remove('is-dragging');
    });

    sliderTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderTrack.offsetLeft;
      const walk = (x - startX) * 1.4;
      if (Math.abs(walk) > 6) {
        isDragging = true;
      }
      sliderTrack.scrollLeft = scrollLeft - walk;
    });

    sliderTrack.addEventListener('click', (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        isDragging = false;
      }
    }, true);

    // Scroll listener with requestAnimationFrame throttle
    let scrollRaf = 0;
    sliderTrack.addEventListener('scroll', () => {
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(updateSliderUI);
    }, { passive: true });

    // Build initial dots and UI
    buildDots();

    window.addEventListener('resize', updateSliderUI, { passive: true });

    // Expose refresh function
    window.refreshProjectsSlider = () => {
      sliderTrack.scrollTo({ left: 0, behavior: 'smooth' });
      setTimeout(buildDots, 260);
    };
  }

  // Filter Buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 220);
        }
      });

      if (typeof window.refreshProjectsSlider === 'function') {
        window.refreshProjectsSlider();
      }
    });
  });

  /* ==========================================================================
     7. COMMUNITY GUESTBOOK
     ========================================================================== */
  const defaultNotes = [
    {
      name: 'Somnang Keo',
      time: '1 hour ago',
      message: 'The School Management System built with Laravel is really well structured! Great job Theng Sothea.'
    },
    {
      name: 'Vicheka Rin',
      time: '4 hours ago',
      message: 'Impressive Business Cambodia clone. The responsiveness and layout accuracy are spot-on.'
    },
    {
      name: 'Mengly Seng',
      time: 'Yesterday',
      message: 'Great work on the Depreciation System and BookStore POS project! Solid backend architecture and clean DB models.'
    },
    {
      name: 'Sophea Chan',
      time: '2 days ago',
      message: 'Dedicated web developer from SETEC Institute. Proud of your achievements and continuous learning!'
    },
    {
      name: 'Alex Morgan',
      time: '3 days ago',
      message: 'Clean Laravel code, beautiful UI integration, and strong database design. Excellent portfolio!'
    }
  ];

  const streamContainer = document.getElementById('comments-stream');
  const countBadge = document.getElementById('comment-count-badge');
  const guestbookForm = document.getElementById('guestbook-form');

  function getStoredNotes() {
    try {
      const stored = localStorage.getItem('sothea_guestbook_notes');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return defaultNotes;
  }

  function renderNotes() {
    if (!streamContainer) return;
    const notes = getStoredNotes();
    streamContainer.innerHTML = '';

    notes.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'comment-card';
      card.innerHTML = `
        <div class="comment-meta">
          <span class="comment-author">
            <i class="fa-solid fa-circle-user"></i> ${escapeHTML(item.name)}
          </span>
          <span class="comment-time">${escapeHTML(item.time)}</span>
        </div>
        <p class="comment-text">${escapeHTML(item.message)}</p>
      `;
      streamContainer.appendChild(card);
    });

    if (countBadge) {
      countBadge.textContent = `${notes.length} notes`;
    }
  }

  function escapeHTML(str) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  }

  renderNotes();

  if (guestbookForm) {
    guestbookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('guest-name');
      const messageInput = document.getElementById('guest-message');

      if (!nameInput || !messageInput) return;
      const name = nameInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !message) return;

      const notes = getStoredNotes();
      notes.unshift({
        name: name,
        time: 'Just now',
        message: message
      });

      localStorage.setItem('sothea_guestbook_notes', JSON.stringify(notes));
      renderNotes();

      nameInput.value = '';
      messageInput.value = '';

      if (streamContainer) {
        streamContainer.scrollTop = 0;
      }
    });
  }

  // Auto-scroll simulation for guestbook
  let autoScrollActive = true;
  if (streamContainer) {
    streamContainer.addEventListener('mouseenter', () => { autoScrollActive = false; });
    streamContainer.addEventListener('mouseleave', () => { autoScrollActive = true; });

    setInterval(() => {
      if (autoScrollActive && streamContainer.scrollHeight > streamContainer.clientHeight) {
        if (streamContainer.scrollTop + streamContainer.clientHeight >= streamContainer.scrollHeight - 1) {
          streamContainer.scrollTop = 0;
        } else {
          streamContainer.scrollTop += 1;
        }
      }
    }, 45);
  }

  /* ==========================================================================
     8. CONTACT FORM SUBMISSION (WEB3FORMS / EMAIL DISPATCH)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('contact-status');
  const btnSubmitContact = document.getElementById('btn-submit-contact');
  const web3formsKeyInput = document.getElementById('web3forms-key');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Show spinner and disable button
      if (btnSubmitContact) {
        btnSubmitContact.disabled = true;
        const sendingText = (translations[currentLang] && translations[currentLang]["contact.sending"]) || 'Sending...';
        btnSubmitContact.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${sendingText}</span>`;
      }

      const accessKey = web3formsKeyInput ? web3formsKeyInput.value.trim() : '';

      // If user hasn't set their Web3Forms key yet, provide smooth fallback to mailto
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        const name = document.getElementById('contact-name')?.value || '';
        const email = document.getElementById('contact-email')?.value || '';
        const subject = document.getElementById('contact-subject')?.value || 'Portfolio Contact Inquiry';
        const message = document.getElementById('contact-message')?.value || '';

        if (contactStatus) {
          contactStatus.style.display = 'block';
          contactStatus.className = 'contact-status';
          contactStatus.textContent = (translations[currentLang] && translations[currentLang]["contact.keyNotice"]) ||
            'Web3Forms Access Key is not configured yet. Opening your email app instead...';
        }

        // Open mailto fallback directly to sotheatheng2002@gmail.com
        const mailtoUrl = `mailto:sotheatheng2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;

        if (btnSubmitContact) {
          btnSubmitContact.disabled = false;
          const btnText = (translations[currentLang] && translations[currentLang]["contact.submitBtn"]) || 'Send Message';
          btnSubmitContact.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span data-i18n="contact.submitBtn">${btnText}</span>`;
        }
        return;
      }

      // Real Web3Forms AJAX Submission
      try {
        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const jsonBody = JSON.stringify(object);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: jsonBody
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          if (contactStatus) {
            contactStatus.style.display = 'block';
            contactStatus.className = 'contact-status success';
            contactStatus.textContent = (translations[currentLang] && translations[currentLang]["contact.success"]) ||
              'Thank you! Your message has been sent successfully. I will reach out soon.';
          }
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Contact form submission error:', err);
        if (contactStatus) {
          contactStatus.style.display = 'block';
          contactStatus.className = 'contact-status error';
          contactStatus.textContent = (translations[currentLang] && translations[currentLang]["contact.error"]) ||
            'Oops! Something went wrong. Please try again or email directly to sotheatheng2002@gmail.com.';
        }
      } finally {
        if (btnSubmitContact) {
          btnSubmitContact.disabled = false;
          const btnText = (translations[currentLang] && translations[currentLang]["contact.submitBtn"]) || 'Send Message';
          btnSubmitContact.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span data-i18n="contact.submitBtn">${btnText}</span>`;
        }

        setTimeout(() => {
          if (contactStatus) {
            contactStatus.style.display = 'none';
            contactStatus.className = 'contact-status';
          }
        }, 7000);
      }
    });
  }

  /* ==========================================================================
     9. HEART REACTION CONTROLLER
     ========================================================================== */
  const btnReaction = document.getElementById('btn-reaction');
  const reactionCount = document.getElementById('reaction-count');

  let currentReactions = parseInt(localStorage.getItem('sothea_portfolio_reactions') || '168', 10);
  if (reactionCount) reactionCount.textContent = currentReactions;

  if (btnReaction) {
    btnReaction.addEventListener('click', (e) => {
      currentReactions++;
      if (reactionCount) reactionCount.textContent = currentReactions;
      localStorage.setItem('sothea_portfolio_reactions', currentReactions.toString());

      createFloatingHeart(e.clientX, e.clientY);
    });
  }

  function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '<i class="fa-solid fa-heart"></i>';

    if (!x || !y) {
      const rect = btnReaction.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top;
    }

    const randomOffset = (Math.random() - 0.5) * 40;
    heart.style.left = `${x + randomOffset}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1400);
  }

  /* ==========================================================================
     10. CV MODAL PREVIEW
     ========================================================================== */
  const btnOpenCv = document.getElementById('btn-open-cv');
  const cvModal = document.getElementById('cv-modal');
  const btnCloseCv = document.getElementById('btn-close-cv');

  function openCvModal() {
    if (cvModal) {
      cvModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCvModal() {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (btnOpenCv) btnOpenCv.addEventListener('click', openCvModal);
  if (btnCloseCv) btnCloseCv.addEventListener('click', closeCvModal);

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCvModal();
  });

  /* ==========================================================================
     11. FLOATING SCROLL CONTROLS (SCROLL UP & SCROLL DOWN)
     ========================================================================== */
  const scrollUpBtn = document.getElementById('scrollUp');
  const scrollDownBtn = document.getElementById('scrollDown');
  const btnBackToTop = document.getElementById('btn-back-to-top');

  function updateFloatingScrollButtons() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    ) - window.innerHeight;

    if (scrollUpBtn) {
      if (scrollY <= 80) {
        scrollUpBtn.classList.add('inactive');
      } else {
        scrollUpBtn.classList.remove('inactive');
      }
    }

    if (scrollDownBtn) {
      if (scrollY >= maxScroll - 80) {
        scrollDownBtn.classList.add('inactive');
      } else {
        scrollDownBtn.classList.remove('inactive');
      }
    }
  }

  if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', updateFloatingScrollButtons, { passive: true });
  window.addEventListener('resize', updateFloatingScrollButtons, { passive: true });
  updateFloatingScrollButtons();

  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     13. LANYARD 3D INTERACTIVE COMPONENT (REACT BITS)
     Adaptive to active template: Forest & Cream or Modern Cyan
     ========================================================================== */
  const lanyardContainer = document.getElementById('lanyard-container');
  if (lanyardContainer && typeof initLanyard === 'function') {
    const curTemplate = localStorage.getItem('sothea_portfolio_template') || 'forest';
    const isCyan = curTemplate === 'cyan';
    const badgeBack = typeof generateBadgeBack === 'function' ? generateBadgeBack(curTemplate) : 'assets/sothea_pf.png';
    const strapBand = typeof generateStrap === 'function' ? generateStrap(curTemplate) : undefined;
    const frontImg = (window.location.protocol === 'file:' && window.SOTHEA_PF_DATAURL)
      ? window.SOTHEA_PF_DATAURL
      : 'assets/sothea_pf.png';

    const isLight = document.body.classList.contains('light-theme') || (localStorage.getItem('sothea_portfolio_theme') === 'light');

    window.lanyardInstance = initLanyard(lanyardContainer, {
      frontImage: frontImg,
      backImage: badgeBack,
      strapImage: strapBand,
      cardColor: isCyan ? (isLight ? '#f0f9ff' : '#07080c') : (isLight ? '#fffbda' : '#00371c'),
      strapColor: isCyan ? '#06b6d4' : (isLight ? '#00371c' : '#fffbda'),
      finish: 'glossy',
      metal: 'silver',
      breeze: 0.35,
      damping: 0.5,
      elasticity: 0.5,
      gravity: 1,
      strapLength: 0.22,
      size: 0.54,
      interactive: true,
      intro: true
    });
  }

  // Initial runs
  applyLanguage(currentLang);
  triggerScrollReveals();
});
