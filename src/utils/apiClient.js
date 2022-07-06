import axios from 'axios';
import { appServices } from '../config/services';

const instance = axios.create({
    baseURL: appServices[process.env.BUILD_ENV]?.baseUrl, //'http://localhost:3200',
    headers: {'X-Custom-Header': 'testing-next-js'}
  });

export default instance;