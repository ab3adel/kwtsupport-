import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';
import { HttpEventType, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
let  langId;
let formData;
@Component({
  selector: 'app-seo-analysis',
  templateUrl: './seo-analysis.component.html',
  styleUrls: ['./seo-analysis.component.scss']
})
export class SeoAnalysisComponent implements OnInit {
lang;
submitted = false;
loading:boolean=false;
registerForm: FormGroup;
userInfo;
res;
country;
selectCountry;
percentDone;
namefile:any
  constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,  
     private formBuilder: FormBuilder,private service:Constants, private router: Router,
     private http: HttpClient) { 
      formData = new FormData();
      this.registerForm = this.formBuilder.group({
        full_name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
        country_id:['',[Validators.required]],
        // last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
        phone: ['', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(10) ]],
        email: ['', [Validators.required, Validators.email]],
        address:['',],
        password: ['', [Validators.required , Validators.minLength(8)]],
        password_confirmation: ['', Validators.required],
        id_photo: ['', ]
      })  
      this.getAllCountry()
     }

  ngOnInit(): void {
    this.translateMethod();
  }
  get f() {
    return this.registerForm.controls;
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
  register() {

    this.loading = true;
 var address=   (document.getElementById("address") as HTMLInputElement).value 
  
    var full_name =this.f.full_name.value;

    var email =  this.f.email.value

    // var postal_code = this.f.postal_code.value
    var password =this.f.password.value
    var password_confirmation =this.f.password_confirmation.value

    var phone = this.f.phone.value
 


   
if(password!=password_confirmation){
     
  if (Number(langId) == 1){
    this.loading=false;
    this.toastrService.error('تأكد من تطابق كلمتي المرور','',
    {
      timeOut:8000
    });

  }else{
         this.loading=false
    this.toastrService.error(' Make sure your passwords match','',  {
      timeOut:8000
    });
    

  }
 
}


    formData.append("full_name", full_name);
   
    formData.append("email",email);
    formData.append("country_id",this.selectCountry);
    formData.append("address", address);
    // formData.append("postal_code", postal_code);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);

    formData.append("phone", phone);
    formData.forEach((value,key) => {
      console.log(key+" "+value)
    });

    this.submitted = true;
  
    if (this.registerForm.invalid) {
      console.log("bbbb");
      this.loading =false;
      return;
    }
this.service.registerMethod(formData).subscribe(res=>{
  console.log("register",res)
  this.userInfo = res;
  this.loading = false;
  // console.log("login", this.userInfo)
  // this.service.SaveUser(this.userInfo.payload);

  this.router.navigate(['/verifyEmail']).then(() => {
    window.location.reload();
  
          if (Number(langId) == 1) {
            this.toastrService.success("يرجى مراجعة بريديك الإلكتروني وإدخال رمز التحقق لمتابعة تسجيل الدخول");
          } else {
            this.toastrService.success("Please check your email and enter the verification code to continue logging in");
          }
        
     
 
        
            //  
          });

      },(err) => {
          this.loading=false;
      //  console.log(err.message.errors);
      //  this.toastrService.error(err.message.errors)
       
      
});  
  }
  getAllCountry(){
    this.service.getAllCountry().subscribe(res=>{
      console.log(res);
      this.res=res;
      this.country= this.res.payload;
      console.log("this.country",this.country)
    })
  }
  selectCountrys(event: any) {
    this.selectCountry=event.target.value;
   console.log(this.selectCountry) ;
  }

  upload(files: File[]) {
    console.log(files)
    for(let i=0 ;i<files.length;i++){
    
     this.namefile= files[0].name;
    
      console.log( this.namefile)
    }
    
    //pick from one of the 4 styles of file uploads below
    this.uploadAndProgress(files);
 
  }
  
  uploadAndProgress(files: File[]) {
  
    (<HTMLInputElement>document.getElementById("progressAdd")).style.display = "block";
    this.percentDone = 0;
    Array.from(files).forEach(f => formData.append('id_photo', f));
  
    this.http.post("Https://backend.kwtsupport.com/api/authentication/register", formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
  
        } else if (event instanceof HttpResponse) {
          (<HTMLInputElement>document.getElementById("progressAdd")).style.display = "none";
  
        }
      });
  // this.prog=true
  }
}
