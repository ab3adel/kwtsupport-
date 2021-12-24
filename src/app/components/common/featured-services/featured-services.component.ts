import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
import * as AOS from 'aos';
let  langId;
@Component({
  selector: 'app-featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.scss']
})
export class FeaturedServicesComponent implements OnInit {
lang;
data;
category
  constructor( private translate: TranslateService,private service:Constants,
    private router:Router) { }

  ngOnInit(): void {
    this.translateMethod();
    this.getCategory();
    // AOS.init();
    setTimeout(()=>{                           //<<<---using ()=> syntax
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 500,
      });

 }, 1000);

  }
  translateMethod() {
    this.translate.setDefaultLang('ar');
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
  this.data=res;
  this.category=this.data.payload;
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
