import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    if ([username].includes('')) {
      setError('아이디를 입력해주세요.');
      return;
    }

    if ([password].includes('')) {
      setError('비밀번호를 입력해주세요.');
      return;
    }
    dispatch(login({ username, password }));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('아이디 및 비밀번호를 다시 확인해주세요.');
      dispatch(changeField({ form: 'login', key: 'username', value: '' }));
      dispatch(changeField({ form: 'login', key: 'password', value: '' }));
      return;
    } else if (auth) {
      dispatch(check());
    }

    setError(null);
  }, [auth, authError, dispatch]);

  //user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      navigate('/list');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
