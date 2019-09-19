import React from "react";
import "../styles/footer.css";
import "../styles/utility.css";
import footerPicture1 from "../assets/about-pic-1.jpg";
import footerPicture2 from "../assets/about-pic-2.jpg";
// import styled from "styled-components";
// const FooterDiv = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 5% 0 2% 0;
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   font-weight: 500;
//   font-family: Ubuntu;
//   font-size: 1.6rem;
//   color: #2d728f;
//   div {
//     display: flex;
//     align-items: center;
//     text-align: center;
//     font-size: 1.6rem;
//     a {
//       text-decoration: none;
//       color: #2d728f;
//       :hover {
//         color: #26bcd7;
//       }
//     }
//   }
//   .line {
//     margin: 0 5px 0 5px;
//   }
//   @media (max-width: 894px) {
//     width: 70%;
//     flex-direction: column;
//     .copyright {
//       margin-bottom: 1%;
//     }
//     .first {
//       display: none;
//     }
//   }
//   @media (max-width: 576px) {
//     .copyright {
//       width: 103%;
//     }
//   }
// `;

const CopyrightFooter = () => {
  return (
    <>
      <div className="footerDiv">
        <p className="copyright">
          &#169; 2019 How's The Water Inc. All Rights Reserved
        </p>
        <div className="textContainer">
          <p className="line first">|</p>
          <a className="textA" href="#popup-footer">
            Terms + Conditions
          </a>
          <p className="line">|</p>
          <a className="textA" href="#popup-footer">
            Privacy Policy
          </a>
          <p className="line">|</p>
          <a className="textA" href="#popup-footer">
            Legal Statement
          </a>
        </div>
      </div>
      <div className="popup" id="popup-footer">
        <div className="popup-content">
          <div className="popup-left">
            <img
              src={footerPicture1}
              alt="A person relaxing"
              className="popup-img"
            />
            <img
              src={footerPicture2}
              alt="A person surfing"
              className="popup-img"
            />
          </div>
          <div className="popup-right">
            <a href="#section-about" className="popup-close">
              &times;
            </a>
            <div className="popup-text">
              <h2 className="heading-secondary">Terms & Conditions</h2>
              <p className="paragraph">
                Sint velit reprehenderit quidem possimus enim, cum dolorum
                tempore id ipsam eveniet delectus, quasi blanditiis. Quas aut
                quo quos earum eligendi ab? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
              </p>
              <h2 className="heading-secondary">Privacy Policy</h2>
              <p className="paragraph">
                Sint velit reprehenderit quidem possimus enim, cum dolorum
                tempore id ipsam eveniet delectus, quasi blanditiis. Quas aut
                quo quos earum eligendi ab? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
              </p>
              <h2 className="heading-secondary">Legal Statement</h2>
              <p className="paragraph">
                Sint velit reprehenderit quidem possimus enim, cum dolorum
                tempore id ipsam eveniet delectus, quasi blanditiis. Quas aut
                quo quos earum eligendi ab? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightFooter;
