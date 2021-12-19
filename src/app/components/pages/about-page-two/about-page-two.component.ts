import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-about-page-two',
  templateUrl: './about-page-two.component.html',
  styleUrls: ['./about-page-two.component.scss']
})
export class AboutPageTwoComponent implements OnInit {

  lang;
  about_us;
  about_us_ar;
  res;
  img
  constructor(private translate: TranslateService,
    private service:Constants) { }

  ngOnInit(): void {
    this.translateMethod();
    this.getall()
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
  getall(){
    this.service.getContact().subscribe(res=>{
        console.log(res);
        this.res=res;
        this.about_us=this.res.payload.about_us;
        this.about_us_ar=this.res.payload.about_us_ar
        this.img=this.res.payload.about_us_photo
        // console.log( this.about_us)

    })
}
}
