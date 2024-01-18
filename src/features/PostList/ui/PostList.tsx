import { PostCard } from 'entities/PostCard';
import { Post } from 'shared/api/typicode/models';
import Loader from 'shared/ui/Loader/Loader';
import styled from 'styled-components';

interface PostListProps {
  posts: Post[];
  isFetching: boolean;
}

interface StyledPostListProps {
  $isFetching: boolean;
}

const StyledPostList = styled.ul<StyledPostListProps>`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: ${props => (props.$isFetching ? 'center' : 'stretch')};
  margin-bottom: 20px;
  min-height: 40vh;
`;

const PostList = ({ posts, isFetching }: PostListProps) => {
  return (
    <StyledPostList $isFetching={isFetching}>
      {isFetching ? (
        <Loader />
      ) : (
        posts.map(post => (
          <li key={post.id}>
            <PostCard data={post} />
          </li>
        ))
      )}
    </StyledPostList>
  );
};

export default PostList;
