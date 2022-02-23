import { Component, OnInit } from '@angular/core';
import { FirstComp } from '../models/first-comp.model';
import { FirstCompService } from '../services/first-comp.service';

@Component({
  selector: 'app-first-comp-list',
  templateUrl: './first-comp-list.component.html',
  styleUrls: ['./first-comp-list.component.scss']
})
export class FirstCompListComponent implements OnInit {
  listExple!: FirstComp[];
  constructor(private firstCompService: FirstCompService) {}
  ngOnInit() {
    this.listExple = this.firstCompService.getAllExples()
  }
}
