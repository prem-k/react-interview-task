import Config from '../config';
const axios = require('axios');
const baseUrl = Config.apiBaseUrl;
class Apis {
    
    headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    };

    exportCsvFileUrls = { } ;
    

    constructor(){
      if(localStorage.loginUser){
        const loginUser = JSON.parse(localStorage.loginUser);
        axios.defaults.headers.common['token'] = loginUser.token;
        const token = encodeURIComponent(loginUser.token);
        this.exportCsvFileUrls = {
          users : baseUrl + 'users/export?token=' + token,
        };
      }
      this.initLoader();
    }

    

    initLoader(){
      axios.interceptors.request.use(function (config) {
        document.body.classList.add('loading-indicator');
        // const token = window.localStorage.token;
        // if (token) {
        //    config.headers.Authorization = `token ${token}`
        // }
        return config
      }, function (error) {
        return Promise.reject(error);
      });
      
      axios.interceptors.response.use(function (response) {
        document.body.classList.remove('loading-indicator');
        return response;
      }, function (error) {
        return Promise.reject(error);
      });
    }
    postRequest = (payload)=>{
        return axios.post(payload.url,payload.data, {headers: this.headers})
        .finally(function () {
          console.log('Finally post');
        });
    };

    getRequest = (payload)=>{
      return axios.get(payload.url,{params:payload.data})
      .finally(function () {
        console.log('Finally get');
      });
    };


    login(data){
      const payload = {
        url : baseUrl+'users/userLogin.json',
        data : data
      };
      return this.postRequest(payload);
    }

}

export default Apis;
