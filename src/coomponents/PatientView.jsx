import React, { useState } from "react";
import PatientNavbar from "./PatientNavbar";

const PatientView = () => {
  //   const [isLoading, changeLoading] = useState(true);

  const [data, changeData] = useState([
    {
      name: "asim",
      address: "abcd",
      phone: "8281616294",
      email: "iamasimthaha@gmail.com",
      pincode: "685602",
    },
    {
      name: "vishnu",
      address: "abcd",
      phone: "8281616294",
      email: "iamasimthaha@gmail.com",
      pincode: "685602",
    },
    {
      name: "athul",
      address: "abcd",
      phone: "8281616294",
      email: "iamasimthaha@gmail.com",
      pincode: "685602",
    },
    {
      name: "dev",
      address: "abcd",
      phone: "8281616294",
      email: "iamasimthaha@gmail.com",
      pincode: "685602",
    },
  ]);

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
