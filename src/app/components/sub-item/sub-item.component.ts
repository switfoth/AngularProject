import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sub } from '../../Sub';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { SubService } from 'src/app/services/sub.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css']
})
export class SubItemComponent implements OnInit {
  @Input()
  sub!: Sub;

  subs!: Observable<Sub[]>;

  displayedColumns: string[] = ["email", "subscription", "created"]

  @Output() onDeleteSub: EventEmitter<Sub> = new EventEmitter();

  faTimes = faTimes;

  constructor(private service: SubService) { }

  ngOnInit(): void {
    this.subs = this.service.getSubs()
  }

  onDelete(sub: any) {
    this.onDeleteSub.emit(sub)
  }
}
