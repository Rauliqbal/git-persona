export function getSkillIconUrl(skill: string): string {
  // Skills that use simple-icons for better brand colors and dark mode support
  // Using colors that work in both light and dark modes
  const simpleIconsFallback: Record<string, string> = {
    // DevOps
    circleci: "circleci/555", // CircleCI in medium gray (visible in both modes)
    travisci: "travisci", // Travis CI uses teal brand color (works in both modes)
    // Modern AI/ML Tools
    langchain: "langchain/1C3C3C", // LangChain dark color
    huggingface: "huggingface", // HuggingFace brand color
    ollama: "ollama", // Ollama brand color
    mlflow: "mlflow/0194E2", // MLflow blue
    streamlit: "streamlit/FF4B4B", // Streamlit red
    gradio: "gradio/FF7C00", // Gradio orange
    // Frontend
    backbonejs: "backbonedotjs/0071B5", // Backbone.js blue
    // Mobile
    nativescript: "nativescript/3655FF", // NativeScript blue
    apachecordova: "apachecordova/E8E8E8", // Apache Cordova gray
    // Backend
    solr: "apachesolr/D9411E", // Apache Solr red
    // Database
    cockroachdb: "cockroachlabs", // CockroachDB official
    hive: "apachehive/FDEE21", // Apache Hive yellow
    // Data Visualization
    chartjs: "chartdotjs/FF6384", // Chart.js pink
    // Testing
    puppeteer: "puppeteer/40B5A4", // Puppeteer teal
    // Software/Design
    framer: "framer", // Framer brand color
    invision: "invision/FF3366", // InVision pink
    // Static Site Generators
    "11ty": "eleventy", // Eleventy brand color
    hexo: "hexo/0E83CD", // Hexo blue
    gridsome: "gridsome", // Gridsome brand color
    // Automation
    zapier: "zapier/FF4A00", // Zapier orange
    ifttt: "ifttt", // IFTTT brand color
  };

  // Check if skill needs simple-icons fallback
  if (simpleIconsFallback[skill]) {
    const parts = simpleIconsFallback[skill].split("/");
    const iconName = parts[0];
    const color = parts[1] || ""; // Use brand color if specified
    return `https://cdn.simpleicons.org/${iconName}${color ? `/${color}` : ""}`;
  }

  // Skills that need devicon fallback (not available on skillicons.dev)
  const deviconFallback: Record<string, string> = {
    // Database
    oracle: "oracle/oracle-original",
    realm: "realm/realm-original",
    couchdb: "couchdb/couchdb-original",
    mssql: "microsoftsqlserver/microsoftsqlserver-plain",
    mariadb: "mysql/mysql-original-wordmark",
    // Mobile
    xamarin: "dot-net/dot-net-plain",
    ionic: "ionic/ionic-original",
    // Programming Languages
    erlang: "erlang/erlang-original",
    // Frontend
    bulma: "bulma/bulma-plain",
    materialize: "materialui/materialui-original",
    // Backend
    openresty: "nginx/nginx-original",
    hadoop: "hadoop/hadoop-original",
    // AI/ML - Core Data Science
    keras: "keras/keras-original",
    numpy: "numpy/numpy-original",
    matplotlib: "matplotlib/matplotlib-original",
    jupyter: "jupyter/jupyter-original-wordmark",
    pandas: "pandas/pandas-original",
    seaborn: "python/python-original",
    // Data Visualization
    canvasjs: "javascript/javascript-original", // No official icon available
    kibana: "kibana/kibana-original",
    // DevOps
    vagrant: "vagrant/vagrant-original",
    // BaaS
    amplify: "amazonwebservices/amazonwebservices-plain-wordmark",
    // Framework
    codeigniter: "codeigniter/codeigniter-plain",
    quasar: "quasar/quasar-plain",
    // Testing
    mocha: "mocha/mocha-plain",
    karma: "karma/karma-original",
    jasmine: "jasmine/jasmine-original",
    // Software
    sketch: "sketch/sketch-original",
    // Static Site Generators
    hugo: "hugo/hugo-original",
    sculpin: "php/php-original",
    vuepress: "vuejs/vuejs-original", // VuePress doesn't have official icon, using Vue
    jekyll: "jekyll/jekyll-original",
    middleman: "ruby/ruby-original",
    // Angular variant
    scully: "angularjs/angularjs-original",
  };

  // Check if skill needs devicon fallback
  if (deviconFallback[skill]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconFallback[skill]}.svg`;
  }

  // Map skill names to skillicons identifiers
  const skillIconsMap: Record<string, string> = {
    // Programming Languages
    c: "c",
    cplusplus: "cpp",
    csharp: "cs",
    go: "go",
    java: "java",
    javascript: "js",
    typescript: "ts",
    php: "php",
    perl: "perl",
    ruby: "ruby",
    scala: "scala",
    python: "py",
    swift: "swift",
    objectivec: "apple",
    clojure: "clojure",
    rust: "rust",
    haskell: "haskell",
    coffeescript: "coffeescript",
    elixir: "elixir",
    erlang: "erlang",
    // Frontend
    vuejs: "vue",
    react: "react",
    svelte: "svelte",
    angularjs: "angular",
    angular: "angular",
    backbonejs: "backbone",
    bootstrap: "bootstrap",
    vuetify: "vuetify",
    css3: "css",
    html5: "html",
    pug: "pug",
    gulp: "gulp",
    sass: "sass",
    redux: "redux",
    webpack: "webpack",
    babel: "babel",
    tailwind: "tailwind",
    bulma: "bulma",
    gtk: "gtk",
    qt: "qt",
    ember: "ember",
    // Backend
    nodejs: "nodejs",
    spring: "spring",
    express: "express",
    graphql: "graphql",
    kafka: "kafka",
    rabbitmq: "rabbitmq",
    rabbitMQ: "rabbitmq", // Handle capital MQ variant
    hadoop: "hadoop",
    nginx: "nginx",
    nestjs: "nestjs",
    // Mobile
    android: "androidstudio",
    flutter: "flutter",
    dart: "dart",
    kotlin: "kotlin",
    reactnative: "react",
    ionic: "ionic",
    // AI/ML
    tensorflow: "tensorflow",
    pytorch: "pytorch",
    opencv: "opencv",
    scikit_learn: "scikitlearn",
    anaconda: "anaconda",
    fastapi: "fastapi",
    // Database
    mongodb: "mongodb",
    mysql: "mysql",
    postgresql: "postgres",
    redis: "redis",
    cassandra: "cassandra",
    elasticsearch: "elasticsearch",
    sqlite: "sqlite",
    // Data Visualization
    d3js: "d3",
    grafana: "grafana",
    // DevOps
    aws: "aws",
    docker: "docker",
    jenkins: "jenkins",
    gcp: "gcp",
    kubernetes: "kubernetes",
    bash: "bash",
    azure: "azure",
    vagrant: "vagrant",
    circleci: "circleci",
    travisci: "travis",
    // BaaS
    firebase: "firebase",
    appwrite: "appwrite",
    heroku: "heroku",
    // Framework
    django: "django",
    dotnet: "dotnet",
    electron: "electron",
    symfony: "symfony",
    laravel: "laravel",
    codeigniter: "codeigniter",
    rails: "rails",
    flask: "flask",
    quasar: "quasar",
    // Testing
    cypress: "cypress",
    selenium: "selenium",
    jest: "jest",
    mocha: "mocha",
    puppeteer: "puppeteer",
    karma: "karma",
    jasmine: "jasmine",
    // Software
    illustrator: "illustrator",
    photoshop: "photoshop",
    xd: "xd",
    figma: "figma",
    blender: "blender",
    sketch: "sketch",
    invision: "invision",
    framer: "framer",
    matlab: "matlab",
    postman: "postman",
    // Static Site Generators
    gatsby: "gatsby",
    hugo: "hugo",
    jekyll: "jekyll",
    nextjs: "nextjs",
    nuxtjs: "nuxtjs",
    "11ty": "eleventy",
    hexo: "hexo",
    // Game Engines
    unity: "unity",
    unreal: "unreal",
    // Automation
    zapier: "zapier",
    ifttt: "ifttt",
    // Other
    linux: "linux",
    git: "git",
    arduino: "arduino",
  };

  const iconName = skillIconsMap[skill] || skill;

  // Use skillicons.dev which provides dark-mode compatible icons
  // This service automatically handles dark mode and provides consistent styling
  return `https://skillicons.dev/icons?i=${iconName}`;
}

