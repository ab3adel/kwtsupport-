import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
let  langId;
let formData;
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  lang;
  phone;
  email;
  address
  all;
  submitted = false;
  loading:boolean=false;
  contactForm: FormGroup;
  public finished :boolean =false ;
  constructor(private translate: TranslateService,private service:Constants
    ,private toastrService: ToastrService ,  
       private formBuilder: FormBuilder) { 
        formData = new FormData();
        this.contactForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(10) ]],
          message: ['', [Validators.required]]
      
        })  
      
       }
  
       
  

  ngOnInit(): void {
    this.translateMethod();
    this.getContact()
  }
  get f() {
    return this.contactForm.controls;
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
getContact(){
  this.service.getContact().subscribe(result=>{
    console.log(result);
    this.all=result;
    this.phone=this.all.payload.phone;
    this.email=this.all.payload.email;
    this.address=this.all.payload.address;
    this.finished=true
  })
}
postContact() {
  
  this.loading = true;
  var email =  this.f.email.value
  var phone =this.f.phone.value
  var message =this.f.message.value
  formData.append("email",email);

  formData.append("phone", phone);

  formData.append("message", message);
  formData.forEach((value,key) => {
    console.log(key+" "+value)
  });

  this.submitted = true;

  if (this.contactForm.invalid) {
    console.log("bbbb");
    this.loading =false;
    return;
  }
this.service.ContactMethod(formData).subscribe(res=>{
console.log(res);


this.loading = false;

        if (Number(langId) == 1) {
          this.toastrService.success("تم إرسال رسالتك بنجاح");
        } else {
          this.toastrService.success("Your message was sent successfully");
        }
        // this.router.navigate(['/']).then(() => {
        //   window.location.reload();
        // });
    },(err) => {
     console.log(err);
     this.toastrService.error(err)
       this.loading=false;
    
});  
}
}