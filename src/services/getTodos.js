import apiClient from '../utils/apiClient';
import { TODOS_BASE_URL } from '../utils/constants';
import { error, info } from '../utils/logger';

export const getTodos = async () => {
  try {
    info(`TODO: API call to get all todos list triggered ======>`);
    const todoData = await apiClient({
      url: `${TODOS_BASE_URL}?_page=1`,
      method: 'GET'
    });
    return todoData?.data;
  } catch (err) {
    error(err);
    return err;
  }
};

export const getTodosById = async (id) => {
  try {
    info(`TODO: API call by id triggered ${id} ======>`);
    const todoData = await apiClient.get(`${TODOS_BASE_URL}/${id}`);
    return todoData?.data;
  } catch (error) {
    error(err);
    return error;
  }
};
