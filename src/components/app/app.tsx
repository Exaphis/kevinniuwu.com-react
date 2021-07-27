import React from "react";
import { Section, SectionPreview } from "../section/section";
import { Card } from "../card/card";
import { Tag } from "../tag/tag";
import "./app.scss";
import KevinImg from "../../images/kevin.jpg";
import PurdueImg from "../../images/purdue.png";
import CitrixImg from "../../images/citrix.png";
import GsocImg from "../../images/gsoc.png";
import NyneImg from "../../images/nyne.png";
import TsunamiImg from "../../images/tsunami.png";
import ResumePdf from "../../resources/Resume.pdf";

function navigate(href: string, newTab: boolean) {
  let a = document.createElement("a");
  a.href = href;
  if (newTab) {
    a.setAttribute("target", "_blank");
  }
  a.click();
}

function App() {
  const schoolSectionRef = React.useRef<HTMLDivElement>(null);
  const experienceSectionRef = React.useRef<HTMLDivElement>(null);
  const projectsSectionRef = React.useRef<HTMLDivElement>(null);

  return (
    <div id="portfolio">
      <div id="portfolio__header">
        <div id="portfolio__header__text">
          <h1>Hi! I'm</h1>
          <h1 className="text__xxxl text__accent">Kevin Wu.</h1>
          <h2>I'm a computer science student at Purdue University.</h2>
        </div>
        <div id="portfolio__header__img">
          <div id="portfolio__header__img__wrapper">
            <img src={KevinImg} alt="Kevin Wu"></img>
          </div>
        </div>
      </div>

      <ul className="text__l text__semibold">
        <li>
          <a href={ResumePdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a href="mailto:kevin@kevinniuwu.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/Exaphis">Github</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kevw">LinkedIn</a>
        </li>
        <li>
          <a href="https://blog.kevinniuwu.com/">Blog</a>
        </li>
      </ul>

      <SectionPreview
        name="School"
        onClick={() =>
          schoolSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        content="I'm currently a junior at Purdue University, double majoring in CS and Math. I compete in capture-the-flag competitions with the b01lers CTF club."
      />
      <SectionPreview
        name="Experience"
        onClick={() =>
          experienceSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        content="From May to August of 2021, I was a software engineer intern at Citrix."
      />
      <SectionPreview
        name="Projects"
        onClick={() =>
          projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        content="My most recent project is Synchronous, a website where you can easily create temporary workspaces to collaborate with teammates."
      />

      <hr />

      <Section
        id="section-school"
        preTitle="01"
        title="School."
        innerRef={schoolSectionRef}
      >
        <p>
          I'm a junior at Purdue University, where I'm a part of some cool
          clubs.
        </p>
        <div className="cards">
          <Card id="purdue-card">
            <img src={PurdueImg} alt="Purdue logo" />
            <hr />
            <div>
              <p style={{ float: "left" }}>
                Expected grad: Dec. 2022 <br />
                B.S. in Computer Science <br />
                B.S. in Mathematics <br />
              </p>
              <span style={{ float: "right" }}>GPA: 4.00</span>
            </div>
          </Card>
          <Card
            id="b01lers-card"
            onClick={() => navigate("https://b01lers.net", true)}
          >
            <img
              src="https://b01lers.net/img/logo_full.png"
              alt="b01lers logo"
            />
            <hr />
            <p>
              I compete in capture-the-flag competitions with b01lers, where we
              learn how to hack and solve various cybersecurity challenges.
            </p>
          </Card>
        </div>
      </Section>

      <hr />

      <Section
        id="section-experience"
        preTitle="02"
        title="Experience."
        innerRef={experienceSectionRef}
      >
        <div className="cards">
          <Card>
            <img src={CitrixImg} alt="Citrix logo" />
            <hr />
            <p>
              At Citrix, I worked with the App Layering team to create
              ScanWritableFiles, a Windows Shell extension to show files that
              are only on a user's writable layer.
            </p>
          </Card>
          <Card
            onClick={() =>
              navigate(
                "https://summerofcode.withgoogle.com/archive/2020/projects/5453452689276928/",
                true
              )
            }
          >
            <img src={GsocImg} alt="Google Summer of Code logo" />
            <hr />
            <p>
              During Google Summer of Code, I developed Crossgrader, a package
              that allows you to switch the architecture of a Debian
              installation. It is available in the Debian package archive.
            </p>
          </Card>
        </div>
      </Section>

      <hr />

      <Section
        id="section-projects"
        preTitle="03"
        title="Projects."
        innerRef={projectsSectionRef}
      >
        <p>
          I always have something fun in the works. Here are a few of my
          favorites.
        </p>
        <div className="cards">
          <Card onClick={() => navigate("https://synchronous.codes", true)}>
            <img
              src="https://synchronous.codes/static/media/logo.237c7149.png"
              alt="Synchronous logo"
            />
            <p>
              Synchronous allows you to create temporary collaborative
              workspaces, quickly. Whenever you need to work on something with
              somebody else, pop open Synchronous and collaboratively type,
              draw, or share files.
            </p>
            <Tag>Python</Tag> <Tag>Django</Tag> <Tag>JavaScript</Tag>
            <Tag>React</Tag>
          </Card>
          <Card
            onClick={() =>
              navigate("https://github.com/Exaphis/HackQ-Trivia", true)
            }
          >
            <img
              src="https://raw.githubusercontent.com/Exaphis/HackQ-Trivia/master/resources/hackq.png"
              alt="HackQ-Trivia logo"
            />
            <p>
              HackQ-Trivia is a Python HQ Trivia bot. It receives HQ Trivia
              questions through their WebSocket connection and answers the
              questions automatically using web searches and natural language
              processing.
            </p>
            <Tag>Python</Tag>
          </Card>
          <Card
            onClick={() =>
              navigate("https://apps.apple.com/us/app/nyne/id1424658316", true)
            }
          >
            <img src={NyneImg} alt="Nyne logo" />
            <h1>Nyne</h1>
            <p>
              Nyne is a cooperative rhythm game designed for the iPad. It was
              developed on a 4-man team, featuring original songs and unique
              gameplay.
            </p>
            <Tag>Unity</Tag> <Tag>C#</Tag>
            <Tag>iOS</Tag>
          </Card>
          <Card
            onClick={() => navigate("https://github.com/Exaphis/Tsunami", true)}
          >
            <img src={TsunamiImg} alt="Tsunami logo" />
            <h1>Tsunami</h1>
            <p>
              Tsunami is a covert Windows driver used to read from and write to
              the memory of any process. It was used to create a
              proof-of-concept Overwatch aimbot and wallhack.
            </p>
            <Tag>C</Tag> <Tag>C++</Tag> <Tag>Windows Driver Kit</Tag>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default App;
