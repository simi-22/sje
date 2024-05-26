import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Styles/Project.css";
import Millie from "../assets/millie-logo.png";
import RDS from "../assets/RDS.png";
import MEGABOX from "../assets/megabox.png";
import MUVIC from "../assets/muvic.png";
import TIMES from "../assets/times.png";
import Netflix from "../assets/netflix.png";
import YES24 from "../assets/yes24.png";
import ShakeNDrink from "../assets/SND.png";

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth), // 수평 스크롤 거리 설정
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.scrollWidth,
      },
    });
  }, []);

  return (
    <div>
      <div id="projects">
        <div className="p-title">
          <h1>Project</h1>
          <p>
            Html,Css,Javascript,React, jQuery등을 사용하며 만들어본
            프로젝트입니다.
            <br /> 팀프로젝트는 학원과 온라인에서 진행했습니다.
          </p>
        </div>
        <ul className="project-container" ref={containerRef}>
          {/* 밀리 */}
          {/* 밀리 */}
          <li className="millie project">
            <div className="logoWrap">
              <img src={Millie} alt="밀리의서재 로고" />
            </div>
            <div>
              <p>
                <span>#Responsive</span> <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span className="p-javascript">#Javascript</span>
              </p>
            </div>
          </li>
          {/* 알디에스 */}
          {/* 알디에스 */}
          <li className="rds project">
            <div className="logoWrap">
              <img src={RDS} alt="RDS 로고" />
            </div>
            <div>
              <p>
                <span className="p-team">#Team</span>
                <span className="p-res">#Responsive</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span>#Bootstrap</span>
                <span>#jQuery</span>
              </p>
            </div>
          </li>
          {/* 메가박스 */}
          {/* 메가박스 */}
          <li className="megabox project">
            <div className="logoWrap">
              <img src={MEGABOX} alt="메가박스 로고" />
            </div>
            <div>
              <p>
                <span className="p-team">#Team</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span>#swiper.js</span>
              </p>
            </div>
          </li>
          {/* 뮤빅 */}
          {/* 뮤빅 */}
          <li className="muvic project">
            <div className="logoWrap">
              <img src={MUVIC} alt="뮤빅 로고" />
            </div>
            <div>
              <p>
                <span className="p-team">#Team</span>
                <span className="p-res">#Responsive</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span className="p-javascript">#Javascript</span>
                <span className="p-api">api</span>
              </p>
            </div>
          </li>
          {/* 뉴욕타임즈 */}
          {/* 뉴욕타임즈 */}
          <li className="times project">
            <div className="logoWrap">
              <img src={TIMES} alt="뉴욕타임즈 로고" />
            </div>
            <div>
              <p>
                <span className="p-res">#Responsive</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span className="p-javascript">#Javascript</span>
                <span className="p-api">api</span>
              </p>
            </div>
          </li>
          {/* 넷플릭스 */}
          {/* 넷플릭스 */}
          <li className="netflix project">
            <div className="logoWrap">
              <img src={Netflix} alt="넷플릭스 로고" />
            </div>
            <div>
              <p>
                <span className="p-res">#Responsive</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span className="p-javascript">#Javascript</span>
                <span className="p-react">REACT</span>
                <span className="p-api">api</span>
              </p>
            </div>
          </li>
          {/* 예스24 */}
          {/* 예스24 */}
          <li className="yes24 project">
            <div className="logoWrap">
              <img src={YES24} alt="예스24 로고" />
            </div>
            <div>
              <p>
                <span className="p-res">#Responsive</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span className="p-javascript">#Javascript</span>
                <span className="p-react">REACT</span>
                <span>My json server</span>
              </p>
            </div>
          </li>
          {/* 쉐이크앤드링크 */}
          {/* 쉐이크앤드링크 */}
          <li className="shake-drink project">
            <div className="logoWrap">
              <img src={ShakeNDrink} alt="넷플릭스 로고" />
            </div>
            <div>
              <p>
                <span className="p-team">#Team</span>
                <span className="p-res">#Responsive</span>
                <span className="p-html">#HTML5</span>
                <span className="p-css">#CSS3</span>
                <span className="p-javascript">#Javascript</span>
                <span className="p-react">REACT</span>
                <span className="p-api">api</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
