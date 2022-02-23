import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstComp } from '../models/first-comp.model';
import { FirstCompService } from '../services/first-comp.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  myExple! : FirstComp
  buttonText!: string
  constructor(private firstCompService: FirstCompService,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.buttonText = "Oh, snap!";
    const exempleId = +this.route.snapshot.params['id']
    this.myExple = this.firstCompService.getExpleById(exempleId)
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

}
