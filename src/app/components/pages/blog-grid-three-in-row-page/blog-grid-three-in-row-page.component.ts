import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;
@Component({
  selector: 'app-blog-grid-three-in-row-page',
  templateUrl: './blog-grid-three-in-row-page.component.html',
  styleUrls: ['./blog-grid-three-in-row-page.component.scss']
})
export class BlogGridThreeInRowPageComponent implements OnInit {

  
  lang;
 finished:boolean=false 
  res;
  myoffer;
  empty
  constructor(private translate: TranslateService,
    private service:Constants) { }

  ngOnInit(): void {
    this.translateMethod();
    this.getmyOffer()
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
  getmyOffer(){
    this.service.getMyOffer().subscribe(res=>{
        console.log(res);
        this.res=res;

   console.log(this.res)
   if(this.res==null){
this.empty=true;
this.finished=true
   }
   else{ 
      this.myoffer=this.res.payload.data
    this.finished=true
  }
 
        // console.log( this.about_us)

    })
}
}