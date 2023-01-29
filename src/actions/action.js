import axios from "axios";
import {
  setCstomerList,
  setSingleCustomer,
  setSingleCustomerDelete
} from "../Redux/customers/customerSlice";

export const fetchcustomerLists = ({ params, dispatch }) => {
  return axios
    .get(`https://dummy.restapiexample.com/api/v1/employees`, { ...params })
    .then((response) => {
      dispatch(setCstomerList(response?.data));
    })
    .catch((error) => {
      throw error;
    });
};

export const fetchSingleCustomerData = ({ params, dispatch }) => {
  return axios
    .get(`https://dummy.restapiexample.com/api/v1/employee/${params?.id}`)
    .then((response) => {
      console.log(response, "response");
      dispatch(setSingleCustomer(response?.data));
    })
    .catch((error) => {
      throw error;
    });
};
export const singleCustomerDelete = ({ params, dispatch }) => {
  return axios
    .delete(
      `https://dummy.restapiexample.com/public/api/v1/delete/${params?.id}`
    )
    .then((response) => {
      console.log(response, "response");
      dispatch(setSingleCustomerDelete(response?.data));
    })
    .catch((error) => {
      throw error;
    });
};
