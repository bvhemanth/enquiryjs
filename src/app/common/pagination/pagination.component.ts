import { Component, OnInit, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() items;
  @Input() searchText;
  @Input() pageSize = 10;
  @Output() whenSerch= new EventEmitter();
  previousLabel = 'Previous';
  nextLabel = 'Next';
  @Input() count;
  @Input() currentPage;
  @Input() pages= [];
  @Input() startIndex: number=0;
  @Input() endIndex: number=10;
  constructor() { }

  ngOnInit(): void {
  
      console.log(this.items)
      if(this.items)
        this.count =  this.items.length/this.pageSize;
        for(let i=0;i<this.count;i++){
          this.pages.push(i+1);
        }
  
    this.calculateIndexes();
  }
  
  calculateIndexes() {

    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    else if(this.currentPage> this.pageSize){
      this.currentPage=this.pageSize;
    }
    this.endIndex=this.currentPage*this.pageSize-1;
    this.startIndex=this.currentPage*this.pageSize-10
  }


  previous(event) {
    event.preventDefault();
    this.currentPage--;
    this.calculateIndexes();
  }

  next(event) {
    event.preventDefault();
    this.currentPage++;
    this.calculateIndexes();
  }
  setCurrent(e, page){
    this.currentPage =page+1;
    this.calculateIndexes();
  }
}
