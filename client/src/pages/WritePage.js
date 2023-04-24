import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <HeaderContainer
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Responsive>
        <EditorContainer isDarkMode={isDarkMode} />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
