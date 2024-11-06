import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import ideaImage from "../../assets/images/idea_img.png";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>

          {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
          <div
            className="greeting-image-div"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // Full width of the parent container
              height: "100%", // Full height of the parent container (if needed)
            }}
          >
            <img
              src={ideaImage}
              alt="Code illustration"
              className="projects-image"
              style={{
                backgroundColor: theme,
                padding: "20px",
                borderRadius: "10px",
                width: "500px",
                height: "500px",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
