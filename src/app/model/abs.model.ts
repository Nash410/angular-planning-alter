
export class AbsModel {
  private dateDebutAbs:string;
  private dateFinAbs:string;
  private libelleAbs:string;
  private idAlter:number;
  constructor(dateDebutAbs:string, dateFinAbs:string, libelleAbs:string, idAlter:number){
    this.dateDebutAbs = dateDebutAbs;
    this.dateFinAbs = dateFinAbs;
    this.libelleAbs = libelleAbs;
    this.idAlter = idAlter;
  }
}