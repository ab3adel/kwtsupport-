import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';
let  langId;
let formData;
let formData1
@Component({
  selector: 'app-blog-grid-two-in-row-page',
  templateUrl: './blog-grid-two-in-row-page.component.html',
  styleUrls: ['./blog-grid-two-in-row-page.component.scss']
})
export class BlogGridTwoInRowPageComponent implements OnInit {
emailnull
  lang;
  submitted = false;
  submitted1=false
  loading:boolean=false;
  loading1:boolean=false;
  loginForm: FormGroup;
  forgetForm: FormGroup;
  userInfo;
  
  is_email_verfy;
  email
    constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,  
       private formBuilder: FormBuilder,private service:Constants,
       private router: Router) { 
        formData = new FormData();
        formData1=new FormData();
        this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required , Validators.minLength(8)]],
      
        })  

        this.forgetForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
         
      
        }) 
       }
  
    ngOnInit(): void {
      this.translateMethod();
    }
    get f() {
      return this.loginForm.controls;
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
    login() {
  
      this.loading = true;
      var email =  this.f.email.value
      var password =this.f.password.value

      formData.append("email",email);
  
      formData.append("password", password);

      formData.forEach((value,key) => {
        console.log(key+" "+value)
      });
  
      this.submitted = true;
    
      if (this.loginForm.invalid) {
        console.log("bbbb");
        this.loading =false;
        return;
      }
  this.service.loginMethod(formData).subscribe(res=>{
    console.log("login",res);
    this.userInfo = res;
  
if(this.userInfo.message=='Please check your email for the second factor authentication code!'){
  localStorage.setItem("emailtwofac",email);
  console.log(localStorage.getItem("emailtwofac"))
  this.loading =false;
  this.router.navigate(['/twofactor']).then(() => {
    window.location.reload();
  });
}
    this.is_email_verfy=this.userInfo.payload.is_email_verified;
    localStorage.setItem("is_email_verified",this.is_email_verfy);
    this.email=this.userInfo.payload.email;
    localStorage.setItem("emailv", this.email);
   
    if(this.is_email_verfy==0){
      this.router.navigate(['/verifyEmail']).then(() => {
        window.location.reload();
      });
    }
    localStorage.setItem("token",this.userInfo.payload.token);
    let user_token=localStorage.getItem('token');
    console.log("token", user_token)
    this.service.SaveUser(this.userInfo.payload);
    this.loading = false;
 
            if (Number(langId) == 1) {
              this.toastrService.success("تم تسجيل الدخول بنجاح");
            } else {
              this.toastrService.success("login success" );
            }
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
        },(err) => {
          this.loading=false;

         console.log(err);
         this.toastrService.error(err)
         if(err=="Error: Your email is not verified, please check your email for verification code or contact admin!"){
          this.router.navigate(['/verifyEmail']).then(() => {
            window.location.reload();
          });
         }
        
  });  
    }


    forget() {
  
      this.loading1 = true;
      var email = (document.getElementById("email1") as HTMLInputElement).value;
      const body={
        "email":""
      }
      body.email=email
    console.log(body)
      if(body.email==""){
        this.emailnull=true;
        this.loading1=false
      }
    else{
      this.emailnull=false
      this.service.forgetPasswordMethod(body).subscribe(res=>{
        console.log(res);
     this.loading1=false
     
                if (Number(langId) == 1) {
                  this.toastrService.success("تم إرسال كلمة مرور جديدة...يرجى مراجعة بريدك الإلكتروني");
                } else {
                  this.toastrService.success("Password has been sent, please check your email" );
                }
             
            },(err) => {
             console.log(err);
             this.toastrService.error(err)
               this.loading1=false;
            
      });  
    }

    }
  }
  