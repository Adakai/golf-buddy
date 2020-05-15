import { Component, OnInit } from '@angular/core';
import { GolfApiService } from 'src/app/shared/services/golf-api.service';
import { Courses } from 'src/app/models/courses';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  courses: Courses;

  constructor(
    private golfApiService: GolfApiService
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.golfApiService.getCourses().subscribe(data => {
      this.courses = data.courses;
      this.saveCurCoures();
    })
  }

  saveCurCoures() {
    this.golfApiService.saveCoures(this.courses);
  }
}
