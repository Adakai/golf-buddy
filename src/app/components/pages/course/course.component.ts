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
  holes: any[];
  yards: number[] = [];
  pars: number[] = [];
  currentCourse: Course;
  id: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private scoreCardService: ScoreCardService,
    private golfApiService: GolfApiService,
  ) { }

  ngOnInit(): void {
    this.setValues();
    this.getCourse();
  }

  setValues() {
    this.id = this.activateRoute.snapshot.params["id"];
    this.selectedTeeType = this.scoreCardService.selectedTeeType;
    this.selectedPlayer = this.scoreCardService.selectedPlayer;
  }

  setTeeType() {
    switch(this.selectedTeeType) {
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

  // setParsYards() {
  //   for (let i = 0; i < this.holes.length; i++) {
  //     this.yards.push(this.holes[i].teeBoxes[this.selectedTeeNumber].yards);
  //     this.pars.push(this.holes[i].teeBoxes[this.selectedTeeNumber].par);
  //   }
  // }

  getCourse() {
    this.golfApiService.getCourse(this.id).subscribe(data => {
      this.currentCourse = data.data
      this.holes = this.currentCourse?.holes;
      console.log(this.holes);
      console.log(this.currentCourse);
      this.setTeeType();
      // this.setParsYards();
    })
  }
}
