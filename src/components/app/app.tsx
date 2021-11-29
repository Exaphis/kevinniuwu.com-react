import React from "react";
import { Section, SectionPreview } from "../section/section";
import { Card, CardImage } from "../card/card";
import { Tag } from "../tag/tag";
import "./app.scss";
import KevinImg from "../../images/kevin.jpg";
import PurdueImg from "../../images/purdue.png";
import CitrixImg from "../../images/citrix.png";
import GsocImg from "../../images/gsoc.png";
import NyneImg from "../../images/nyne.png";
import TsunamiImg from "../../images/tsunami.png";
import TwoSigmaImg from "../../images/two-sigma.svg";
import { Link } from "react-router-dom";

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
          <Link to="/resume">Resume</Link>
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
        content="From May to August of 2021, I was a software engineer intern at Citrix. For summer 2022, I'll be interning at Two Sigma."
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
            <CardImage src={PurdueImg} alt="Purdue logo" />
            <div id="education-stats">
              <p>
                Expected: Dec 2022 <br />
                B.S. in Computer Science <br />
                B.S. in Mathematics <br />
              </p>
              <span>GPA: 4.00</span>
            </div>
          </Card>
          <Card id="b01lers-card" href="https://b01lers.net">
            <CardImage
              src="https://b01lers.net/img/logo_full.png"
              alt="b01lers logo"
            />
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
          <Card href="https://twosigma.com">
            <CardImage src={TwoSigmaImg} alt="Two Sigma logo" />
            <p>
              I'm excited to spend the coming summer at Two Sigma as a software
              engineering intern!
            </p>
            <h3 className="card__footer">Jun - Aug 2022</h3>
          </Card>
          <Card href="https://www.citrix.com/">
            <CardImage src={CitrixImg} alt="Citrix logo" />
            <p>
              At Citrix, I worked with the App Layering team to create
              ScanWritableFiles, a Windows Shell extension to show files that
              are only on a user's writable layer.
            </p>
            <p>
              I also worked on AppRuleCompare, a tool that allows users to view
              the list of files stored in each app layer.
            </p>
            <h3 className="card__footer">May - Aug 2021</h3>
          </Card>
          <Card href="https://summerofcode.withgoogle.com/archive/2020/projects/5453452689276928/">
            <CardImage src={GsocImg} alt="Google Summer of Code logo" />
            <p>
              During Google Summer of Code 2020, I developed Crossgrader, a
              package that allows you to switch the architecture of a Debian
              installation. It is available in the Debian package archive.
            </p>
            <h3 className="card__footer">May - Aug 2020</h3>
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
          <Card href="https://synchronous.codes">
            <CardImage
              src="https://synchronous.codes/static/media/logo.237c7149.png"
              alt="Synchronous logo"
            />
            <p>
              Synchronous allows you to create temporary collaborative
              workspaces, quickly. Whenever you need to work on something with
              somebody else, pop open Synchronous and collaboratively type,
              draw, or share files.
            </p>
            <div className="card__footer">
              <Tag>Python</Tag> <Tag>Django</Tag> <Tag>JavaScript</Tag>
              <Tag>React</Tag>
            </div>
          </Card>
          <Card href="https://github.com/Exaphis/HackQ-Trivia">
            <CardImage
              src="https://raw.githubusercontent.com/Exaphis/HackQ-Trivia/master/resources/hackq.png"
              alt="HackQ-Trivia logo"
            />
            <p>
              HackQ-Trivia is a Python HQ Trivia bot. It receives HQ Trivia
              questions through their WebSocket connection and answers the
              questions automatically using web searches and natural language
              processing.
            </p>
            <div className="card__footer">
              <Tag>Python</Tag>
            </div>
          </Card>
          <Card href="https://apps.apple.com/us/app/nyne/id1424658316">
            <CardImage src={NyneImg} alt="Nyne logo" />
            <h1>Nyne</h1>
            <p>
              Nyne is a cooperative rhythm game designed for the iPad. It was
              developed on a 4-man team, featuring original songs and unique
              gameplay.
            </p>
            <div className="card__footer">
              <Tag>Unity</Tag> <Tag>C#</Tag> <Tag>iOS</Tag>
            </div>
          </Card>
          <Card href="https://github.com/Exaphis/Tsunami">
            <CardImage src={TsunamiImg} alt="Tsunami logo" />
            <h1>Tsunami</h1>
            <p>
              Tsunami is a covert Windows driver that can read from and write to
              the memory of any process. It was used to create a
              proof-of-concept Overwatch aimbot and wallhack.
            </p>
            <div className="card__footer">
              <Tag>C</Tag> <Tag>C++</Tag> <Tag>Windows Driver Kit</Tag>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default App;
