import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Diploma",
    academy: "Hakimi Infosec",
    dec: "With a growing interest in the IT sector, I decided to further enhance my skills and knowledge by pursuing a diploma in Web Development & Digital Marketing. For this purpose, I enrolled at Hakimi Infosec, an esteemed institution known for its industry-focused training programs. Throughout the diploma program, I gained practical experience in web development technologies such as HTML, CSS, JavaScript, PHP, as well as familiarized myself with various SEO tools. The program provided me with a comprehensive understanding of these subjects, enabling me to effectively utilize my skills in the IT industry.",
    startYear: "Jan 2021",
    endYear: "Aug 2001",
  },
  {
    id: 2,
    title: "Graduation",
    academy: "DAVV University",
    dec: "After completing high school, I pursued my Bachelor's Degree in Commerce (B.Com) from Maharaja Yashwant Rao College, which is affiliated to DAVV. My graduation years were dedicated to gaining a comprehensive understanding of various subjects related to commerce and business.",
    startYear: "2018",
    endYear: "2021",
  },
  {
    id: 3,
    title: "Higher Education",
    academy: "ABN Higher Secondary School",
    dec: "I completed my 12th grade in the year 2018 from ABN Higher Secondary School, which is a CBSE-affiliated school. This educational journey provided me with a strong academic foundation and helped shape my future endeavors.",
    startYear: false,
    endYear: "2018",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Build Your Innovation",
    dec: "I have been offered a job at BuildYourInnovation, surpassing the offer I received from Aliema. BuildYourInnovation had recognized my work and provided me with the opportunity to learn and grow in a very short period of time. Working at BuildYourInnovation, I have gained knowledge in Node.js, React.js, MongoDB, and many other areas. It has been a unique and fantastic experience for me to work with such a highly professional team.",
    startYear: "Jul 2023",
    endYear: false,
  },
  {
    id: 2,
    title: "Frontend Developer & WordPress Developer",
    company: "Aliema Infotech",
    dec: "During my 1.5 years at Aliema Infotech as a Frontend Developer, I had the opportunity to expand my skills and explore new technologies. While being hired primarily as a frontend developer, I quickly developed a passion for WordPress. I worked on multiple WordPress projects, honing my skills in both development and designing aspects of WordPress. As I delved deeper into WordPress, I became one of the most experienced WordPress developers in Aliema Infotech.\n\nIn addition to WordPress, I gained hands-on experience in various technologies, including PHP, Figma designing, Photoshop, Shopify, Teachable, and other platforms. I successfully completed projects in each of these technologies, showcasing my versatility and adaptability.\n\nDuring my time at Aliema Infotech, I also took on leadership responsibilities as I led the WordPress team, overseeing and guiding four other WordPress developers. This experience allowed me to not only enhance my technical expertise but also develop strong teamwork and project management skills.\n\nOverall, my journey at Aliema Infotech provided me with extensive WordPress knowledge and expertise, along with the opportunity to work with a diverse range of technologies, making me a well-rounded and experienced developer.",
    startYear: "Jan 2022",
    endYear: "Jul 2023",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Excel Infotech",
    dec: "During my internship at Hakimi Infosec in Excel Infotech, I gained valuable experience as a Frontend Developer. I actively contributed to various projects, including dashboard development, where I successfully transformed Figma designs into fully functional websites using HTML, CSS, and JavaScript. Over the course of the 6-month internship, I completed more than 10 projects, expanding my skills and even delving into AngularJS concepts while working on an AngularJS project.",
    startYear: "Aug-2021",
    endYear: "Jan-2022",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
