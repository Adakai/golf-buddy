import { Component, OnInit } from '@angular/core';
import { ScoreCardService } from 'src/app/shared/services/score-card.service';
import { ActivatedRoute } from '@angular/router';
import { GolfApiService } from 'src/app/shared/services/golf-api.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  selectedPlayer: number;
  selectedTeeType: string;
  selectedTeeNumber: number;
  playerCollection: string[] = [];
  holes: any[];
  pars: number[] = [];
  currentCourse: Course;
  id: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private scoreCardService: ScoreCardService,
    private golfApiService: GolfApiService,
  ) { }

  ngOnInit(): void {
    this.getLocalStorage();
    this.setValues();
    this.getCourse();
    console.log(this.currentCourse);
  }

  setValues() {
    this.id = this.activateRoute.snapshot.params["id"];
    if (this.scoreCardService.selectedTeeType !== undefined) {
      this.selectedTeeType = this.scoreCardService.selectedTeeType;
    }
    if (this.scoreCardService.selectedPlayer !== undefined) {
      this.selectedPlayer = this.scoreCardService.selectedPlayer;
    }
  }

  setTeeType() {
    switch (this.selectedTeeType) {
      case 'pro':
        this.selectedTeeNumber = 0;
        break;
      case 'champion':
        this.selectedTeeNumber = 1;
        break;
      case 'men':
        this.selectedTeeNumber = 2;
        break;
      case 'women':
        this.selectedTeeNumber = 3;
        break;
    }
  }

  getCourse() {
    this.golfApiService.getCourse(this.id).subscribe(data => {
      this.currentCourse = data.data
      this.holes = this.currentCourse?.holes;
      this.setTeeType();
      this.setLocalStorage();
      this.setPlayers();
    })
  };

  setPlayers() {
    console.log(this.selectedPlayer)
    for (let i = 0; i < this.selectedPlayer; i++) {
      this.playerCollection.push(`player ${i}`)
    }
    console.log(this.playerCollection);
  }

  getLocalStorage() {
    if (localStorage.getItem('currentCourse') === null) {
      this.currentCourse = null;
    } else {
      this.currentCourse = JSON.parse(localStorage.getItem('currentCourse'));
      this.selectedTeeType = JSON.parse(localStorage.getItem('selectedTeeType'));
      this.selectedPlayer = JSON.parse(localStorage.getItem('selectedPlayer'));
      this.holes = this.currentCourse?.holes;
      this.setTeeType();
      console.log(this.holes);
    }
  }

  setLocalStorage() {
    localStorage.setItem('currentCourse', JSON.stringify(this.currentCourse));
    localStorage.setItem('selectedTeeType', JSON.stringify(this.selectedTeeType));
    localStorage.setItem('selectedPlayer', JSON.stringify(this.selectedPlayer));
  }
}
