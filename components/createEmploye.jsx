import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addEMPLOYE } from "../redux/action/employeAction";

const CreateEmployee = ({ show, handleClose, creatEmployID }) => {
  const [employeeForm, setEmployeeForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!employeeForm.name.trim()) {
      toast.error("Please enter the name.");
      return;
    }

    if (!employeeForm.email.trim()) {
      toast.error("Please enter the email address.");
      return;
    }

    if (!employeeForm.phone.trim()) {
      toast.error("Please enter the phone number.");
      return;
    }

    if (employeeForm.phone.trim().length < 10) {
      toast.error("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(employeeForm.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }
    const newEmployee = {
      ...employeeForm,
      id: creatEmployID, // Assigning ID for the new employee
    };

    // Dispatch the action to add the employee
    dispatch(addEMPLOYE(newEmployee));

    // Reset the form fields
    setEmployeeForm({
      name: "",
      email: "",
      phone: "",
    });
    toast.success("Employe added successfully.");
    // Close the modal
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
          <Modal.Title>Employee details</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <input
              type="text"
              name="name"
              value={employeeForm.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-control"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              value={employeeForm.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
            />
            <br />
            <input
              type="tel"
              name="phone"
              value={employeeForm.phone}
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

export default CreateEmployee;
