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

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../../services/api";

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });

  try {
    const data = await getStudents();

    dispatch({
      type: FETCH_STUDENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_STUDENTS_FAILURE,
      payload: error.message,
    });
  }
};

export const createStudent = (student) => async (dispatch) => {
  dispatch({ type: ADD_STUDENT_REQUEST });

  try {
    const data = await addStudent(student);

    dispatch({
      type: ADD_STUDENT_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: ADD_STUDENT_FAILURE,
      payload: error.message,
    });

    throw error;
  }
};

export const editStudent = (id, student) => async (dispatch) => {
  dispatch({ type: UPDATE_STUDENT_REQUEST });

  try {
    const data = await updateStudent(id, student);

    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAILURE,
      payload: error.message,
    });

    throw error;
  }
};

export const removeStudent = (id) => async (dispatch) => {
  dispatch({ type: DELETE_STUDENT_REQUEST });

  try {
    const deletedId = await deleteStudent(id);

    dispatch({
      type: DELETE_STUDENT_SUCCESS,
      payload: deletedId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAILURE,
      payload: error.message,
    });
  }
};