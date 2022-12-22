/* 리듀서에서 각 액션을 참조해오기 */
import { userReducerElement } from "../reducers/userReducer";

function deleteBoardAction(id) {
  return (dispatch, getState) => {
    dispatch(userReducerElement.deleteBoard(id))
  }
}

function modifyBoardAction(post) {
  return (dispatch, getState) => {
    dispatch(userReducerElement.modifyBoard(post))
  }
}

/* 페이지, 혹은 컴포넌트가 참조할 수 있도록 액션 함수들을 객체로 내보내기
페이지나 컴포넌트는 userAction.액션 함수() 방식으로 호출할 수 있다. */
export const userAction = { deleteBoardAction, modifyBoardAction };
