// Edit this file to update the content of the homepage.
// Leave an optional link or an entire list empty to hide it from the page.
const USER_CONFIG = {
  // Basic information
  name: "Ke Li",
  initials: "KL",
  role: "Computer Science Student",
  university: "Your University",
  email: "your.email@university.edu",
  bio: "Exploring the frontiers of your research area, machine learning, and artificial intelligence. Building intelligent systems that advance scientific discovery.",
  photo: "", // Example: "assets/photo.jpg". Empty shows the default avatar.

  // Short numbers shown below the introduction
  stats: [
    { value: "10+", label: "Publications" },
    { value: "200+", label: "Citations" },
    { value: "5+", label: "Projects" },
  ],

  // Leave any URL empty to hide that link
  links: {
    scholar: "https://scholar.google.com/",
    github: "https://github.com/AK-DREAM",
    twitter: "",
    cv: "", // Example: "assets/cv.pdf"
  },

  publications: [
    {
      year: 2025,
      title: "Your Paper Title Here",
      authors: "Ke Li, Co-Author 1, Co-Author 2",
      venue: "Conference / Journal Name 2025",
      links: { pdf: "", code: "" },
    },
    {
      year: 2024,
      title: "Another Paper Title",
      authors: "Ke Li, Co-Author 1",
      venue: "Conference / Journal Name 2024",
      links: { pdf: "" },
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url: "",
    },
  ],

  news: [
    { date: "2025.01", badge: "New", text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020", degree: "B.S. in Computer Science", institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
