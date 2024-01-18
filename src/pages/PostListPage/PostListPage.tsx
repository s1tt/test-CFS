import { useQuery } from '@tanstack/react-query';
import { PostList } from 'features/PostList';
import { useEffect, useState } from 'react';
import { getPosts } from 'shared/api/typicode/posts';
import { POSTS_PER_PAGE } from 'shared/config/constants/constants';
import ErrorWrapper from 'shared/styledWrappers/ErrorWrapper/ErrorWrapper';
import SectionWrapper from 'shared/styledWrappers/SectionWrapper/SectionWrapper';
import Loader from 'shared/ui/Loader/Loader';
import PageLoader from 'shared/ui/PageLoader/PageLoader';
import Title from 'shared/ui/Title/Title';
import { Pagination } from 'widgets/Pagination';
import { SearchForm } from 'widgets/SearchForm';

const PostListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const { isSuccess, isFetching, error, data, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(POSTS_PER_PAGE, page, searchQuery.trim())
  });

  useEffect(() => {
    if (isSuccess) {
      const totalPosts = data.headers['x-total-count'];
      setTotalPosts(totalPosts);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearchQuery = searchQuery.trim();
    setSearchQuery(trimmedSearchQuery);
    if (trimmedSearchQuery) {
      setPage(1);
      refetch();
    }
  };

  if (error) {
    return <ErrorWrapper>Error fetching posts: {error.message}</ErrorWrapper>;
  }

  if (isFetching && !data) {
    return <PageLoader />;
  }

  if (!data) return null;

  return (
    <SectionWrapper>
      <Title>Post List</Title>
      <SearchForm
        value={searchQuery}
        setValue={setSearchQuery}
        handleSubmitForm={handleSubmitForm}
        isFetching={isFetching}
      />

      {data.posts.length < 1 ? (
        isFetching ? (
          <Loader />
        ) : (
          <ErrorWrapper>Nothing found</ErrorWrapper>
        )
      ) : (
        <>
          <PostList posts={data.posts} isFetching={isFetching} />

          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            totalCount={totalPosts}
            isFetching={isFetching}
          />
        </>
      )}
    </SectionWrapper>
  );
};

export default PostListPage;
