import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() message = '';

  @Output() update = new EventEmitter<string>();

  now = new Date();

  prefix = '';

  fontSize = 12;

  isUpdatePrefix = false;

  fakeUsers: User[] = generateFakeUsers();

  ngOnInit(): void {
    this.prefix = this.message;
  }

  updatePrefix() {
    this.prefix = 'New Hello World';
    this.update.emit(this.prefix);
    this.isUpdatePrefix = true;
    this.fontSize++;
  }

  updatePrefixFromExternal(name: string) {
    this.prefix = name;
  }


}



interface User {
  id: number;
  name: string;
  email: string;
}


function generateFakeUsers(): User[] {
  const users: User[] = [];

  for (let i = 1; i <= 10; i++) {
    const user: User = {
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`
    };

    users.push(user);
  }

  return users;
}
