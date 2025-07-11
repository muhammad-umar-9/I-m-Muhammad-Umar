// Projects Data
export const projects = [
  {
    id: 1,
    title: "GIKI Hub – Market Automation Web App",
    description: "A comprehensive web application for market automation with user management, product catalog, and automated workflows. Built with modern web technologies and responsive design.",
    longDescription: "GIKI Hub is a full-stack web application designed to automate market operations for the GIKI university community. Features include user authentication, product management, order processing, and real-time notifications.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Node.js", "MongoDB", "Express.js"],
    category: "Full Stack",
    githubUrl: "https://github.com/muhammad-umar-9/giki-hub",
    liveUrl: "https://giki-hub.vercel.app",
    image: "/project_images/giki-hub.svg",
    featured: true,
    status: "Completed",
    date: "2024"
  },
  {
    id: 2,
    title: "Superstore Excel Dashboard",
    description: "Interactive Excel dashboard analyzing superstore sales data with advanced pivot tables, dynamic slicers, and sparklines for comprehensive business intelligence.",
    longDescription: "A comprehensive Excel dashboard that transforms raw superstore data into actionable business insights. Features interactive pivot tables, dynamic charts, and KPI tracking for sales performance analysis.",
    technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "Business Intelligence"],
    category: "Data Analysis",
    githubUrl: "https://github.com/muhammad-umar-9/superstore-dashboard",
    liveUrl: "#",
    image: "/project_images/superstore-dashboard-backup.svg",
    featured: true,
    status: "Completed",
    date: "2024"
  },
  {
    id: 3,
    title: "Salifort Motors – Google Capstone Project",
    description: "Employee retention prediction model using machine learning algorithms. Part of Google Advanced Data Analytics Certificate program with comprehensive data analysis and visualization.",
    longDescription: "A machine learning project focused on predicting employee retention for Salifort Motors. Utilized advanced statistical analysis, feature engineering, and multiple ML algorithms to identify key factors affecting employee satisfaction and turnover.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "Machine Learning", "Data Visualization"],
    category: "Machine Learning",
    githubUrl: "https://github.com/muhammad-umar-9/salifort-motors-capstone",
    liveUrl: "https://public.tableau.com/app/profile/muhammad.umar6880/vizzes",
    image: "/project_images/salifort-motors.svg",
    featured: true,
    status: "Completed",
    date: "2024"
  },
  {
    id: 4,
    title: "TikTok Data Classification",
    description: "Machine learning model to classify TikTok content using natural language processing and computer vision techniques. Achieved 94% accuracy in content categorization.",
    longDescription: "Developed a comprehensive content classification system for TikTok videos using advanced machine learning techniques. The project involved text analysis, feature extraction, and model optimization to achieve high accuracy in content categorization.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP", "Machine Learning"],
    category: "Machine Learning",
    githubUrl: "https://github.com/muhammad-umar-9/tiktok-classification",
    liveUrl: "#",
    image: "/project_images/tiktok-classification.svg",
    featured: false,
    status: "Completed",
    date: "2024"
  },
  {
    id: 5,
    title: "NBA Career Duration Prediction",
    description: "Predictive model to estimate NBA player career duration based on rookie season performance metrics. Implemented advanced feature engineering and ensemble methods.",
    longDescription: "A comprehensive machine learning project that predicts NBA player career longevity based on their rookie season statistics. The model considers various performance metrics and uses ensemble methods to provide accurate predictions.",
    technologies: ["Python", "Machine Learning", "Feature Engineering", "Data Analysis", "Sports Analytics"],
    category: "Machine Learning",
    githubUrl: "https://github.com/muhammad-umar-9/nba-career-prediction",
    liveUrl: "#",
    image: "/project_images/nba-career.svg",
    featured: false,
    status: "Completed",
    date: "2023"
  },
  {
    id: 6,
    title: "TCP/IP Packet Simulator",
    description: "Network protocol simulator implemented in C++ to demonstrate TCP/IP packet transmission, routing algorithms, and network congestion management.",
    longDescription: "A comprehensive network simulation system that models TCP/IP packet transmission across various network topologies. Includes implementation of routing algorithms, congestion control, and network performance analysis.",
    technologies: ["C++", "Network Programming", "Algorithms", "Data Structures", "System Programming"],
    category: "System Programming",
    githubUrl: "https://github.com/muhammad-umar-9/tcp-ip-simulator",
    liveUrl: "#",
    image: "/project_images/tcp-simulator.svg",
    featured: false,
    status: "Completed",
    date: "2023"
  }
]

// Project Categories
export const projectCategories = [
  "All",
  "Full Stack",
  "Data Analysis",
  "Machine Learning",
  "System Programming"
]

// Project Stats
export const projectStats = {
  totalProjects: projects.length,
  completedProjects: projects.filter(p => p.status === "Completed").length,
  featuredProjects: projects.filter(p => p.featured).length,
  technologies: [...new Set(projects.flatMap(p => p.technologies))].length
}
