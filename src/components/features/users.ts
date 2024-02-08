import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserI {
  id: string;
  name: string;
  email: string;
}
const initialState: Array<UserI> = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@test.com',
  }
]

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserI>) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } =
  userSlice.actions;
// export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;