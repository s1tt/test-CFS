import styled, { keyframes } from 'styled-components';

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const EllipsisDiv = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const Ellipsis1 = styled(EllipsisDiv)`
  left: 8px;
  animation: ${ldsEllipsis1} 0.6s infinite;
`;

const Ellipsis2 = styled(EllipsisDiv)`
  left: 8px;
  animation: ${ldsEllipsis2} 0.6s infinite;
`;

const Ellipsis3 = styled(EllipsisDiv)`
  left: 32px;
  animation: ${ldsEllipsis2} 0.6s infinite;
`;

const Ellipsis4 = styled(EllipsisDiv)`
  left: 56px;
  animation: ${ldsEllipsis3} 0.6s infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Ellipsis1 />
      <Ellipsis2 />
      <Ellipsis3 />
      <Ellipsis4 />
    </LoaderWrapper>
  );
};

export default Loader;
