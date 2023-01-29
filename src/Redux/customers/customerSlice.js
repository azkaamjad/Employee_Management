import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customerList: [],
  customerData: [],
  customerDataDelete: [],
  isLoading: true,
  isLoadingData: true,
  isLoadingDelete: true
};
const customerSlice = createSlice({
  name: "CallBack",
  initialState,
  reducers: {
    setCstomerList(state, actions) {
      state.customerList = actions.payload;
      state.isLoading = false;
    },
    setSingleCustomer(state, actions) {
      state.customerData = actions.payload;
      state.isLoadingData = false;
    },
    setSingleCustomerDelete(state, actions) {
      state.customerDataDelete = actions.payload;
      state.isLoadingDelete = false;
    }
  }
});

export const {
  setCstomerList,
  setSingleCustomer,
  setSingleCustomerDelete
} = customerSlice.actions;

const customerReducer = customerSlice.reducer;

export default customerReducer;
