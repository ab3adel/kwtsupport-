import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
let langId
@Component({
  selector: 'app-websites-advetise-details',
  templateUrl: './websites-advetise-details.component.html',
  styleUrls: ['./websites-advetise-details.component.scss']
})
export class WebsitesAdvetiseDetailsComponent implements OnInit {
    service;
    ser;
    chooseprice;
    clicked:boolean[] = [];
    lang;
    array:boolean=false
    finished:boolean=false;
    original_type;
    id_service;
    linknull;
    quantitynull
    commentsnull;
    usernamesnull;
    answer_numbernull;
    postsnull;
    service_quantity_price;
    unit_price;
    min;
    max;
    services;
    constructor(private translate: TranslateService,private toastrService: ToastrService ,private router:Router,
        private service1:Constants) {
        this.translateMethod()
           this.services={
                    blogs:  { en:' designing Personal Blogs',ar:"تصميم مدونات شخصية",src:"../../../../assets/img/myImage/00 (1).png"},
                    web: {en:' web Design',ar:"تصميم مواقع",src:"../../../../assets/img/myImage/000.png"},
                    store:{ en: 'e-commerce Store Design',ar:"تصميم متاجر الكترونية",src:"../../../../assets/img/myImage/0 (2).png"},
                    posts: {en:'posts Design',ar:"تصميم المناشير",src:"../../../../assets/img/myImage/y (1).png"},
                    logo:{en:' logo Design',ar:"تصميم لوغو",src:"../../../../assets/img/myImage/y (2).png"},
                    video:{ en:'video Design',ar:"تصميم فيديو",src:"../../../../assets/img/myImage/y (3).png"},
                    visual: {en:'visual Identity Design',ar:"تصميم الهوية البصرية",src:"../../../../assets/img/myImage/32.png"},
                    brochures:{ en:'disigning and Printing Brochures',ar:"تصميم البرشورات",src:"../../../../assets/img/myImage/5 (1).png"}
         }

      let itemName = localStorage.getItem ("serviceDetailName")
      console.log(itemName,this.services["web"])
      this.service=this.services["blogs"]
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
  ngOnInit(): void {
  }

}
