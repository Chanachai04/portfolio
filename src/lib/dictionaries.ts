export const th = {
  nav: {
    about: "เกี่ยวกับ",
    education: "การศึกษา",
    portfolio: "ผลงาน",
    contact: "ติดต่อ",
  },
  hero: {
    greeting: "สวัสดีครับ! ผม",
    name: "ชนะชัย เบญมาตย์",
    role: "นักศึกษาคณะศิลปศาสตร์และวิทยาศาสตร์ สาขาเทคโนโลยีดิจิทัลและนวัตกรรม",
    description:
      "มุ่งมั่นพัฒนาและสร้างสรรค์ผลงานทางด้านดิจิทัลและนวัตกรรม มีความสนใจในการพัฒนาเว็บไซต์และแอปพลิเคชัน",
    contactMe: "ติดต่อ",
    viewWork: "ดูผลงาน",
    resume: "ดูเรซูเม่",
    interestedPositions: [
      "Frontend Developer",
      "Backend Developer",
      "Mobile Developer",
      "AI Agent Builder",
    ],
  },
  about: {
    title: "เกี่ยวกับผม",
    age: "อายุ",
    ageValue: "22 ปี",
    education: "กำลังศึกษาอยู่ปี 3",
    university: "มหาวิทยาลัยเอเชียอาคเนย์",
    faculty: "คณะศิลปศาสตร์และวิทยาศาสตร์",
    major: "สาขาเทคโนโลยีดิจิทัลและนวัตกรรม",
    skillsTitle: "ทักษะและความถนัด",
  },
  skills: {
    programming: "ภาษาโปรแกรม",
    framework: "เฟรมเวิร์ก",
    database: "ฐานข้อมูล",
  },
  education: {
    title: "การศึกษา",
    history: [
      {
        degree: "ปริญญาตรี",
        major: "สาขาเทคโนโลยีดิจิทัลและนวัตกรรม",
        school: "มหาวิทยาลัยเอเชียอาคเนย์",
        period: "2023 - ปัจจุบัน",
        description:
          "ศึกษาทางด้านเทคโนโลยีดิจิทัลและนวัตกรรม เน้นการประยุกต์ใช้เทคโนโลยีสมัยใหม่ในการแก้ปัญหาและสร้างสรรค์สิ่งใหม่",
        current: true,
      },
      {
        degree: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
        major: "สาขาคอมพิวเตอร์ธุรกิจ",
        school: "วิทยาลัยเทคโนโลยีหมู่บ้านครู",
        period: "2020 - 2022",
        description:
          "ศึกษาพื้นฐานทางด้านคอมพิวเตอร์ธุรกิจ การจัดการฐานข้อมูล และการพัฒนาโปรแกรมเบื้องต้น",
        current: false,
      },
    ],
  },
  certificates: {
    title: "เกียรติบัตร",
    openPdf: "เปิดดู PDF",
  },
  portfolio: {
    title: "ผลงาน",
    viewProject: "ดูโปรเจกต์",
    readMore: "อ่านเพิ่มเติม",
    showLess: "แสดงน้อยลง",
    projects: [
      {
        title: "Manage Task",
        description:
          "แอปพลิเคชันสำหรับจัดการงานรายวันของคุณ สร้างขึ้นด้วย Next.js และ Supabase ช่วยให้คุณติดตามงาน จัดการตารางเวลา และเพิ่มประสิทธิภาพการทำงานด้วยหน้าจอที่ใช้งานง่ายและสะอาดตา",
        tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
        image: "/projects/manage-task.png",
        github: "https://github.com/Chanachai04/next-manage-task-app.git",
        demo: "https://manage-task-zeta.vercel.app/",
      },
      {
        title: "Food Tracker",
        description:
          "แอปพลิเคชันบันทึกและติดตามการกินอาหาร โดดเด่นด้วยดีไซน์ทันสมัยพัฒนาด้วย Next.js, React, Tailwind CSS และ Supabase",
        tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
        image: "/projects/food-tracker.png",
        github: "https://github.com/Chanachai04/next-food-tracker-app.git",
        demo: "https://food-tracker-nine-xi.vercel.app/",
      },
      {
        title: "Calculator Varity",
        description:
          "แอปพลิเคชันรวมเครื่องมือคำนวณที่จำเป็นในชีวิตประจำวัน พัฒนาโดยใช้เทคโนโลยีสมัยใหม่ เพื่อความรวดเร็ว แม่นยำ และรองรับการใช้งานทุกระดับหน้าจอ (Responsive Design)",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/projects/calculator-varity.png",
        github: "https://github.com/Chanachai04/next-calculator-varity-app.git",
        demo: "https://calculator-varity.vercel.app/",
      },
      {
        title: "Money Share",
        description:
          "เว็บแอปพลิเคชันที่ทันสมัย สวยงาม และรองรับการแสดงผลทุกหน้าจอ เพื่อช่วยให้คุณคำนวณการหารค่าใช้จ่ายกับเพื่อนๆ ได้อย่างง่ายดาย มาพร้อมกับดีไซน์ธีมสีฟ้าพรีเมียมและเอฟเฟกต์ Glassmorphism",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/projects/money-share.png",
        github: "https://github.com/Chanachai04/next-money-share.git",
        demo: "https://money-share-swart.vercel.app/",
      },
      {
        title: "Money Tracking",
        description:
          "แอปพลิเคชัน Money Tracking สไตล์โมเดิร์น สวยงาม และใช้งานง่าย พัฒนาด้วย Flutter และ Node.js เพื่อให้คุณบันทึกรายรับ-รายจ่าย และจัดการการเงินส่วนตัวได้อย่างมีประสิทธิภาพ!",
        tags: ["Flutter", "Node.js"],
        image: "/projects/money-tracking/5.png",
        github: "https://github.com/Chanachai04/flutter_money_tracking_app.git",
        demo: "/projects/money-tracking",
      },
      {
        title: "Thai Hotline",
        description:
          "แอปพลิเคชันรวบรวมเบอร์โทรศัพท์สายด่วนที่จำเป็นในประเทศไทย ครอบคลุมทั้งด้านการเดินทาง, อุบัติเหตุ/ฉุกเฉิน, ธนาคาร และสาธารณูปโภค ออกแบบมาให้ใช้งานง่าย รวดเร็ว และสวยงาม ทันสมัยตามหลัก UX/UI",
        tags: ["Flutter"],
        image: "/projects/thai-hotline/1.png",
        github: "https://github.com/Chanachai04/flutter_thai_hotline_app.git",
        demo: "/projects/thai-hotline",
      },
    ],
  },
  contact: {
    title: "ติดต่อ",
    lineId: "Line ID",
    github: "GitHub",
    email: "Email",
  },
  projectDetails: {
    backToPortfolio: "กลับสู่หน้าผลงาน",
    features: "ฟีเจอร์หลัก",
    technologies: "เทคโนโลยีที่ใช้",
    "money-tracking": {
      title: "Money Tracking - จัดการการเงินส่วนตัว",
      overview:
        "แอปพลิเคชันรูปแบบ Mobile App ที่ช่วยให้คุณจดบันทึกรายรับ-รายจ่าย ประเมินสภาพคล่องทางการเงิน และบริหารเงินส่วนตัวได้อย่างมีประสิทธิภาพ ตัวแอปออกแบบมาให้ใช้งานง่าย รวดเร็ว และดีไซน์ทันสมัย",
      featureList: [
        "บันทึกรายรับและรายจ่ายประจำวันได้อย่างรวดเร็ว",
        "สรุปยอดเงินคงเหลือ และดูสถิติแยกตามหมวดหมู่",
        "ระบบ UI สไตล์โมเดิร์น ใช้งานง่ายบนมือถือ",
        "เชื่อมต่อข้อมูลแบบเรียลไทม์",
      ],
      images: [
        "/projects/money-tracking/1.png",
        "/projects/money-tracking/2.png",
        "/projects/money-tracking/3.png",
        "/projects/money-tracking/4.png",
        "/projects/money-tracking/5.png",
        "/projects/money-tracking/6.png",
        "/projects/money-tracking/7.png",
      ],
    },
    "thai-hotline": {
      title: "Thai Hotline - รวบรวมเบอร์โทรศัพท์สายด่วน",
      overview:
        "แอปพลิเคชันรวบรวมเบอร์โทรศัพท์สายด่วนที่จำเป็นในประเทศไทย ครอบคลุมทั้งด้านการเดินทาง, อุบัติเหตุ/ฉุกเฉิน, ธนาคาร และสาธารณูปโภค ออกแบบมาให้ใช้งานง่าย รวดเร็ว และสวยงาม ทันสมัยตามหลัก UX/UI",
      featureList: [
        "รวบรวมเบอร์โทรศัพท์สายด่วนที่จำเป็นในประเทศไทย",
        "แบ่งหมวดหมู่ชัดเจนและครอบคลุมทุกด้าน",
        "สามารถกดโทรออกได้ทันทีจากแอปพลิเคชัน",
        "ระบบ UI สไตล์โมเดิร์น ใช้งานง่ายบนมือถือ",
      ],
      images: [
        "/projects/thai-hotline/1.png",
        "/projects/thai-hotline/2.png",
        "/projects/thai-hotline/3.png",
        "/projects/thai-hotline/4.png",
        "/projects/thai-hotline/5.png",
        "/projects/thai-hotline/6.png",
        "/projects/thai-hotline/7.png",
        "/projects/thai-hotline/8.png",
        "/projects/thai-hotline/9.png",
        "/projects/thai-hotline/10.png",
        "/projects/thai-hotline/11.png",
      ],
    },
  },
};

