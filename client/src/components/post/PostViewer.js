import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import ThemeSwitch from '../common/ThemeSwitch';

const PostViewerBlock = styled(ThemeSwitch)`
  overflow: hidden;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 4rem;

  height: 100%;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled(ThemeSwitch)`
  font-size: 1.3125rem;
  padding-bottom: auto;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  const navigate = useNavigate();

  const onList = () => {
    navigate('/list');
  };

  //에러발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  //로딩중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }
  const { title, body, user, publishedDate, tags } = post;

  return (
    <>
      <PostViewerBlock>
        <Helmet>
          <title>{title} - Good Place</title>
        </Helmet>
        <PostHead>
          <h1>{title}</h1>
          <SubInfo
            username={user.username}
            publishedDate={publishedDate}
            hasMarginTop
          />
          <Tags tags={tags} />
        </PostHead>
        {actionButtons}
        <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      </PostViewerBlock>
      <PostFooter>
        <Button onClick={onList}>목록</Button>
      </PostFooter>
    </>
  );
};

export default PostViewer;
