import filler from './assets/filler.jpg';

// HealthMate project assets
import healthmatevideo1 from './assets/videos/HealthMate Promo Video 1.mp4';
import healthmatevideo2 from './assets/videos/Healthmate Promo Video 2.mp4';
import healthmate1 from './assets/photos/HealthMate_Pic_1.webp'
import healthmate2 from './assets/photos/HealthMate_Pic_2.webp'
import healthmate3 from './assets/photos/HealthMate_Pic_3.webp'
import healthmate4 from './assets/photos/HealthMate_Pic_4.webp'
import healthmate5 from './assets/photos/HealthMate_Pic_5.webp'
import healthmate6 from './assets/photos/HealthMate_Pic_6.webp'
import healthmate7 from './assets/photos/HealthMate_Pic_7.webp'
import healthmate8 from './assets/photos/HealthMate_Pic_8.webp'
import healthmate9 from './assets/photos/HealthMate_Pic_9.webp'
import healthmate10 from './assets/photos/HealthMate_Pic_10.webp'
import healthmate11 from './assets/photos/HealthMate_Pic_11.webp'

// PlateMate project assets
import platemate1 from './assets/photos/PlateMate_Pic_1.webp'
import platemate2 from './assets/photos/PlateMate_Pic_2.webp'
import platemate3 from './assets/photos/PlateMate_Pic_3.webp'
import platemate4 from './assets/photos/PlateMate_Pic_4.webp'
import platemate5 from './assets/photos/PlateMate_Pic_5.webp'
import platemate6 from './assets/photos/PlateMate_Pic_6.webp'
import platemate7 from './assets/photos/PlateMate_Pic_7.webp'
import platemate8 from './assets/photos/PlateMate_Pic_8.webp'

// Rate My Plate project assets
import ratemyplatevideo from './assets/videos/RateMyPlatePromo.mp4';
import ratemyplate1 from './assets/photos/RateMyPlate_Pic_1.webp'
import ratemyplate2 from './assets/photos/RateMyPlate_Pic_2.webp'
import ratemyplate3 from './assets/photos/RateMyPlate_Pic_3.webp'
import ratemyplate4 from './assets/photos/RateMyPlate_Pic_4.webp'

// Duck Explorer project assets
import duckexplorervideo from './assets/videos/Duck Explorer Promo Video.mp4';
import duckexplorer1 from './assets/photos/DuckExplorer_Pic_1.webp'
import duckexplorer2 from './assets/photos/DuckExplorer_Pic_2.webp'
import duckexplorer3 from './assets/photos/DuckExplorer_Pic_3.webp'

// My School project assets
import myschoolvideo from './assets/videos/MySchool Promo Video.mp4';
import myschool1 from './assets/photos/MySchool_Pic_1.webp'
import myschool2 from './assets/photos/MySchool_Pic_2.webp'
import myschool3 from './assets/photos/MySchool_Pic_3.webp'

// Total Tech Tools project assets
import totaltechtoolsvideo from './assets/videos/Total Tech Tools Promo Video.mp4';
import totaltechtools1 from './assets/photos/TotalTech_Pic_1.webp'
import totaltechtools2 from './assets/photos/TotalTech_Pic_2.webp'
import totaltechtools3 from './assets/photos/TotalTech_Pic_3.webp'
import totaltechtools4 from './assets/photos/TotalTech_Pic_4.webp'

// NHS Grader project assets
import nhsgradervideo from './assets/videos/GradeCalcPromo2.mp4';
import nhsgrader1 from './assets/photos/NHSGrader_Pic_1.webp'
import nhsgrader2 from './assets/photos/NHSGrader_Pic_2.webp'
import nhsgrader3 from './assets/photos/NHSGrader_Pic_3.webp'

// Random Fact Emailer project assets
import randomfactemailervideo from './assets/videos/Fact Sender Promo.mp4';
import randomfactemailer1 from './assets/photos/RandomFactEmailer_Pic_1.webp'

// NYU Website Remake project assets
import nyuwebsitevideo from './assets/videos/NYU PROMO.mp4';
import nyuwebsiteremake1 from './assets/photos/NYUWebsite_Pic_1.webp'
import nyuwebsiteremake2 from './assets/photos/NYUWebsite_Pic_2.webp'
import nyuwebsiteremake3 from './assets/photos/NYUWebsite_Pic_3.webp'
import nyuwebsiteremake4 from './assets/photos/NYUWebsite_Pic_4.webp'

// Game Hub project assets
import gamehubvideo from './assets/videos/Game Hub Video.mp4';
import gamehub1 from './assets/photos/GameHub_Pic_1.webp'
import gamehub2 from './assets/photos/GameHub_Pic_2.webp'

// Blackjack project assets
import blackjackvideo from './assets/videos/BlackJack Promo.mp4';
import blackjack1 from './assets/photos/BlackJack_Pic_1.webp'

