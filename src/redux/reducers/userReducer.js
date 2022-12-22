/* 각 리듀서를 만들 때는 createSlice 활용 */
import { createSlice, current } from "@reduxjs/toolkit";

/* 초기 값 작성
객체로 값을 주는 게 유효하다. */
let initialState = {
  boards : [
  {
    boardId: 1,
    userEmail: 'abbbb@bbb.com',
    title: '첫 게시물입니다',
    content: '문자만 들어갈 수 있는 공간입니다',
    view: 0,
    like: 1
  },
  {
    boardId: 2,
    userEmail: 'bcccccc@cccc.com',
    title: '두번째 게시물입니다',
    content: '문자만 들어갈 수 있는 공간입니다',
    view: 0,
    like: 1
  }
]};

/* createSlice를 통해 userSlice 객체를 만들고,
이름과 초기 값 정의, 리듀서 작성 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteBoard(state, action) {
      /* action.payload에서 바로 id를 내보내면 되니까? */

      /* current를 통해서는 proxy로 찍히는 값들을 확인해볼 수 있다. */
      console.log(current(state.boards))
      console.log(action.payload);

      /* state 중 boards에 접근하기 */
      const newBoardList = state.boards.filter((board) => board.boardId != action.payload)
      state.boards = newBoardList;
    },
    modifyBoard(state, action) {
      console.log(current(state.boards));
      console.log(action.payload);
      
      /* console.log(action.payload.post.boardId); 같이 되는 현상만 해결하면 끝 */
      console.log(action.payload.boardId);

      const editBoardList = state.boards.map((board) => (board.boardId == action.payload.boardId ? action.payload : board))
      console.log(editBoardList);

      state.boards = editBoardList;
    }
  }
})

/* 액션 함수에서 참조할 수 있도록 각 리듀서를 내보내기 */
export const userReducerElement = userSlice.actions;

/* store가 참조할 수 있도록 (createSlice).reducer 내보내기 */
export default userSlice.reducer;