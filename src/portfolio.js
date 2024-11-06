// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Riccardo's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Riccardo Pitzanti's Portfolio",
    type: "website",
    url: "https://ricp2015.github.io",
  },
};

//Home Page
const greeting = {
  title: "Riccardo Pitzanti",
  logo_name: "RP",
  nickname: "ricp2015",
  subTitle:
    "An inquisitive and ambitious learner, always seeking new perspectives to tackle complex challenges. I’m inspired by the power of technology to make a difference, and I’m driven to contribute creatively and collaboratively to projects that leave a lasting, positive impact.",
  resumeLink: "documents/RP_Nov_2024.pdf",
  portfolio_repository: "https://github.com/ricp2015",
  githubProfile: "https://github.com/ricp2015",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ricp2015",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/riccardo-pitzanti-3b0b43312",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:riccardopitzanti@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "About me:",
      fileName: "DataScienceImg",
      skills: [
        "📚 I am a working student, balancing academic pursuits with hands-on experience. I’m resourceful and determined, applying my skills both in the classroom and in real-world settings.",
        "📊 With a wide-ranging curiosity, I engage deeply with topics from computer science to data science, always considering their broader implications and real-world applications.",
      ],
      softwareSkills: [],
    },
    {
      fileName: "CloudInfraImg",
      skills: [
        "💡 Developed programming foundations through university coursework, applying these skills in personal projects to explore and deepen knowledge in software development.",
        "💻 Built and managed personal projects across a range of technologies, with a focus on backend and web applications.",
        "🌐 Gained practical experience by hosting and maintaining web applications, integrating databases, and optimizing performance in various environments.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos-matplotlib",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos-seaborn",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Other Interests",
      fileName: "OtherI",
      skills: [
        "⚙️ Technology and Innovation: Highly engaged with emerging technologies, I focus on their ethical and societal impact, particularly in fields like artificial intelligence, blockchain, and automation.",
        "🎥 Movie Critique and Analysis: I enjoy exploring movies through philosophical and psychological perspectives, uncovering connections that provide insights into real-world dynamics and societal interactions.",
        "🪙 Finance and Economic Models: Deeply interested in economics and finance, I stay current with key macroeconomic trends and the geopolitical dynamics that shape global markets.",
        "🎶 Experienced DJ since 2016, performing at public and private events; skilled at curating and mixing music to create engaging atmospheres, showcasing creativity and adaptability in dynamic settings.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sapienza Università di Roma",
      subtitle: "MSc in Computer Science - L18",
      logo_path: "sapienza_logo.png",
      alt_name: "Sapienza Università di Roma",
      duration: "2024 - ongoing",
      descriptions: [
        "📊 My studies in Data Science and AI provided a solid foundation in large-scale data processing, predictive modeling, and advanced analytics. I developed skills in designing machine learning solutions and handling complex data sets to drive meaningful insights and informed decision-making.",
        "🛡️ I also focused on Cybersecurity, gaining practical experience in application security, network defense, and data protection. This training equipped me with the skills to identify security vulnerabilities, design secure systems, and manage network defenses effectively.",
        "🔗 Additionally, I completed specialized coursework in Blockchain, where I explored decentralized technologies, secure transactions, and the potential for blockchain to enhance transparency and trust in digital systems.",
      ],
      website_link: "https://www.uniroma1.it/it",
    },
    {
      title: "Sapienza Università di Roma",
      subtitle: "BSc in Informatica - L31",
      logo_path: "sapienza_logo.png",
      alt_name: "Sapienza Università di Roma",
      duration: "2020 - 2024",
      descriptions: [
        "💻 I’ve explored a broad range of subjects, from foundational courses like Programming, Mathematics, and Database Management to advanced topics such as Cybersecurity, Theory of Computation, and Computer Architecture, building a comprehensive base in computer science.",
        "🌐 My coursework also included hands-on subjects like Web Development and Computer Graphics, where I learned to create interactive and visually engaging applications.",
        "📚 For my thesis, I conducted research on the automated extraction of users' self-disclosed personality traits on Reddit, employing data science and big data methodologies to analyze patterns in personal information sharing and online behavior.",
      ],
      website_link: "https://www.uniroma1.it/it",
    },
  ],
};

