import styled from 'styled-components';

import { ReactComponent as LogoSVGComp } from './petly.svg';

export const LogoImg = styled(LogoSVGComp)`
  --logoPrimary: ${p => p.theme.colors.heading};
  --logoAccent: ${p => p.theme.colors.accent};

  & > path {
    transition: fill 1s ease-in-out;
  }

  width: 82px;
  @media (min-width: 768px) {
    width: 94px;
  }
  @media (min-width: 1280px) {
    margin-right: 80px;
    margin-right: 0;
  }
`;
