import base64 from 'base-64';

class AuthApi {
  static login(username, password) {
    let API_HOST = `https://rdsgscm01.onespresso.net/WS.Dev.Web.Start/SQL.DEV/Api/WS/v1/User/Lookup/` + username;
    const request = new Request(API_HOST, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(username + ':' + password)
      }),
    });
    return fetch(request).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

export default AuthApi;
