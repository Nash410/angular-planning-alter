import { Injectable } from '@angular/core';

@Injectable()
export class PrettyDateService {

  constructor() {}

  getPrettyDate(strDate){
    let date = new Date(strDate);
    return date.toLocaleDateString().split(',', 1);
  }

}