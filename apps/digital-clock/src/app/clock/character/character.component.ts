import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sample-projects-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() numericChar: number;

  private readonly colorSelectTemplates: Map<number, boolean[]> = new Map<number, boolean[]>();

  private readonly allOn  = [true, true, true, true, true, true, true];
  private readonly allOff = [false, false, false, false, false, false, false];

  hexagonColors: boolean[] = this.allOff;

  constructor() {
    this.colorSelectTemplates.set(-1, this.allOff);
    this.colorSelectTemplates.set(0, [true, true, true, false, true, true, true]);
    this.colorSelectTemplates.set(1, [false, false, true, false, false, true, false]);
    this.colorSelectTemplates.set(2, [false, true, true, true, true, false, true]);
    this.colorSelectTemplates.set(3, [false, true, true, true, false, true, true]);
    this.colorSelectTemplates.set(4, [true, false, true, true, false, true, false]);
    this.colorSelectTemplates.set(5, [true, true, false, true, false, true, true]);
    this.colorSelectTemplates.set(6, [true, true, false, true, true, true, true]);
    this.colorSelectTemplates.set(7, [false, true, true, false, false, true, false]);
    this.colorSelectTemplates.set(8, [true, true, true, true, true, true, true]);
    this.colorSelectTemplates.set(9, [true, true, true, true, false, true, true]);
    this.colorSelectTemplates.set(10, this.allOn);
  }

  ngOnInit(): void {
    this.setColor(this.numericChar || 0);
  }

  setColor(num: number) {
    if (num > 10) this.hexagonColors = this.allOn;
    else if (num < -1) this.hexagonColors = this.allOff;
    else this.hexagonColors = this.colorSelectTemplates.get(num) || this.allOff;
  }

  getColor(type: boolean) {
    return type ? 'aquamarine' : 'rgba(127,255,212,0.05)';
  }
}
