import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import ThemeSwitch from '../common/ThemeSwitch';

const PostListBlock = styled(ThemeSwitch)`
  margin-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto; /* 중앙정렬 */
`;

const WritePostButtonWrapper = styled(ThemeSwitch)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  padding-top: 1rem;
`;

const PostItemBlock = styled(ThemeSwitch)`
  padding-top: 3rem;
  padding-bottom: 3rem;

  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }

  //항목 사이 테두리
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/list/${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  //에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/* 로딩중이 아니고, 포스트 배열이 존재할 때만 보여줌. */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
