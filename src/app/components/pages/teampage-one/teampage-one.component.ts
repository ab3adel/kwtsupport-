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
  selector: 'app-teampage-one',
  templateUrl: './teampage-one.component.html',
  styleUrls: ['./teampage-one.component.scss']
})
export class TeampageOneComponent implements OnInit {

  lang;
  submitted = false;
  loading:boolean=false;
  loading1:boolean=false;
  sForm: FormGroup;
  userInfo
  v;
  email
    constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,  
       private formBuilder: FormBuilder,private service:Constants, private router: Router) { 
        formData = new FormData();
        this.sForm = this.formBuilder.group({
          // email: ['', [Validators.required]],
          second_factor_authentication_code:['', [Validators.required]]
        })  
       }
  
    ngOnInit(): void {
      this.v= localStorage.getItem("is_email_verified");
    this.email= localStorage.getItem("emailtwofac");
    console.log(this.v,this.email)
      this.translateMethod();
    }
    get f() {
      return this.sForm.controls;
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
    towfactor() {
      // var email = (<HTMLInputElement>document.getElementById("email")).value;   
      var second_factor_authentication_code =(<HTMLInputElement>document.getElementById("second_factor_authentication_code")).value; 
      this.loading = true;

      
      const body={
        "email":"",
        "second_factor_authentication_code":""
      }  

     body.email=this.email;
     body.second_factor_authentication_code=second_factor_authentication_code;
     console.log(body);
  
      this.submitted = true;
    
      if (this.sForm.invalid) {
        console.log("bbbb");
        this.loading =false;
        return;
      }
      console.log(body)
      this.service.SecondFactor(body).subscribe(res=>{
        console.log(res);
        this.userInfo = res;
    
       
        
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
            
            
      }); 
    }


  
  }
  