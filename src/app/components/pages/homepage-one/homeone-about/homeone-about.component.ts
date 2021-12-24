import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
let  langId;
@Component({
  selector: 'app-homeone-about',
  templateUrl: './homeone-about.component.html',
  styleUrls: ['./homeone-about.component.scss']
})
export class HomeoneAboutComponent implements OnInit {
lang;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translateMethod();
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
}
