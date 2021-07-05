import { Component, OnInit, Input } from '@angular/core';
import {Sub} from '../../Sub'
import { SubService } from 'src/app/services/sub.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
  subs: Sub[] = [];

  constructor(private subService: SubService) { }

  ngOnInit(): void {
    this.subService.getSubs().subscribe((subs) => this.subs = subs) ;
  }

  deleteSub(sub: Sub){
    this.subService.deleteSub(sub).subscribe(() => this.subs = this.subs.filter(s => s.id !== sub.id)) ;
  }
}
