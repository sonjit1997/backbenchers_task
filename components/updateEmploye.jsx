import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editEMPLOYE } from "../redux/action/employeAction";

const UpdateEmployee = ({ show, handleClose,updateEmploye,setUpdateEmploye}) => {
   const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdateEmploye({ ...updateEmploye, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!updateEmploye.name.trim()) {
      toast.error("Please enter the name.");
      return;
    }

    if (!updateEmploye.email.trim()) {
      toast.error("Please enter the email address.");
      return;
    }

    if (!updateEmploye.phone.trim()) {
      toast.error("Please enter the phone number.");
      return;
    }

    if (updateEmploye.phone.trim().length < 10) {
      toast.error("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(updateEmploye.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const employeId = updateEmploye.id;

    dispatch(editEMPLOYE(employeId, updateEmploye));
    toast.success("Employe update successfully.");

    handleClose();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee update</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <input
              type="text"
              name="name"
              value={updateEmploye.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-control"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              value={updateEmploye.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
            />
            <br />
            <input
              type="tel"
              name="phone"
              value={updateEmploye.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="form-control"
              required
            />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateEmployee;
