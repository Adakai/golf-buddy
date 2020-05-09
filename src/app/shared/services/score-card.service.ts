import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreCardService {
  selectedPlayer: number;
  selectedTeeType: string;

  constructor() { }

  setSelected(player: number, teeType: string ) {
    this.selectedPlayer = player;
    this.selectedTeeType = teeType;
    console.log(this.selectedPlayer, this.selectedTeeType);
  }
}
