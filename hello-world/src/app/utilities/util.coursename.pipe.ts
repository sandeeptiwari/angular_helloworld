import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'coursename'
})
export class CourseNamePipe implements PipeTransform{

    transform(value : string, limit?: number){
        if(!value)
        return null;

        if(limit)
        return value.length > limit ? value.substr(0, limit)+"..." : value;

        return value.length > 30 ? value.substr(0, 30)+"..." : value;
    }
}