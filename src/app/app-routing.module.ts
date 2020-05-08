import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CourseComponent } from './components/pages/course/course.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
