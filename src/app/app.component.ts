import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0.0;
  height = 0.0;
  miles = 0.0;

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  onMileChange(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }
}
