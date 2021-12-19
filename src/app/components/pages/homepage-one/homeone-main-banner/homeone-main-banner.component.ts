import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from 'src/app/model/constants';
declare let $: any;
let  langId;
@Component({
  selector: 'app-homeone-main-banner',
  templateUrl: './homeone-main-banner.component.html',
  styleUrls: ['./homeone-main-banner.component.scss']
})
export class HomeoneMainBannerComponent implements OnInit {
lang;
data;
img;
login:boolean=false
  constructor(private translate: TranslateService,private service:Constants,private router:Router) { }

  ngOnInit(): void {
    this.translateMethod();

    this.getSlider();
    if(this.service.getUser()!=null){
      this.login=true
    }
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
  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
}
getSlider(){
  this.service.getSlider().subscribe(res=>{
this.data=res;
console.log(this.data)
this.img=this.data.payload;
  })
}
click(id,img){
  console.log(id,img)
  localStorage.setItem("id_offer",id);
  localStorage.setItem("imgslider",img);
  this.router.navigate(['/offer'])
}
}