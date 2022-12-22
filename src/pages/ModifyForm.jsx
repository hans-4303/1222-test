import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { userAction } from '../redux/actions/userAction'

const ModifyForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState(location.state);

  /* console.log(post) */

  const onChangeValue = (event) => {
    setPost({...post, [event.target.name]: event.target.value});
  }

  /* 어디에선가 {post} 형태로 전달했을 때 post: {} 객체가 생기는 것을 확인했다.
  여유되면 확인해보기 */
  const doModifyPost = (post) => {
    dispatch(userAction.modifyBoardAction(post));
    /* home으로부터 명확한 페이지에 가고 싶으면 가고 싶은 경로를 /로 시작하고,
    현재 페이지에서 더해진 경로를 가고 싶다면 /로 시작하지 말 것 */
    navigate(`/board/${post.boardId}`)
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <p>{post.boardId}</p>
        <input type='text' name='title' value={post.title} onChange={(event) => {onChangeValue(event)}}></input>
        <button onClick={() => {doModifyPost(post)}}>수정완료</button>
      </div>
      <p>{post.userEmail}</p>
      <input type="text" name='content' value={post.content} onChange={(event) => {onChangeValue(event)}}></input>
    </div>
  )
}

export default ModifyForm