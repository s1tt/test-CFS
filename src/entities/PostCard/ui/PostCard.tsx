import { Link } from 'react-router-dom';
import { Post } from 'shared/api/typicode/models';
import Card from 'shared/ui/Card/Card';
import styled from 'styled-components';

interface PostCardProps {
  data: Post;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.textColorPrimary};
  height: 100%;
  padding: 10px;
`;

const PostCard = ({ data }: PostCardProps) => {
  return (
    <Card>
      <StyledLink to={`${data.id}`}>
        <p>
          <strong>ID: </strong>
          {data.id}
        </p>
        <p>
          <strong>Title: </strong>
          {data.title}
        </p>
      </StyledLink>
    </Card>
  );
};

export default PostCard;
