// ============================================================
// portfolioData.js — Centralized configuration for Hani Sri Burugupalli's Portfolio
// Verified personal information, projects, certificates, and credentials.
// ============================================================

export const personalInfo = {
  name: "Hani Sri Burugupalli",
  firstName: "Hani Sri",
  brandName: "Hani",
  title: "AI/ML Developer & Full Stack Developer",
  location: "Tanuku, Andhra Pradesh, India",
  phone: "+91 9533697777",
  emails: {
    primary: "haniburugupalli83@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science undergraduate specializing in AI and Machine Learning, with hands-on experience designing NLP systems, full-stack AI-powered applications, and machine learning pipelines using Python. Developed independent projects spanning generative AI, natural language processing, and adaptive intelligence platforms, and completed a machine learning research internship at NIT Tiruchirappalli. Skilled in REST API design, prompt engineering, and collaborative Git-based development workflows.",
  resumeUrl: "/Hani_Sri_Burugupalli_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/hani-burugupalli-02b02a331/",
  email: "haniburugupalli83@gmail.com",
  phone: "+919533697777",
};

export const heroContent = {
  greeting: "Hi, I'm Hani Sri",
  titleHighlight: "AI/ML & Full Stack Developer",
  subtitle:
    "Building Intelligent, AI-Powered Applications — specializing in Natural Language Processing, Generative AI, and full-stack solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:haniburugupalli83@gmail.com?subject=Inquiry – Portfolio&body=Hello Hani Sri,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Hani_Sri_Burugupalli_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Hani Sri</span>, an AI/ML and Full Stack Developer based in Tanuku, Andhra Pradesh, passionate about building intelligent applications, developing AI-powered solutions, and using technology to solve real-world problems.`,
  techStack: ["Python", "NLP", "Generative AI", "React.js", "Node.js", "Machine Learning"],
};

// Process Data (AI/ML & Full-Stack Workflow)
export const skillsContent = {
  badge: "My Engineering Process",
  heading: "Architecting Intelligent & Scalable AI Systems",
  description:
    "I follow a structured, hypothesis-driven engineering pipeline to clean data, train models, and deploy reliable full-stack web applications.",
  cards: [
    {
      number: "01",
      title: "Problem Definition & Scoping",
      text: "Analyzing real-world requirements, formulating AI/ML hypotheses, selecting evaluation metrics, and architecting modular full-stack solutions."
    },
    {
      number: "02",
      title: "Data Pipelines & Preprocessing",
      text: "Designing automated data preprocessing, text tokenization, anomaly cleansing, and feature engineering workflows in Python."
    },
    {
      number: "03",
      title: "Model Development & NLP",
      text: "Training predictive ML architectures, implementing NLP similarity metrics, and engineering prompts for generative AI pipelines."
    },
    {
      number: "04",
      title: "REST API & Backend Design",
      text: "Building robust, secure backend microservices with Express.js and Python, parameterized SQL queries, and strict input validation."
    },
    {
      number: "05",
      title: "Frontend & Cloud Deployment",
      text: "Crafting intuitive React.js user interfaces, integrating live API endpoints, and deploying production builds with high availability."
    }
  ],
  endText: "Ready to innovate!"
};

// Technical Skills
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript"]
    },
    {
      title: "Artificial Intelligence & ML",
      skills: ["Natural Language Processing (NLP)", "Generative AI", "Large Language Models (LLMs)", "Prompt Engineering", "Machine Learning"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Responsive UI", "Component Architecture"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST API Design", "Input Validation"]
    },
    {
      title: "Databases & Storage",
      skills: ["SQL", "Relational Databases", "SQLite", "Database Modeling"]
    },
    {
      title: "Core CS & Engineering Tools",
      skills: ["Data Structures & Algorithms", "Git", "GitHub", "VS Code", "Netlify"]
    }
  ]
};

