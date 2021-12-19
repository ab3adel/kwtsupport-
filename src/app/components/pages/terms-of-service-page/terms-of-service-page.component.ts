import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-terms-of-service-page',
  templateUrl: './terms-of-service-page.component.html',
  styleUrls: ['./terms-of-service-page.component.scss']
})
export class TermsOfServicePageComponent implements OnInit {
  lang;
  terms_and_conditions;
  terms_and_conditions_ar;
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
        this.terms_and_conditions=this.res.payload.terms_and_conditions;
        this.terms_and_conditions_ar=this.res.payload.terms_and_conditions_ar
        // console.log( this.privacy_policy)

    })
}
}
