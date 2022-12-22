/* redux toolkit을 위한 configureStore */
import { configureStore } from "@reduxjs/toolkit";

/* 리듀서 받아오기 */
import userReducer from "./reducers/userReducer";

/* 정의할 state와 userReducer 적어두기 */
const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store