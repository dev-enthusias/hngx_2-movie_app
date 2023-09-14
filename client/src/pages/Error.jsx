import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>Oops!</p>
      <h1>Sorry, an unexpected error has occured.</h1>
      <p>{error.statusText || error.message}</p>
      {/* Failed to fetch */}
    </div>
  );
}
