import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
let  langId;
@Component({
  selector: 'app-products-details-page',
  templateUrl: './products-details-page.component.html',
  styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {
idOffer;
img;
lang;;
public finished :boolean =false ;
offer;
all;
login:boolean=true
  constructor(private translate: TranslateService,
    private service:Constants) {
      this.translateMethod()
   this.idOffer= localStorage.getItem("id_offer")
   this.img= localStorage.getItem("imgslider");
   
   this.getOffer();
   if(this.service.getUser()==null){
     this.login=false
   }
   }

  ngOnInit(): void {
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
  getOffer(){
    this.service.getOffer(this.idOffer).subscribe(res=>{
      console.log("all",res);
      this.all=res
      this.offer=this.all.payload;
      this.finished=true
    })
  }
}