export const en = {
  nav: {
    about: "About",
    education: "Education",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello! I am",
    name: "Chanachai Benmat",
    role: "Digital Technology & Innovation Student",
    description:
      "Passionate about developing and creating digital and innovative projects. Interested in web and application development.",
    contactMe: "Contact Me",
    viewWork: "View Work",
    resume: "View Resume",
    interestedPositions: [
      "Frontend Developer",
      "Backend Developer",
      "Mobile Developer",
      "AI Agent Builder",
    ],
  },
  about: {
    title: "About Me",
    age: "Age",
    ageValue: "22 years old",
    education: "3rd Year Student",
    university: "South East Asia University",
    faculty: "Faculty of Arts and Sciences",
    major: "Digital Technology and Innovation",
    skillsTitle: "Skills & Expertise",
  },
  skills: {
    programming: "Programming Language",
    framework: "Framework",
    database: "Database",
  },
  education: {
    title: "Education",
    history: [
      {
        degree: "Bachelor's Degree",
        major: "Digital Technology and Innovation",
        school: "South East Asia University",
        period: "2023 - Present",
        description:
          "Studying Digital Technology and Innovation, focusing on applying modern technology to solve problems and innovate.",
        current: true,
      },
      {
        degree: "Vocational Certificate",
        major: "Business Computer",
        school: "Krutee Village Technology College",
        period: "2021 - 2023",
        description:
          "Studied fundamentals of business computing, database management, and basic programming.",
        current: false,
      },
    ],
  },
  certificates: {
    title: "Certificates",
    openPdf: "Open PDF",
  },
  portfolio: {
    title: "Portfolio",
    viewProject: "View Project",
    readMore: "Read More",
    showLess: "Show Less",
    projects: [
      {
        title: "Manage Task",
        description:
          "A daily task management application built with Next.js and Supabase. Helps you track tasks, manage schedules, and improve productivity with a clean and intuitive interface.",
        tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
        image: "/projects/manage-task.png",
        github: "https://github.com/Chanachai04/next-manage-task-app.git",
        demo: "https://manage-task-zeta.vercel.app/",
      },
      {
        title: "Food Tracker",
        description:
          "A food tracking and logging application featuring a modern design. Developed with Next.js, React, Tailwind CSS, and Supabase.",
        tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
        image: "/projects/food-tracker.png",
        github: "https://github.com/Chanachai04/next-food-tracker-app.git",
        demo: "https://food-tracker-nine-xi.vercel.app/",
      },
      {
        title: "Calculator Varity",
        description:
          "An application combining essential daily calculation tools. Developed using modern technologies for speed, accuracy, and fully responsive design.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/projects/calculator-varity.png",
        github: "https://github.com/Chanachai04/next-calculator-varity-app.git",
        demo: "https://calculator-varity.vercel.app/",
      },
      {
        title: "Money Share",
        description:
          "A modern, beautiful, and fully responsive web application to easily calculate shared expenses with friends. Features a premium blue theme and glassmorphism effects.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/projects/money-share.png",
        github: "https://github.com/Chanachai04/next-money-share.git",
        demo: "https://money-share-swart.vercel.app/",
      },
      {
        title: "Money Tracking",
        description:
          "A modern, beautiful, and easy-to-use Money Tracking application built with Flutter and Node.js to help you track your income and expenses and manage your personal finances efficiently!",
        tags: ["Flutter", "Node.js"],
        image: "/projects/money-tracking/5.png",
        github: "https://github.com/Chanachai04/flutter_money_tracking_app.git",
        demo: "/projects/money-tracking",
      },
      {
        title: "Thai Hotline",
        description:
          "A comprehensive collection of essential emergency numbers in Thailand, covering travel, emergencies, banking, and utilities. Designed with a modern UX/UI for fast and intuitive use.",
        tags: ["Flutter"],
        image: "/projects/thai-hotline/1.png",
        github: "https://github.com/Chanachai04/flutter_thai_hotline_app.git",
        demo: "/projects/thai-hotline",
      },
    ],
  },
  contact: {
    title: "Contact",
    lineId: "Line ID",
    github: "GitHub",
    email: "Email",
  },
  projectDetails: {
    backToPortfolio: "Back to Portfolio",
    features: "Key Features",
    technologies: "Technologies Used",
    "money-tracking": {
      title: "Money Tracking - Personal Finance",
      overview:
        "A Mobile App designed to help you track your income and expenses, evaluate your financial health, and manage your personal finances efficiently. It features a fast, easy-to-use, and modern UI.",
      featureList: [
        "Quickly log daily income and expenses",
        "View balance summaries and statistics by category",
        "Modern and intuitive mobile UI",
        "Real-time data synchronization",
      ],
      images: [
        "/projects/money-tracking/1.png",
        "/projects/money-tracking/2.png",
        "/projects/money-tracking/3.png",
        "/projects/money-tracking/4.png",
        "/projects/money-tracking/5.png",
        "/projects/money-tracking/6.png",
        "/projects/money-tracking/7.png",
      ],
    },
    "thai-hotline": {
      title: "Thai Hotline - Emergency Contact Center",
      overview:
        "An application that gathers all essential emergency and service numbers in Thailand. Categorized for quick access, including road assistance, emergency services, banks, and public utilities. Built with Flutter for a smooth and modern mobile experience.",
      featureList: [
        "Comprehensive collection of essential emergency numbers in Thailand",
        "Clearly categorized and easy to navigate",
        "Direct call feature within the application",
        "Modern and user-friendly mobile UI",
      ],
      images: [
        "/projects/thai-hotline/1.png",
        "/projects/thai-hotline/2.png",
        "/projects/thai-hotline/3.png",
        "/projects/thai-hotline/4.png",
        "/projects/thai-hotline/5.png",
        "/projects/thai-hotline/6.png",
        "/projects/thai-hotline/7.png",
        "/projects/thai-hotline/8.png",
        "/projects/thai-hotline/9.png",
        "/projects/thai-hotline/10.png",
        "/projects/thai-hotline/11.png",
      ],
    },
  },
};
