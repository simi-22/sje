import React, { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    function handleScroll() {
      // 스크롤 이벤트 핸들러
      console.log("스크롤 이벤트 발생!");
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 컴포넌트가 마운트될 때 한 번만 등록

  return (
    <div style={{ height: "2000px", background: "#f0f0f0" }}>
      스크롤 가능한 컨텐츠
    </div>
  );
};

export default Scroll;
