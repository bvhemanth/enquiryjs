import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MockServiceService } from 'src/app/services/mock-service.service';
import { tap, map } from 'rxjs/operators';
import { InteriorFormat } from 'src/app/models/interior-format.interface'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'], 
})
export class LandingPageComponent implements OnInit {
  designComaniesData:InteriorFormat[]=[];
  searchText:any;
  totalData;
  recordsCount;
  pages=[];
  startIndex;
  endIndex;
  currentPage:number=1;
  pageSize:number = 10;
  constructor(public service: MockServiceService,public changeref:ChangeDetectorRef) { }
  ngOnInit(): void {
    this.service.getData().subscribe((data)=>{
      this.totalData= data;
        this.designComaniesData= JSON.parse(JSON.stringify(data));;
        this.recordsCount= this.totalData.length/10;
        const count = Math.ceil(this.totalData.length/10);
        for(let i=0;i<count;i++){
          this.pages.push(i+1);
        }
      });
    this.endIndex=this.currentPage*this.pageSize-1;
    this.startIndex=this.currentPage*this.pageSize-10;
    this.changeref.markForCheck();
  }

  search(){
    this.pages=[];
    this.startIndex='';
    this.endIndex='';
    this.currentPage=null;
    
    // if(1){
      this.designComaniesData= this.totalData.filter((data)=>{
        return this.searchText? (data.name.toLowerCase().includes(this.searchText.toLowerCase()) || data.description.toLowerCase().includes(this.searchText.toLowerCase())): data;
      }).sort((a,b)=>{
        return a.name.localeCompare(b.name);
      });
      console.log(this.searchText)
    //}
    // else{
    //   this.designComaniesData=this.totalData
    // }
    if(this.designComaniesData.length>0){
      const count = Math.ceil(this.designComaniesData.length/10);
      for(let i=0;i<count;i++){
        this.pages.push(i+1);
      }
    }
    console.log(this.pages)
    this.currentPage=1;
    this.endIndex=10-1;
    this.startIndex=0;
    this.changeref.markForCheck();
  }
}
