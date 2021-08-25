import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL
});

const apiToken = (base, Authorization) => axios.create({
  baseURL: base,
  headers: {
    Authorization,
  },
});

// const axiosApiInstance = axios.create();

// const apiToken = () => {
//   axiosApiInstance.interceptors.request.use(
//     async config => {
//       const token = sessionStorage.getItem('token');

//       config.baseURL = baseURL;
//       config.headers = {
//         'Authorization': token,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       };

//       return config;
//     },
//     error => {
//       Promise.reject(error);
//     });

//   axiosApiInstance.interceptors.response.use((response) => response, async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = sessionStorage.getItem('refreshToken');

//       const { data } = await axios.post(`${baseURL}/api/identidade/refresh-token/${refreshToken}`);
//       sessionStorage.setItem('refreshToken', data?.refreshToken);
//       sessionStorage.setItem('token', `Bearer ${data?.accessToken}`);

//       axios.defaults.headers.common['Authorization'] = `Bearer ${data?.accessToken}`;
//       return axiosApiInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   });

//   return axiosApiInstance;
// };

export {
  api,
  apiToken,
};
