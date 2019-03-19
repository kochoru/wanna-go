// see https://qiita.com/sensuikan1973/items/4f39d1927f83f0664acc
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { FIREBASE_CONFIG } from './config'

export default class Env {
  private static singleton: Env

  public readonly firebase: firebase.app.App
  public readonly googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  private constructor() {
    this.firebase = firebase.initializeApp(FIREBASE_CONFIG)
  }

  public static get instance(): Env {
    if (!this.singleton) {
      this.singleton = new Env()
    }
    return this.singleton
  }
}
