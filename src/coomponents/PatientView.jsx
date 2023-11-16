import React, { useEffect, useState } from "react";
import PatientNavbar from "./PatientNavbar";
import axios from "axios";

const PatientView = () => {
  //   const [isLoading, changeLoading] = useState(true);

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/view/").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const fetchData =()=>{
  //         isLoading(false);
  //     }

  return (
    <>
      <PatientNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">Email</th>
                      <th scope="col">Pincode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.name}</th>
                          <td>{value.phone}</td>
                          <td>{value.address}</td>
                          <td>{value.email}</td>
                          <td>{value.pincode}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientView;
