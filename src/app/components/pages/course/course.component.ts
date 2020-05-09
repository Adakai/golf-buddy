import { Component, OnInit } from '@angular/core';
import { ScoreCardService } from 'src/app/shared/services/score-card.service';
import { ActivatedRoute } from '@angular/router';
import { GolfApiService } from 'src/app/shared/services/golf-api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  selectedPlayer: number;
  selectedTeeType: string;
  id: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private scoreCardService: ScoreCardService,
    private golfApiService: GolfApiService,
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"];
    this.selectedTeeType = this.scoreCardService.selectedTeeType;
    this.selectedPlayer = this.scoreCardService.selectedPlayer;
  }

  getCourse() {
    this.golfApiService.getCourse(this.id).subscribe(data => {
      console.log(data.data)
    })
  }
}
