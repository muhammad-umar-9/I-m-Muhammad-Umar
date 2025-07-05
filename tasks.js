const tasks = [
  {
    label: "dev",
    type: "shell",
    command: "npm run dev",
    group: "build",
    isBackground: true,
    problemMatcher: [],
    args: []
  },
  {
    label: "build",
    type: "shell", 
    command: "npm run build",
    group: "build",
    isBackground: false,
    problemMatcher: [],
    args: []
  },
  {
    label: "preview",
    type: "shell",
    command: "npm run preview", 
    group: "build",
    isBackground: true,
    problemMatcher: [],
    args: []
  },
  {
    label: "install",
    type: "shell",
    command: "npm install",
    group: "build",
    isBackground: false,
    problemMatcher: [],
    args: []
  }
];

module.exports = { tasks };
