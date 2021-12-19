import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEventType, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
let langId
let formData;

@Component({
  selector: 'app-blog-right-sidebar-page',
  templateUrl: './blog-right-sidebar-page.component.html',
  styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent implements OnInit {
show:boolean=false
noshow:boolean=false;
submitted:boolean=false
  word;
  wordpress;
  lang;
  finished:boolean=false;
  showff:boolean=false
  original_type;
  id_word;
  linknull;
  commentsnull;
  usernamesnull;
  answer_numbernull;
  postsnull;
  color:any[] = [];
  choosecolor;
  clicked:boolean[] = [];
  loading1:boolean=false;
  percentDone;
  form: FormGroup;
  choose:boolean=false;
  prog:boolean=false;
  namefile:any
    constructor(public fb: FormBuilder,private translate: TranslateService,private toastrService: ToastrService ,private router:Router,
      private service1:Constants,private http: HttpClient) { 
      this.translateMethod()
     this.word= localStorage.getItem('word');
      this.wordpress=JSON.parse( this.word);
      console.log(this.wordpress);
      // this.original_type=this.ser.original_type;
  // console.log('this.original_type',this.original_type);
  this.id_word=this.wordpress.id;
  this.color=this.wordpress.colors;
  console.log(this.color)
      this.finished=true;
      formData = new FormData();
      this.form = this.fb.group({
     website_id:['',],
     color:['',[Validators.required]],
     logo:['',[Validators.required]]
      });
    }
  
    ngOnInit(): void {
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
    //  var link = (document.getElementById("link") as HTMLInputElement).value;
     formData.append("website_id", this.id_word);
     formData.append("color", this.choosecolor);
    //  this.submitted = true;
   
     formData.forEach((value, key) => {
      console.log(key + value)
    });
    if(this.service1.getUser()==null)
    {
      this.router.navigateByUrl("login");
    }
    else{
    this.service1.wordpress(formData).subscribe(res=>{
      console.log(res);
   this.loading1=false
   
              if (Number(langId) == 1) {
                this.toastrService.success("تم الشراء بنجاح وخصم من رصيدك");
              } else {
                this.toastrService.success("Purchased successfully and deducted from your balance" );
              }
              // this.router.navigate(['/cart']).then(() => {
              //   window.location.reload();
              // });
          },(err) => {
           console.log(err);
           this.toastrService.error(err)
             this.loading1=false;
          
    });  
  }
  }
  
  shows(){
   this.show=true;
   this.noshow=false
  } 
  notshow(){
    this.noshow=true;
    this.show=false;
  }

  click(event,index:number ){
 
    this.choosecolor=event;
    console.log(index);

    console.log(event);
    for(var i:number = 0 ;i < this.color.length;i++)
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
    Array.from(files).forEach(f => formData.append('logo', f));
  
    this.http.post("Https://backend.kwtsupport.com/api/wordpress/addNewWordpressOrder", formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
  
        } else if (event instanceof HttpResponse) {
          (<HTMLInputElement>document.getElementById("progressAdd")).style.display = "none";
  
        }
      });
  // this.prog=true
  }
  get f() {
    return this.form.controls;
  }
  showform(){
this.showff=true;
  } 
}

