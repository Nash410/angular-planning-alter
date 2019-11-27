import { AlterModel} from './alter.model';

export class AbsModel {
  private idAbs:number;
  private dateDebutAbs:Date;
  private dateFinAbs:Date;
  private libelleAbs:string;
  private idAlter:AlterModel;
  constructor(idAbs:number, dateDebutAbs:Date, dateFinAbs:Date, libelleAbs:string, idAlter:AlterModel,){}
}