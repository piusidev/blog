import { listGists } from 'api/posts/list';
import React, { useEffect } from 'react';

export const Posts: React.FC = () => {
  useEffect(() => {
    const fetch = async () => {
      const data = await listGists(1);

      console.log(data);
    };

    fetch();
  }, []);

  return (
    <div>
      <h1>Posts.</h1>
    </div>
  );
};
