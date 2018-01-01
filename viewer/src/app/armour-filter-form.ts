export class ArmourFilterForm {
  constructor(
    public armourtype: string,
    public freetext: string,
    public productionRegion: string,
    public productionCity: string,
    public partOfPair: boolean,
    public partOfSuit: boolean,
    public sideOfBody: string,
    public lodashFilter: string
  ) { }
}
