import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlterModel } from '../model/alter.model';
import { AbsModel } from '../model/abs.model';

import * as firebase from 'firebase';

@Injectable()
export class AbsService {

  constructor(){
    this.getAbs();
  }

  abs: AbsModel[] = [];
  absSubject = new Subject<AbsModel[]>();

  emitAbs() {
    this.absSubject.next(this.abs);
  }

  saveAbs(){
    firebase.database().ref('/abs').set(this.abs);
  }

  getAbs(){
    firebase.database().ref('/abs')
      .on('value', (data: firebase.database.DataSnapshot)=>{
        this.abs = data.val() ? data.val() : [];
        this.emitAbs();
      })
  }

  getSingleAbs(id:number){
    return new Promise(
      (resolve, reject)=>{
        firebase.database().ref('/abs/' + id).once('value').then(
          (data: firebase.database.DataSnapshot)=> {
            resolve(data.val());
          }, (error) =>{
            reject(error);
          }
        )
      }
    )
  }

  createNewAbs(newAbs: AbsModel){
    this.abs.push(newAbs);
    this.saveAbs();
    this.emitAbs();
  }

  removeAbs(abs: AbsModel){
    const absIndexToRemove = this.abs.findIndex(
      (absEl)=>{
        if (absEl === abs ){
          return true
        }
      }
    );
    this.abs.splice(absIndexToRemove, 1);
    this.saveAbs();
    this.emitAbs();
  }


}