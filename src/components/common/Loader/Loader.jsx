import { ThreeCircles } from 'react-loader-spinner';
import { Spinner } from './Loader.styled.js';

const Loader = () => {
  return (
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
  );
};

export default Loader;
