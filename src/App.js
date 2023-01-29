import "./styles.css";
import React, { useEffect, useState } from "react";
import {
  fetchcustomerLists,
  fetchSingleCustomerData,
  singleCustomerDelete
} from "./actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchcustomerLists({
      params: {
        id: "1",
        employee_name: "Tiger Nixon",
        employee_salary: "320800",
        employee_age: "61",
        profile_image: ""
      },
      dispatch
    });
  }, []);
  const { customerList = [], isLoading } = useSelector(
    (state) => state.customer
  );
  const fetchCustomerInfo = (id) => {
    fetchSingleCustomerData({
      params: {
        id: id
      },
      dispatch
    });
  };
  const { customerData = [], isLoadingData } = useSelector(
    (state) => state.customer
  );
  console.log(customerData, "customerData");
  const CustomerDelete = (id) => {
    singleCustomerDelete({
      params: {
        id: id
      },
      dispatch
    });
    console.log(id);
  };
  const { customerDataDelete = [], isLoadingDelete } = useSelector(
    (state) => state.customer
  );
  console.log(customerDataDelete?.message, "customerDataDelete");
  return (
    <Table bordered>
      <thead>
        <tr>
          <td>#</td>
          <th>Employee Name</th>
          <th>Employee Salary</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customerList?.data?.map((item, idx) => {
          return (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{item?.employee_name}</td>
              <td>{item?.employee_salary}</td>
              <td>{item?.employee_age}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => fetchCustomerInfo(item?.id)}
                >
                  view
                </button>{" "}
                <button className="btn btn-warning">Edit</button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => CustomerDelete(item?.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
