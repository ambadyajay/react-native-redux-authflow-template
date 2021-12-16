import axios from 'axios';

import {LOGIN} from './EndPoints';

export default function request(type, url, params) {
  // const dispatch = useDispatch()
  let formdata = new FormData();

  axios.defaults.headers.common = {
    Authorization: 'Bearer ' + '',
  };

  switch (type) {
    case 'get':
      return axios
        .get(url)
        .then(function (response) {
          if (response.status === 200) {
            return response.data;
          }
        })
        .catch(function (error) {
          if (error.message.includes('status code 500')) {
            // alert('Token expired please login again');
          }
          console.log('Get Server Error', error);
          return error.response.data;
        });
      break;
    case 'post':
      return axios
        .post(url, params)
        .then(function (response) {
          if (response.status === 200) {
            return response.data;
          } else if (response.data.status_code != 200) {
            request('post', LOGIN, formdata)
              .then(response => {
                if (response.user) {
                  return response;
                } else {
                  return null;
                }
              })
              .catch(function (error) {
                // console.log("Get Server Error", error)
                return error.response.data;
              });
          }
        })
        .catch(function (error) {
          if (error.message.includes('status code 500')) {
            // alert('Token expired please login again');
          }
          return error.response.data;
        });
      break;

    case 'put':
      return axios
        .post(url, params)
        .then(function (response) {
          if (response.status == 200) {
            return response.data;
          } else if (response.data.status_code != 200) {
            request('post', LOGIN, formdata)
              .then(response => {
                if (response.user) {
                  return response;
                } else {
                  return null;
                }
              })
              .catch(function (error) {
                return error.response.data;
              });
          }
        })
        .catch(function (error) {
          console.log('err ', error);
          return error.response.data;
        });
      break;

    case 'delete':
      return axios
        .get(url, {params: params})
        .then(function (response) {
          if (response.data.status_code == 200) {
            return response.data;
          } else if (response.data.status_code != 200) {
            request('post', LOGIN, formdata)
              .then(response => {
                if (response.user) {
                  return response;
                } else {
                  return null;
                }
              })
              .catch(function (error) {
                console.log('Get Server Error', error);
                return error.response.data;
              });
          }
        })
        .catch(function (error) {
          if (error.message.includes('status code 500')) {
            // alert('Token expired please login again');
          }
          console.log('Get Server Error', error);
          return error.response.data;
        });
      break;
    default:
      break;
  }
}
