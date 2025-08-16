let axios = require('axios')
let {authh} = require('./auth')
let {signInWithCredential, GoogleAuthProvider } = require('firebase/auth')

async function login() {
let {app, auth} = await authh()
let url = 'https://oauth2.googleapis.com/token'
let data = {
'client_id': '894053920033-pj91tpnsptcbmtv39h0bcgfvqbkqskbn.apps.googleusercontent.com',
'grant_type': 'refresh_token',
'refresh_token': '1//03k2FAs8rJ_vNCgYIARAAGAMSNgF-L9Iru5qM-oTCvxed3_KmKtp7LTj4OXx9EJYrRGkanr4Yu3pn6vJqLmOeDi75xXe8QnVu3Q'
}
let headers = {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'User-Agent': 'MADFUT/38 CFNetwork/3826.500.131 Darwin/24.5.0'
}
let response = await axios.post(url, data, headers)
let idtoken = response.data.id_token
const credential = GoogleAuthProvider.credential(idtoken)
let acc = await signInWithCredential(auth, credential) 
let accname = acc.user.displayName
let accuid = acc.user.uid
let idtoken1 = await acc.user.getIdToken()
console.log(accname)
return {accuid, accname, idtoken1, idtoken}
}
//let {app, auth} = await authh()
module.exports = { login };
