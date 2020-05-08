import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolfApiService {
  coursesUrl: string = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<any> {
    return this.http.get<any>(this.coursesUrl);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get<any>(`${this.coursesUrl}/${id}`);
  }
}
