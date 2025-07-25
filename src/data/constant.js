import RKSS from "../images/RKSS.jpg";
import chatApp from "../images/chatApp.jpg";
import CAW_Studios from "../images/CAW_Studios.png";
import CLOTHING_WEBAPP from "../images/CLOTHING_WEBAPP.png";
export const Bio = {
  name: "Yogesh Kumar",
  roles: ["FullStack Developer"],
  description: (
    <div>
      <p>
        <ul>
          <li>
            MERN stack developer with strong problem-solving and
            project-building skills.
          </li>
          <li>
            Awarded National-level NCC 'C' Certificate with Alpha grade,
            demonstrating excellence in discipline, leadership, and teamwork.
          </li>
        </ul>
      </p>
    </div>
  ),

  github: "https://github.com/yogesh889",
  resume:
    "https://drive.google.com/file/d/1pzE7J0UAeklClFQ3SF98E5m0C-RxyC2K/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/yogesh-kumar-b47b911a2/",
  Leetcode: "https://leetcode.com/8058yogesh/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "React Bootstrap",
        image: "https://react-bootstrap.netlify.app/img/logo.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    ],
  },
  {
    title: "Problem-Solving",
    skills: [
      {
        name: "Data structures",
        image:
          "https://icons.veryicon.com/png/o/miscellaneous/icons-for-data-class-organization-and/data-structure-1.png",
      },
      {
        name: "Algorithms",
        image: "https://cdn-icons-png.flaticon.com/512/8346/8346003.png",
      },
      {
        name: "C++",
        image: "https://cdn-icons-png.flaticon.com/256/6132/6132222.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Course-Work",
    skills: [
      {
        name: "OOps",
        image: "https://cdn-icons-png.flaticon.com/512/4248/4248240.png",
      },
      {
        name: "Operating System",
        image:
          "data:image/png;base64,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",
      },

      {
        name: "DBMS",
        image: "https://cdn-icons-png.flaticon.com/128/1034/1034466.png",
      },
      {
        name: "Computer Networks",
        image: "https://cdn-icons-png.flaticon.com/128/10214/10214141.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/logomark-orange@2x.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "MySql",
        image: "https://labs.mysql.com/common/logos/mysql-logo.svg?v2",
      },
      {
        name: "MongoDB",
        image:
          "https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: RKSS,
    role: "Technical Consultant",
    company: "RKSS(Rajasthan Kalyan Seva Sansthan",
    date: "Nov 2023 - N0v 2024",
    desc: [
      <div>
        <p>
          This system as a digital ecosystem—much like an ERP (Enterprise
          Resource Planning) solution, but designed for the social sector. Just
          as ERP centralizes business operations for enterprises, SIMS
          centralizes social impact operations for NGOs, enabling transparency,
          efficiency, and real-time engagement between all stakeholders.
        </p>
        <p>
          <br /> <strong>🌍 Real-World Impact of This Project</strong>
        </p>
        <p>
          <ul>
            <li>Stakeholder - Benefit</li>
            <li>
              NGO Staff - Saves time, increases transparency, better
              decision-making
            </li>
            <li>
              Donors - Transparent tracking, better communication,
              trust-building
            </li>
            <li>
              Volunteers - Easy access to opportunities, updates, training
            </li>
            <li>Beneficiaries - Access to resources, apply for aid directly</li>
          </ul>
        </p>
      </div>,
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TAILWINDCSS",
      "REACTJS",
      "EXPRESSJS",
      "NODEJS",
      "MONGODB",
    ],
  },
  {
    id: 0,
    img: "https://miro.medium.com/v2/resize:fit:1400/0*JlnxyNcvZuZ0k1vp",
    role: "DesiQna Engineer Trainee",
    company: "DesiQna",
    date: "Jan 2023 - Mar 2023",
    desc: [
      "Improved UI Design and Solved the complexity of database and redundancy in data to different Attribute by Improving database design using ER(Entity Relationship).",
      "Assign priveledge to different users based on there role.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "BOOSTRAP", "REACTJS", "DBMS", "SQL"],
  },
  {
    id: 1,
    img: "https://digiwebclub.com/wp-content/uploads/2021/07/DigiWebClub1.png",
    role: "Software Development Intern",
    company: "Digiwebclub Pvt. Ltd.",
    date: "Feb 2022 - Jul 2022",
    desc: [
      "Created a 100% responsive frontend, boosting user engage-ment by 30%.",
      "Enhance security by providing protection against syn flooding.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "BOOSTRAP"],
  },
  {
    id: 2,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEVHcEz///////////////////////////////////////////////////////8AXO7//wcARu7///T//97g6fv//73//6FRgfLM2vvw9v8AU/o+deWKpvUlauz4+z+1x/movPaas/b//yRzlvX5+5X//3f//1rT32Pg6dCmvIxqkMOFpbKFoJ3C0XWwx755nNW+y5nE1I496N9HAAAADnRSTlMAEwvLPKKuA1jqv51jXHjjibYAAAGSSURBVDiNjZMNU6MwEIZ1rNae526WBBJC+MbWWj3v/v+fu00CbQHHcYcpoftkv+bdm5sf2eZhB9HSLOUn4dPd88X/BJPJ1P8mmfSv3e3ov5fK1Sr3/2UjGN+7bYwPUhwIsdSuHvJrAJ4C8Iu/xRv7S6R3Qu0ak0+RQgifVBwsKi5h/6qMqZu/bWtefaUb9m89uReImsFQPwwDs8LX+zgBPgeG/I1GslpxUHkNpOKIWAO0RNq1DnEJSF+Eg55cCGMQYA4korLYK2pj8TkXLJJrALrOolZUn2e6AriNAko0Z6CDGVCJEktQSLoeh1ktgYIBbgOJipBovwaKcDKuJH96WQN6St9Q8z1Q+26yOdBxkf05gEfTJYDYGJXnqi3JwQpIBA/KFMQ9UK/CFTkDpB91DjWLJaZRKpkBqfiwscvcNP3n6U+Qy0wPJ+zbXlsq3v8N8jzvx1FyrChrLb4dDy9RU5NtRtEm4nj6qKpMwsK8aLcbn6FbXI12HxfnIRlWV4ONi8Or9aX7snrXy3uxu98/W/z/Nv86s1fQUU0AAAAASUVORK5CYII=",
    role: "Software Engineer Trainee",
    company: "Shopsky",
    date: "Jun 2020 - Aug 2020",
    desc: [
      "Design and Developed Fully Responsive career page.",
      "Organize the data on the Frontend of UI(User Interface) and Improved the UX(User Experience) of the website.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "BOOSTRAP"],
  },
  {
    id: 3,
    img: "https://skfreelancers.com/wp-content/uploads/2020/04/freelancer.png",
    role: "FUll stack Freelancer",
    company: "Freelancer",
    date: "NOV 2019 - July 2023",
    desc: [
      "Solving Different levels of Database related problems and Providing Networking related Issues.",
      "Worked in Making Lectures on 'learning basics of c++' for client",
    ],
    skills: ["ReactJS", "NodeJs", "Material UI", "HTML", "CSS", "JavaScript"],
  },
];

export const education = [
  {
    id: 0,
    img: "data:image/jpeg;base64,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",
    school: "Government Engineering College, Ajmer",
    date: "July 2019 - July 2023",
    grade: "7.68 CGPA",
    desc: (
      <div>
        <p>
          ▪️ I Graduated in bachlor's degree in Information technology at
          Government Engineering College, Ajmer(Rajasthan).
        </p>

        <p>
          ▪️2023 Graduate with 7.60 CGPA. I have taken courses in Data
          Structures, Algorithms, Object-Oriented Programming, Database
          Management Systems, Operating Systems, and Computer Networks, among
          others.
        </p>
      </div>
    ),
    degree:
      "Bachelor of Technology - BTech, Information Technology and Engineering",
  },
  {
    id: 1,
    img: "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2016/08/bser-class-10th-result-2015-1472467007.jpg",
    school: "Meera Public School, Ajmer",
    date: "Apr 2017 - Apr 2018",
    grade: "68.00%",
    desc: "▪️ I completed my 12th-grade education with a specialization in mathematics and science subjects.",
  },
  {
    id: 2,
    img: "https://targetstudy.com/files/img/2/10989/L_58270.gif",
    school: "East Point Public School, Ajmer",
    date: "Apr 2014 - Apr 2015",
    grade: "64.00%",
    desc: "▪️ I accomplished my 10th-grade education, covering all subjects.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Realtime Chat Application",
    date: "Apr 2023 - May 2023",
    description: (
      <div>
        <ul>
          <li>
            Developed a real-time Full Duplex chat app using React.js. Ensured
            secure access, responsive design, and high-quality messaging.
          </li>
          <li>Implemented algorithms for clean, datatype-based software.</li>
          <li>
            Utilized technologies: HTML, CSS, JavaScript, React.js, Socket.IO,
            Express.js, Node.js.
          </li>
          <li>Still in working...</li>
        </ul>
      </div>
    ),
    image: chatApp,
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT.JS",
      "SOCKET.IO",
      "EXPRESS.JS",
      "NODE.JS",
    ],
    // category: "web app",
    github: "https://github.com/yogesh889/RealtimeChatApplication",
    webapp: "https://chat-client-omega-six.vercel.app/",
  },
  {
    id: 0,
    title: "Clothing E-Comm",
    date: "Jun 2024 - Jul 2024",
    description: (
      <div>
        <ul>
          <li>
            Developed a dynamic clothing e-commerce web app using functional
            components, config-driven UI, and React Router for seamless
            navigation with dynamic routes via useParams.
          </li>
          <li>
            Integrated RESTful APIs using Fetch; resolved CORS issues;
            implemented shimmer UI for skeleton loading and lazy loading to
            boost performance and user experience.
          </li>
          <li>
            Leveraged Redux for scalable state management; applied optional
            chaining to prevent runtime errors; ensured cross-browser
            compatibility using browserslist; followed a monolithic
            architecture.
          </li>
          <li>Still in working...</li>
        </ul>
      </div>
    ),
    image: CLOTHING_WEBAPP,
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT.JS",
      "TAILWINDCSS",
      "MATERIALUI",
      "REDUX",
      "REACT ROUTER",
    ],
    // category: "web app",
    github: "https://github.com/yogesh889",
    webapp: "https://ecommerce-app-r8sg.onrender.com/",
  },
  {
    id: 1,
    title: "Travel And Tour Website",
    date: "Apr 2023 - Apr 2023",
    description: (
      <div>
        <ul>
          <li>
            Spearheaded the development of a travel and tour website from
            inception to completion, leveraging HTML, CSS, Javascript and
            React.Js.
          </li>
          <li>
            Used useState Hook, useEffect Hook, and useContext Hook and other
            custom Hooks to add more functionality
          </li>
        </ul>
      </div>
    ),
    image: require("../../src/assets/Travel_tour_thumbnail.png"),
    tags: ["HTML", "CSS", "Javascript", "React.Js", "Bootstrap", "Material-UI"],
    // category: "web app",
    github: "https://github.com/yogesh889/traveltourwebsite",
    webapp: "https://yogesh889.github.io/traveltourwebsite/",
  },
  {
    id: 2,
    title: "Reeco Order Management Dashboard",
    date: "May 2023 - May 2023",
    description: (
      <div>
        <ul>
          <li>
            Designed and developed a B2B order management system that allows
            users (such as procurement managers) to view, review, and approve
            supplier orders in a streamlined interface.
          </li>
          <li>Reduced order review and approval time by 40%.</li>
          <li>
            Improved user satisfaction by providing a centralized, easy-to-use
            dashboard.
          </li>
        </ul>
      </div>
    ),
    image: CAW_Studios,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "MongoDB",
      "JWT/Role-Based",
      "React.Js",
      "Bootstrap",
      "Material-UI",
    ],
    // category: "web app",
    github: "https://github.com/yogesh889/ecom",
    webapp: "https://yogesh889.github.io/ecom/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    date: "June 2023 - June 2023",
    description: (
      <div>
        <ul>
          <li>
            API Integration in a Spotify clone web application using React.js to
            fetch data from the API and can add millions of other songs also.
          </li>
          <li>
            Gained hands-on experience in making project interactive using
            Javascript.
          </li>
        </ul>
      </div>
    ),
    image: require("../../src/assets/Spotify_thumbnail.png"),
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    category: "GAMES",
    github: "https://github.com/yogesh889/Spotify-Clone",
    webapp:
      "https://65264776c1bc190008de0bf3--friendly-custard-4968f1.netlify.app/",
  },
  {
    id: 4,
    title: "Covid 19 Tracker Webapp",
    date: "July 2022 - Aug 2022",
    description: (
      <div>
        <ul>
          <li>
            To get to know about how API is working behind the scene there is a
            small project which i made to learn basics of API.
          </li>
          <li>
            Successfully integrated API data feeds, ensuring up-to-the-minute
            information accuracy.
          </li>
        </ul>
      </div>
    ),
    image: require("../../src/assets//covid_19_thumbnail.png"),
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React.Js"],
    // category: "WEB EXTENSIONS",
    github: "https://github.com/yogesh889/covid_19_tracker_app",
    webapp: "https://yogesh889.github.io/covid_19_tracker_app/",
  },
  {
    id: 5,
    title: "CRUD Web Application",
    date: "Dec 2021 - feb 2022",
    description: (
      <div>
        <ul>
          <li>
            I developed an interactive web application using React.js that
            allowed users to manage numerical data effortlessly.
          </li>
          <li>
            The application featured functionalities for deleting, updating, and
            resetting numbers.
          </li>
          <li>
            Users could delete specific list, update existing numbers, and reset
            all numbers to their default values.
          </li>
        </ul>
      </div>
    ),
    image: require("../../src/assets/CRUD_thumbnail.png"),
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React.Js"],
    category: "GAMES",
    github: "https://github.com/yogesh889/counter_app",
    webapp: "https://yogesh889.github.io/counter_app/",
  },
  {
    id: 6,
    title: "Todo-List Webapp",
    date: "April 2021",
    description: (
      <div>
        <ul>
          <li>
            Learning about the CRUD operation in React.js, I developed a
            TODO-LIST web application using React.js, It enabling users to
            efficiently manage tasks and prioritize their daily activities.
          </li>
          <li>
            This application featured a clean and intuitive user interface,
            allowing users to add, edit, and delete tasks.
          </li>
        </ul>
      </div>
    ),
    image: require("../../src/assets/todolist_thumbnail.png"),
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React.Js", "Material-UI"],
    category: "AI/ML",
    github: "https://github.com/yogesh889/todolistapp",
    webapp: "https://yogesh889.github.io/todolistapp/",
  },
];
