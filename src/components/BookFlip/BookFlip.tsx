import React from "react";
import "./styles.css";

const BookFlip: React.FC = () => {
  let second = document.getElementById("second");

  const prevImg = () => {
    if (second) {
      second.style.transform = "rotateY(0deg)";
      second.style.transform = "rotateY(0deg)";
    }
  };
  const nextImg = () => {
    if (second) {
      second.style.transform = "rotateY(-180deg)";
      second.style.transform = "rotateY(-180deg)";
    }
  };

  const handleLeftClick = () => {
    prevImg();
  };

  const handleRightClick = () => {
    nextImg();
  };

  return (
    <div className="container">
      <div className="page" id="first">
        <div className="back">
          <div className="outer">
            <div className="content">
              <img src="https://tympanus.net/Development/BookBlock/images/demo1/1.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="page" id="second">
        <div className="front">
          <div className="outer">
            <div className="content">
              <img src="https://tympanus.net/Development/BookBlock/images/demo1/1.jpg" />
            </div>
          </div>
        </div>
        <div className="back" id="third">
          <div className="outer">
            <div className="content">
              <div className="helper-class-to-make-bug-visbile">
                <img src="https://tympanus.net/Development/BookBlock/images/demo1/2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page" id="fourth">
        <div className="front">
          <div className="outer">
            <div className="content">
              <img src="https://tympanus.net/Development/BookBlock/images/demo1/2.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div id="prev" onClick={handleLeftClick}></div>
      <div id="next" onClick={handleRightClick}></div>
    </div>
  );
};

export default BookFlip;
