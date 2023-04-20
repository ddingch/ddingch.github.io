import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = ({ isDarkMode, toggleDarkMode }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Header
      user={user}
      onLogout={onLogout}
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
};

export default HeaderContainer;
