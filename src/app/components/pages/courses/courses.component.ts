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
  id: number;

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
      console.log(this.selectedCourse);
    })
  }

}
