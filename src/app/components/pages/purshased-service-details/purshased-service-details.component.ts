import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';
let  langId;

@Component({
  selector: 'app-purshased-service-details',
  templateUrl: './purshased-service-details.component.html',
  styleUrls: ['./purshased-service-details.component.scss']
})
export class PurshasedServiceDetailsComponent implements OnInit {

    loaddeletall:boolean=false
    loader = true;
    lang;
   finished:boolean=false
    res;
    myorder;
    myorderlength;
    total_cost;
    purchesempty;
    codenull;
    loading1
    loading2;
    ipaddress;
    all;
    order;
    allarray=[];
    orderDetails:string;

    constructor(private translate: TranslateService,
      private service:Constants,private toast:ToastrService,private router:Router) {
        this.orderDetails = localStorage.getItem("orderDetails")
       this.order= JSON.parse(this.orderDetails)
       console.log(this.order)
       }

    ngOnInit(): void {
      this.translateMethod();
      //this.getmypurches();

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
   /* getmypurches(){
        this.service.myPurchesMethod().subscribe(res=>{
            console.log("purches",res);
            this.res=res;

       //this.myorder=this.res.payload;
       this.myorder=[
                     {
                        orders:[{service:{name_ar:"arabicName",name_en:"englishName"},cost:10,quantity:10,id:10}],
                        total_cost:100

                        }
                  ]
      // this.myorderlength=this.myorder.length;
      this.myorderlength=5
       if(this.myorderlength==0)
       {
         this.purchesempty=true
       }
       else{
         this.purchesempty=false
       }
      // localStorage.setItem("purches",this.myorderlength);


       this.finished=true


        })
    }
*/

}
