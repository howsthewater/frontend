import React from "react";
import "../styles/footer.css";
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
    <div className="footerDiv">
      <p className="copyright">
        Copyright 2019 How's The Water Inc. All Rights Reserved
      </p>
      <div className="textContainer">
        <p className="line first">|</p>
        <a href="">Terms + Conditions</a>
        <p className="line">|</p>
        <a href="">Privacy Policy</a>
        <p className="line">|</p>
        <a href="">Legal Statement</a>
      </div>
    </div>
  );
};

export default CopyrightFooter;
