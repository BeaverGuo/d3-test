/*import 'es6-promise';*/
import $ from 'jquery';

const ajaxType = 'GET';

class DataService  {
    constructor() {

    }
    getProjectList(){
        $.support.cors = true;
        return new Promise(function(resolve, reject){
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": "http://10.215.160.35:6899/api/user/meta-files/",
                "method": "GET",
                beforeSend: function auth(xhr) {
                    xhr.setRequestHeader('Authorization', `Basic ${btoa("yfg:yfg")}`);
                },
                success: function successCallback(data) {
                    resolve(data);
                },
                error: function errorCallback(xhr) {
                    reject(xhr);
                },
            });
        });
    }
}

export default DataService;
