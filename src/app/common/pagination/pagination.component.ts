import { Component, OnInit, Input, ChangeDetectionStrategy, Output, SimpleChanges, OnChanges } from '@angular/core';
import * as EventEmitter from 'events';
import { Store } from '@ngxs/store';
import { InteriorFormat } from 'src/app/models/interior-format.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items:InteriorFormat[]=[];
  @Input() searchText;
  @Input() pageSize = 10;
  previousLabel = 'Prev';
  nextLabel = 'Next';
  @Input() count;
  @Input() currentPage;
  @Input() pages= [];
  @Input() startIndex;
  @Input() endIndex;
  constructor(public store: Store) { }

  ngOnInit(): void {
    this.pages=[];
    if(this.items)
      this.count =  this.items.length/this.pageSize;
      for(let i=0;i<this.count;i++){
        this.pages.push(i+1);
      }
    this.calculateIndexes();
  }

   ngOnChanges(changes:SimpleChanges) {
    if (changes){
      this.store.select(state=> state.Todo.Stores).subscribe(stores=>{
        this.endIndex=stores.endIndex;
        this.currentPage=stores.currentPage;
        this.startIndex=stores.startIndex;
      });
    }
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
