// Edit this file to update the content of the homepage.
// Leave an optional link or an entire list empty to hide it from the page.
const USER_CONFIG = {
  // Basic information
  name: "Ke Li",
  initials: "AK-DREAM",
  role: "Undergraduate Student",
  university: "Peking University",
  email: "keli@stu.pku.edu.cn",
  bio: "I am a third-year undergraduate student in the Turing Class at School of EECS, Peking University. My research interests include multimodal AI, efficient inference, and machine learning systems.",
  photo: "assets/photo.jpg",

  // Short numbers shown below the introduction. Keep empty to hide this block.
  stats: [],

  // Leave any URL empty to hide that link.
  links: {
    scholar: "",
    github: "https://github.com/AK-DREAM",
    twitter: "",
    cv: "assets/cv.pdf",
  },

  publications: [
    {
      year: 2026,
      title: "TraceKV: Policy-Preserving Low-Rank KV Cache Compression for Reasoning Vision-Language Models",
      authors: "Ke Li, Zishan Shao, Yiran Chen",
      venue: "In submission. arXiv preprint arXiv:2611.15569, 2026",
      links: {
        pdf: "https://arxiv.org/pdf/2611.15569",
        // code: "https://github.com/AK-DREAM/TraceKV",
      },
    },
    {
      year: 2026,
      title: "When and Where to Look: Adaptive Visual Evidence Scheduling for Efficient Long Video Understanding",
      authors: "Ke Li*, Jiayu Chen*, Maoliang Li, Zihao Zheng, Hailong Zou, Hengyi Zhang, Xuanzhe Liu, Xiang Chen",
      venue: "In submission. arXiv preprint arXiv:2608.03918, 2026. (*Equal contribution)",
      links: {
        pdf: "https://arxiv.org/pdf/2608.03918",
        // code: "https://github.com/AK-DREAM/EcoFrame",
      },
    },
    // {
    //   year: 2026,
    //   title: "DIRECT: Video Mashup Creation via Hierarchical Multi-Agent Planning and Intent-Guided Editing",
    //   authors: "Ke Li, Maoliang Li, Jialiang Chen, Jiayu Chen, Zihao Zheng, Shaoqi Wang, Xiang Chen",
    //   venue: "arXiv preprint arXiv:2604.04875, 2026",
    //   links: {
    //     pdf: "https://arxiv.org/pdf/2604.04875",
    //     code: "https://github.com/AK-DREAM/DIRECT-Claw",
    //   },
    // },
    {
      year: 2025,
      title: "MIRAGE: Runtime Scheduling for Multi-Vector Image Retrieval with Hierarchical Decomposition",
      authors: "Maoliang Li*, Ke Li*, Yaoyang Liu, Jiayu Chen, Zihao Zheng, Yinjun Wu, Chenchen Liu, Xiang Chen",
      venue: "Proceedings of the 63rd ACM/IEEE Design Automation Conference (DAC), 2026. (*Equal contribution)",
      links: {
        pdf: "https://arxiv.org/abs/2510.08976v3",
        code: "",
      },
    },
  ],

  projects: [
    {
      name: "DIRECT-Claw",
      desc: "A hierarchical multi-agent framework that creates video mashups from user instructions, raw footage, and music while optimizing visual continuity and auditory alignment.",
      tags: ["Multimodal AI", "Multi-Agent Systems", "Video Editing"],
      url: "https://github.com/AK-DREAM/DIRECT-Claw",
    },
  ],

  news: [
    {
      date: "2026.11",
      badge: "Preprint",
      text: "Released TraceKV, our work on policy-preserving low-rank KV cache compression for reasoning vision-language models.",
    },
    {
      date: "2026.08",
      badge: "Preprint",
      text: "Released EcoFrame (When and Where to Look), our work on adaptive visual evidence scheduling for efficient long-video understanding.",
    },
    {
      date: "2026.06",
      badge: "Internship",
      text: "Started a research internship at the Center for Computational Evolutionary Intelligence, Duke University, supervised by Prof. Yiran Chen.",
    },
    {
      date: "2026.04",
      badge: "Preprint",
      text: "Released DIRECT, a hierarchical multi-agent framework for intent-guided video mashup creation.",
    },
    {
      date: "2026.02",
      badge: "Paper",
      text: "MIRAGE was accepted to the 63rd ACM/IEEE Design Automation Conference (DAC 2026)!",
    },
    {
      date: "2025.09",
      badge: "Award",
      text: "Received the John Hopcroft Scholarship for the 2024-2025 academic year at Peking University.",
    },
    {
      date: "2025.06",
      badge: "Internship",
      text: "Started a research internship at Penglai Lab at Tencent.",
    },
    {
      date: "2025.03",
      badge: "Research",
      text: "Joined the Intelligence Fusion Lab at Peking University as a research intern, supervised by Prof. Xiang Chen.",
    },
    {
      date: "2023.07",
      badge: "Award",
      text: "Won a gold medal in the 2023 National Olympiad in Informatics (NOI) and was admitted to the Turing Class at Peking University.",
    },
  ],

  education: [
    {
      period: "2024.09 - Present",
      degree: "B.S. in Computer Science and Technology (Turing Class)",
      institution: "Peking University, Beijing, China",
    },
    {
      period: "2021.09 - 2024.07",
      degree: "Senior High School",
      institution: "Shenzhen Middle School, Shenzhen, China",
    },
  ],

  experience: [
    {
      period: "2026.06 - 2026.11",
      role: "Research Intern",
      institution: "Center for Computational Evolutionary Intelligence, Duke University",
    },
    {
      period: "2025.06 - 2025.08",
      role: "Research Intern",
      institution: "Penglai Lab, Tencent",
    },
    {
      period: "2025.03 - Present",
      role: "Research Intern",
      institution: "Intelligence Fusion Lab, Peking University",
    },
  ],
};
