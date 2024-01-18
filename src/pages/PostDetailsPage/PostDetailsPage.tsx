import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from 'shared/api/typicode/posts';
import ErrorWrapper from 'shared/styledWrappers/ErrorWrapper/ErrorWrapper';
import ParagraphWrapper from 'shared/styledWrappers/ParagraphWrapper/ParagraphWrapper';
import SectionWrapper from 'shared/styledWrappers/SectionWrapper/SectionWrapper';
import Button from 'shared/ui/Button/Button';
import PageLoader from 'shared/ui/PageLoader/PageLoader';
import Title from 'shared/ui/Title/Title';

const PostDetailsPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const {
    isFetching,
    error,
    data: post
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(Number(postId))
  });

  if (isFetching) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorWrapper>Error fetching posts: {error.message}</ErrorWrapper>;
  }

  return (
    <SectionWrapper>
      <Button onClick={() => navigate('/')} $nav>
        Posts
      </Button>
      <Title>{post?.title}</Title>
      <div>
        <ParagraphWrapper>
          <strong>ID: </strong>
          {postId}
        </ParagraphWrapper>
        <ParagraphWrapper>
          <strong>Title: </strong>
          {post?.title}
        </ParagraphWrapper>
        <ParagraphWrapper>
          <strong>AuthorID: </strong>
          {post?.userId}
        </ParagraphWrapper>
        <ParagraphWrapper>
          <strong>Text: </strong>
          {post?.body}
        </ParagraphWrapper>
      </div>
    </SectionWrapper>
  );
};

export default PostDetailsPage;
