import styled from 'styled-components';

const ThemeSwitchBlock = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;

const ThemeSwitch = ({ children, ...rest }) => {
  //style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ThemeSwitchBlock {...rest}>{children}</ThemeSwitchBlock>;
};

export default ThemeSwitch;
