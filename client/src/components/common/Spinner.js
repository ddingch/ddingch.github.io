import styled from 'styled-components';
import FadeLoader from '../../../node_modules/react-spinners/FadeLoader';

const SpinnerBlock = styled.div`
  display: block;
  position: absolute !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Spinner = (props) => {
  const check = props.loading == null ? false : props.loading;
  return (
    check && (
      <SpinnerBlock>
        <FadeLoader
          color="#d6a436"
          height={15}
          margin={8}
          radius={2}
          width={5}
        />
      </SpinnerBlock>
    )
  );
};

export default Spinner;
