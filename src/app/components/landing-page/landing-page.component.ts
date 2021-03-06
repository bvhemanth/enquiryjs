import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MockServiceService } from 'src/app/services/mock-service.service';
import { take } from 'rxjs/operators';
import { InteriorFormat } from 'src/app/models/interior-format.interface';
import { TodoAction } from 'src/app/stores/todo/todo.actions';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'], 
})
export class LandingPageComponent implements OnInit {
  designCompaniesData:InteriorFormat[]=[];
  searchText:any='';
  totalData;
  recordsCount;
  pages=[];
  startIndex;
  endIndex;
  currentPage:number=1;
  pageSize:number = 10;
  sortField="";
  constructor(public service: MockServiceService,public changeref:ChangeDetectorRef,
    public store: Store) { }
  ngOnInit(): void {
    this.store.select(state=> state.Todo.Stores).subscribe(data=>{
      if(!!data.searchText)
      this.searchText = data.searchText;
      
      if(!!data.sortField){
        this.sortField = data.sortField;
      }
    })
    
    this.service.getData().pipe(take(1)).subscribe((data)=>{
      this.totalData= data;
        this.designCompaniesData= JSON.parse(JSON.stringify(data));;
        this.recordsCount= this.totalData.length/10;
        this.getCount();
        this.search()
      });
    this.endIndex=this.currentPage*this.pageSize-1;
    this.startIndex=this.currentPage*this.pageSize-10;
  }

  search(){
    this.pages=[];
    this.startIndex='';
    this.endIndex='';
    this.currentPage=null;
      this.designCompaniesData= this.totalData.filter((data)=>{
        return this.searchText? (data.name.toLowerCase().includes(this.searchText.toLowerCase()) || data.description.toLowerCase().includes(this.searchText.toLowerCase())): data;
      }).sort((a,b)=>{
        if(this.sortField==='asctitle'){
          return a.name.localeCompare(b.name);
        } else if(this.sortField==='destitle'){
          return b.name.localeCompare(a.name);
        }else if(this.sortField==='date'){
          let c = new Date(a.dateLastEdited);
          let d = new Date(b.dateLastEdited);
          return c.getTime() - d.getTime()
        }
      });
      
    if(this.designCompaniesData.length>0){
      this.getCount()
    }
    this.currentPage=0;
    this.endIndex=this.pageSize-1;
    this.startIndex=0;

    const data:any={
      searchText:this.searchText,
      endIndex:this.endIndex,
      currentPage: this.currentPage,
      startIndex: this.startIndex,
      sortField:this.sortField
    };
    this.store.dispatch(new TodoAction(data))
  }

    getCount(){
      const count = Math.ceil(this.designCompaniesData.length/this.pageSize);
      for(let i=0;i<count;i++){
        this.pages.push(i+1);
      }
    }
}
