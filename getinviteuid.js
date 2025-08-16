import axios from 'axios'
import {login} from './login.js'
export async function uidd(username, idtoken1) {
let url = `https://firestore.googleapis.com/v1/projects/madfut-25/databases/(default)/documents/usernames/${username}`
let headers = {
"authorization": "Bearer " + idtoken1
}
try {

let r = await axios.get(url, {headers})
let inviteuid = r.data.fields.uid.stringValue
console.log(inviteuid)
return inviteuid
} catch (err) {
 if (err.response.status === 404) {
    console.log('doesnt exist')
  }
}
}

//let {idtoken1} = await login()
//await uid('00kairo0', idtoken1)
//node getinviteuid
