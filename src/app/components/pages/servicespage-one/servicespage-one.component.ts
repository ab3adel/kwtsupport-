import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
let langId
@Component({
  selector: 'app-servicespage-one',
  templateUrl: './servicespage-one.component.html',
  styleUrls: ['./servicespage-one.component.scss']
})
export class ServicespageOneComponent implements OnInit {
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
//  @ViewChild('username', {static: true}) usernameElement: ElementRef;
totalprice:any;
loading1:boolean=false;
  constructor(private translate: TranslateService,private toastrService: ToastrService ,private router:Router,
    private service1:Constants) { 
    this.translateMethod()
   this.service= localStorage.getItem('service');
    this.ser=JSON.parse( this.service);
    this.unit_price=this.ser.unit_price;
    this.min=this.ser.original_min;
    this.max=this.ser.original_max;
    console.log(" max min", this.max,this.min);
    console.log(" this.unit_price", this.unit_price);
    console.log(this.ser);
    this.original_type=this.ser.original_type;
this.service_quantity_price=this.ser.service_quantity_price;
if(this.service_quantity_price==null){
  this.array=true;
}
console.log(this.service_quantity_price);
console.log('this.original_type',this.original_type);
this.id_service=this.ser.id
    this.finished=true;

  }

  ngOnInit(): void {
    // this.showPrice()
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
addCart(){
 
  this.loading1=true
   var link = (document.getElementById("link") as HTMLInputElement).value;
   var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
   const body={
    "link":"",
    "service":"",
    // "service_quantity_price_id":"",
    "quantity":"",
    
  }
  body.link=link;
  body.service=this.id_service;
  // body.service_quantity_price_id=this.chooseprice;
  body.quantity=quantity
console.log(body)
// this.totalprice=(this.unit_price)*Number(body.quantity)/1000
  if(body.link=="" && body.quantity==""){
    this.quantitynull=true;
    this.linknull=true;
    this.loading1=false
  }
  else if(body.link!="" && body.quantity==""){
    this.quantitynull=true;
    this.linknull=false;
    this.loading1=false
  }
  else if(body.link=="" && body.quantity!=""){
    this.quantitynull=false;
    this.linknull=true;
    this.loading1=false
  }
else{
  this.linknull=false;
  this.quantitynull=false;
  this.service1.addCartMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم إضافة الخدمة بنجاح إلى السلة");
            } else {
              this.toastrService.success("The service has been successfully added to the cart" );
            }
            this.router.navigate(['/cart']).then(() => {
              window.location.reload();
            });
        },(err) => {
          if (Number(langId) == 1) {
            this.toastrService.error("يجب أن تكون الكمية أكبر من أو تساوي"+ this.min +"وأصغر من" +this.max);
          } else {
            this.toastrService.error("The quantity must be greater than or equal " + this.min  + "and younger than" + this.max);
          }
      // this.toastrService.error("")
           this.loading1=false;
        
  });  
}


}

