

class AuthApiService {
    constructor() {

    }

    /*
    *  register :
    *
    *
    * */

    register(params) {
        return fetch('http://40.115.124.134/api/register', {
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

    login(params) {
        return fetch('http://40.115.124.134/api/login', {
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
