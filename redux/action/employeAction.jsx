export const ADD_EMPLOYE= 'ADD_EMPLOYE';
export const EDIT_EMPLOYE= 'EDIT_EMPLOYE';
export const DELETE_EMPLOYE= 'DELETE_EMPLOYE';

export const addEMPLOYE= (employe) => {

  return {
    type: ADD_EMPLOYE,
    payload: employe,
    
  };
};

export const editEMPLOYE= (employeId, updatedEmploye) => {
  return {
    type: EDIT_EMPLOYE,
    payload: {
      employeId,
      updatedEmploye,
    },
  };
};

export const deleteEMPLOYE= (employeId) => {
  return {
    type: DELETE_EMPLOYE,
    payload: employeId,
  };
};
