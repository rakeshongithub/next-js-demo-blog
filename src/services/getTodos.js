import apiClient from '../utils/apiClient';
import { TODOS_BASE_URL } from '../utils/constants';

export const getTodos = async () => {
  // const todoData = await apiClient.get(`${TODOS_BASE_URL}?_page=1`)
  console.log(`TODO: API call to get all todos list triggered ======>`);
  const todoData = await apiClient({
    url: `${TODOS_BASE_URL}?_page=1`,
    method: 'GET'
  });
  return todoData?.data;
};

export const getTodosById = async (id) => {
  console.log(`TODO: API call by id triggered ${id} ======>`);
  try {
    const todoData = await apiClient.get(`${TODOS_BASE_URL}/${id}`);
    return todoData?.data;
  } catch (error) {
    return error;
  }
};
