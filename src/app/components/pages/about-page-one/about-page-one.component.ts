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
  selector: 'app-about-page-one',
  templateUrl: './about-page-one.component.html',
  styleUrls: ['./about-page-one.component.scss']
})
export class AboutPageOneComponent implements OnInit {

  lang;
  submitted = false;
  loading:boolean=false;
  loading1:boolean=false;
  registerForm: FormGroup;
  idUser;
  myprofile:any;
  first_name;
  middle_name;
  full_name;
  email;
  address;
  postal_code;
  phone
  my;
  showbutton;
  check;
  countryar;
  countryen;
  res;
  country;
  selectCountry;
  id_photo;
  namefile:any;
  percentDone;
  two_factor_authentication
    constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,  
       private formBuilder: FormBuilder,private service:Constants, private router: Router,  private http: HttpClient) { 
        formData = new FormData();
       this.idUser=this.service.getUser().id;
       console.log(this.idUser);
       }
  
    ngOnInit(): void {
      this.translateMethod();
      this.getMyProfile();
      this.getAllCountry()
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
  getMyProfile(){
    this.service.getMyProfile(this.idUser).subscribe(res=>{
      console.log(res);
this.my=res;
this.myprofile=this.my.payload;
// this.first_name=this.myprofile.first_name;
// this.middle_name=this.myprofile.middle_name;
this.full_name=this.myprofile.full_name;
this.phone=this.myprofile.phone;
this.countryar=this.myprofile.country_id.name_ar;
this.countryen=this.myprofile.country_id.name_en;
// this.postal_code=this.myprofile.postal_code;
this.email=this.myprofile.email;
this.address=this.myprofile.address;
this.id_photo=this.myprofile.id_photo;
this.two_factor_authentication=this.myprofile.two_factor_authentication;
console.log(this.two_factor_authentication)
    })
  }
  edit() {

    this.loading = true;

    var full_name = (<HTMLInputElement>document.getElementById("full_name")).value; 
    var address = (<HTMLInputElement>document.getElementById("address")).value; 
    // var postal_code = (<HTMLInputElement>document.getElementById("postal_code")).value; 
    var phone = (<HTMLInputElement>document.getElementById("phone")).value; 
    
 
    formData.append("full_name", full_name);
    formData.append("country_id",this.selectCountry);
    formData.append("address", address);
    // formData.append("postal_code", postal_code);


    formData.append("phone", phone);

  
  
   
this.service.editMyProfile(formData).subscribe(res=>{
  console.log("myprof",res)
  this.loading=false
  // console.log("login", this.userInfo)
  // this.service.SaveUser(this.userInfo.payload);


          if (Number(langId) == 1) {
            this.toastrService.success("تم التعديل بنجاح");
          } else {
            this.toastrService.success("Edited successfully");
          }
        
     
 
        
            //  
        

      },(err) => {
          this.loading=false;
      //  console.log(err.message.errors);
      //  this.toastrService.error(err.message.errors)
       
      
});  
  }

  change() {

    this.loading1 = true;
    var old_password = (<HTMLInputElement>document.getElementById("old_password")).value; 
    var new_password = (<HTMLInputElement>document.getElementById("new_password")).value; 
    var new_password_confirmation = (<HTMLInputElement>document.getElementById("new_password_confirmation")).value; 
    
  
const body={
  "old_password":"",
  "new_password":"",
  "new_password_confirmation":"",

}
body.old_password=old_password;
body.new_password=new_password;
body.new_password_confirmation=new_password_confirmation;

console.log(body)
  
  
   
this.service.changePassword(body).subscribe(res=>{
  console.log("myprof",res)
  this.loading1=false
  // console.log("login", this.userInfo)
  // this.service.SaveUser(this.userInfo.payload);


          if (Number(langId) == 1) {
            this.toastrService.success("تم التعديل بنجاح");
          } else {
            this.toastrService.success("Edited successfully");
          }
        
     
 
        
            //  
        

      },(err) => {
          this.loading1=false;
      //  console.log(err.message.errors);
      //  this.toastrService.error(err.message.errors)
       
      
});  
  }
  onCheckSkill( event) {


    const checked = event.target.checked; 
    console.log(checked)
    // stored checked value true or false
     if (checked) { 
    //  this.check=true;
    this.service.setTwoFactor().subscribe(res=>{
      console.log("factor",res)
         
              if (Number(langId) == 1) {
                this.toastrService.success("تم التفعيل بنجاح");
              } else {
                this.toastrService.success("enable successfully");
              }
              // this.showbutton=true
            
         
     
            
                //  
            
    
          },(err) => {
          
          //  console.log(err.message.errors);
          //  this.toastrService.error(err.message.errors)
           
          
    });  
      }
else{
  // this.showbutton=false;
  // this.check=false;
  console.log(checked)
  this.service.setTwoFactor().subscribe(res=>{
    console.log("factor",res)
       
            if (Number(langId) == 1) {
              this.toastrService.success("تم الغاء التفعيل بنجاح ");
            } else {
              this.toastrService.success("disabled successfully");
            }
          
       
   
          
              //  
          
  
        },(err) => {
        
        //  console.log(err.message.errors);
        //  this.toastrService.error(err.message.errors)
         
        
  }); 
}
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
   
  
