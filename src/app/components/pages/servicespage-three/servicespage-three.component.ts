import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-servicespage-three',
  templateUrl: './servicespage-three.component.html',
  styleUrls: ['./servicespage-three.component.scss']
})
export class ServicespageThreeComponent implements OnInit {
  lang;
  public finished :boolean =false ;
  services
  all;
  id;
  namear;
  nameen;
  data;
  category
    constructor(private translate: TranslateService,private router:Router,
      private service:Constants) {
        this.translateMethod()
        
 
  

     this.getCategory();
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
    getCategory(){
      this.service.getCCategory().subscribe(res=>{
        console.log(res);
        this.data=res;
        this.category=this.data.payload;
        this.finished=true;
      })
        }
      clickcategory(id,namear,nameen){
        console.log(id);
        localStorage.setItem("categoryid",id);
      localStorage.setItem("cnamear" , namear);
      localStorage.setItem("cnameen",nameen);
        this.router.navigateByUrl("services");
      
      }
      
  }
