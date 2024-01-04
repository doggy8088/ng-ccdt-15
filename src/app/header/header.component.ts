import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() message = '';

  @Output() update = new EventEmitter<string>();

  prefix = '';

  fontSize = 12;

  isUpdatePrefix = false;

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
