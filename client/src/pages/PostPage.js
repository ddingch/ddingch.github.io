import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <HeaderContainer
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
