import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is angular app, which is also know as Angular framework';

  courses = [];//[1, 2, 3 ]
}
