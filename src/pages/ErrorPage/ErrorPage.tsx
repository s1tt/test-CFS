import Button from 'shared/ui/Button/Button';

const ErrorPage = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div>
      <p>An unexpected error</p>
      <Button onClick={reloadPage}>Reload page</Button>
    </div>
  );
};

export default ErrorPage;
