

class AuthApiService {
    constructor() {

    }

    /*
    *  register :
    *
    *
    * */

    register(params) {
        return fetch('http://40.115.124.134/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: params.first_name,
                last_name: params.last_name,
                email: params.email,
                password: params.password,
                //device_token: params.device_token,
                phone: params.phone

            }),
        });

    }

    registerDevice(pushToken, userToken) {
      return fetch('http://40.115.124.134/device', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + userToken
          },
          body: JSON.stringify({
              device_token: pushToken
          }),
      });
    }

    login(params) {
        return fetch('http://40.115.124.134/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: params.email,
                password: params.password
            }),
        });

    }



}




export default AuthApiService;
