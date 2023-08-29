import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() drawer: any

  toggleStatus = false
  toggle() {
    if(this.toggleStatus === false) {
      this.toggleStatus = true
    } else {
      this.toggleStatus = false
    }
  }
}
