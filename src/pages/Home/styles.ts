import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px;
  padding: 10px;
  width: 350px;
  border: 2px solid ${({ theme }) => theme.colors.azul};
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  max-width: 80%;
  height: auto;
  fit: contain;
`;

export const ProfileName = styled.h2``;

export const ProfileDescription = styled.p`
  text-align: justify;
  width: 80%;
`;

export const Posts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px;
  padding: 10px;
  width: 350px;
  border: 2px solid ${({ theme }) => theme.colors.vermelho};
  list-style-type: none;
`;

export const Post = styled.li`
  text-align: justify;
  width: 80%;
`;
