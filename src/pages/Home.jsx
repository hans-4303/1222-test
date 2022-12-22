import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const posts = useSelector((state) => state.user.boards);
  const navigate = useNavigate();

  const toBoardPage = (id) => {
    navigate(`/board/${id}`)
  }

  useEffect(() => {
    console.log(posts);
  },[posts])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td><b>번호</b></td>
            <td><b>제목</b></td>
            <td><b>작성자</b></td>
            <td><b>조회수</b></td>
            <td><b>좋아요</b></td>
          </tr>
        </thead>
        {posts ? posts.map((post) => (
          <tbody key={post.boardId}>
            <tr>
              <td>{post.boardId}</td>
              <td onClick={() => {toBoardPage(post.boardId)}}>{post.title}</td>
              <td>{post.userEmail}</td>
              <td>{post.view}</td>
              <td>{post.like}</td>
            </tr>
          </tbody>)):
        ""}
      </table>
    </div>
  )
}

export default Home