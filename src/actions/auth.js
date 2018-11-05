import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startLogin = () => {
  return () => {
    console.log('startLogin')
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => ({
  type: 'LOGOUT',
})

export const startLogout = () => {
  return () => {
    console.log('startLogin')
    return firebase.auth().signOut()
  }
}