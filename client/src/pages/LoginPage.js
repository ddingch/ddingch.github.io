import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = ({ isDarkMode }) => {
  return (
    <AuthTemplate isDarkMode={isDarkMode}>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
