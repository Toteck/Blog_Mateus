import { useState, useEffect } from "react";
import {
  Container,
  Profile,
  ProfileImg,
  ProfileName,
  ProfileDescription,
  Posts,
  Post,
} from "./styles";

type PostType = {
  id: number;
  title: string;
  description: string;
};

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <Container>
      <h1>Profile</h1>
      <Profile>
        <ProfileImg src="https://avatars.githubusercontent.com/u/53489827?v=4" />
        <ProfileName>Mateus Weslley</ProfileName>
        <ProfileDescription>
          Olá, me chamo Mateus Weslley e sou estudante de Sistemas para
          Internet. Amo a área da tecnologia desde quando me entendo por gente e
          no momento estou focando em me tornar um desenvolvedor backend e tenho
          por um dos meus objetivos criar tecnologias que ajude as pessoas de
          alguma forma.
        </ProfileDescription>
      </Profile>
      <Posts>
        {posts.map((post) => (
          <Post key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Post>
        ))}
      </Posts>
    </Container>
  );
}
