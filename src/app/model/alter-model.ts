export class AlterModel {
  private idAlter:number;
  private nomAlter:string;
  private dateDebutContrat:Date;
  private dateFinContrat:Date;
  private pa_user?:number;
  constructor(idAlter:number, nomAlter:string, dateDebutContrat:Date, dateFinContrat:Date, pa_user?:number){
  }
}