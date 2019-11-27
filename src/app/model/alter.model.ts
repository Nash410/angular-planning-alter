export class AlterModel {
  private nomAlter:string;
  private dateDebutContrat:Date;
  private dateFinContrat:Date;
  private pa_user?:number;
  constructor(nomAlter:string, dateDebutContrat:Date, dateFinContrat:Date, pa_user?:number){
  }
}