import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';
let  langId;
@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {
id;
namear;
nameen;
lang;
data;
sub;
public finished :boolean =false ;
constructor(private translate: TranslateService,private fb: FormBuilder,private toastrService: ToastrService ,  
  private formBuilder: FormBuilder,private service:Constants, private router: Router)  { 
    this.translateMethod();
  this.id=localStorage.getItem("categoryid");
  this.namear= localStorage.getItem("cnamear");
  this.nameen= localStorage.getItem("cnameen");
  console.log(this.namear,this.nameen)
this.getSubCategory()
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
getSubCategory(){
  this.service.getsub(this.id).subscribe(res=>{
    console.log(res)
    this.data=res;
    this.sub=this.data.payload;
    this.finished=true
  })
}
click(id,namear,nameen){

  localStorage.setItem("idsub",id);
  localStorage.setItem("namearsub",namear);
  localStorage.setItem("nameensub",nameen);
  this.router.navigateByUrl("services");
}
}
