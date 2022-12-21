import { getPost } from 'api/posts/get';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownPreview from 'react-markdown';
import { Container } from './styles';

const Post: React.FC = () => {
  const { id } = useParams();

  const [post, setPost] = useState<any>('');

  useEffect(() => {
    const fetch = async () => {
      const data = await getPost(id);

      setPost(data);
    };

    if (id) {
      fetch();
    }
  }, [id]);

  return (
    <Container>
      <MarkdownPreview>{post.content}</MarkdownPreview>
    </Container>
  );
};

export default Post;
