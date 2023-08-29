import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';

  toggleStatus = false
  toggle() {
    if(this.toggleStatus === false) {
      this.toggleStatus = true
    } else {
      this.toggleStatus = false
    }
  }
}
