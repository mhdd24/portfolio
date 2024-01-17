import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title:
        ' Blood Cell Classification Using Smear Images Based on Machine Learning',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z1.png',
      tech: 'Machine Learning, Jupyter',
    },

    {
      id: 2,
      title: 'Privacy-Preserving with Collaborative Filtering',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z26.png',
      tech: 'Machine Learning, Jupyter',
    },

    {
      id: 3,
      title: 'AI banking industry using chatbot',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/Mhdd-24/IBM-Project-38773-1660385289',
      mediumlink: '',
      imgUrl: 'assets/images/z27.jpeg',
      tech: 'NLP, ReactJS, IBM Waston',
    },

    {
      id: 4,
      title: 'OCR and Post Processing',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z23.jpeg',
      tech: 'Google Tesseract, Machine Learning',
    },

    {
      id: 5,
      title: 'QUOTER',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z4.png',
      tech: 'HTML, CSS, jQuery, JavaScript, MongoDB',
    },

    {
      id: 6,
      title: 'Instagram Engagement Bot',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z24.jpeg',
      tech: 'Python bot using the Selenium library',
    },

    {
      id: 7,
      title: 'E-Mess',
      desc: '',
      livedemo: 'https://e-mess.vercel.app/',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, CSS, Flask, MongoDB',
    },

    {
      id: 8,
      title: 'Click & Shop',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z2.webp',
      tech: 'Andriod, Java',
    },

    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink:
    //     'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api',
    // },

    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo:
    //     'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink:
    //     'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate',
    // },

    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink:
    //     'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap',
    // },

    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink:
    //     'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django',
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink:
    //     'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.',
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink:
    //     'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery',
    // },
  ];
  about2 = `👨‍💻 Software Developer | Transforming Ideas into Code: Passionate about translating ideas into powerful, user-centric software solutions, I am a dedicated software developer with a keen eye for detail and a drive for innovation. Proficient in a range of technologies, my expertise lies in Angular JS, Bootstrap, TypeScript, UI/UX, and Web Design . 🚀 Key Strengths:

Full-stack Development
Clean and Efficient Code
Problem-solving and Troubleshooting
Collaboration and Communication . 💼 Experience:
In my two years of experience, I've had the privilege of contributing to projects like E-Mess and BFL. Whether it's developing scalable backend systems, creating intuitive user interfaces, or troubleshooting complex issues, I am committed to delivering high-quality solutions . 

🌐 Tech Stack:
Angular JS, Bootstrap, TypeScript, JavaScript, Python . 

📚 Continuous Learner:
In the ever-evolving world of technology, I am dedicated to staying ahead by embracing new tools and methodologies. I thrive in dynamic environments and welcome challenges that push my skills to new heights.

`;

  about =
    '🤝 Lets Connect:I am excited about the opportunity to collaborate on innovative projects, share experiences, and contribute to the ever-growing tech community. Lets connect and explore how we can create something exceptional together!';
  resumeurl =
    'https://docs.google.com/document/d/1JnjuI2_KFH6SK-SEHqE6cIf17qCa00LSI5ofzbo6iB8/edit?usp=sharing';

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 2+',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'NODE JS',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'JAVASCRIPT JQUERY',
      progress: '60%',
    },
    {
      id: '4',
      skill: 'SQL',
      progress: '75%',
    },
    {
      id: '5',
      skill: 'REACT JS',
      progress: '75%',
    },
    {
      id: '6',
      skill: 'PYTHON,C++',
      progress: '70%',
    },
    {
      id: '7',
      skill: 'Typescript',
      progress: '65%',
    },
    {
      id: '8',
      skill: 'UI/UX',
      progress: '95%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2020 - 2023',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Technology',
      info: `🎓 PSG College of Technology Alumnus: I am a proud graduate of PSG College of Technology, a premier institution known for its commitment to excellence in education and innovation.
🌐 Connect with PSG Alumni: I am passionate about staying connected with fellow PSG alumni and collaborating on projects that drive innovation. Let's connect and explore potential opportunities.
📚 Continued Learning: Committed to continuous learning and professional development, I stay updated with the latest industry trends and technologies to bring value to any project or team.
🔗 Let's Connect: I welcome connections from fellow PSG alumni, industry professionals, and anyone interested in networking. Feel free to reach out if you share similar professional interests or if you have exciting opportunities to discuss.`,
      institution: 'PSG COLLEGE OF TECHNOLOGY',
    },
    {
      id: '2',
      from_to_year: '2017 - 2020',
      education: 'Graduate Diploma',
      stream: 'Graduate Diploma',
      institution: 'SANKAR POLYTECHNIC COLLEGE',
      info: `🎓 Sankar Polytechnic College Alumnus: Proud graduate of Sankar Polytechnic College, an institution committed to fostering technical excellence and nurturing future leaders in Computer Science. My time at Sankar Polytechnic has been instrumental in shaping my skills and providing a solid foundation for my career.
🤝 Connect with Sankar Polytechnic Alumni: I'm keen on connecting with fellow Sankar Polytechnic alumni and professionals in the Computer Science sector. Let's share experiences and explore potential collaborations.
🌱 Commitment to Learning: Committed to continuous learning and staying updated on the latest industry trends to contribute effectively to any project or team.
🔗 Let's Connect: I welcome connections from fellow Sankar Polytechnic alumni, industry professionals, and individuals interested in EZIO Solution. Feel free to reach out for networking, discussions, or collaborative opportunities.`,
    },
    {
      id: '3',
      from_to_year: '2016 - 2017',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'Meenakshi Matriculation Higher Secondary School',
      info: `🎓 Meenakshi Matriculation Higher Secondary School Alumnus

Proud graduate of Meenakshi Matriculation Higher Secondary School, where I laid the foundation for a lifelong journey of learning and personal growth. My time at Meenakshi has significantly shaped my character and equipped me with the skills necessary for success.

🎭 Extracurricular Involvement:
Actively participated in Youth Red Cross Society

🤝 Connect with Alumni:
Excited to connect with fellow Meenakshi Matriculation alumni and professionals in various fields. Let's share experiences, insights, and explore potential collaborations.

🔗 Let's Connect:
I welcome connections from fellow Meenakshi Matriculation alumni, educators, and professionals. Feel free to reach out for networking`,
    },
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Bajaj Finserv LTD',
      location: 'Pune and Bangalore',
      timeline: 'Jul 2023 - Present',
      role: 'Software Development Engineer',
      work: `Pioneering the Development of PWAs with Angular:
By stating that you pioneered the development of PWAs using Angular, you're emphasizing your role as an innovator in adopting modern web technologies. PWAs are known for delivering a seamless user experience across various devices and network conditions . 

Spearheading a PWA Mobile App with Angular:
Leading the development of a PWA mobile app using Angular suggests that you played a key role in the project. The 20% increase in user engagement and 10% decrease in bounce rate demonstrate the positive impact of your work on user interaction and retention . 

Building and Maintaining a PWA Mobile App with Angular:
The emphasis on building and maintaining highlights the end-to-end responsibility you had in ensuring the PWA's optimal performance and responsiveness on different devices and browsers. This underscores your commitment to delivering a high-quality product . 

Collaboration with Cross-Functional Team:
Mentioning collaboration with a cross-functional team implies that the project involved coordination with individuals from diverse skill sets. Meeting all deadlines and budget requirements indicates effective project management and teamwork .

Development and Implementation of Innovative Features:
Developing and implementing innovative features for the PWA mobile app using Angular suggests that your work went beyond basic functionality. This showcases your creativity and dedication to enhancing the overall user experience, which in turn contributed to positive business outcomes.
  `,
    },
    {
      id: 3,
      company: 'IBM',
      location: 'Bangalore',
      timeline: 'Jul 2022 - Dec 2022',
      role: 'Software Developer',
      work: `AI-based Discourse for the Banking Industry:The mention of an AI-based Discourse suggests that you've developed a comprehensive system for communication within the banking industry. This could include various aspects of conversation, information dissemination, and support . Chat-Bot Development for Banking Purposes:
Creating a chatbot tailored for the banking sector implies that the AI system is designed to understand and respond to queries specific to banking operations. This could range from account inquiries to transaction details and other banking-related services . Customer Query Resolution:
The primary function of the chatbot is to handle customer queries. Customers can interact with the chatbot to seek information, resolve issues, or get assistance with various banking matters. This enhances customer experience by providing quick and efficient responses . 

24/7 Access to Support:
By ensuring that the chatbot is available 24/7, you're addressing the need for round-the-clock customer support. This is especially valuable in the banking industry where customers may have inquiries or issues at any time. The continuous accessibility improves customer satisfaction . 

Banks Improving Customer Engagement:
The mention of banks making great use of the chatbot indicates that the solution is not just customer-centric but also benefits the banking institutions. Improving customer engagement suggests that the chatbot is contributing to a positive relationship between the bank and its customers, potentially leading to increased customer loyalty.`,
    },

    {
      id: 4,
      company: 'Venmurasu Programming Team',
      location: 'Srilanka',
      timeline: 'Oct 2021 - Jun 2022',
      role: 'Software Developer',
      work: 'Venmurasu Team Community Internship:Mentioning the internship with the Venmurasu Team Community provides context about the projects affiliation, highlighting that you were part of a community or team during this initiative . OCR Model based on Google Tesseract: Tesseract is an open- source OCR engine developed by Google.It is widely used for recognizing text in images.Mentioning the use of Google Tesseract implies that your project is built on a well - established and reliable OCR technology . Converting Tamil Text from an Ancient Tamil Book to Editable Text:Your OCR model specifically targets ancient Tamil texts, indicating a focus on preserving and making accessible historical or cultural content.The goal of converting the text to an editable format implies an interest in digitalizing and preserving this content for further analysis or sharing . Leptonica Library for Image Processing:Leptonica is an image processing library that works well in conjunction with Tesseract.By mentioning its usage, you are highlighting that image preprocessing, an essential step in OCR, was performed effectively.This ensures that the input images were prepared optimally for the OCR engine to achieve better accuracy . Accuracy of 98 %:Achieving a 98 % accuracy is a significant accomplishment, indicating that your OCR model performs exceptionally well in recognizing and converting the ancient Tamil text.The comparison with a manually converted text document using cosine similarity suggests a thorough evaluation methodology . Cosine Similarity for Evaluation:Using cosine similarity to compare the results with a manually converted text document suggests a quantitative and rigorous evaluation approach.Cosine similarity is a measure of similarity between two vectors, often used in text analysis.Its application here indicates a robust method for assessing the accuracy of your OCR model.',
    },
    //   {
    //     id: 2,
    //     company: 'Growth99',
    //     location: 'Remote',
    //     timeline: '',
    //     role: 'Frontend  Developer',
    //     work: `Technologies : Angular , Node JS , MongoDB .
    // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
    // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
    // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
    // `
    //   },
  ];

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/MohammedRafiM – Medium1.png',
      url: 'https://medium.com/@mhdd_24',
    },
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/MohammedRafiM_github.png',
      url: 'https://github.com/Mhdd-24',
    },
    {
      id: 1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/MohammedRafiM_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~01c5a024f328b23f6b',
    },
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
