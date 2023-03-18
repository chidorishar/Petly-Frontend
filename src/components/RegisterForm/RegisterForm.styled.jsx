import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 42px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 80px;
  }

  @media (min-width: 1280px) {
    margin-top: 44px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    background: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;

    padding: 60px 80px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    min-width: 608px;
  }

  @media (min-width: 1280px) {
    min-width: 618px;
  }
`;

const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: ${p => p.};
  font-size: 36px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  /* Черный */

  color: #111111;
`;

export { Wrapper, FormWrapper, Title };
