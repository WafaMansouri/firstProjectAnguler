import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirstComp } from '../models/first-comp.model';
import { FirstCompService } from '../services/first-comp.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {
  @Input() myExple! : FirstComp
  buttonText!: string

  constructor(private firstCompService: FirstCompService,
              private router: Router) {}
              
  ngOnInit() {
    this.buttonText = "Oh, snap!"
  }

  onSnap() {
    if (this.buttonText === "Oh, snap!") {
      // this.myExple.snaps++
      this.firstCompService.snapById(this.myExple.id, 'snap')
      this.buttonText = "Oops, unsnap!"
    }else {
      this.myExple.snaps--
      this.buttonText = "Oh, snap!"
      
    }
  }

  onViewExple() {
    this.router.navigateByUrl(`exemple/${this.myExple.id}`)
  }
}
