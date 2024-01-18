import { POSTS_PER_PAGE } from 'shared/config/constants/constants';
import Button from 'shared/ui/Button/Button';
import styled from 'styled-components';
import { DOTS, usePagination } from '../hooks/usePagination';

interface PaginationProps {
  onPageChange: (currentPage: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize?: number;
  isFetching: boolean;
}

const StyledPaginationList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 5px;
  align-items: flex-end;
`;

const StyledDots = styled.span`
  color: ${props => props.theme.colors.textColorPrimary};
  margin: 0 5px;
`;

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize = POSTS_PER_PAGE,
    isFetching
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (!paginationRange) {
    return null;
  }

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <StyledPaginationList>
      <li onClick={onPrevious}>
        <Button disabled={currentPage === 1}>{'<'}</Button>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber + index}>
              <StyledDots>&#8230;</StyledDots>
            </li>
          );
        }

        return (
          <li key={pageNumber} onClick={() => onPageChange(Number(pageNumber))}>
            <Button $active={currentPage === pageNumber} disabled={isFetching}>
              {pageNumber}
            </Button>
          </li>
        );
      })}
      <li onClick={onNext}>
        <Button disabled={currentPage === lastPage}>{'>'}</Button>
      </li>
    </StyledPaginationList>
  );
};

export default Pagination;
