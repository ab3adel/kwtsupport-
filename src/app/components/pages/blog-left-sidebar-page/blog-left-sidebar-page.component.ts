import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-blog-left-sidebar-page',
  templateUrl: './blog-left-sidebar-page.component.html',
  styleUrls: ['./blog-left-sidebar-page.component.scss']
})
export class BlogLeftSidebarPageComponent implements OnInit {


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
  allarray=[]
  constructor(private translate: TranslateService,
    private service:Constants,private toast:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.translateMethod();
    this.getmypurches();

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
  getmypurches(){
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
purshasedDetails (item) {
    localStorage.setItem('orderDetails',JSON.stringify(item) )
    this.router.navigateByUrl('/purshasedDetails')
}
}
