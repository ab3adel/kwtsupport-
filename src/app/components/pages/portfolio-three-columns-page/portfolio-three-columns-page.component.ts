import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-portfolio-three-columns-page',
  templateUrl: './portfolio-three-columns-page.component.html',
  styleUrls: ['./portfolio-three-columns-page.component.scss']
})
export class PortfolioThreeColumnsPageComponent implements OnInit {

  lang;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translateMethod()
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
}
