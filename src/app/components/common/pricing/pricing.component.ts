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
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  lang;
  submitted = false;
  loading:boolean=false;
  loading1:boolean=false;
  verifyEmailForm: FormGroup;
  
  v;
  email
    constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,  
       private formBuilder: FormBuilder,private service:Constants, private router: Router) { 
        formData = new FormData();
        this.verifyEmailForm = this.formBuilder.group({
          email: ['', [Validators.required]],
          email_verification_code:['', [Validators.required]]
        })  
       }
  
    ngOnInit(): void {
      this.v= localStorage.getItem("is_email_verified");
    this.email=  localStorage.getItem("emailv");
    console.log(this.v,this.email)
      this.translateMethod();
    }
    get f() {
      return this.verifyEmailForm.controls;
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
    verify() {
      var email = (<HTMLInputElement>document.getElementById("email")).value;   
      var email_verification_code =(<HTMLInputElement>document.getElementById("email_verification_code")).value; 
      this.loading = true;
      const body={
        "email":"",
        "email_verification_code":""
      }  

     body.email=email;
     body.email_verification_code=email_verification_code;
     console.log(body);
  
      this.submitted = true;
    
      if (this.verifyEmailForm.invalid) {
        console.log("bbbb");
        this.loading =false;
        return;
      }
  this.service.verifyEmailMethod(body).subscribe(res=>{
    console.log("verify",res)
    this.loading =false;
   
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    
            if (Number(langId) == 1) {
              this.toastrService.success("سجل دخول الآن" );
            } else {
              this.toastrService.success("Login Now"  );
            }
          
       
   
          
              //  
            });
  
        },(err) => {
            this.loading=false;
         console.log(err.message);
         this.toastrService.error(err.message)
         
        
  });  
    }


    resend() {
      
      // var email = (<HTMLInputElement>document.getElementById("email")).value;   
      // var email_verification_code =(<HTMLInputElement>document.getElementById("email_verification_code")).value; 
      this.loading1 = true;
      const body={
        "email":"",
      
      }  

     body.email=this.email;
    //  body.email_verification_code=email_verification_code;
     console.log(body);
  
      this.submitted = true;
    
    
  this.service.resendEmailMethod(body).subscribe(res=>{
    console.log("resend",res)
    this.loading1 =false;
   this.verify();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    
            if (Number(langId) == 1) {
              this.toastrService.success("سجل دخول الآن" );
            } else {
              this.toastrService.success("Login Now"  );
            }
          
       
   
          
              //  
            });
  
        },(err) => {
            this.loading1=false;
        //  console.log(err.message.errors);
        //  this.toastrService.error(err.message.errors)
         
        
  });  
    }
  }
  