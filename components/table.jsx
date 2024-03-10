import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateEmployee from "./createEmploye";
import { addEMPLOYE, deleteEMPLOYE } from "../redux/action/employeAction";
import UpdateEmployee from "./updateEmploye";

const Table = () => {
  const dispatch = useDispatch();
  const employes = useSelector((state) => state.employes.employes);

  const [updateEmploye, setUpdateEmploye] = useState();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleEdit = (employe) => {
    setUpdateEmploye(employe);
    handleShow2();
  };

  const handleDelete = (employeId) => {
    dispatch(deleteEMPLOYE(employeId));
    toast.success("Employe deleted successfully.");
  };

  const handleAddEmploye = (employe) => {
    dispatch(addEMPLOYE(employe));
    handleClose();
  };

  return (
    <div>
      <h2 className="my-3">
        Employee Details{" "}
        <button className="btn btn-success float-end" onClick={handleShow}>
          + Add Employee
        </button>
      </h2>
      <table className="table">
        <thead className="">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employes.length > 0 &&
            employes.map((employe, i) => (
              <tr key={i}>
                <td>{employe.id}</td>
                <td>{employe.name}</td>
                <td>{employe.email}</td>
                <td>{employe.phone}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleEdit(employe)}
                  >
                    Edit
                  </button>{" "}
                  |{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(employe.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <CreateEmployee
        show={show}
        handleClose={handleClose}
        handleAddEmploye={handleAddEmploye}
        creatEmployID={employes.length + 1}
      />

      {updateEmploye && 
      
        <UpdateEmployee
        show={show2}
        handleClose={handleClose2}
        updateEmploye={updateEmploye}
        setUpdateEmploye={setUpdateEmploye}
      />}
      
    </div>
  );
};

export default Table;
