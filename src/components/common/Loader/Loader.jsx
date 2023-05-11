import { ThreeCircles } from 'react-loader-spinner';
import { Spinner, Title } from './Loader.styled.js';

export const Loader = () => {
  return (
    <>
      <Title>
        Please wait till the data loading. We host the backend part on a free
        Render account so the first loading can take 1 min.
      </Title>
      <Spinner>
        <ThreeCircles
          height="100"
          width="100"
          color="#F59256"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </Spinner>
    </>
  );
};
