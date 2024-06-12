import { Component, OnInit } from '@angular/core';
import { Subject, catchError, count, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
})
export class FileComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  isVisible = false;
  editedItem: string;
  editedIndex: number;

  constructor() {}

  showModal(index: number): void {
    this.isVisible = true;
    this.editedItem = this.data[index];
    this.editedIndex = index;
  }

  handleOk(): void {
    console.log('Button ok clicked!');

    this.data[this.editedIndex] = this.editedItem;
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
