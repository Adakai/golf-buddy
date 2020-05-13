import { Component, OnInit } from '@angular/core';
import { GolfApiService } from 'src/app/shared/services/golf-api.service';
import { Courses } from 'src/app/models/courses';
import { Course } from 'src/app/models/course';
import { ScoreCardService } from 'src/app/shared/services/score-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Courses[];
  selectedCourse: Course;
  selected: boolean = false;
  teeType: any[];
  id: number;
  selectedPlayer: number;
  selectedTeeType: string;
  players: any[] = [
    { value: 1, viewValue: '1 player' },
    { value: 2, viewValue: '2 players' },
    { value: 3, viewValue: '3 players' },
    { value: 4, viewValue: '4 players' }
  ]

  constructor(
    private golfApiService: GolfApiService,
    private scoreCardService: ScoreCardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.golfApiService.getCourses().subscribe(data => {
      this.courses = data.courses;
    })
  }

  cardSelected(id: number) {
    this.selected = !this.selected;
    this.id = id;
    this.golfApiService.getCourse(id).subscribe(data => {
      this.selectedCourse = data.data;
      this.teeType = this.selectedCourse.holes[0].teeBoxes;
      console.log(this.teeType);
    })
  }

  setPlayers(player: number) {
    this.selectedPlayer = player;
  }

  setTeeType(teeType: string) {
    this.selectedTeeType = teeType;
  }

  setSelected(id: number) {
    if(this.selectedPlayer && this.selectedTeeType) {
      this.scoreCardService.setSelected(this.selectedPlayer, this.selectedTeeType);
      this.router.navigate([`course/${id}`]);
    } else {
      
      return;
    }
  }
}

