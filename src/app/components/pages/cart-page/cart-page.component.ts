import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
let  langId;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

 loaddeletall:boolean=false
  loader = true;
  lang;
 finished:boolean=false 
  res;
  myorder;
  myorderlength;
  total_cost;
  cartempty;
  codenull;
  loading1
  loading2;
  ipaddress
  constructor(private translate: TranslateService,
    private service:Constants,private toast:ToastrService) { }

  ngOnInit(): void {
    this.translateMethod();
    this.getmyCart();
    this.getIp();
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
  getmyCart(){
    this.service.getMyCart().subscribe(res=>{
        console.log(res);
        this.res=res;
        this.total_cost=this.res.payload.total_cost;
        console.log(this.total_cost)
   this.myorder=this.res.payload.orders;
   console.log("cart",this.myorder)
   this.myorderlength=this.myorder.length;
   if(this.myorderlength==0)
   {
     this.cartempty=true
   }
   else{
     this.cartempty=false
   }
  localStorage.setItem("cart",this.myorderlength);


   this.finished=true
        // console.log( this.about_us)

    })
}
delete(id)
{
  console.log(id);
 (<HTMLInputElement>document.getElementById("loader"+id)).hidden = false;
 (<HTMLInputElement>document.getElementById("delete"+id)).hidden = true;
  this.service.deleteService(id).subscribe(
   res=> {
     console.log(res)
     if(this.lang){
       this.toast.success( "تم الحذف  بنجاح");
     }else{
       this.toast.success( " deleted successfuly");
     }
     this.loader = true;
     window.location.reload();
     this.getmyCart();
  },err => {
     this.toast.error(err.error)
     this.loader=false;   
  })
}

deleteallservice()
{
 this.loaddeletall=true;

  this.service.deleteallService().subscribe(
   res=> {
     console.log(res)
     if(this.lang){
       this.toast.success( "تم الحذف  بنجاح");
     }else{
       this.toast.success( " deleted successfuly");
     }
     this.loaddeletall=false;
     window.location.reload();
     this.getmyCart();
    
  },err => {
     this.toast.error(err.error)
     this.loaddeletall=false;  
  })
}
useoffer() {
  
  this.loading1 = true;
  var code = (document.getElementById("code") as HTMLInputElement).value;
  const body={
    "code":""
  }
  body.code=code
console.log(body)
  if(body.code==""){
    this.codenull=true;
    this.loading1=false
  }
else{
  this.codenull=false
  this.service.useOfferMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toast.success("تم استخدام العرض");
            } else {
              this.toast.success("used offer successfully" );
            }
         
        },(err) => {
         console.log(err);
         this.toast.error(err)
           this.loading1=false;
        
  });  
}

}
checkout(){
  this.loading2=true
  this.service.checkoutMethod( this.ipaddress).subscribe(res=>{
    console.log(res);
    if (Number(langId) == 1) {
      this.toast.success("تم الدفع بنجاح");
    } else {
      this.toast.success("checkout successfully" );
      
    }
    this.loading2=false
  },
  (err) => {
    console.log(err);
    this.toast.error(err.error.error)
    this.loading2=false
   
}); 
}
getIp(){
  this.service.getIPAddress().subscribe((res :any)=>{
    console.log(res.ip);
    this.ipaddress=res.ip
  })
}
}
