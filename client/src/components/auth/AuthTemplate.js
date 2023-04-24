import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../common/ThemeSwitch';

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled(ThemeSwitch)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    color: black;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children, isDarkMode }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/list">
            <h2>Good Place</h2>
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
