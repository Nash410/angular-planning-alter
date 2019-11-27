import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlterModel } from '../model/alter.model';
import * as firebase from 'firebase';


@Injectable()
export class AlterService {

  alters: AlterModel[] = [];
  altersSubject = new Subject<AlterModel[]>();

  emitAlter() {
    this.altersSubject.next(this.alters);
  }

  saveAlter(){
    firebase.database().ref('/alter').set(this.alters);
  }

  getAlters(){
    firebase.database().ref('/alter')
      .on('value', (data: firebase.database.DataSnapshot)=>{
        this.alters = data.val() ? data.val() : [];
        this.emitAlter();
      })
  }

  getSingleAlter(id:number){
    return new Promise(
      (resolve, reject)=>{
        firebase.database().ref('/alter/' + id).once('value').then(
          (data: firebase.database.DataSnapshot)=> {
            resolve(data.val());
          }, (error) =>{
            reject(error);
          }
        )
      }
    )
  }

  createNewAlter(newAlter: AlterModel){
    this.alters.push(newAlter);
    this.saveAlter();
    this.emitAlter();
  }

  removeAlter(alter: AlterModel){
    const alterIndexToRemove = this.alters.findIndex(
      (alterEl)=>{
        if (alterEl === alter ){
          return true
        }
      }
    );
    this.alters.splice(alterIndexToRemove, 1);
    this.saveAlter();
    this.emitAlter();
  }

  constructor(){
    this.getAlters();
  }




}

