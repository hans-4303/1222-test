import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { userAction } from '../redux/actions/userAction';

const BoardDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eachPost = useSelector((state) => state.user.boards.find((post) => post.boardId == id));

  const toModifyPost = ({eachPost}) => {
    navigate('/board/modifyform', {state: eachPost})
  }

  const onDeletePost = (id) => {
    dispatch(userAction.deleteBoardAction(id));
    navigate('/');
  }

  return (
    <div>
      {/* 확인 OK */}
      {/* <p>{eachPost ? <p>OK</p> : "없는 페이지입니다"}</p> */}
      {eachPost ? 
        <div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <p>{eachPost.boardId}</p>
            <h2>{eachPost.title}</h2>
            <div>
              <button onClick={() => {toModifyPost({eachPost})}}>수정</button>
              <button onClick={() => {onDeletePost(eachPost.boardId)}}>삭제</button>
            </div>
          </div>
          <p>{eachPost.userEmail}</p>
          <p><b>{eachPost.content}</b></p>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p>조회수: {eachPost.view}</p>
            <p>좋아요: {eachPost.like}</p>
          </div>
        </div>
      : ""}
    </div>
  )
}

export default BoardDetail