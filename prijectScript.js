
    // Global variables
    let selectedTemplate = null;
    let profileImage = null;
    let currentLanguage = 'en';
    
    // Initialize PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';
    
    // Translations
    const translations = {
      en: {
        landingTitle: "Advanced CV Generator",
        landingSubtitle: "Create professional resumes with stunning designs in minutes. Select a template to get started!",
        classicTitle: "Classic",
        classicSubtitle: "Traditional & Professional",
        classicBackTitle: "Classic Template",
        classicBackText: "Elegant and timeless design perfect for traditional industries. Features a clean layout with a professional touch.",
        classicBtn: "Select Template",
        minimalTitle: "Minimal",
        minimalSubtitle: "Clean & Modern",
        minimalBackTitle: "Minimal Template",
        minimalBackText: "Simple yet sophisticated design with ample white space. Ideal for tech and creative industries.",
        minimalBtn: "Select Template",
        graphicTitle: "Graphic",
        graphicSubtitle: "Creative & Bold",
        graphicBackTitle: "Graphic Template",
        graphicBackText: "Modern design with bold colors and creative layout. Perfect for designers and marketing professionals.",
        graphicBtn: "Select Template",
        personalInfoTitle: "Personal Information",
        uploadCvText: "Upload CV (PDF/Word)",
        uploadPhotoText: "Upload Profile Photo",
        fullNameLabel: "Full Name",
        jobTitleLabel: "Job Title",
        emailLabel: "Email",
        phoneLabel: "Phone",
        dobLabel: "Date of Birth",
        addressLabel: "Address",
        professionalTitle: "Professional Details",
        summaryLabel: "Professional Summary",
        educationLabel: "Education",
        experienceLabel: "Work Experience",
        skillsLabel: "Skills",
        referencesLabel: "References",
        languagesTitle: "Professional Languages",
        previewBtnText: "Preview CV",
        downloadBtnText: "Download PDF",
        previewTitle: "CV Preview",
        previewName: "Your Name Here",
        previewTitleText: "Professional Title",
        previewMessage: "Fill out the form to generate your CV preview...",
        backBtnText: "Back",
        addLanguageText: "Add Language",
        formBackBtnText: "Back"
      },
      de: {
        landingTitle: "Fortgeschrittener Lebenslauf-Generator",
        landingSubtitle: "Erstellen Sie in Minuten professionelle Lebensläufe mit atemberaubenden Designs. Wählen Sie eine Vorlage aus, um zu beginnen!",
        classicTitle: "Klassisch",
        classicSubtitle: "Traditionell & Professionell",
        classicBackTitle: "Klassische Vorlage",
        classicBackText: "Elegantes und zeitloses Design, perfekt für traditionelle Branchen. Zeichnet sich durch ein klares Layout mit professionellem Touch aus.",
        classicBtn: "Vorlage auswählen",
        minimalTitle: "Minimalistisch",
        minimalSubtitle: "Sauber & Modern",
        minimalBackTitle: "Minimalistische Vorlage",
        minimalBackText: "Einfaches und doch anspruchsvolles Design mit viel Weißraum. Ideal für Technologie- und Kreativbranchen.",
        minimalBtn: "Vorlage auswählen",
        graphicTitle: "Grafisch",
        graphicSubtitle: "Kreativ & Mutig",
        graphicBackTitle: "Grafische Vorlage",
        graphicBackText: "Modernes Design mit kräftigen Farben und kreativem Layout. Perfekt für Designer und Marketingexperten.",
        graphicBtn: "Vorlage auswählen",
        personalInfoTitle: "Persönliche Informationen",
        uploadCvText: "Lebenslauf hochladen (PDF/Word)",
        uploadPhotoText: "Profilfoto hochladen",
        fullNameLabel: "Vollständiger Name",
        jobTitleLabel: "Berufsbezeichnung",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        dobLabel: "Geburtsdatum",
        addressLabel: "Adresse",
        professionalTitle: "Berufliche Details",
        summaryLabel: "Berufliche Zusammenfassung",
        educationLabel: "Bildung",
        experienceLabel: "Berufserfahrung",
        skillsLabel: "Fähigkeiten",
        referencesLabel: "Referenzen",
        languagesTitle: "Fremdsprachenkenntnisse",
        previewBtnText: "Lebenslauf-Vorschau",
        downloadBtnText: "PDF herunterladen",
        previewTitle: "Lebenslauf-Vorschau",
        previewName: "Ihr Name hier",
        previewTitleText: "Berufsbezeichnung",
        previewMessage: "Füllen Sie das Formular aus, um Ihre Lebenslauf-Vorschau zu generieren...",
        backBtnText: "Zurück",
        addLanguageText: "Sprache hinzufügen",
        formBackBtnText: "Zurück"
      },
      fa: {
        landingTitle: "مولد رزومه پیشرفته",
        landingSubtitle: "رزومه‌های حرفه‌ای با طراحی‌های خیره کننده در چند دقیقه ایجاد کنید. یک قالب انتخاب کنید تا شروع کنید!",
        classicTitle: "کلاسیک",
        classicSubtitle: "سنتی و حرفه‌ای",
        classicBackTitle: "قالب کلاسیک",
        classicBackText: "طراحی شیک و بی‌زمان برای صنایع سنتی مناسب است. دارای چیدمانی تمیز با ظاهری حرفه‌ای.",
        classicBtn: "انتخاب قالب",
        minimalTitle: "مینیمال",
        minimalSubtitle: "تمیز و مدرن",
        minimalBackTitle: "قالب مینیمال",
        minimalBackText: "طراحی ساده اما پیچیده با فضای سفید فراوان. مناسب برای صنایع فناوری و خلاق.",
        minimalBtn: "انتخاب قالب",
        graphicTitle: "گرافیکی",
        graphicSubtitle: "خلاقانه و جسورانه",
        graphicBackTitle: "قالب گرافیکی",
        graphicBackText: "طراحی مدرن با رنگ‌های پررنگ و چیدمان خلاقانه. مناسب برای طراحان و متخصصان بازاریابی.",
        graphicBtn: "انتخاب قالب",
        personalInfoTitle: "اطلاعات شخصی",
        uploadCvText: "بارگذاری رزومه (PDF/Word)",
        uploadPhotoText: "بارگذاری عکس پروفایل",
        fullNameLabel: "نام کامل",
        jobTitleLabel: "عنوان شغلی",
        emailLabel: "ایمیل",
        phoneLabel: "تلفن",
        dobLabel: "تاریخ تولد",
        addressLabel: "آدرس",
        professionalTitle: "جزئیات حرفه‌ای",
        summaryLabel: "خلاصه حرفه‌ای",
        educationLabel: "تحصیلات",
        experienceLabel: "سابقه کار",
        skillsLabel: "مهارت‌ها",
        referencesLabel: "مراجع",
        languagesTitle: "زبان‌های حرفه‌ای",
        previewBtnText: "پیش‌نمایش رزومه",
        downloadBtnText: "دانلود PDF",
        previewTitle: "پیش‌نمایش رزومه",
        previewName: "نام شما اینجا",
        previewTitleText: "عنوان شغلی",
        previewMessage: "برای ایجاد پیش‌نمایش رزومه خود، فرم را پر کنید...",
        backBtnText: "بازگشت",
        addLanguageText: "افزودن زبان",
        formBackBtnText: "بازگشت"
      },
      uk: {
        landingTitle: "Розширений генератор резюме",
        landingSubtitle: "Створюйте професійні резюме з вражаючим дизайном за кілька хвилин. Виберіть шаблон, щоб почати!",
        classicTitle: "Класичний",
        classicSubtitle: "Традиційний та професійний",
        classicBackTitle: "Класичний шаблон",
        classicBackText: "Елегантний та вічний дизайн, ідеальний для традиційних галузей. Має чистий макет з професійним виглядом.",
        classicBtn: "Вибрати шаблон",
        minimalTitle: "Мінімалістичний",
        minimalSubtitle: "Чистий та сучасний",
        minimalBackTitle: "Мінімалістичний шаблон",
        minimalBackText: "Простий, але витончений дизайн з великою кількістю вільного простору. Ідеально підходить для технологічних та креативних галузей.",
        minimalBtn: "Вибрати шаблон",
        graphicTitle: "Графічний",
        graphicSubtitle: "Креативний та сміливий",
        graphicBackTitle: "Графічний шаблон",
        graphicBackText: "Сучасний дизайн з яскравими кольорами та креативним макетом. Ідеально підходить для дизайнерів та маркетологів.",
        graphicBtn: "Вибрати шаблон",
        personalInfoTitle: "Особиста інформація",
        uploadCvText: "Завантажити резюме (PDF/Word)",
        uploadPhotoText: "Завантажити фото профілю",
        fullNameLabel: "Повне ім'я",
        jobTitleLabel: "Посада",
        emailLabel: "Електронна пошта",
        phoneLabel: "Телефон",
        dobLabel: "Дата народження",
        addressLabel: "Адреса",
        professionalTitle: "Професійні деталі",
        summaryLabel: "Професійний профіль",
        educationLabel: "Освіта",
        experienceLabel: "Досвід роботи",
        skillsLabel: "Навички",
        referencesLabel: "Рекомендації",
        languagesTitle: "Професійні мови",
        previewBtnText: "Попередній перегляд резюме",
        downloadBtnText: "Завантажити PDF",
        previewTitle: "Попередній перегляд резюме",
        previewName: "Ваше ім'я тут",
        previewTitleText: "Професійна посада",
        previewMessage: "Заповніть форму, щоб побачити попередній перегляд вашого резюме...",
        backBtnText: "Назад",
        addLanguageText: "Додати мову",
        formBackBtnText: "Назад"
      }
    };
    
    // Select template function
    function selectTemplate(template) {
      selectedTemplate = template;
      document.getElementById('landingPage').style.display = 'none';
      document.getElementById('formPage').style.display = 'block';
      
      // Apply selected template to preview
      const preview = document.getElementById('cvPreview');
      preview.className = 'cv-preview template-' + template;
      preview.innerHTML = '<p id="previewMessage">' + translations[currentLanguage].previewMessage + '</p>';
      
      // Update form page language
      updateFormLanguage();
    }
    
    // Go back to landing page
    function goBack() {
      document.getElementById('formPage').style.display = 'none';
      document.getElementById('landingPage').style.display = 'flex';
      resetForm();
    }
    
    // Reset form to initial state
    function resetForm() {
      document.getElementById('fullName').value = '';
      document.getElementById('jobTitle').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('address').value = '';
      document.getElementById('summary').value = '';
      document.getElementById('education').value = '';
      document.getElementById('experience').value = '';
      document.getElementById('skills').value = '';
      document.getElementById('references').value = '';
      document.getElementById('fileName').textContent = 'No file selected';
      document.getElementById('imagePreview').innerHTML = '<i class="fas fa-user"></i>';
      profileImage = null;
      
      // Reset languages
      const container = document.getElementById('languagesContainer');
      container.innerHTML = `
        <div class="language-item">
          <input type="text" placeholder="${translations[currentLanguage].languagesTitle.split(' ')[0]}" class="language-name">
          <select class="language-level">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Fluent">Fluent</option>
            <option value="Native">Native</option>
          </select>
          <button class="remove-language-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
      
      // Reset preview
      document.getElementById('cvPreview').innerHTML = '<p id="previewMessage">' + translations[currentLanguage].previewMessage + '</p>';
    }
    
    // Change language function
    function changeLanguage(lang) {
      currentLanguage = lang;
      document.getElementById('languageSelector').value = lang;
      document.getElementById('formLanguageSelector').value = lang;
      
      // Update landing page text
      document.getElementById('landingTitle').textContent = translations[lang].landingTitle;
      document.getElementById('landingSubtitle').textContent = translations[lang].landingSubtitle;
      
      // Update template cards
      document.getElementById('classicTitle').textContent = translations[lang].classicTitle;
      document.getElementById('classicSubtitle').textContent = translations[lang].classicSubtitle;
      document.getElementById('classicBackTitle').textContent = translations[lang].classicBackTitle;
      document.getElementById('classicBackText').textContent = translations[lang].classicBackText;
      document.getElementById('classicBtn').textContent = translations[lang].classicBtn;
      
      document.getElementById('minimalTitle').textContent = translations[lang].minimalTitle;
      document.getElementById('minimalSubtitle').textContent = translations[lang].minimalSubtitle;
      document.getElementById('minimalBackTitle').textContent = translations[lang].minimalBackTitle;
      document.getElementById('minimalBackText').textContent = translations[lang].minimalBackText;
      document.getElementById('minimalBtn').textContent = translations[lang].minimalBtn;
      
      document.getElementById('graphicTitle').textContent = translations[lang].graphicTitle;
      document.getElementById('graphicSubtitle').textContent = translations[lang].graphicSubtitle;
      document.getElementById('graphicBackTitle').textContent = translations[lang].graphicBackTitle;
      document.getElementById('graphicBackText').textContent = translations[lang].graphicBackText;
      document.getElementById('graphicBtn').textContent = translations[lang].graphicBtn;
      
      // Update form page if visible
      if (document.getElementById('formPage').style.display === 'block') {
        updateFormLanguage();
      }
    }
    
    // Update form page language
    function updateFormLanguage() {
      const lang = currentLanguage;
      
      // Update form titles
      document.getElementById('personalInfoTitle').textContent = translations[lang].personalInfoTitle;
      document.getElementById('uploadCvText').textContent = translations[lang].uploadCvText;
      document.getElementById('uploadPhotoText').textContent = translations[lang].uploadPhotoText;
      document.getElementById('fullNameLabel').textContent = translations[lang].fullNameLabel;
      document.getElementById('jobTitleLabel').textContent = translations[lang].jobTitleLabel;
      document.getElementById('emailLabel').textContent = translations[lang].emailLabel;
      document.getElementById('phoneLabel').textContent = translations[lang].phoneLabel;
      document.getElementById('dobLabel').textContent = translations[lang].dobLabel;
      document.getElementById('addressLabel').textContent = translations[lang].addressLabel;
      document.getElementById('professionalTitle').textContent = translations[lang].professionalTitle;
      document.getElementById('summaryLabel').textContent = translations[lang].summaryLabel;
      document.getElementById('educationLabel').textContent = translations[lang].educationLabel;
      document.getElementById('experienceLabel').textContent = translations[lang].experienceLabel;
      document.getElementById('skillsLabel').textContent = translations[lang].skillsLabel;
      document.getElementById('referencesLabel').textContent = translations[lang].referencesLabel;
      document.getElementById('languagesTitle').textContent = translations[lang].languagesTitle;
      document.getElementById('previewBtnText').textContent = translations[lang].previewBtnText;
      document.getElementById('downloadBtnText').textContent = translations[lang].downloadBtnText;
      document.getElementById('previewTitle').textContent = translations[lang].previewTitle;
      document.getElementById('backBtnText').textContent = translations[lang].backBtnText;
      document.getElementById('addLanguageText').textContent = translations[lang].addLanguageText;
      document.getElementById('formBackBtnText').textContent = translations[lang].formBackBtnText;
      
      // Update preview placeholders
      const preview = document.getElementById('cvPreview');
      if (preview.innerHTML.includes('previewMessage')) {
        preview.innerHTML = '<p id="previewMessage">' + translations[lang].previewMessage + '</p>';
      }
      
      // Update language placeholder
      document.querySelectorAll('.language-name').forEach(input => {
        if (!input.value) {
          input.placeholder = translations[lang].languagesTitle.split(' ')[0];
        }
      });
    }
    
    // Handle profile picture upload
    document.getElementById('profilePic').addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          profileImage = event.target.result;
          const preview = document.getElementById('imagePreview');
          preview.innerHTML = `<img src="${profileImage}" alt="Profile Preview">`;
        }
        reader.readAsDataURL(file);
      }
    });
    
    // Handle document upload and extraction
    document.getElementById('docInput').addEventListener('change', async function(e) {
      const file = e.target.files[0];
      if (!file) return;
      
      document.getElementById('fileName').textContent = file.name;
      
      try {
        let text = '';
        
        if (file.name.endsWith('.pdf')) {
          text = await extractTextFromPDF(file);
        } else if (file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
          text = await extractTextFromDocx(file);
        } else {
          alert('Please select a PDF or Word document');
          return;
        }
        
        if (text) {
          extractInfoFromText(text);
        } else {
          alert('Error extracting text from document');
        }
      } catch (error) {
        console.error('Document processing error:', error);
        alert('Error processing document: ' + error.message);
      }
    });
    
    // Extract text from PDF
    async function extractTextFromPDF(file) {
      const arrayBuffer = await file.arrayBuffer();
      const typedArray = new Uint8Array(arrayBuffer);
      
      try {
        const pdf = await pdfjsLib.getDocument(typedArray).promise;
        let text = '';
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + '\n';
        }
        
        return text;
      } catch (error) {
        console.error('PDF processing error:', error);
        throw new Error('Failed to extract text from PDF');
      }
    }
    
    // Extract text from DOCX
    async function extractTextFromDocx(file) {
      const arrayBuffer = await file.arrayBuffer();
      
      try {
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value;
      } catch (error) {
        console.error('DOCX processing error:', error);
        throw new Error('Failed to extract text from Word document');
      }
    }
    
    // Extract info from text and fill form
    function extractInfoFromText(text) {
      // Clear previous data
      document.getElementById('fullName').value = '';
      document.getElementById('jobTitle').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('address').value = '';
      document.getElementById('summary').value = '';
      document.getElementById('education').value = '';
      document.getElementById('experience').value = '';
      document.getElementById('skills').value = '';
      
      // Extract name (first line with 2+ words)
      const nameMatch = text.match(/^([A-Z][a-z]+(\s+[A-Z][a-z]+)+)/m);
      if (nameMatch) {
        document.getElementById('fullName').value = nameMatch[0].trim();
      }
      
      // Extract email
      const emailRegex = /[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/g;
      const emailMatch = text.match(emailRegex);
      if (emailMatch) {
        document.getElementById('email').value = emailMatch[0];
      }
      
      // Extract phone (international format)
      const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
      const phoneMatch = text.match(phoneRegex);
      if (phoneMatch) {
        document.getElementById('phone').value = phoneMatch[0];
      }
      
      // Extract education (look for degree keywords)
      const eduKeywords = ['BACHELOR', 'MASTER', 'PHD', 'DEGREE', 'EDUCATION', 'UNIVERSITY', 'COLLEGE'];
      const eduSection = findSection(text, eduKeywords);
      if (eduSection) {
        document.getElementById('education').value = eduSection;
      }
      
      // Extract experience (look for job keywords)
      const expKeywords = ['EXPERIENCE', 'WORK HISTORY', 'EMPLOYMENT', 'CAREER', 'JOBS', 'POSITIONS'];
      const expSection = findSection(text, expKeywords);
      if (expSection) {
        document.getElementById('experience').value = expSection;
      }
      
      // Extract skills (look for skills section)
      const skillsKeywords = ['SKILLS', 'COMPETENCIES', 'EXPERTISE', 'TECHNOLOGIES'];
      const skillsSection = findSection(text, skillsKeywords);
      if (skillsSection) {
        document.getElementById('skills').value = skillsSection;
      }
      
      // Extract summary (first paragraph)
      const summaryMatch = text.match(/(.*?)(?:\n\n|\r\r|\r\n\r\n)/s);
      if (summaryMatch) {
        document.getElementById('summary').value = summaryMatch[1].trim();
      }
      
      // Show success message
      alert(translations[currentLanguage].previewBtnText + ' ' + translations[currentLanguage].previewMessage);
    }
    
    // Find section by keywords
    function findSection(text, keywords) {
      for (const keyword of keywords) {
        const regex = new RegExp(`${keyword}[\\s\\S]*?(?=(?:${keywords.join('|')}|$))`, 'i');
        const match = text.match(regex);
        if (match) {
          return match[0].replace(new RegExp(keyword, 'i'), '').trim();
        }
      }
      return null;
    }
    
    // Add language functionality
    document.getElementById('addLanguageBtn').addEventListener('click', function() {
      const container = document.getElementById('languagesContainer');
      const newItem = document.createElement('div');
      newItem.className = 'language-item';
      newItem.innerHTML = `
        <input type="text" placeholder="${translations[currentLanguage].languagesTitle.split(' ')[0]}" class="language-name">
        <select class="language-level">
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </select>
        <button class="remove-language-btn">
          <i class="fas fa-trash"></i>
        </button>
      `;
      container.appendChild(newItem);
      
      // Add event listener for the remove button
      newItem.querySelector('.remove-language-btn').addEventListener('click', function() {
        container.removeChild(newItem);
      });
    });
    
    // Generate CV preview
    function generateCV() {
      const preview = document.getElementById('cvPreview');
      const name = document.getElementById('fullName').value || translations[currentLanguage].previewName;
      const title = document.getElementById('jobTitle').value || translations[currentLanguage].previewTitleText;
      const email = document.getElementById('email').value || '';
      const phone = document.getElementById('phone').value || '';
      const address = document.getElementById('address').value || '';
      const summary = document.getElementById('summary').value || '';
      const education = document.getElementById('education').value || '';
      const experience = document.getElementById('experience').value || '';
      const skills = document.getElementById('skills').value || '';
      const references = document.getElementById('references').value || '';
      
      // Collect languages data
      const languages = [];
      document.querySelectorAll('.language-item').forEach(item => {
        const name = item.querySelector('.language-name').value;
        const level = item.querySelector('.language-level').value;
        if (name) {
          languages.push({ name, level });
        }
      });
      
      // Generate HTML based on selected template
      let html = '';
      
      if (selectedTemplate === 'classic') {
        html = `
          <div class="cv-header">
            ${profileImage ? `<img src="${profileImage}" class="profile-img" alt="Profile">` : ''}
            <h1 class="cv-name">${name}</h1>
            <h2 class="cv-title">${title}</h2>
            <p>${email} | ${phone} | ${address}</p>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].summaryLabel}</h3>
            <p>${summary}</p>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].experienceLabel}</h3>
            <div class="cv-item">
              <pre>${experience}</pre>
            </div>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].educationLabel}</h3>
            <div class="cv-item">
              <pre>${education}</pre>
            </div>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].skillsLabel}</h3>
            <div class="cv-item">
              <pre>${skills}</pre>
            </div>
          </div>
          
          ${languages.length > 0 ? `
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].languagesTitle}</h3>
            <div class="cv-item">
              <ul>
                ${languages.map(lang => `<li><strong>${lang.name}:</strong> ${lang.level}</li>`).join('')}
              </ul>
            </div>
          </div>
          ` : ''}
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].referencesLabel}</h3>
            <div class="cv-item">
              <pre>${references}</pre>
            </div>
          </div>
        `;
      } 
      else if (selectedTemplate === 'minimal') {
        html = `
          <div class="cv-header">
            ${profileImage ? `<img src="${profileImage}" class="profile-img" alt="Profile">` : ''}
            <div class="header-info">
              <h1 class="cv-name">${name}</h1>
              <h2 class="cv-title">${title}</h2>
              <p>${email} | ${phone}</p>
              <p>${address}</p>
            </div>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].summaryLabel}</h3>
            <p>${summary}</p>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].experienceLabel}</h3>
            <pre>${experience}</pre>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].educationLabel}</h3>
            <pre>${education}</pre>
          </div>
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].skillsLabel}</h3>
            <pre>${skills}</pre>
          </div>
          
          ${languages.length > 0 ? `
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].languagesTitle}</h3>
            <div class="cv-item">
              <ul>
                ${languages.map(lang => `<li><strong>${lang.name}:</strong> ${lang.level}</li>`).join('')}
              </ul>
            </div>
          </div>
          ` : ''}
          
          <div class="cv-section">
            <h3 class="section-title">${translations[currentLanguage].referencesLabel}</h3>
            <pre>${references}</pre>
          </div>
        `;
      } 
      else if (selectedTemplate === 'graphic') {
        html = `
          <div class="cv-header">
            <h1 class="cv-name">${name}</h1>
            <h2 class="cv-title">${title}</h2>
          </div>
          
          <div class="cv-content">
            <div class="sidebar">
              ${profileImage ? `<img src="${profileImage}" class="sidebar-img" alt="Profile">` : ''}
              
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].personalInfoTitle}</h3>
                <p><i class="fas fa-envelope"></i> ${email}</p>
                <p><i class="fas fa-phone"></i> ${phone}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
              </div>
              
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].skillsLabel}</h3>
                <pre>${skills}</pre>
              </div>
              
              ${languages.length > 0 ? `
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].languagesTitle}</h3>
                <ul>
                  ${languages.map(lang => `<li><strong>${lang.name}:</strong> ${lang.level}</li>`).join('')}
                </ul>
              </div>
              ` : ''}
            </div>
            
            <div class="main-content">
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].summaryLabel}</h3>
                <p>${summary}</p>
              </div>
              
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].experienceLabel}</h3>
                <pre>${experience}</pre>
              </div>
              
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].educationLabel}</h3>
                <pre>${education}</pre>
              </div>
              
              <div class="cv-section">
                <h3 class="section-title">${translations[currentLanguage].referencesLabel}</h3>
                <pre>${references}</pre>
              </div>
            </div>
          </div>
        `;
      }
      
      preview.innerHTML = html;
      preview.scrollTop = 0;
    }
    
    // Download as PDF
    function downloadPDF() {
      const { jsPDF } = window.jspdf;
      const element = document.getElementById('cvPreview');
      
      html2canvas(element, {
        scale: 2,
        useCORS: true
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        
        // Add the image
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        
        // Download the PDF
        pdf.save('my-cv.pdf');
      });
    }
    
    // Initialize
    window.onload = function() {
      // Initialize date input with today's date
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('dob').value = today;
      
      // Set default language
      changeLanguage('en');
      
      // Add event listener for the first remove button
      document.querySelector('.remove-language-btn')?.addEventListener('click', function() {
        const container = document.getElementById('languagesContainer');
        if (container.children.length > 1) {
          container.removeChild(this.parentElement);
        }
      });
      
      // Initialize PDF.js worker
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';
      } catch (error) {
        console.error('PDF.js worker initialization error:', error);
      }
    };