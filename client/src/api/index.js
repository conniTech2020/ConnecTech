import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
export const getAllStudents = () => api.get(`/students`);
export const registerUser = (payload) =>
  api.post(`/users/register`, payload);
export const updateStudentById = (id, payload) =>
  api.put(`/student/${id}`, payload);
export const deleteStudentById = (id) => api.delete(`/student/${id}`);
export const getStudentById = (id) => api.get(`/student/${id}`);
const apis = {
  getAllStudents,
  registerUser,
  updateStudentById,
  deleteStudentById,
  getStudentById,
};

export default apis;//proxy/gateway/accessor
