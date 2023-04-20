import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const HeaderBlock = styled(ThemeSwitch)`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(ThemeSwitch)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  padding-right: 1rem;
  padding-left: 1rem;
  .logo {
    //font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: fixed;
  right: 50%;
`;

/**
 * 헤더가 fixed로 되어있기 때문에 페이지의 컨텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout, isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/list" className="logo">
            <h2>Good Place</h2>
          </Link>
          <Icon onClick={() => toggleDarkMode()}>
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </Icon>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>

      <Spacer />
    </>
  );
};

export default Header;
