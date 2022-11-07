import { useAuth } from 'hooks/useAuth';
import React from 'react';

function Page () {
  const { handleLogin } = useAuth();

  const doLogin = async (): Promise<void> => {
    await handleLogin();
  };

  return (
    <>
      <h1>The Project.</h1>
      <button type="button" onClick={async () => doLogin()}>login</button>
    </>
  );
}

export default Page;
