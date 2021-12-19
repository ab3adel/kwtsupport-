import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent implements OnInit {
  lang;
  privacy_policy;
  privacy_policy_ar;
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
        this.privacy_policy=this.res.payload.privacy_policy;
        this.privacy_policy_ar=this.res.payload.privacy_policy_ar
        console.log( this.privacy_policy)

    })
}
}
