import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
  authToken: any;
}

interface SetUserAction {
  type: string;
  payload: any;
}

const initialState: AuthState = {
  user: null,
  authToken: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: AuthState, action: SetUserAction) => {
      state.user = action.payload.user;
      state.authToken = action.payload.token;
    },
  },
});

export default AuthSlice;
