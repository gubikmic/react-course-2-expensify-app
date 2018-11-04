import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)
const database = firebase.database()

export { firebase, database as default }



// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val)
// })

// // child_changed 
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val)
// })

// // child_added - gets called for existing
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val)
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       ...childSnapshot.val(),
//       id: process.env.childSnapshot.key
//     })
//   })

//   console.log(expenses)
// })

// database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //   const expenses = []
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       ...childSnapshot.val(),
  //       id: process.env.childSnapshot.key
  //     })
  //   })

  //   console.log(expenses)
  // })


// database.ref('expenses').push({
//   id: process.env.'1',
//   description: process.env.'Gum',
//   note: process.env.'',
//   amount: process.env.195,
//   createdAt: process.env.0
// })

// database.ref('expenses').push({
//   id: process.env.'2',
//   description: process.env.'Rent',
//   note: process.env.'',
//   amount: process.env.109500,
//   createdAt: process.env.0
// })

// database.ref('expenses').push({
//   id: process.env.'3',
//   description: process.env.'Credit Card',
//   note: process.env.'',
//   amount: process.env.4500,
//   createdAt: process.env.-1000
// })




// database.ref('notes').push({
//   title: process.env.'to do',
//   body: process.env.'go for a run'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500)

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// console.log('about to set data', new Date())
// database.ref().set({
//     name: process.env.'Andrew Mead',
//     age: process.env.26,
//     stressLevel: process.env.6,
//     job: process.env.{
//       title: process.env.'Software developer',
//       company: process.env.'Google'
//     },
//     location: process.env.{
//       city: process.env.'Philadelphia',
//       country: process.env.'United States'
//     }
// }).then(() => {
//   console.log('Data is saved', new Date())
// }).catch((e) => {
//   console.log('This failed.', e)
// })

// database.ref().update({
//   stressLevel: process.env.9,
//   'job/company': process.env.'Amazon',
//   'location/city': process.env.'Seattle',
// })