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
        period: "2021 - 2023",
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
        image: "/manage-task.png",
        github: "https://github.com/Chanachai04/next-manage-task-app.git",
        demo: "https://manage-task-zeta.vercel.app/",
      },
      {
        title: "Food Tracker",
        description:
          "แอปพลิเคชันบันทึกและติดตามการกินอาหาร โดดเด่นด้วยดีไซน์ทันสมัยพัฒนาด้วย Next.js, React, Tailwind CSS และ Supabase",
        tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
        image: "/food-tracker.png",
        github: "https://github.com/Chanachai04/next-food-tracker-app.git",
        demo: "https://food-tracker-nine-xi.vercel.app/",
      },
      {
        title: "Calculator Varity",
        description:
          "แอปพลิเคชันรวมเครื่องมือคำนวณที่จำเป็นในชีวิตประจำวัน พัฒนาโดยใช้เทคโนโลยีสมัยใหม่ เพื่อความรวดเร็ว แม่นยำ และรองรับการใช้งานทุกระดับหน้าจอ (Responsive Design)",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/calculator-varity.png",
        github: "https://github.com/Chanachai04/next-calculator-varity-app.git",
        demo: "https://calculator-varity.vercel.app/",
      },
      {
        title: "Money Share",
        description:
          "เว็บแอปพลิเคชันที่ทันสมัย สวยงาม และรองรับการแสดงผลทุกหน้าจอ เพื่อช่วยให้คุณคำนวณการหารค่าใช้จ่ายกับเพื่อนๆ ได้อย่างง่ายดาย มาพร้อมกับดีไซน์ธีมสีฟ้าพรีเมียมและเอฟเฟกต์ Glassmorphism",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/money-share.png",
        github: "https://github.com/Chanachai04/next-money-share.git",
        demo: "https://money-share-swart.vercel.app/",
      },
    ],
  },
  contact: {
    title: "ติดต่อ",
    lineId: "Line ID",
    github: "GitHub",
    email: "Email",
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
        image: "/manage-task.png",
        github: "https://github.com/Chanachai04/next-manage-task-app.git",
        demo: "https://manage-task-zeta.vercel.app/",
      },
      {
        title: "Food Tracker",
        description:
          "A food tracking and logging application featuring a modern design. Developed with Next.js, React, Tailwind CSS, and Supabase.",
        tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
        image: "/food-tracker.png",
        github: "https://github.com/Chanachai04/next-food-tracker-app.git",
        demo: "https://food-tracker-nine-xi.vercel.app/",
      },
      {
        title: "Calculator Varity",
        description:
          "An application combining essential daily calculation tools. Developed using modern technologies for speed, accuracy, and fully responsive design.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/calculator-varity.png",
        github: "https://github.com/Chanachai04/next-calculator-varity-app.git",
        demo: "https://calculator-varity.vercel.app/",
      },
      {
        title: "Money Share",
        description:
          "A modern, beautiful, and fully responsive web application to easily calculate shared expenses with friends. Features a premium blue theme and glassmorphism effects.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "/money-share.png",
        github: "https://github.com/Chanachai04/next-money-share.git",
        demo: "https://money-share-swart.vercel.app/",
      },
    ],
  },
  contact: {
    title: "Contact",
    lineId: "Line ID",
    github: "GitHub",
    email: "Email",
  },
};
