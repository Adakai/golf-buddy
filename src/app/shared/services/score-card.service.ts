import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';

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

  setScoreCard(currentCourse: Course) {

  }
}
