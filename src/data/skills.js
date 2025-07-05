// Skills Data
export const skills = {
  // Programming Languages
  programming: [
    { name: "Python", level: 90, icon: "🐍", description: "Data analysis, ML, web development" },
    { name: "JavaScript", level: 85, icon: "🟨", description: "Frontend & backend development" },
    { name: "C++", level: 80, icon: "⚡", description: "System programming, algorithms" },
    { name: "SQL", level: 88, icon: "🗃️", description: "Database management, complex queries" },
    { name: "HTML/CSS", level: 92, icon: "🌐", description: "Responsive web design" },
    { name: "R", level: 70, icon: "📊", description: "Statistical analysis, data visualization" }
  ],

  // Tools & Technologies
  tools: [
    { name: "Git/GitHub", level: 85, icon: "🔗", description: "Version control, collaboration" },
    { name: "VS Code", level: 95, icon: "💻", description: "Primary development environment" },
    { name: "Jupyter", level: 88, icon: "📓", description: "Data analysis, prototyping" },
    { name: "Docker", level: 70, icon: "🐳", description: "Containerization, deployment" },
    { name: "Linux", level: 75, icon: "🐧", description: "System administration, scripting" },
    { name: "Postman", level: 82, icon: "📮", description: "API testing, development" }
  ],

  // Data Analysis & Visualization
  dataAnalysis: [
    { name: "Pandas", level: 92, icon: "🐼", description: "Data manipulation, analysis" },
    { name: "NumPy", level: 88, icon: "🔢", description: "Numerical computing, arrays" },
    { name: "Matplotlib", level: 85, icon: "📈", description: "Data visualization, plotting" },
    { name: "Seaborn", level: 83, icon: "🎨", description: "Statistical data visualization" },
    { name: "Tableau", level: 80, icon: "📊", description: "Business intelligence, dashboards" },
    { name: "Excel", level: 90, icon: "📋", description: "Advanced analysis, pivot tables" }
  ],

  // Machine Learning & AI
  machineLearning: [
    { name: "Scikit-learn", level: 88, icon: "🧠", description: "ML algorithms, model evaluation" },
    { name: "TensorFlow", level: 70, icon: "🔥", description: "Deep learning, neural networks" },
    { name: "PyTorch", level: 65, icon: "🔦", description: "Deep learning research, development" },
    { name: "OpenCV", level: 72, icon: "👁️", description: "Computer vision, image processing" },
    { name: "NLTK", level: 75, icon: "📝", description: "Natural language processing" },
    { name: "Keras", level: 68, icon: "🔬", description: "High-level neural networks" }
  ],

  // Web Development
  webDevelopment: [
    { name: "React", level: 85, icon: "⚛️", description: "Frontend frameworks, components" },
    { name: "Node.js", level: 80, icon: "🟢", description: "Backend development, APIs" },
    { name: "Express.js", level: 78, icon: "🚀", description: "Web frameworks, middleware" },
    { name: "MongoDB", level: 75, icon: "🍃", description: "NoSQL databases, data modeling" },
    { name: "RESTful APIs", level: 82, icon: "🔌", description: "API design, integration" },
    { name: "Responsive Design", level: 88, icon: "📱", description: "Mobile-first, accessibility" }
  ],

  // Databases
  databases: [
    { name: "MySQL", level: 85, icon: "🐬", description: "Relational databases, optimization" },
    { name: "PostgreSQL", level: 78, icon: "🐘", description: "Advanced SQL, data integrity" },
    { name: "MongoDB", level: 75, icon: "🍃", description: "NoSQL, document databases" },
    { name: "SQLite", level: 80, icon: "🗂️", description: "Embedded databases, mobile apps" }
  ]
}

// Skill Categories for Display
export const skillCategories = [
  {
    name: "Programming Languages",
    key: "programming",
    color: "from-blue-500 to-cyan-500",
    icon: "💻"
  },
  {
    name: "Tools & Technologies",
    key: "tools",
    color: "from-purple-500 to-pink-500",
    icon: "🛠️"
  },
  {
    name: "Data Analysis & Visualization",
    key: "dataAnalysis",
    color: "from-green-500 to-emerald-500",
    icon: "📊"
  },
  {
    name: "Machine Learning & AI",
    key: "machineLearning",
    color: "from-orange-500 to-red-500",
    icon: "🧠"
  },
  {
    name: "Web Development",
    key: "webDevelopment",
    color: "from-indigo-500 to-purple-500",
    icon: "🌐"
  },
  {
    name: "Databases",
    key: "databases",
    color: "from-teal-500 to-blue-500",
    icon: "🗃️"
  }
]

// Soft Skills
export const softSkills = [
  { name: "Problem Solving", level: 95, icon: "🧩" },
  { name: "Critical Thinking", level: 90, icon: "🤔" },
  { name: "Communication", level: 88, icon: "💬" },
  { name: "Team Collaboration", level: 85, icon: "👥" },
  { name: "Leadership", level: 80, icon: "👑" },
  { name: "Adaptability", level: 92, icon: "🔄" },
  { name: "Time Management", level: 87, icon: "⏰" },
  { name: "Continuous Learning", level: 98, icon: "📚" }
]

// Skill Stats
export const skillStats = {
  totalSkills: Object.values(skills).flat().length,
  avgLevel: Math.round(
    Object.values(skills).flat().reduce((acc, skill) => acc + skill.level, 0) / 
    Object.values(skills).flat().length
  ),
  expertLevel: Object.values(skills).flat().filter(skill => skill.level >= 90).length,
  categories: Object.keys(skills).length
}
