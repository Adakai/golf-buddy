import { Component, OnInit } from '@angular/core';
import { GolfApiService } from 'src/app/shared/services/golf-api.service';
import { Courses } from 'src/app/models/courses';
import { Course } from 'src/app/models/course';

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
  players: any[] = [
    { value: '1-player-0', viewValue: '1 player' },
    { value: '2-players-1', viewValue: '2 players' },
    { value: '3-players-2', viewValue: '3 players' },
    { value: '4-players-3', viewValue: '4 players' }
  ]

  constructor(
    private golfApiService: GolfApiService
  ) { }

  ngOnInit(): void {
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

}
