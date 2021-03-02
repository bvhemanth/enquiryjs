import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('eachCompanyData') eachCompanyData;
  constructor() { }

  ngOnInit(): void {
  }

}
