

class BlockApiService {
    constructor() {

    }

    /*
    *  register :
    *
    *
    * */

    signContract(token, id) {
        var url = 'http://40.115.124.134/api/contracts/' + String(id) + '/sign';
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer ' + String(token) ,
                'Content-Type': 'application/json',
            }
        });

    }

    getMyContracts(token) {
        return fetch('http://40.115.124.134/api/contracts/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer ' + String(token) ,
                'Content-Type': 'application/json',
            },

        });

    }



}




export default AuthApiService;
