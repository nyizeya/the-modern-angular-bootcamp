import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
  }

  compare(letter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return enteredLetter === letter ? 'correct' : 'incorrect';
  }
}
