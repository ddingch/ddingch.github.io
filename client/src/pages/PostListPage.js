import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <HeaderContainer
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
