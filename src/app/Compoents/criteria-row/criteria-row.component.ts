import { Component, OnInit, Input } from '@angular/core';
import { CriteriaBox } from '../../CriteriaBox.Model';

@Component({
  selector: 'app-criteria-row',
  templateUrl: './criteria-row.component.html',
  styleUrls: ['./criteria-row.component.css']
})
export class CriteriaRowComponent implements OnInit {
  @Input() icdcodes: CriteriaBox;
  ShowOrNot: boolean;

  constructor() { }

  ngOnInit() {
    if (this.icdcodes.Operand !== '') {
      this.ShowOrNot = true;
    } else {
      this.ShowOrNot = false;
    }
  }

}
