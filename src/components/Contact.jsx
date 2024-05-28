import React, { useEffect } from "react";
import "../Styles/Contact.css";
import anime from "animejs";

const Contact = () => {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".quote1, .quote2");
    //replace(/\S/g, "<span class='letter'>$&</span>")는
    //텍스트 내의 각 문자를 <span class='letter'>문자</span> 형태로 변환.
    //$&는 정규식에 의해 선택된 각 문자. 따라서 각 문자가 <span class='letter'>와 </span> 사이에 감싸지게 됨
    textWrappers.forEach((textWrapper) => {
      const sentences = textWrapper.textContent.split(". ");
      textWrapper.innerHTML = sentences
        .map(
          (sentence) =>
            `<p>${sentence
              .split(" ")
              .map((word) =>
                word
                  .split("")
                  .map((letter) => `<span class='letter'>${letter}</span>`)
                  .join("")
              )
              .join(" ")}</p>`
        )
        .join("");
    });

    anime
      .timeline({ loop: true })
      .add({
        targets: ".quote1 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1800,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: ".quote1 .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1700,
        delay: (el, i) => 100 + 30 * i,
      })

      .add({
        targets: ".quote2 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1800,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: ".quote2 .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1700,
        delay: (el, i) => 100 + 30 * i,
      });
  }, []); // Run only once on component mount

  return (
    <div id="contact">
      <div>
        <p className="quote1">Take the leap.</p>
        <div>
          <a href="tel:01072748977">phone</a>
          <a href="mailto:ssimii0222@gamil.com">email</a>
        </div>
      </div>
      <div>
        <p className="quote2">Dream, then do.</p>
      </div>
    </div>
  );
};

export default Contact;
