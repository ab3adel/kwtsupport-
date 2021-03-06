import { Component, HostListener, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/model/constants';
import { ToastrService } from 'ngx-toastr';
import {$,jQuery} from 'jquery';
import
 {transition
,state
,style
,animate,
trigger}
from '@angular/animations'

let langId
let noQuotes;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],

})

export class NavbarComponent implements OnInit {
lang
    location: any;
    navbarClass: any;
    containerClass: any;
    token;
    login:boolean=false;
cart;
widthX:number =0;
num:number=0;

    constructor(
        private router: Router,
        location: Location,
        private service:Constants,
        private translate: TranslateService,
        private toastrService: ToastrService
    ) {

      this.cart=localStorage.getItem("cart");

        if(this.service.getUser()!=null){
            this.token=localStorage.getItem('token');
            this.login=true
        }

        let y = localStorage.getItem("selected");
        if(y==null){
          localStorage.setItem("selected", JSON.stringify("ar"));
          this.translate.use('ar');
        }else{
          noQuotes = y.split('"').join('');
          this.translate.use(noQuotes);
          if (noQuotes == 'ar'){
            this.lang = true;
          }else{
            this.lang = false;
          }

        }
        let lang_id = localStorage.getItem("langId");
        if(lang_id==null){
          localStorage.setItem("langId", JSON.stringify("1"));
        }

        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/home-two' || this.location == '/home-seven'){
                    this.navbarClass = 'navbar-area navbar-style-two';
                    this.containerClass = 'container-fluid';
                } else if(this.location == '/home-three' || this.location == '/home-five' || this.location == '/home-six'){
                    this.navbarClass = 'navbar-area navbar-style-two';
                    this.containerClass = 'container';
                } else if(this.location == '/home-four'){
                    this.navbarClass = 'navbar-area';
                    this.containerClass = 'container';
                } else if(this.location == '/'){
                    this.navbarClass = 'navbar-area';
                    this.containerClass = 'container-fluid';
                } else {
                    this.navbarClass = 'navbar-area navbar-style-two';
                    this.containerClass = 'container';
                }
            }
        });



    }

    ngOnInit(): void {
      $('.navbar-toggle').click(function() {
        $(this).toggleClass('menuActive');
    });

    }

    changeLang(){

        if(noQuotes  == 'ar'){
            localStorage.setItem("selected",JSON.stringify('en'));
            localStorage.setItem("langId", JSON.stringify("2"));
          }else{
            localStorage.setItem("selected",JSON.stringify('ar'));
            localStorage.setItem("langId", JSON.stringify("1"));
          }

          window.location.reload();
    }
logout(){
    this.service.clearUser();
    if (Number(langId) == 1) {
        this.toastrService.success("???? ?????????? ???????????? ??????????");
      } else {
        this.toastrService.success("logOut success" );
      }
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
}
ngAfterViewInit () {

    this.widthX= window.innerWidth}

buttonClicked =()=>{
    let links = document.querySelectorAll(".nav-link") ;
  console.log(links,"from navbar");
  links.forEach(element => {
      console.log(element);
     ( element as HTMLAnchorElement).addEventListener("click",this.closeNavbar)
  });


}
closeNavbar =()=>{
    let navbar= document.querySelector("#navbarText") as HTMLDivElement;
    navbar.classList.remove('show');
}
}
