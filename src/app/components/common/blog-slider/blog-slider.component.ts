import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
let  langId;

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss']
})
export class BlogSliderComponent implements OnInit {
lang;
  constructor( private translate: TranslateService,private router:Router) { }

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
  click(){

    this.router.navigateByUrl("wordpress1");

  }
  webDetails (item) {
      localStorage.setItem("serviceDetailName",item)
      this.router.navigateByUrl('website&advertiseDetails')
  }

}