export function generateMarkdown(profile: {
  selectedSkills: string[];
  fullName: string;
  subtitle: string;
  summary: string;
  funFact: string;
  currLearning: string;

  portfolioUrl: string;
  blogUrl: string;
  resumeUrl: string;

  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}) {
  const sections: string[] = [];

  // Header
  sections.push(`# Hi 👋, I'm ${profile.fullName || "Developer"}`);

  if (profile.subtitle) {
    sections.push(profile.subtitle);
  }

  // About
  if (profile.summary) {
    sections.push(`
## 🚀 About Me

${profile.summary}
`);
  }

  // Currently Learning
  if (profile.currLearning) {
    sections.push(`
## 📚 Currently Learning

${profile.currLearning}
`);
  }

  // Fun Fact
  if (profile.funFact) {
    sections.push(`
## ⚡ Fun Fact

${profile.funFact}
`);
  }

  // Links
  const links: string[] = [];

  if (profile.portfolioUrl) {
    links.push(`- Portfolio: ${profile.portfolioUrl}`);
  }

  if (profile.blogUrl) {
    links.push(`- Blog: ${profile.blogUrl}`);
  }

  if (profile.resumeUrl) {
    links.push(`- Resume: ${profile.resumeUrl}`);
  }

  if (links.length > 0) {
    sections.push(`
## 🔗 Links

${links.join("\n")}
`);
  }

  // Social Media
  const socials: string[] = [];

  if (profile.github) {
    socials.push(`- GitHub: https://github.com/${profile.github}`);
  }

  if (profile.linkedin) {
    socials.push(`- LinkedIn: https://linkedin.com/in/${profile.linkedin}`);
  }

  if (profile.twitter) {
    socials.push(`- Twitter: https://twitter.com/${profile.twitter}`);
  }

  if (profile.instagram) {
    socials.push(`- Instagram: https://instagram.com/${profile.instagram}`);
  }

  if (socials.length > 0) {
    sections.push(`
## 🌐 Connect With Me

${socials.join("\n")}
`);
  }

  // Skills
 if (profile.selectedSkills.length > 0) {
  const skillIcons = profile.selectedSkills
    .map((skill) => {
      const iconUrl = getSkillIconUrl(skill);
      return `<a href="https://developer.mozilla.org/en-US/docs/Web/${skill}" target="_blank" rel="noreferrer"> <img src="${iconUrl}" alt="${skill}" width="40" height="40"/> </a>`;
    })
    .join("\n");

  sections.push(`
## 🛠 Tech Stack

<p align="left">
${skillIcons}
</p>
`);
}
  return sections.join("\n");
}
