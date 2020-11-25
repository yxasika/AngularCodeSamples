import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import remove from "@nrwl/workspace/src/schematics/remove/remove";

@Component({
  selector: 'sample-projects-clock-display',
  templateUrl: './clock-display.component.html',
  styleUrls: ['./clock-display.component.scss']
})
export class ClockDisplayComponent implements OnInit, OnDestroy {

  numericCharacters = [0, 1, 2, 3];

  counter = 0;
  secondPassedEvent: Observable<number>;
  secondPassedSubscriber: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.setNumerics();
    this.secondPassedEvent = interval(1000);
    this.secondPassedSubscriber = this.secondPassedEvent.subscribe(ctr => this.count());
  }

  count() {
    this.counter++;
    this.setNumerics();
  }

  setNumerics() {
    const seconds = this.counter % 60;
    const minutes = Math.floor(this.counter / 60);
    this.numericCharacters = [
      Math.floor(minutes/10),
      minutes % 10,
      Math.floor(seconds/10),
      seconds % 10,
    ];
  }

  ngOnDestroy(): void {
    this.secondPassedSubscriber.unsubscribe();
  }
}
