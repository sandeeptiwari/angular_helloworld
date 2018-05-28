import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses : string[] = [];

    constructor(){
        this.courses.push("Angular varsion 4.0.1");
        this.courses.push("Advance Java & Core java by Sandeep Tiwari");
        this.courses.push("SpringBoot with microservices by Sandeep Tiwari");
        this.courses.push("Hibernate");
        this.courses.push("JavaScript");
        this.courses.push("MySql");
    }

   getCourses(){
     return this.courses;
   }
}
