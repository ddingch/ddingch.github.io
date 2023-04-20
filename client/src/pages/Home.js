import letsgo from '../assets/lottie/letsgo';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import Lottie from 'lottie-react';
import styled from 'styled-components';

const LottieBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <LottieBlock>
      <Link to="/list">
        <Lottie animationData={letsgo} style={{ height: 200 }} />
      </Link>
    </LottieBlock>
  );
};

export default Home;