const relevant_coursework = {
  relevant_coursework: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "First Certificate (Cambridge)",
      subtitle: "C1 Level - 181/190",
      logo_path: "university_of_cambridge_logo.svg",
      certificate_link:
        "https://www.cambridgeenglish.org/exams-and-tests/first/",
      alt_name: "Cambridge First",
      color_code: "#8C151599",
    },
    {
      title: "Cyberchallenge",
      subtitle: "Sapienza's Team",
      logo_path: "cyberchallenge_logo.svg",
      certificate_link: "documents/cyberchallengeit_2021_certificato.pdf",
      alt_name: "Cyberchallenge",
      color_code: "#00000099",
    },
    {
      title: "Cyberx - Mind4Future",
      subtitle: "Leonardo",
      logo_path: "Cyber40_logo.png",
      certificate_link:
        "documents/Attestati Finalisti CyberX Mind4Future-54.pdf",
      alt_name: "Cyberx",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am currently a student pursuing a Master's degree in Computer Science at Sapienza University of Rome. In addition to my studies, I am actively collaborating on research projects with professors, contributing to academic advancements in my field. I am also looking for job opportunities to apply my skills in a professional setting while continuing my education.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Cyberx-Mind4Future",
          company: "Leonardo",
          company_url: "https://www.leonardo.com/it/home",
          logo_path: "leonardo_logo.png",
          duration: "Feb 2023 - Mar 2023",
          location: "Rome, Italy",
          description:
            "Acquired intermediate cybersecurity skills through expert-led training sessions by professors from top Italian universities, covering encryption, network security, and binary code analysis. Enhanced problem-solving and teamwork abilities by participating in a Capture the Flag competition and simulated cyber-attack/defense scenarios on Leonardo's Cyber Range platform at their Rome headquarters.",
          color: "#9b1578",
        },
        {
          title: "Qualified Tutor - Maths and Computer Science",
          company: "Centro Studi ABC",
          company_url: "https://centrostudiabcolbia.com/",
          logo_path: "csABC_logo.jpeg",
          duration: "Feb 2021 - present",
          location: "Olbia, Italy",
          description:
            "Provide personalized tutoring in mathematics and computer science to high school and university students, tailoring lessons to individual learning needs and academic goals. Design and implement recovery plans for students with academic delays, focusing on improving their understanding of key concepts and exam preparation strategies.",
          color: "#0879bf",
        },
        {
          title: "Cyberchallenge",
          company: "Sapienza Università di Roma",
          company_url: "https://cyberchallenge.it/",
          logo_path: "cyberchallenge_logo.svg",
          duration: "Feb 2021 - May 2021",
          location: "Rome, Italy",
          description:
            "Participated in the CyberChallenge.IT training program, honing skills in cryptography, hardware security, and web security through weekly hands-on and theoretical sessions. Advanced to the local competition phase, successfully solving complex cybersecurity challenges in a Capture The Flag (CTF) Jeopardy-style format. Developed critical thinking and analytical skills by collaborating with peers to tackle real-world cybersecurity scenarios.",
          color: "#fc1f20",
        },
        {
          title: "Giochi della Chimica",
          company:
            "Università degli Studi di Sassari and SCI (Società Chimica Italiana)",
          company_url: "https://www.soc.chim.it/",
          logo_path: "uniss_logo.jpg",
          duration: "May 2019 and May 2020",
          location: "Sassari, Italy",
          description:
            "Participated two times in the Regional Finals of the Chemistry Games, an individual competition organized by the SCI (Italian Chemical Society). Applied advanced chemistry concepts and competed with peers from across the region, enhancing my understanding of the subject.",
          color: "#9b1578",
        },
        {
          title: "Giochi Matematici (Mathematical Games)",
          company: "Università Bocconi - Milano",
          company_url: "https://gare.giochimatematici.unibocconi.it/",
          logo_path: "bocconi_logo.png",
          duration: "May 2014 and May 2015",
          location: "Milan, Italy",
          description:
            "Twice qualified for the finals of the International Mathematical Games Championship held at Bocconi University in Milan. Applied analytical skills to tackle complex logic and math puzzles in a competitive environment, alongside top students from across Italy.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "An overview of some of my academic and personal projects in different areas of computer science, using various programming languages and technologies.",
  avatar_image_path: "code_image.png",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_img.png",
    description:
      "Feel free to reach out, whether you have questions, project ideas, or collaboration opportunities related to my areas of expertise. I’d be glad to connect!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
