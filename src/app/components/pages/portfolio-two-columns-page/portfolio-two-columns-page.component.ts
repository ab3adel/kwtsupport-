import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { Router } from 'express';
import { Constants } from 'src/app/model/constants';
let  langId;
@Component({
  selector: 'app-portfolio-two-columns-page',
  templateUrl: './portfolio-two-columns-page.component.html',
  styleUrls: ['./portfolio-two-columns-page.component.scss']
})
export class PortfolioTwoColumnsPageComponent implements OnInit {
lang;
counter = 11;
  time;
  constructor(private translate: TranslateService,private service:Constants,private router:Router) { }

  ngOnInit(): void {
    console.log("krjmirjgirjg")
    this.translateMethod();
    this.charge();
    this.startTimer()
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
  charge(){
    console.log("charge")
    this.service.chargeMethod().subscribe(res=>{
      console.log(res);
    })
  }
  startTimer(){
    this.time= setInterval(() => this.sendTime(),1000);
  } 
  sendTime() {
    this.counter=this.counter-1;
    if (this.counter == 0) {
      clearInterval(this.time);
      console.log("stop")    
    this.router.navigateByUrl("wallet")

      // this.votingTimer = false ;
      // this.enableEndVoting = false; 
    }
  }
}
