import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Styles/Project.scss";
import Millie from "../assets/millie-logo.png";
import RDS from "../assets/RDS.png";
import MEGABOX from "../assets/megabox.png";

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      xPercent: -100 * (container.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (container.children.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  return (
    <div>
      <div id="projects">
        <ul className="project-container" ref={containerRef}>
          <li className="millie project">
            <div className="logoWrap">
              <img src={Millie} alt="밀리의서재 로고" />
            </div>
            <div>
              <p>
                <span>#Responsive</span> <span>#HTML5</span> <span>#CSS3</span>
                <span>#Javascript</span>
              </p>
            </div>
          </li>
          <li className="rds project">
            <div className="logoWrap">
              <img src={RDS} alt="RDS 로고" />
            </div>
            <div>
              <p>
                <span>#Responsive</span> <span>#HTML5</span> <span>#CSS3</span>
                <span>#Bootstrap</span>
                <span>#jQuery</span>
              </p>
            </div>
          </li>
          <li className="megabox project">
            <div className="logoWrap">
              <img src={MEGABOX} alt="메가박스 로고" />
            </div>
            <div>
              <p>
                <span>#Responsive</span> <span>#HTML5</span> <span>#CSS3</span>
                <span>#Bootstrap</span>
                <span>#jQuery</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
