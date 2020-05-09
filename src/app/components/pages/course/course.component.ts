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

  getCourse() {
    this.golfApiService.getCourse(this.id).subscribe(data => {
      this.currentCourse = data.data
      console.log(this.currentCourse);
    })
  }
}
