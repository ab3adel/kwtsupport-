import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {
  lang;
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  public finished :boolean =false ;
  services
  all;
  id;
  isempty:boolean=false;
  isempty1:boolean=false
  namear;
  nameen;
  name;
  card:boolean=false
  list:boolean=true;
    constructor(private translate: TranslateService,private router:Router,
      private s:Constants) {
        this.translateMethod()
        
  this.id=localStorage.getItem("categoryid");
  this.namear=localStorage.getItem("cnamear");
this.nameen=  localStorage.getItem("cnameen");
  


     this.getService();
     
     }
  
    ngOnInit(): void {
    }
    translateMethod() {
      this.translate.setDefaultLang('en');
      this.translate.addLangs(['en', 'ar']);
      let y = localStorage.getItem("selected");
      var langCode = y.split('"').join('');
      this.translate.use(langCode);
      let lang_id = localStorage.getItem("langId");
      langId = lang_id.split('"').join('');
      if (Number(langId) == 1) {
        this.lang = true;
      } else {
        this.lang = false;
      }
  
    }
    getService(){
      this.s.getServices(this.id).subscribe(res=>{
        console.log(res);
        this.all=res
        if(this.all==null){
          this.isempty=true;
          this.finished=true
          console.log("sjefljslihfs")
        }
        this.services=this.all.payload;
        this.finished=true
      })
    }
    det(item){
      localStorage.setItem('service',JSON.stringify(item) )
      this.router.navigateByUrl('/servicedet')
    }

   searchService() {
    
    var name1 = (document.getElementById("name") as HTMLInputElement).value;
this.name=name1
    console.log(name1);
  
    this.s.getServicesbyname(this.id , this.name).subscribe(res=>{
      console.log("ojihh");
      console.log(res);
      this.all=res
      if(this.all==null){
        this.isempty1=true;
      
      }
      else{
        this.services=this.all.payload;
        this.isempty1=false
      }
     
      
     
    })
  }
  clicklist(){
    this.list=true;
    this.card=false;
    console.log(this.list)
  }
  clickcard(){
this.list=false;
this.card=true;
console.log(this.card)
  }
  }