// Define and export the projects array
const projects = [
  
  {
    id: "11",
    title: "HealthMate",
    description: "HealthMate is a comprehensive AI-powered health application developed for the InnovAIte Hackathon, addressing the critical challenge of accessible healthcare in urban environments. The project tackles the significant problem many residents face: finding affordable, trustworthy, and nearby mental health resources and healthcare professionals.\n\n\nThe application features a sophisticated agentic AI workflow built in Botpress that guides users through an advanced conversational flow, intelligently tracking their preferences, health concerns, communication methods, and insurance/budget constraints along the way. When the preference-building process is complete, the system generates a comprehensive user payload that is sent to our custom backend infrastructure.\n\n\nThe backend leverages Retrieval-Augmented Generation (RAG) with OpenAI embeddings to perform semantic matching against a MongoDB database of vectorized medical professional profiles. This advanced AI system analyzes the user's specific needs and intelligently matches them with healthcare providers who are best suited to address their particular health issues, location requirements, and financial constraints.\n\n\nKey technical features include the Botpress agentic conversation flow for preference collection, RAG-powered semantic search using OpenAI embeddings, MongoDB vector database for medical professional storage, automated appointment booking capabilities, emergency assistance routing, and real-time healthcare provider matching. The system combines modern AI technologies with thoughtful user experience design to create a seamless healthcare navigation experience.\n\n\nHealthMate represents an interdisciplinary approach to urban healthcare challenges, combining advanced conversational AI, vector databases, and semantic search technologies with equitable design principles to create a scalable, human-centered solution that makes quality healthcare more accessible to all city residents.",
    short_description: "AI-powered healthcare navigation platform.",
    videos: [healthmatevideo1, healthmatevideo2],
    images: [healthmate1, healthmate2, healthmate3, healthmate4, healthmate5, healthmate6, healthmate7, healthmate8, healthmate9, healthmate10, healthmate11],
    technologies: ["Botpress", "OpenAI Embeddings", "RAG", "MongoDB", "Vector Database", "React", "JavaScript", "Node.js", "Conversational AI"],
    github: "https://github.com/danctila/healthmate",
  },
  
  {
    id: "10",
    title: "PlateMate",
    description: "PlateMate is a mobile application developed through Generate, Northeastern University's premier product development studio, for a real-world client aiming to improve restaurant feedback systems. Unlike typical review platforms, PlateMate allows users to rate individual dishes, enabling restaurants to receive granular, actionable insights into their menus. The app also introduces a social layer—users can discover trending meals among friends, view personalized recommendations based on their tastes and dietary restrictions, and share reviews with others.\n\n\nAs a software developer on the 10-person cross-functional team, I contributed extensively across the full stack. On the backend, I developed robust RESTful APIs in Go using the Fiber framework for core features including CRUD operations on dish reviews, updating restaurant metrics dynamically, and building custom queries like \"popular with friends\" based on user location and social graph. I also implemented backend features such as human-readable geolocation mapping and advanced filtering/sorting for search endpoints.\n\n\nOn the frontend, I built React Native components using Expo for both onboarding and review flows. This included complex form validation, navigation constraints, and dynamic screen progression tied to user data entry. I ensured full integration with our custom authentication system and MongoDB schema, including creation of new user accounts with email/username checks and error handling.\n\n\nI also implemented media handling, routing user-uploaded review images to our S3 bucket infrastructure only when full review data passed all validation checks. My work ensured smooth data flow between frontend and backend and reliable app performance on TestFlight.\n\n\nThis 3-month agile project culminated in a public showcase, following milestone events like Featurethon and Proof of Concept demos. Working on PlateMate gave me hands-on experience with system design, full-stack development, agile workflows, and user-centric product engineering for a real client.",
    short_description: "Dish-based restaurant review app.",
    videos: [],
    images: [platemate1, platemate2, platemate3, platemate4, platemate5, platemate6, platemate7, platemate8],
    technologies: ["React Native", "Expo", "JavaScript", "Zustand", "Go", "Fiber", "MongoDB", "JWT", "AWS S3", "DigitalOcean", "TestFlight"],
    github: "https://github.com/generateNU/platemate/",
  },
  
  {
    id: "9",
    title: "Rate My Plate",
    description: "The Rate My Plate application is a comprehensive dining guide for Northeastern University students. Built with a React frontend and Firebase backend, it provides personalized restaurant recommendations based on user preferences, including restaurants that accept Husky Dining Dollars and offer student discounts. Users can browse restaurant details, leave reviews, and engage in real-time chats about their dining experiences. The app also integrates Google Maps for location-based searches, ensuring a seamless experience on both desktop and mobile devices. Rate My Plate combines convenience, community, and exclusive student deals to make dining enjoyable and affordable.",
    short_description: "Dining guide app for Northeastern students.",
    videos: [ratemyplatevideo],
    images: [ratemyplate1, ratemyplate2, ratemyplate3, ratemyplate4],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Leaflet"],
    github: "https://github.com/danctila/rate-my-plate",
    live: "https://ratemyplate.danctil.com",
  },
  {
    id: "8",
    title: "Duck Explorer",
    description: "The Duck Explorer application uses React using TypeScript as a frontend and Express using Javascript as a backend to fetch and analyze random duck images. Images are fetched and analyzed using the random-d API as well as Open AI's gpt-4-vision-preview. The backend sends an image URL on reload to the frontend and on request using the new duck button. When the analyze button is clicked, the current image URL is sent from the frontend to an API POST endpoint on the backend to be sent to the Open AI model with a custom prompt and token limit. The response from the gpt model is then returned back to the frontend for display in a text bubble.",
    short_description: "Duck image fetching and analysis app.",
    videos: [duckexplorervideo],
    images: [duckexplorer1, duckexplorer2, duckexplorer3],
    technologies: ["Open AI", "React", "TypeScript", "JavaScript", "Express"],
    github: "https://github.com/danctila/duck-explorer",
  },
  {
    id: "7",
    title: "MySchool Program",
    description: "This is a Full Stack React app paired with Express JS and MySQL for the 2023/2024 Connecticut Future Business Leaders of America Coding & Programming competition. The topic for the competition was to create a program that allows your Career and Technical Education Department to collect and store information about business and community partners. The program features a React frontend with Javascript. The backend server was developed using Express JS and includes 5 endpoints for data collection and manipulation from the MySQL database hosted on a Raspberry Pi 4.",
    short_description: "App for partner information management.",
    videos: [myschoolvideo],
    images: [myschool1, myschool2, myschool3],
    technologies: ["React", "JavaScript", "Express", "SQL", "Raspberry Pi"],
    github: "https://github.com/danctila/my-school",
  },
  {
    id: "6",
    title: "Total Tech Tools Website",
    description: "This is a freelance web design agency website made in React. This site is fully mobile responsive and includes a variety of modern features including a parallax logo, an animated mobile modal window and a typewriter effect.",
    short_description: "Freelance agency website.",
    videos: [totaltechtoolsvideo],
    images: [totaltechtools1, totaltechtools2, totaltechtools3, totaltechtools4],
    technologies: ["React", "TypeScript", "Chakra UI", "Email JS"],
    github: "https://github.com/danctila/total-tech-tools",
    live: "https://totaltechtools.com",
  },
  {
    id: "5",
    title: "Grade Calculator",
    description: "This project is a mobile responsive web app developed for students to use at a high school. It holds a form component in which students can enter grades and a calculated average will return.",
    short_description: "Web app for students to calculate grades.",
    videos: [nhsgradervideo],
    images: [nhsgrader1, nhsgrader2, nhsgrader3],
    technologies: ["React", "TypeScript", "Chakra UI", "React-Router"],
    github: "https://github.com/danctila/calculator-frontend",
    live: "https://nhsgrader.com",
  },
  {
    id: "4",
    title: "Random Fact Emailer",
    description: "Using a random fact API and Google SMTP email servers, this project sends automated messages to an inputted list of email addresses. The three files are automatically run on a schedule using a Raspberry Pi 4 with Crontab enabled.",
    short_description: "Automated email sender using random facts.",
    videos: [randomfactemailervideo],
    images: [randomfactemailer1],
    technologies: ["Raspberry Pi", "Python", "API", "Google SMTP"],
    github: "https://github.com/danctila/python-email-sender",
  },
  {
    id: "3",
    title: "NYU Website Remake",
    description: "In this project, I focused heavily on design and componentization because the creative vision was not my main task. I wanted to focus on the technical aspects of design more than the creative UI/UX brainstorming.",
    short_description: "Recreation of the NYU website.",
    videos: [],
    images: [nyuwebsiteremake1, nyuwebsiteremake2, nyuwebsiteremake3, nyuwebsiteremake4],
    technologies: ["React", "TypeScript", "CSS", "Chakra UI"],
    github: "https://github.com/danctila/nyu-website",
  },
  {
    id: "2",
    title: "Game Hub",
    description: "This project utilizes an API to fetch data about real games and display them in a simple single-page application. The application is fully mobile responsive and includes searching, categorization, and dark mode features.",
    short_description: "Gaming hub with API integration.",
    videos: [gamehubvideo],
    images: [gamehub1, gamehub2],
    technologies: ["React", "API", "TypeScript", "CSS", "Chakra UI"],
    github: "https://github.com/danctila/game-hub",
    live: "https://game-hub-coral-mu.vercel.app/",
  },
  {
    id: "1",
    title: "BlackJack",
    description: "Using only Java, this project recreates a standard 6-deck game of BlackJack. Starting the player off with 2 cards, the player has the option to take a card or not after viewing their current hand as compared to the dealer's current hand.",
    short_description: "Java implementation of 6-deck BlackJack.",
    videos: [blackjackvideo],
    images: [blackjack1],
    technologies: ["Java", "BlueJ"],
  },
];

export default projects;
