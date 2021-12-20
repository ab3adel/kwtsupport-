import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';
let  langId;
let formData;

@Component({
  selector: 'app-teampage-two',
  templateUrl: './teampage-two.component.html',
  styleUrls: ['./teampage-two.component.scss']
})
export class TeampageTwoComponent implements OnInit {
  lang;
  submitted = false;
  loading:boolean=false;
res;
payload;
userid
hist;
data
  email;
  AMEXBool:boolean=false;
  bookeyBol:boolean=false;
  CREDITBool:boolean=false;
  KNETBool:boolean=false;
  nameCharge;
  Form: FormGroup;
  PayUrl
    constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,
       private formBuilder: FormBuilder,private service:Constants, private router: Router) {
        this.Form = this.formBuilder.group({
          amount: ['', [Validators.required]]

        })

       }

    ngOnInit(): void {

      this.translateMethod();
      this.getmywallet();
      this.userid=this.service.getUser().id;
      this.gethistory();
    }
    get f() {
      return this.Form.controls;
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
   getmywallet(){
     this.service.getWallet().subscribe(res=>{
       console.log(res,"mywalletRes");
       this.res=res;
       this.payload=this.res.payload;
     })
   }
gethistory()
{
  this.service.getWallethistory(this.userid).subscribe(res=>{
    console.log(res,"history");
    this.data=res;
    this.hist=this.data.payload
  })
}
charge(){
 this.loading=true
  var amount = (<HTMLInputElement>document.getElementById("amount")).value;
  const obj={
    "amount":"",
    "payment_method":"",
  }
obj.amount=amount;
obj.payment_method=this.nameCharge;
this.submitted = true;

if (this.Form.invalid) {
  console.log("bbbb");
  this.loading =false;
  return;
}
console.log(obj)
this.service.paymentMethod(obj).subscribe(res=>{
  console.log(res);

  this.loading=false
  if(res.Message=='An error has occurred.'){
    if (Number(langId) == 1) {
      this.toastrService.warning("حدث خطأ في مزود الخدمة الإلكتروني الرجاء المحاولة لاحقا");
    } else {
      this.toastrService.warning("An error occurred with your electronic service provider, please try again later");
    }
  }
  else{
    this.PayUrl=res.PayUrl;
            console.log(this.PayUrl);
            window.open(this.PayUrl)
            // this.router.navigateByUrl(this.PayUrl)
           if (Number(langId) == 1) {
            this.toastrService.success("تم ");
          } else {
            this.toastrService.success("successfully");
          }
  }
  // console.log("login", this.userInfo)
  // this.service.SaveUser(this.userInfo.payload);






            //


      },(err) => {
          this.loading=false;
       console.log(err);
       this.toastrService.error(err)


});
}
 clickAMEX()
 {
  (<HTMLInputElement>document.getElementById("amex")).style.borderColor = "#00adee";
  (<HTMLInputElement>document.getElementById("credit")).style.borderColor = "black";
  (<HTMLInputElement>document.getElementById("bookey")).style.borderColor = "black";
  (<HTMLInputElement>document.getElementById("KNET")).style.borderColor = "black";

   this.AMEXBool=true;
   this.bookeyBol=false;
   this.CREDITBool=false;
   this.KNETBool=false;
   this.nameCharge="amex";
   console.log(this.nameCharge)

 }
 clickBOOKEEY()
 {
  (<HTMLInputElement>document.getElementById("bookey")).style.borderColor = "#00adee";
  (<HTMLInputElement>document.getElementById("amex")).style.borderColor = "black";
  (<HTMLInputElement>document.getElementById("credit")).style.borderColor = "black";
  (<HTMLInputElement>document.getElementById("KNET")).style.borderColor = "black";
   this.bookeyBol=true;
   this.CREDITBool=false;
   this.KNETBool=false;
   this.AMEXBool=false;
   this.nameCharge="Bookeey";
   console.log(this.nameCharge)
 }
 clickcredit()
 {
  (<HTMLInputElement>document.getElementById("credit")).style.borderColor = "#00adee";
  // (<HTMLInputElement>document.getElementById("bookey")).style.borderColor = "black";
  (<HTMLInputElement>document.getElementById("KNET")).style.borderColor = "black";
  // (<HTMLInputElement>document.getElementById("amex")).style.borderColor = "black";
   this.CREDITBool=true;
   this.KNETBool=false;
   this.AMEXBool=false;
   this.bookeyBol=false;
   this.nameCharge="credit";
   console.log(this.nameCharge)
 }
 clickKNET()
 {
  (<HTMLInputElement>document.getElementById("KNET")).style.borderColor = "#00adee";
  //  (<HTMLInputElement>document.getElementById("bookey")).style.borderColor = "black";
  //  (<HTMLInputElement>document.getElementById("amex")).style.borderColor = "black";
  //  (<HTMLInputElement>document.getElementById("credit")).style.borderColor = "black";
  //  (<HTMLInputElement>document.getElementById("KNET")).style.borderColor = "black";
  //  this.AMEXBool=false;
  //  this.bookeyBol=false;
  //  this.CREDITBool=false;
   this.nameCharge="KNET";
   console.log(this.nameCharge)
 }
  }
