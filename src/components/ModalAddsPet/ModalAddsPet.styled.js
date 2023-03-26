import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import {Form as FormikForm, Field as FormikField} from 'formik';

export const Overlay = styled.div`
  background-color: #1e2129;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 50px; */
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 15px;
  min-height: 40%;
  min-width: 40%;
  background-color: #bbd;
  border: 3px solid red;
  border-radius: 10px;
`;

export const Form = styled(FormikForm)`
  margin: 5px;
  height: 100%;
  width: 100%;
`;

export const Field = styled(FormikField)`
  margin: 5px;
  border: 3px solid red;
  border-radius: 10px;
`;

export const ErrorText = styled.p`
  color: red;
`;

export const ModalButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 20px 0 0 0;
  /* justify-content: center; */
  /* margin-bottom: 20px; */
  /* margin-right: auto; */
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: none;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1, 875;
  text-transform: uppercase;
  background-color: #2196f3;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid;
    background-color: #21d4f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }
`;

export const ModalTitle = styled.p`
  margin: 0 0 20px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 875;
`;

export const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const ModalPortal = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;



// ****

// .modal {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.25);
//   animation-name: appear;
//   animation-duration: 300ms;
// }

// .modal-dialog {
//   width: 100%;
//   max-width: 550px;
//   background: white;
//   position: relative;
//   margin: 0 20px;
//   max-height: calc(100vh - 40px);
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   -webkit-animation-name: animatetop;
//   -webkit-animation-duration: 0.4s;
//   animation-name: slide-in;
//   animation-duration: 0.5s;
// }

// .modal-header,
// .modal-footer {
//   display: flex;
//   align-items: center;
//   padding: 1rem;
// }
// .modal-header {
//   border-bottom: 1px solid #dbdbdb;
//   justify-content: space-between;
// }
// .modal-footer {
//   border-top: 1px solid #dbdbdb;
//   justify-content: flex-end;
// }
// .modal-close {
//   cursor: pointer;
//   padding: 1rem;
//   margin: -1rem -1rem -1rem auto;
// }
// .modal-body {
//   overflow: auto;
// }
// .modal-content {
//   padding: 1rem;
// }

// .modal-title {
//   margin: 0;
// }

// @keyframes appear {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
// @keyframes slide-in {
//   from {
//     transform: translateY(-150px);
//   }
//   to {
//     transform: translateY(0);
//   }
// }