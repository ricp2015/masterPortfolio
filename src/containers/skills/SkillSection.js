import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import userImage from "../../assets/images/user_img.png";
import fsImage from "../../assets/images/fs_img.png";
import otinImage from "../../assets/images/otin_img.png";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        {/* Section 1 */}
        <div className="skills-main-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <img
                src={userImage}
                alt="User Management"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Fade>
          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skills.data[0].title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skills.data[0].softwareSkills} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                {skills.data[0].skills.map((skillSentence, i) => (
                  <p
                    key={i}
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                ))}
              </div>
            </Fade>
          </div>
        </div>

        {/* Section 2 (Inverted Layout) */}
        <div className="skills-main-div">
          <div className="skills-text-div">
            <Fade left duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skills.data[1].title}
              </h1>
            </Fade>
            <Fade left duration={1500}>
              <SoftwareSkill logos={skills.data[1].softwareSkills} />
            </Fade>
            <Fade left duration={2000}>
              <div>
                {skills.data[1].skills.map((skillSentence, i) => (
                  <p
                    key={i}
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                ))}
              </div>
            </Fade>
          </div>
          <Fade right duration={2000}>
            <div className="skills-image-div">
              <img
                src={fsImage}
                alt="Full Stack Development"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Fade>
        </div>

        {/* Section 3 */}
        <div className="skills-main-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <img
                src={otinImage}
                alt="Operational Technology and Industrial Networking"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Fade>
          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skills.data[2].title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skills.data[2].softwareSkills} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                {skills.data[2].skills.map((skillSentence, i) => (
                  <p
                    key={i}
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
