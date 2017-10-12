import * as firebase from 'firebase'
import weekModel from './models/week'
import recipeModel from './models/recipe'
let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyBhWNUynx2pDXqeLoB1yBkUXM85qBiN9xY",
    authDomain: "weekly-foodie.firebaseapp.com",
    databaseURL: "https://weekly-foodie.firebaseio.com",
    projectId: "weekly-foodie",
    storageBucket: "weekly-foodie.appspot.com",
    messagingSenderId: "783452449440"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

// retrieve weeks from firebase
export const getWeekDB = (weekID) => {
  let uid = firebase.auth().currentUser.uid;
  return database.ref(`weeks/${uid}`).once('value')
}
// get specified recipe
export const getRecipe = (recipeID) => {
  return database.ref(`recipes/${recipeID}`).once('value')
}
// add new week
export const addWeek = (weekID, sunday, monday, tuesday, wednesday, thursday, friday, saturday) => {
  let uid = firebase.auth().currentUser.uid;
  let model = weekModel(weekID, sunday, monday, tuesday, wednesday, thursday, friday, saturday)
  return database.ref(`users/${uid}/`+ weekID).set(model)
}

export const addRecipe = (url, title, image, ingredients, method) => {
  let recipeID = url.replace(/[^a-z0-9]/gi,'');
  let model = recipeModel(url, title, image, ingredients, method)
  return database.ref('recipes/' + recipeID).set(model)
}

// add new recipe item into specified week
export const addRecipeItem = (weekID, day, recipeID) => {
  let uid = firebase.auth().currentUser.uid;
  let updates = {}
  updates['weeks/' + uid + '/' + day] = recipeID
  return database.ref().update(updates)
}