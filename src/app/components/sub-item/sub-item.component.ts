import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Sub} from '../../Sub';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css']
})
export class SubItemComponent implements OnInit {
  @Input()
  sub!: Sub;

  @Output() onDeleteSub: EventEmitter<Sub> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(sub: any) {
    this.onDeleteSub.emit(sub)
  }
}
