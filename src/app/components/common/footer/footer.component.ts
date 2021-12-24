import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
lang;
footer;
address;
email;
facebook;
instagram;
linkedin;
phone;
twitter;
address_ar
    constructor(private translate: TranslateService,
        private service:Constants) { }

    ngOnInit(): void {
        this.translateMethod();
        this.getall()
    }

    copyrightText: Text[] = [
        {
            text: '2020 Plor is Proudly Powered by',
            linkText: 'EnvyTheme',
            link: 'https://envytheme.com/'
        }
    ]
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
getall(){
    this.service.getContact().subscribe(res=>{
        console.log(res);
        this.footer=res;
        this.instagram=this.footer.payload.instagram;
        this.facebook=this.footer.payload.facebook;
        this.linkedin=this.footer.payload.linkedin;
        this.phone=this.footer.payload.phone;
        this.twitter=this.footer.payload.twitter;
        this.email=this.footer.payload.email;
        this.address=this.footer.payload.address;
        this.address_ar=this.footer.payload.address_ar
        

    })
}
}
class Text {
    text : string;
    linkText : string;
    link : string;
}
