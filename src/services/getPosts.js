import apiClient from '../utils/apiClient';
import { POSTS_BASE_URL } from '../utils/constants';

export const getPosts = async () => {
  // const postData = await apiClient.get(`${POSTS_BASE_URL}?_page=1`)
  console.log(`POSTS: API call to get all posts list triggered ======>`);
  const postData = await apiClient({
    url: `${POSTS_BASE_URL}?_page=1`,
    method: 'GET'
  });
  return postData?.data;
};

export const getPostById = async (id) => {
  console.log(`POSTS: API call by id triggered ${id} ======>`);
  const postsData = await apiClient.get(`${POSTS_BASE_URL}/${id}`);
  return postsData?.data;
};
