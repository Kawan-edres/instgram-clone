import { createSlice } from '@reduxjs/toolkit'



const inboxSlice = createSlice({
  name: "inbox",
  initialState :{isChecked:false},
  reducers: {
      toogle(state){
          state.isChecked =!state.isChecked
      }
  }
});

export const inboxActions = inboxSlice.actions

export default inboxSlice.reducer