addCart2(){
  this.loading1=true
   var link = (document.getElementById("link") as HTMLInputElement).value;
   var comments= (document.getElementById("comments") as HTMLInputElement).value;
   var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
   const body={
    "link":"",
    "service":"",
    "comments":"",
    // "service_quantity_price_id":"",
    "quantity":"",
  }
  body.link=link;
  body.service=this.id_service;
  body.comments=comments;
  // body.service_quantity_price_id=this.chooseprice;
  body.quantity=quantity
console.log(body)
  if(body.link=="" && body.comments=="" && body.quantity==""){
    this.linknull=true;
    this.commentsnull=true;
    this.quantitynull=true;
    this.loading1=false
  }
 else if(body.comments=="" && body.link!="" && body.quantity!=""){
this.commentsnull=true;
this.quantitynull=false;
this.loading1=false;
this.linknull=false;
  }
  else if(body.comments!="" && body.link=="" && body.quantity!=""){
    this.commentsnull=false;
    this.quantitynull=false;
    this.loading1=false;
    this.linknull=true;
  }
  else if(body.comments!="" && body.link!="" && body.quantity==""){
    this.commentsnull=false;
    this.quantitynull=true;
    this.loading1=false;
    this.linknull=false;
  }
else{
  this.linknull=false;
  this.commentsnull=false;
  this.quantitynull=false;
  this.service1.addCartMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم إضافة الخدمة بنجاح إلى السلة");
            } else {
              this.toastrService.success("The service has been successfully added to the cart" );
            }
            this.router.navigate(['/cart']).then(() => {
              window.location.reload();
            });
        },(err) => {
         console.log(err);
         this.toastrService.error(err)
           this.loading1=false;
        
  });  
}


}
addCart3(){
  
 
  this.loading1=true
   var link = (document.getElementById("link") as HTMLInputElement).value;
   var usernames= (document.getElementById("usernames") as HTMLInputElement).value;
   var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
   const body={
    "link":"",
    "service":"",
    "usernames":"",
    // "service_quantity_price_id":"",
    "quantity":"",
  }
  body.link=link;
  body.service=this.id_service;
  body.usernames=usernames;
  // body.service_quantity_price_id=this.chooseprice;
  body.quantity=quantity
console.log(body);

  if(body.link=="" && body.usernames=="" && body.quantity==""){
    this.linknull=true;
    this.usernamesnull=true;
    this.quantitynull=true;
    this.loading1=false
  }
 else if(body.usernames=="" && body.link!="" && body.quantity!=""){
this.usernamesnull=true;
this.quantitynull=false;
this.loading1=false;
this.linknull=false;
  }
  else if(body.usernames!="" && body.link=="" && body.quantity!=""){
    this.usernamesnull=false;
    this.loading1=false;
    this.quantitynull=false;
    this.linknull=true;
  }
  else if(body.usernames!="" && body.link!="" && body.quantity==""){
    this.usernamesnull=false;
    this.loading1=false;
    this.quantitynull=true;
    this.linknull=false;
  }
else{
  this.linknull=false;
  this.usernamesnull=false;
  this.quantitynull=false;
  this.service1.addCartMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم إضافة الخدمة بنجاح إلى السلة");
            } else {
              this.toastrService.success("The service has been successfully added to the cart" );
            }
            this.router.navigate(['/cart']).then(() => {
              window.location.reload();
            });
        },(err) => {
         console.log(err);
         this.toastrService.error(err)
           this.loading1=false;
        
  });  
}


}
addCart4(){
  this.loading1=true
   var link = (document.getElementById("link") as HTMLInputElement).value;
   var answer_number= (document.getElementById("answer_number") as HTMLInputElement).value;
   var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
   const body={
    "link":"",
    "service":"",
    "answer_number":"",
    // "service_quantity_price_id":"",
    "quantity":"",
  }
  body.link=link;
  body.service=this.id_service;
  body.answer_number=answer_number;
  // body.service_quantity_price_id=this.chooseprice;
  body.quantity=quantity
console.log(body)
  if(body.link=="" && body.answer_number=="" && body.quantity==""){
    this.linknull=true;
    this.answer_numbernull=true;
    this.quantitynull=true;
    this.loading1=false
  }
 else if(body.answer_number=="" && body.link!="" && body.quantity!=""){
this.answer_numbernull=true;
this.loading1=false;
this.linknull=false;
this.quantitynull=false;
  }
  else if(body.answer_number!="" && body.link=="" && body.quantity!=""){
    this.answer_numbernull=false;
    this.loading1=false;
    this.linknull=true;
    this.quantitynull=false;
  }
  else if(body.answer_number!="" && body.link!="" && body.quantity==""){
    this.answer_numbernull=false;
    this.loading1=false;
    this.linknull=false;
    this.quantitynull=true;
  }
else{
  this.linknull=false;
  this.answer_numbernull=false;
  this.quantitynull=false;
  this.service1.addCartMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم إضافة الخدمة بنجاح إلى السلة");
            } else {
              this.toastrService.success("The service has been successfully added to the cart" );
            }
            this.router.navigate(['/cart']).then(() => {
              window.location.reload();
            });
        },(err) => {
         console.log(err);
         this.toastrService.error(err)
           this.loading1=false;
        
  });  
}


}
addCart5(){
  this.loading1=true
   var link = (document.getElementById("link") as HTMLInputElement).value;
   var comments= (document.getElementById("comments") as HTMLInputElement).value;
   var usernames= (document.getElementById("usernames") as HTMLInputElement).value;
   var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
   const body={
    "link":"",
    "service":"",
    "comments":"",
    "usernames":"",
    // "service_quantity_price_id":"",
    "quantity":"",
  }
  body.link=link;
  body.service=this.id_service;
  body.comments=comments;
  body.usernames=usernames;
  // body.service_quantity_price_id=this.chooseprice;
  body.quantity=quantity
console.log(body)
  if(body.link=="" && body.comments=="" && body.usernames=="" && body.quantity==""){
    this.linknull=true;
    this.commentsnull=true;
    this.usernamesnull=true;
    this.quantitynull=true;
    this.loading1=false
  }
 else if(body.comments=="" && body.link!="" && body.usernames!="" && body.quantity!=""){
this.commentsnull=true;
this.loading1=false;
this.linknull=false;
this.usernamesnull=false;
this.quantitynull=false;
  }
  else if(body.comments!="" && body.link=="" && body.usernames!=""  && body.quantity!=""){
    this.commentsnull=false;
    this.loading1=false;
    this.usernamesnull=false;
    this.linknull=true;
    this.quantitynull=false;
  }
  else if(body.comments!="" && body.link!="" && body.usernames==""  && body.quantity!="")
  {
    this.commentsnull=false;
    this.loading1=false;
    this.usernamesnull=true;
    this.linknull=false;
    this.quantitynull=false;
  }
  else if(body.comments!="" && body.link!="" && body.usernames!=""  && body.quantity=="")
  {
    this.commentsnull=false;
    this.loading1=false;
    this.usernamesnull=false;
    this.linknull=false;
    this.quantitynull=true;
  }
else{
  this.linknull=false;
  this.quantitynull=false;
  this.commentsnull=false;
  this.usernamesnull=false
  this.service1.addCartMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم إضافة الخدمة بنجاح إلى السلة");
            } else {
              this.toastrService.success("The service has been successfully added to the cart" );
            }
            this.router.navigate(['/cart']).then(() => {
              window.location.reload();
            });
        },(err) => {
         console.log(err);
         this.toastrService.error(err)
           this.loading1=false;
        
  });  
}


}
addCart6(){
  this.loading1=true
   var usernames = (document.getElementById("usernames") as HTMLInputElement).value;
   var posts= (document.getElementById("posts") as HTMLInputElement).value;
   var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
   const body={
    "usernames":"",
    "service":"",
    "posts":"",
    // "service_quantity_price_id":"",
    "quantity":"",
  }
  body.usernames=usernames;
  body.service=this.id_service;
  body.posts=posts;
  // body.service_quantity_price_id=this.chooseprice;
  body.quantity=quantity
console.log(body)
  if(body.usernames=="" && body.posts=="" && body.quantity==""){
    this.postsnull=true;
    this.usernamesnull=true;
    this.quantitynull=true
    this.loading1=false
  }
 else if(body.usernames=="" && body.posts!="" && body.quantity!=""){
this.postsnull=false;
this.loading1=false;
this.quantitynull=false
this.usernamesnull=true;
  }
  else if(body.usernames!="" && body.posts=="" && body.quantity!=""){
    this.usernamesnull=false;
    this.loading1=false;
    this.postsnull=true;
    this.quantitynull=false
  }
  else if(body.usernames!="" && body.posts!="" && body.quantity==""){
    this.usernamesnull=false;
    this.loading1=false;
    this.postsnull=false;
    this.quantitynull=true
  }
else{
  this.postsnull=false;
  this.usernamesnull=false;
  this.quantitynull=false
  this.service1.addCartMethod(body).subscribe(res=>{
    console.log(res);
 this.loading1=false
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم إضافة الخدمة بنجاح إلى السلة");
            } else {
              this.toastrService.success("The service has been successfully added to the cart" );
            }
            this.router.navigate(['/cart']).then(() => {
              window.location.reload();
            });
        },(err) => {
         console.log(err);
         this.toastrService.error(err)
           this.loading1=false;
        
  });  
}


}
click(event,index:number ){
 
  this.chooseprice=event;
  console.log(index);

  console.log(this.chooseprice);
  for(var i:number = 0 ;i < this.service_quantity_price.length;i++)
  {
    
    if(i == index)
    {
      this.clicked[i] = true;
    }
    else{
      this.clicked[i] = false;

    }

  }
  


}
showPrice(){
  var quantity = (document.getElementById("quantity") as HTMLInputElement).value;
  // this.totalprice=((1)*Number(3))/1000
this.totalprice=((this.unit_price)*Number(quantity))/1000
  console.log(this.totalprice)
}
}
