import styled, { createGlobalStyle } from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { RxCross1 } from 'react-icons/rx';

export const Overlay = styled.div`
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${p => p.theme.colors.inputText};
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 40px 20px;
  min-width: 280px;
  background: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};

  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 608px;
    padding: 40px 80px 40px 80px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    width: 608px;
    padding: 40px 80px 40px 80px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
`;

export const Form = styled(FormikForm)`
  height: 100%;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.n};
  font-weight: ${p => p.theme.fontWeights.heading};

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.ml};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const FormLabelCentre = styled(FormLabel)`
  margin: 16px 0 16px 0;
`;

export const FormLabelFoto = styled(FormLabel)`
  align-items: center;
  margin: 0 0 20px 0;
  font-size: ${p => p.theme.fontSizes.m};

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.nl};
    margin: 0 0 40px 0;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: ${p => p.theme.fontSizes.nl};
    margin: 0 0 40px 0;
  }
`;

export const FormLabelComment = styled(FormLabel)`
  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.ml};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const Field = styled(FormikField)`
  display: flex;
  margin: 8px 0 0 0;
  padding: 11px 14px 12px 14px;
  height: 40px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.text};

  background: ${p => p.theme.colors.mainBackground};
  border: ${p => p.theme.borders.inputModal};
  border-color: ${p => p.theme.colors.inputModal};
  border-radius: ${p => p.theme.radii.mainBorderRadius};

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin: 12px 0 0 0;
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin: 12px 0 0 0;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const FieldComment = styled.textarea`
  display: flex;
  height: 100px;
  width: 100%;
  margin: 8px 0 0 0;
  padding: 11px 14px 12px 14px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.text};

  background: ${p => p.theme.colors.mainBackground};
  border: ${p => p.theme.borders.inputModal};
  border-color: ${p => p.theme.colors.inputModal};

  border-radius: ${p => p.theme.radii.secondaryBorderRadius};

  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 116px;
    width: 394px;
    margin: 12px auto 0 auto;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    height: 116px;
    width: 394px;
    margin: 12px auto 0 auto;
  }
`;
export const Comment = styled.p`
  font-size: ${p => p.theme.fontSizes.n};
  font-weight: ${p => p.theme.fontWeights.heading};

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-left: 27px;
    font-size: ${p => p.theme.fontSizes.ml};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-left: 27px;
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const DatePickerWrapperStyles = createGlobalStyle`
.react-datepicker-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;
  font-size: ${p => p.theme.fontSizes.m};

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.nl};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: ${p => p.theme.fontSizes.nl};
  }
} 

.react-datepicker__input-container {
  display: flex;
  margin: 0 0 0 0;
  
}
  .react-datepicker__input-container input {
    display: flex;
  margin: 8px 0 0 0;
  padding: 11px 14px 12px 14px;
  height: 40px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.text};

  background: ${p => p.theme.colors.mainBackground};
  border: ${p => p.theme.borders.inputModal};
  border-color: ${p => p.theme.colors.inputModal};
  border-radius: ${p => p.theme.radii.mainBorderRadius};

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: ${p => p.theme.fontSizes.m};
  }
}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 28px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;

  @media ${p => p.theme.breakpoints.tablet.media} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonWrapperTwo = styled(ButtonWrapper)`
  @media ${p => p.theme.breakpoints.tablet.media} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ErrorText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.text};
  color: ${p => p.theme.colors.warning};
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0 0 0;
  padding: 9px 8px 9px 8px;
  height: 40px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.heading};
  background-color: ${p => p.theme.colors.secondaryBackground};

  border: ${p => p.theme.borders.primaryBtn};
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  border-color: ${p => p.theme.colors.accent};

  cursor: pointer;
  transition: color ${p => p.theme.transitions.normal},
    box-shadow 250ms ${p => p.theme.transitions.normal};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryBackground};
    border: ${p => p.theme.borders.inputModal};
    border-color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.hoverBtn};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 44px;
    width: 180px;
    font-size: ${p => p.theme.fontSizes.nl};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    height: 44px;
    width: 180px;
    font-size: ${p => p.theme.fontSizes.nl};
  }
`;

export const CrossButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 auto;
  height: 34px;
  width: 34px;
  background: ${p => p.theme.colors.input};

  border-radius: ${p => p.theme.radii.round};
  border: none;
  cursor: pointer;
  transition: color ${p => p.theme.transitions.normal},
    box-shadow 250ms ${p => p.theme.transitions.normal};

  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.hoverBtn};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 44px;
    width: 44px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    height: 44px;
    width: 44px;
  }
`;
export const Icon = styled(RxCross1)`
  position: absolute;
  flex: none;
  width: 24px;
  height: 24px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryBackground};
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 34px;
    width: 34px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    height: 34px;
    width: 34px;
  }
`;

export const ImgPlug = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  object-fit: cover;
  overflow: hidden;
  margin: 20px 0 0 0;
  background-color: ${p => p.theme.colors.input};

  border-radius: ${p => p.theme.radii.secondaryBorderRadius};

  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 182px;
    width: 182px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 182px;
    width: 182px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
`;

export const ImgPet = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  margin: 20px 0 0 0;
  object-fit: cover;
  overflow: hidden;
  background-color: transparent;

  border-radius: ${p => p.theme.radii.secondaryBorderRadius};

  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 182px;
    width: 182px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    height: 182px;
    width: 182px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
`;

export const ModalTitle = styled.p`
  margin: 0 0 28px 0;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.body};

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.lx};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: ${p => p.theme.fontSizes.lx};
  }
`;

// export const ModalContent = styled.div`
//   max-width: 500px;
//   width: 100%;
// `;

// export const ModalPortal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 100;
// `;