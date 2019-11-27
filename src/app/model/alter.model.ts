export class AlterModel {
  private nomAlter:string;
  private dateDebutContrat:string;
  private dateFinContrat:string;
  private pa_user?:number;
  constructor(nomAlter:string, dateDebutContrat:string, dateFinContrat:string, pa_user?:number){
    this.nomAlter = nomAlter;
    this.dateDebutContrat = dateDebutContrat;
    this.dateFinContrat = dateFinContrat;
    //this.pa_user = pa_user;
  }
}