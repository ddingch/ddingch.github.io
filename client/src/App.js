import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/common/theme';
import { useEffect, useLayoutEffect, useState } from 'react';
import client from './lib/api/client';
import Spinner from './components/common/Spinner';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  //새로고침시 다크모드 유지
  useLayoutEffect(() => {
    const data = localStorage.getItem('isDarkMode');
    if (data) {
      setIsDarkMode(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  });

  //다크모드 on/off
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  //요청, 응답전 로딩 스피너
  useEffect(() => {
    //요청 인터셉터
    client.interceptors.request.use(
      (config) => {
        //요청 전 작업 수행
        setLoading(true);
        return config;
      },
      (error) => {
        //요청 실패시 특정 작업 수행

        //에러나면 로딩끄기
        return Promise.reject(error);
      },
    );

    //응답 인터셉터
    client.interceptors.response.use(
      (response) => {
        //요청 성공시 특정 작업 수행
        setLoading(false);
        //응답받으면 로딩 끄기
        return response;
      },
      (error) => {
        //요청 실패시 특정 작업 수행

        //응답 에러시 로딩끄기
        setLoading(false);
        return Promise.reject(error);
      },
    );
  }, []);

  return (
    <>
      <Helmet
        bodyAttributes={
          isDarkMode
            ? { style: 'background-color: #202020' }
            : { style: 'background-color: #ffffff' }
        }
      >
        <title>Good Place</title>
      </Helmet>
      <Spinner loading={loading} />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/write"
            element={
              <WritePage
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            path="/list"
            element={
              <PostListPage
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            path="/list/:username"
            element={
              <PostListPage
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            path="/list/:username/:postId"
            element={
              <PostPage
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
