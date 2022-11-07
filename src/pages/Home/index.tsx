import { useAuth } from 'hooks/useAuth';
import React from 'react';

const Page: React.FC = () => {
  const { handleLogout } = useAuth();

  return (
    <>
      <h1>The Project.</h1>
      <button type="button" onClick={() => handleLogout()}>logout</button>
    </>
  );
};

export default Page;
