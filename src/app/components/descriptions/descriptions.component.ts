import { Component } from '@angular/core';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.css'
})
export class DescriptionsComponent {
  size: NzDescriptionsSize = 'default';
  isEditing: boolean = false;

  product = 'Cloud Database';
  billing = 'Prepaid';
  time = '18:00:00';
  amount = '$80.00';
  discount = '$20.00';
  official = '$60.00';
  configInfo = {
    diskType: 'MongoDB',
    dbVersion: '3.4',
    package: 'dds.mongo.mid',
    storage: '10 GB',
    replicationFactor: 3,
    region: 'East China 1'

}

toggleEdit() {
  this.isEditing = !this.isEditing;
}

saveChanges() {
  this.toggleEdit();
 
}

}
