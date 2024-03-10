import { ADD_EMPLOYE, EDIT_EMPLOYE, DELETE_EMPLOYE } from '../action/employeAction';

const initialState = {
  employes: [],
};

const employeReducer = (state = initialState, action) => {
  if (!Array.isArray(state.employes)) {
    state = { ...state, employes: [] };
  }
  switch (action.type) {
    case ADD_EMPLOYE:
      return {
        ...state,
        employes: [...state.employes, action.payload],
      };
    case EDIT_EMPLOYE:
      return {
        ...state,
        employes: state.employes.map((employe) =>
          employe.id === action.payload.employeId ? action.payload.updatedEmploye : employe
        ),
      };
    case DELETE_EMPLOYE:
      return {
        ...state,
        employes: state.employes.filter((employe) => employe.id !== action.payload),
      };
    default:
      return state;
  }
};

export default employeReducer;
