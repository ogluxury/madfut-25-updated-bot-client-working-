import { serverTimestamp, getDatabase, onDisconnect, set, ref, get, onValue, off, update } from '@firebase/database'
import {authh} from './auth.js'
import {login} from './login.js'
import { uidd } from './getinviteuid.js'

export async function invite(db, accuid, inviteuid, accname) {
let queueurl = db;
let invref = ref(queueurl, accuid)
await set(invref, {
    b: 'specialbadgedraftcupchamp',
    i: inviteuid,
    u: accname,
    t: serverTimestamp()
})
console.log('invited user!')
console.log('ogluxury. on github')
}
let {app, auth, db} = await authh()
let {idtoken1, accuid, accname} = await login()
let inviteuid = await uidd('00kairo0', idtoken1)

await invite(db, accuid, inviteuid, accname)