// Projects Data (7 confirmed projects)
export const projects = [
  {
    id: "medlingo",
    number: "01",
    badge: "🧠 AI Medical Translator · Flagship",
    title: "MedLingo – AI Medical Translator",
    description:
      "Engineered a real-time translation pipeline integrating third-party translation APIs, converting clinical text into patient-friendly, context-aware explanations. Applied prompt engineering and medical terminology extraction techniques to improve contextual translation accuracy for non-technical users.",
    techTags: ["Python", "NLP", "Generative AI", "LLMs", "REST APIs"],
    links: {
      demo: "https://medlingo-frontend.onrender.com/",
    },
    isFlagship: true,
  },
  {
    id: "ai-jobmatch",
    number: "02",
    badge: "📊 NLP & Cosine Similarity Engine",
    title: "AI JobMatch Tracker",
    description:
      "Built an NLP-based job matching engine using skill extraction and cosine similarity to score resume-to-job relevance and surface candidate skill gaps. Designed and implemented a full CRUD REST API with parameterized queries and input validation, powering a real-time tracking dashboard with search and filtering.",
    techTags: ["NLP", "Node.js", "Express.js", "SQLite", "REST API"],
    links: {
      demo: "https://ai-job-match-y8wg.onrender.com/",
    },
    isFlagship: false,
  },
  {
    id: "smartride",
    number: "03",
    badge: "🚗 Smart Carpooling & Routing",
    title: "SmartRide – Smart Carpooling Platform",
    description:
      "Developed a full-stack carpooling and route-matching platform connecting users to suitable rides based on route overlap, pickup distance, travel timing, and recurring commute patterns. Implemented location-based services, route-matching algorithms, user authentication, and verified-user ride profiles within a responsive UI to streamline daily commute coordination.",
    techTags: ["React.js", "Node.js", "Express.js", "Route Matching"],
    links: {
      demo: "https://smartride-nlvr.onrender.com/",
    },
    isFlagship: false,
  },
  {
    id: "skillbridge-ai",
    number: "04",
    badge: "🎓 Adaptive Career Intelligence",
    title: "SkillBridge AI – Career Intelligence Platform",
    description:
      "Built an AI-powered platform analyzing resumes, project evidence, and assessment performance to verify skills and identify skill gaps for students and fresh graduates. Implemented adaptive assessments, career-readiness scoring, a recommendation engine, job matching, and personalized learning roadmaps to guide users toward relevant career opportunities.",
    techTags: ["React.js", "Python", "AI/ML", "NLP"],
    links: {
      demo: "https://skillbridgeai-70bl.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "finora",
    number: "05",
    badge: "💳 Personal Finance SaaS",
    title: "Finora – Personal Finance Management",
    description:
      "Architected and deployed a personal finance SaaS application featuring income/expense analytics, budget goal trackers, recurring bills monitors, and intuitive interactive data visualizations for personal asset management.",
    techTags: ["React.js", "Tailwind CSS", "Financial Analytics", "SaaS Dashboard"],
    links: {
      demo: "https://finora-lake-theta.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "schemepath",
    number: "06",
    badge: "🌾 Agri-Tech Guidance Portal",
    title: "SchemePath – Agricultural Support Portal",
    description:
      "Created a dedicated agricultural portal enabling farmers and agricultural stakeholders to navigate government subsidies, welfare programs, and scheme requirements with clear eligibility paths and contextual details.",
    techTags: ["Web Architecture", "Information Systems", "UI Design"],
    links: {
      demo: "https://schemepath.onrender.com/",
    },
    isFlagship: false,
  },
  {
    id: "libraryhub",
    number: "07",
    badge: "📚 Campus Management System",
    title: "College LibraryHub – Campus Library Manager",
    description:
      "Engineered an institutional library management web application designed for campus books tracking, student issue histories, faculty loans, due date reminders, and streamlined administrative workflows.",
    techTags: ["JavaScript", "Database Records", "REST API", "Campus Tools"],
    links: {
      demo: "https://libraryhub-7rod.onrender.com/",
    },
    isFlagship: false,
  },
];

// Certificates Data (10 verified credentials with actual image/pdf files + 2 additional credentials)
export const certificates = {
  featured: [
    {
      name: "Developing Generative AI Solutions",
      issuer: "AWS Training & Certification",
      icon: "☁️",
      type: "image",
      link: "/certificates/aws_genai_solutions.jpeg",
      date: "July 20, 2026",
      desc: "Authorized AWS credential certifying foundational generative AI solution design, foundation model application, and cloud AI architecture principles."
    },
    {
      name: "Machine Learning Research Internship",
      issuer: "National Institute of Technology (NIT), Tiruchirappalli",
      icon: "🏛️",
      type: "image",
      link: "/certificates/nit_trichy_internship.jpeg",
      date: "May 15 – July 31, 2025",
      desc: "Formal certificate of internship completion under Dr. Vinay Raj, Assistant Professor, validating exceptional skills and research in machine learning."
    },
    {
      name: "Claude 101 Certification",
      issuer: "Anthropic",
      icon: "🤖",
      type: "image",
      link: "/certificates/claude_101.jpeg",
      date: "2026",
      desc: "Certification by Anthropic validating core competencies in Claude model architectures, prompt engineering, and LLM application design."
    },
    {
      name: "500 Difficulty Rating Practice Problems",
      issuer: "CodeChef",
      icon: "⚡",
      type: "pdf",
      link: "/certificates/codechef_500_rating.pdf",
      verifyLink: "https://www.codechef.com/certificates/verify",
      certId: "8d651c6",
      date: "August 10, 2025",
      desc: "Verified completion of all practice algorithmic challenges at the 500 difficulty rating mark on the competitive programming platform CodeChef."
    },
    {
      name: "Introduction to Internet of Things (Elite)",
      issuer: "NPTEL / IIT Kharagpur (Govt. of India)",
      icon: "🌐",
      type: "image",
      link: "/certificates/nptel_iot_elite.jpeg",
      date: "Jan – Apr 2026",
      desc: "Elite certification awarded by IIT Kharagpur and Ministry of Education with a consolidated score of 71% in an intensive 12-week course."
    },
    {
      name: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co. (via Forage)",
      icon: "💼",
      type: "image",
      link: "/certificates/jpmorgan_swe_job_simulation.jpeg",
      date: "July 17, 2026",
      certId: "gKjKXRqFaHCc6qCoG",
      desc: "Hands-on engineering simulation covering project setup, Kafka streaming integration, H2 database configuration, and REST API controllers."
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte (via Forage)",
      icon: "💡",
      type: "image",
      link: "/certificates/deloitte_tech_job_simulation.jpeg",
      date: "July 8, 2026",
      certId: "75DLvFCZcuTpQ8KBv",
      desc: "Practical simulation encompassing enterprise software development workflows, problem breakdown, and client-focused coding implementation."
    },
    {
      name: "GenAI Powered Data Analytics",
      issuer: "TATA (via Forage)",
      icon: "📈",
      type: "image",
      link: "/certificates/tata_genai_analytics.jpeg",
      date: "July 5, 2026",
      certId: "PAszphpD42gzAj8Mc",
      desc: "Practical simulation in exploratory data analysis, risk profiling, predictive delinquency modeling with AI, and executive data storytelling."
    },
    {
      name: "ICAT Aptitude Test Participation",
      issuer: "Internshala",
      icon: "📝",
      type: "image",
      link: "/certificates/icat_internshala.jpeg",
      date: "March 23, 2026",
      certId: "CIT-P-3127015",
      desc: "National participation credential recognizing commendable dedication, problem-solving ability, and aptitude in the Common Aptitude Test."
    },
    {
      name: "Adobe University Hackathon Participation",
      issuer: "Adobe & Unstop",
      icon: "🎨",
      type: "image",
      link: "/certificates/adobe_hackathon.jpeg",
      date: "August 9, 2026",
      desc: "Official participation certificate in the national Adobe University Hackathon organized by Adobe via the Unstop competitive platform."
    },
  ],
  additional: [
    {
      name: "AWS Training & Certification — Responsible Artificial Intelligence Practices",
      issuer: "Amazon Web Services (AWS)",
      desc: "Ethics, bias reduction, governance, and safety frameworks in modern artificial intelligence deployments."
    },
    {
      name: "HP LIFE — Design Thinking",
      issuer: "HP Foundation",
      desc: "User-centered design methodologies, rapid prototyping, and creative iterative problem-solving."
    }
  ]
};

// Education Data
export const educationList = [
  {
    institution: "SASI Institute of Technology and Engineering",
    degree: "B.Tech — Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    duration: "2023 – 2027",
    location: "Tadepalligudem, Andhra Pradesh, India",
    gpa: "CGPA: 7.13 / 10",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Computer Networks"
    ]
  }
];

// Experience Data (NIT Tiruchirappalli)
export const experienceList = [
  {
    organization: "National Institute of Technology (NIT), Tiruchirappalli",
    role: "Research Intern — Machine Learning",
    duration: "May 15, 2025 – July 31, 2025",
    location: "Tiruchirappalli, Tamil Nadu, India",
    supervisor: "Dr. Vinay Raj, Assistant Professor",
    responsibilities: [
      "Researched core machine learning algorithms and predictive model architectures under faculty guidance of Dr. Vinay Raj, contributing to departmental research.",
      "Built end-to-end data preprocessing and validation pipelines in Python to improve model accuracy and reliability.",
      "Implemented comparative metric evaluation across classification models to optimize convergence and minimize variance.",
      "Conducted extensive data modeling, feature normalization, and pipeline verification for ongoing faculty research projects."
    ],
    tech: ["Python", "Machine Learning", "Data Preprocessing", "Validation Pipelines", "Predictive Modeling", "Model Optimization"]
  }
];

export const footerContent = {
  taglines: [
    "AI/ML Developer & Full Stack Developer",
    "B.Tech CSE (AI & ML) · SASI Institute",
    "Python · NLP · Generative AI · React.js",
  ],
  credential: "B.Tech CSE (AI & ML) · CGPA 7.13",
  copyright: `© ${new Date().getFullYear()} Hani Sri Burugupalli | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
