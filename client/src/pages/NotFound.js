import notFound from '../assets/lottie/notFound';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const LottieBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <LottieBlock>
      <Link to="/list">
        <Lottie animationData={notFound} style={{ height: 500 }} />
      </Link>
    </LottieBlock>
  );
};

export default NotFound;
