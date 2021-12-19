import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  lang;
  how_to_use;
  how_to_use_ar;
  res
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
        this.how_to_use=this.res.payload.how_to_use;
        this.how_to_use_ar=this.res.payload.how_to_use_ar
        // console.log( this.privacy_policy)

    })
}
}
