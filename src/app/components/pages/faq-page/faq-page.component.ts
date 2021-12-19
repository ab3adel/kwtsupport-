import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;
@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
lang;
faq;
all;
public finished :boolean =false ;
  constructor(private translate: TranslateService,private service:Constants) { }

  ngOnInit(): void {
    this.translateMethod();
    this.getAllFaq()
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
getAllFaq(){
  this.service.getFaq().subscribe(result=>{
    console.log(result);
    this.all=result;
    this.faq=this.all.payload.data;
    this.finished=true
  })
}
}
