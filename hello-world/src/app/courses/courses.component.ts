import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector:'courses',
  templateUrl:'./courses.component.html',
  styleUrls:['./courses.component.css']
})
export class CoursesComponent {

    courses : string[] = [];
    isShowCourceActive:boolean = false;
    isAddCourceActive:boolean = false;
    addCourse : boolean = false;
    defaultCourse : string = "Advance Machine Learning";
    constructor(private courseService: CourseService){
    }

    showCourse(){
        this.courses = this.courseService.getCourses();
    }

    addCource($event){
        this.addCourse = true;
    }

}