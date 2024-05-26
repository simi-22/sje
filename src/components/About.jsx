import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../Styles/About.scss";

const About = () => {
  const about0Ref = useRef(null);
  const about1Ref = useRef(null);
  const about2Ref = useRef(null);
  const about3Ref = useRef(null);

  useEffect(() => {
    const aboutElements = [
      about0Ref.current,
      about1Ref.current,
      about2Ref.current,
      about3Ref.current,
    ];
    aboutElements.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 70%", // 요소가 화면 상단에서 70% 지점에 도달할 때 시작
          end: "bottom 70%", // 요소가 화면 하단에서 70% 지점에 도달할 때 끝
        },
      });
    });
  }, []);
  // intersection observer
  // intersection observer

  const handleScroll = () => {
    const elements = document.querySelectorAll(".initial li");
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  useEffect(() => {
    // 초기 실행
    handleScroll();

    // scroll 이벤트 핸들러 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about">
      <div className="about about0" ref={about0Ref}>
        <ul className="initial">
          <li>SIM JAE EUN</li>
          <li>WEB PUBLISHER</li>
          <li>PORTFOLIO</li>
        </ul>
      </div>
      <div className="about about1" ref={about1Ref}>
        <p className="about-1-cover"></p>
        <div class="scene">
          <div class="cube">
            <div class="cube__face cube__face--front">creative</div>
            <div class="cube__face cube__face--back">Goal-oriented</div>
            <div class="cube__face cube__face--right">Diligent</div>
            <div class="cube__face cube__face--left">Collaborative</div>
            <div class="cube__face cube__face--top">Communicative</div>
            <div class="cube__face cube__face--bottom">Self-motivated</div>
          </div>
        </div>
        <h1>Self-improvement</h1>
        <div>
          <p>직관적이고 매력적인 UI를, 편안한 UX를 위해 고민합니다.</p>
          <p>항상 배우는 자세로 개선하고 발전하는 웹퍼블리셔가 되겠습니다.</p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="about about2" ref={about2Ref}>
        <h1>SKILL</h1>
        <p>
          디자인 과정(PhotoShop, Illustrator)과 웹접근성과 웹표준에 맞는 반응형
          웹페이지 제작에 대해 배웠습니다.
          <br /> 또한 Vanilla JS와 React등을 공부했습니다.
        </p>
        <ul>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="html5"
                />
              </div>
              <div className="card-back">
                <p>
                  <span>시맨틱 태그</span>를 활용하여 웹 페이지를 구축하며,
                  <span>웹 접근성</span>을 고려합니다 <br />{" "}
                  <span>웹 표준</span>을 준수하여 다양한 브라우저와 기기에서
                  일관된 경험을 제공 할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="css3"
                />
              </div>
              <div className="card-back">
                <p>
                  적절한 색상, 레이아웃 및 폰트 선택을 통해 사용자 경험을
                  최적화하고, 미디어 쿼리를 활용하여 <span>반응형</span> 웹
                  사이트를 만들 수 있습니다.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="javascript"
                />
                <img
                  src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
                  alt="jquery"
                />
              </div>
              <div className="card-back">
                <p>
                  <span>ES6 문법</span>을 사용할 수 있고, async/await 패턴으로
                  비동기 <span>API 호출</span>을 처리할 수 있습니다.
                  <br />
                  또한 <span>jQuery</span>를 사용 해 코드를 작성 할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="React"
                />
              </div>
              <div className="card-back">
                <p>
                  <span>컴포넌트</span>를 사용해 재사용성을 높일 수 있고, <br />
                  <span>Zustand</span>나 <span>Redux</span>와 같은 라이브러리를
                  사용해 상태를 관리하는 방법을 공부했습니다. <br />
                  axios를 활용해
                  <span>Api를 호출</span>할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                  alt="Bootstrap"
                />
                <img
                  src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
                  alt="styledComponent"
                />
                <img
                  src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                  alt="scss"
                />
              </div>
              <div className="card-back">
                <p>
                  SCSS와 Bootstrap을 사용해 CSS 작성을 <span>효율적</span>으로
                  할 수 있습니다. <br />
                  또한 Styled-Components와 Emotion을 사용해 Javascript안에서{" "}
                  <span>컴포넌트 스타일링</span>을 할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white"
                  alt="포토샵"
                />

                <img
                  src="https://img.shields.io/badge/illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white"
                  alt="일러스트레이터"
                />
              </div>
              <div className="card-back">
                <p>
                  <span>디자인 툴</span>을 사용하여 와이어 프레임과 시안, 배너
                  등을 작업할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                  alt="피그마"
                />

                <img
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  alt="github"
                />
              </div>
              <div className="card-back">
                <p>
                  <span>협업 도구</span>를 사용하여 피드백을 주고받으며 협업을
                  진행할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrap">
              <div className="card-front">
                <img
                  src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
                  alt="비트"
                />
              </div>
              <div className="card-back">
                <p>
                  <span>빌드 도구</span>를 사용해 효율적인 개발을 할 수
                  있습니다.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="about about3" ref={about3Ref}>
        <h1>Project</h1>
        <p>
          Html,Css,Javascript,React, jQuery등을 사용하며 만들어본
          프로젝트입니다.
          <br /> 팀프로젝트는 학원과 온라인에서 진행했습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
