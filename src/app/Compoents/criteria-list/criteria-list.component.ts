import { Component, OnInit, Input } from '@angular/core';
import { CriteriaBox } from '../../CriteriaBox.Model';

@Component({
  selector: 'app-criteria-list',
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.css']
})
export class CriteriaListComponent implements OnInit {
  @Input() Criterias: CriteriaBox[];

  constructor() {
  }

  ngOnInit() {
  }

}
