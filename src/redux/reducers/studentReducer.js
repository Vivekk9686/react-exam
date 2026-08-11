import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
} from "../actions/StudentActions";

const initialState = {
  students: [],
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };

    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: [...state.students, action.payload],
      };

    case ADD_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? action.payload
            : student
        ),
      };

    case UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case DELETE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;