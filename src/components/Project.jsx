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
            <br /> 더 많은 작업물은 Github에서 보실 수 있습니다.
          </p>
        </div>
        <ul className="project-container" ref={containerRef}>
          {/* 밀리 */}
          {/* 밀리 */}
          <li
            className="millie project"
            onClick={() =>
              window.open("https://simi-22.github.io/millie-web/main")
            }
          >
            <div className="logoWrap">
              <img src={Millie} alt="밀리의서재 로고" />
            </div>
            <p
              className="p-github"
              onClick={() =>
                window.open("https://github.com/simi-22/millie-web")
              }
            >
              Github
            </p>
            <p className="responsive">Responsive</p>
            <div></div>
          </li>
          {/* 알디에스 */}
          {/* 알디에스 */}
          <li
            className="rds project"
            onClick={() => window.open("https://simi-22.github.io/rds/")}
          >
            <div className="logoWrap">
              <img src={RDS} alt="RDS 로고" />
            </div>
            <p
              className="p-github"
              onClick={() => window.open("https://github.com/simi-22/rds")}
            >
              Github
            </p>
            <p className="responsive">Responsive</p>
            <p className="team">Team</p>

            <div></div>
          </li>
          {/* 메가박스 */}
          {/* 메가박스 */}
          <li
            className="megabox project"
            onClick={() => window.open("https://simi-22.github.io/megabox/")}
          >
            <div className="logoWrap">
              <img src={MEGABOX} alt="메가박스 로고" />
            </div>
            <p
              className="p-github"
              onClick={() => window.open("https://github.com/simi-22/megabox")}
            >
              Github
            </p>
            <p className="team">Team</p>
            <div></div>
          </li>
          {/* 뮤빅 */}
          {/* 뮤빅 */}
          <li
            className="muvic project"
            onClick={() => window.open("https://muvic.netlify.app/")}
          >
            <div className="logoWrap">
              <img src={MUVIC} alt="뮤빅 로고" />
            </div>
            <p
              className="p-github"
              onClick={() =>
                window.open("https://github.com/simi-22/group-23-api-project")
              }
            >
              Github
            </p>
            <p className="responsive">Responsive</p>
            <p className="team">Team</p>

            <div></div>
          </li>
          {/* 뉴욕타임즈 */}
          {/* 뉴욕타임즈 */}
          <li
            className="times project"
            onClick={() => window.open("https://simi-22.github.io/NewsApp/")}
          >
            <div className="logoWrap">
              <img src={TIMES} alt="뉴욕타임즈 로고" />
            </div>
            <p
              className="p-github"
              onClick={() => window.open("https://github.com/simi-22/NewsApp")}
            >
              Github
            </p>
            <p className="responsive">Responsive</p>

            <div></div>
          </li>
          {/* 넷플릭스 */}
          {/* 넷플릭스 */}
          <li
            className="netflix project"
            onClick={() => window.open("https://nmoviewebsite.netlify.app/")}
          >
            <div className="logoWrap">
              <img src={Netflix} alt="넷플릭스 로고" />
            </div>
            <p
              className="p-github"
              onClick={() => window.open("https://github.com/simi-22/Netflix")}
            >
              Github
            </p>
            <p className="responsive">Responsive</p>

            <div></div>
          </li>
          {/* 예스24 */}
          {/* 예스24 */}
          <li
            className="yes24 project"
            onClick={() => window.open("https://booksmall.netlify.app/?q=")}
          >
            <div className="logoWrap">
              <img src={YES24} alt="예스24 로고" />
            </div>
            <p
              className="p-github"
              onClick={() =>
                window.open("https://github.com/simi-22/shoppingmall")
              }
            >
              Github
            </p>
            <p className="responsive">Responsive</p>

            <div></div>
          </li>
          {/* 쉐이크앤드링크 */}
          {/* 쉐이크앤드링크 */}
          <li
            className="shake-drink project"
            onClick={() => window.open("https://shake-drink.vercel.app/")}
          >
            <div className="logoWrap">
              <img src={ShakeNDrink} alt="쉐이크앤드링크 로고" />
            </div>
            <p
              className="p-github"
              onClick={() =>
                window.open("https://github.com/simi-22/shake_drink")
              }
            >
              Github
            </p>
            <p className="responsive">Responsive</p>
            <p className="team">Team</p>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
