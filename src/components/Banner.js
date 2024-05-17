import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import "./Banner.css"
// export const Banner = () => {
function Banner(){    
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["to Divyanshi's sketch World"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" >
    {/* id="home" */}
        <div className="banner-inner">
          {/* <div className="animated-item2"></div> */}
          <div className="animated-item1">
            



            <img src="./images/women.png" alt="image" className="women-img" width="100px" height="200px"></img>
          </div>
          <div className="banner-text-div">
                <div className="animated-text">
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible ? "animate__animated animate__fadeIn" : ""
                        }
                      >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Welcome! to</h1>
                        <h1>Divyanshi's Sketch World..</h1>
                        <h1 className="heading-div">
                          <span className="welcome">{`Welcome! `}</span>{" "}
                          <span
                            className="txt-rotate"
                            dataPeriod="1000"
                            data-rotate='[ "to Divyanshi sketch World"]'
                          >
                            <span className="wrap">{text}</span>
                          </span>
                        </h1>
                        
                        {/* <button>
                          Let’s Connect <ArrowRightCircle size={25} />
                        </button> */}
                      </div>
                     )}
                    </TrackVisibility>
                  </div>
                  <div className="static-text-div">
                      <p>
                        Hello and welcome! I'm Divyanshi Verma, 
                        a passionate sketch artist. With each stroke 
                        of my pencil, I aim to capture<br/>
                        the essence of the world around me,
                        translating emotions,<br/> stories, and moments 
                        into captivating sketches.
                        <br/><br/>
                        My medium of drawing <br/> ||Graphite pencil || Charcoal pencil || Watercolor || Acrylic paint || Pencil colour
                      </p>
                  </div>
                  
          </div>
          
        </div>
          
            
          
    </section>
  );
};
export default Banner;
{/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img className="banner-item1-img"
                    src="./images/banner-item1.png"
                    alt="Header Img"
                    style={{ width: 300 }}
                  />
                  <img
                    src={"https://i.imgur.com/DC4LkuS.png"}
                    alt="Header Img"
                    style={{ width: 500 }}
                  />
                </div>
              )}
            </TrackVisibility> */}