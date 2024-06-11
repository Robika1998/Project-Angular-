import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      name: 'This is panel header 3'
    }
  ];
}
