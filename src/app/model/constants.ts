// import { tokenKey } from '@angular/core/src/view';
import 'rxjs/add/operator/map';
import { Injectable ,Input , Inject, Injector } from '@angular/core';
// import { Http } from '@angular/http';

import { BehaviorSubject, Observable, Subscriber, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AboutUs } from '../model/AboutUs';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from './User';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
// import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';


// import { TranslateService } from '@ngx-translate/core';


let langCode
let noQuotes;
let langId;
let lang_id

@Injectable({
  providedIn: 'root'
})
export class Constants {
  lang;

  public url: string = "Https://backend.kwtsupport.com/api/";
  public faqUrl: string = this.url + "FAQs/viewAllFAQs";
  public registerUrl:string=this.url + "authentication/register";
  public loginUrl:string=this.url + "authentication/login";
  public sliderUrl:string=this.url +"slider/viewAllSliders";
  public settingUrl:string=this.url +"settings/viewWebsiteSettings";
  public contactUrl:string=this.url +"contactUs/addNewContactUsRequest";
  public myProfile:string=this.url+ "users/profile?user_id=";
  public verifyEmailUrl:string=this.url+"authentication/verifyEmail";
  public resend:string=this.url +"authentication/resendVerificationCodeEmail"
  public editMyProfileUrl:string=this.url+"users/updateProfile";
  public changePassUrl:string=this.url+"authentication/changePassword";
  public forgetUrl:string=this.url+"authentication/forgotPassword";
  public offerById:string=this.url +"offers/searchOffers?id=";
  public servicesUrl:string=this.url +"services/searchServices?subcategory_id=";
  public serviceUrl1:string=this.url +"services/searchServices";
  public serviceUrl2:string=this.url +"services/searchServices?name_en=";
  public myOfferUrl:string=this.url +"offers/myOffers";
  public addCartUrl:string=this.url +"addNewServiceToCart"
  public myCartUrl:string= this.url + "viewMyCart";
  public deletser:string=this.url + "deleteServiceFromMyCart?service_order_id=";
  public deletallser:string=this.url + "clearMyCart";
  public useOfferUrl:string=this.url + "offers/useOffer";
  public checkoutUrl:string=this.url +"checkout?user_ip=";
  public SecondFactorUrl:string=this.url + "authentication/checkSecondFactorAuthenticationCode";
  public setTwoFactorUrl:string=this.url + "authentication/setTwoFactorAuthentication";
  public walletUrl:string=this.url + "wallet/getMyWallet";
  public wallethistoryUrl:string=this.url + "wallet/getChargingHistory?user_id=";
  public chargeUrl:string=this.url + "wallet/chargeWallet";
  public paymentUrl:string=this.url + "wallet/payment";
  public categoryUrl:string=this.url +"getMainCategories";
  public subcategoryUrl:string=this.url +"getSubcategoriesForCertainCategory?category_id=";
  public wordpressUrl:string=this.url + "wordpress/viewAllWordpressTemplates";
  public wordpressurls:string =this.url  + "wordpress/addNewWordpressOrder";
  public myPurchesUrl:string=this.url + "viewMyPurchaseHistory";
  public countryUrl:string=this.url + "country/viewAllCountries"
  constructor(private http: HttpClient, @Inject(Router) private router: Router,
    private translate: TranslateService,private toastrService: ToastrService
  ) {
    
     lang_id = localStorage.getItem("langId");
    if (lang_id == null) {
      localStorage.setItem("langId", JSON.stringify("1"))
      noQuotes = localStorage.getItem("langId").split('"').join('');
    }
    else {
      noQuotes = lang_id.split('"').join('');
    }
    // this.translateMethod()
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
  //post
  public registerMethod(data): Observable<any> {  
    return this.http.post(this.registerUrl, data ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public loginMethod(data): Observable<any> {  
    return this.http.post(this.loginUrl, data ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public forgetPasswordMethod(data): Observable<any> {  
    return this.http.post(this.forgetUrl, data ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getIPAddress()
  {
    
    return  this.http.get("http://api.ipify.org/?format=json")
    
  }
  public getAllCountry(){
    return this.http.get(this.countryUrl)
  }
  public useOfferMethod(data): Observable<any> { 
    var token = this.getUser().token; 
    const  headers = new  HttpHeaders({
      'Authorization' : 'Bearer ' + token
  
  });  
    return this.http.post(this.useOfferUrl, data ,{headers}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public myPurchesMethod(): Observable<any> { 
    var token = this.getUser().token; 
    const  headers = new  HttpHeaders({
      'Authorization' : 'Bearer ' + token
  
  });  
    return this.http.get(this.myPurchesUrl ,{headers}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public chargeMethod(): Observable<any> { 
    var token = this.getUser().token; 
    const  headers = new  HttpHeaders({
      'Authorization' : 'Bearer ' + token
  
  });  
    return this.http.post(this.chargeUrl,""  ,{headers}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public paymentMethod(data): Observable<any> { 
    var token = this.getUser().token; 
    const  headers = new  HttpHeaders({
      'Authorization' : 'Bearer ' + token
  
  });  
    return this.http.post(this.paymentUrl , data ,{headers}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public wordpress(data): Observable<any> { 
    var token = this.getUser().token; 
    const  headers = new  HttpHeaders({
      'Authorization' : 'Bearer ' + token
  
  });  
    return this.http.post(this.wordpressurls  , data ,{headers}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public addCartMethod(data): Observable<any> { 
    if(this.getUser() ==null){
      if (Number(lang_id) == 1) {
        
        this.toastrService.warning("لايمكنك إضافة هذه الخدمة إلى السلة ..عليك تسجيل الدخول أولا");
      } else {
        this.toastrService.warning("You cannot add this service to the cart..you have to log in first" );
      }
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    }  
    var token = this.getUser().token; 
  
    
      const  headers = new  HttpHeaders({
        'Authorization' : 'Bearer ' + token
    
    }); 
  
      return this.http.post(this.addCartUrl ,data,{headers} ).pipe(
        retry(1),
        catchError(this.handleError)
      );
    
  
  }
  public ContactMethod(data): Observable<any> {  
    return this.http.post(this.contactUrl, data ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public verifyEmailMethod(data): Observable<any> {  
    return this.http.post(this.verifyEmailUrl, data ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public resendEmailMethod(data): Observable<any> {  
    return this.http.post(this.resend, data ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public editMyProfile(data): Observable<any> {  
      var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
    'Authorization' : 'Bearer ' + token

}); 
    return this.http.post(this.editMyProfileUrl, data,{headers} ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  public changePassword(data): Observable<any> {  
    var token = this.getUser().token; 
const  headers = new  HttpHeaders({
  'Authorization' : 'Bearer ' + token

}); 
  return this.http.post(this.changePassUrl, data,{headers} ).pipe(
    retry(1),
    catchError(this.handleError)
  );
}
public SecondFactor(data): Observable<any> {  

return this.http.post(this.SecondFactorUrl, data ).pipe(
  retry(1),
  catchError(this.handleError)
);
}
//delet
public deleteService(id): Observable<any> {  
  var token = this.getUser().token; 
const  headers = new  HttpHeaders({
'Authorization' : 'Bearer ' + token

}); 
return this.http.delete(this.deletser + id ,{headers} ).pipe(
  retry(1),
  catchError(this.handleError)
);
}
public deleteallService(): Observable<any> {  
  var token = this.getUser().token; 
const  headers = new  HttpHeaders({
'Authorization' : 'Bearer ' + token

}); 
return this.http.get(this.deletallser  ,{headers} ).pipe(
  retry(1),
  catchError(this.handleError)
);
}
  //get
  public setTwoFactor(): Observable<any> {  
    var token = this.getUser().token; 
const  headers = new  HttpHeaders({
  'Authorization' : 'Bearer ' + token

}); 
  return this.http.get(this.setTwoFactorUrl, {headers} ).pipe(
    retry(1),
    catchError(this.handleError)
  );
}
public getWallet(): Observable<any> {  
  var token = this.getUser().token; 
const  headers = new  HttpHeaders({
'Authorization' : 'Bearer ' + token

}); 
return this.http.get(this.walletUrl, {headers} ).pipe(
  retry(1),
  catchError(this.handleError)
);
}
public getWallethistory(id): Observable<any> {  
  var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
  'Authorization' : 'Bearer ' + token
  
  }); 
return this.http.get(this.wallethistoryUrl +id ,{headers} ).pipe(
  retry(1),
  catchError(this.handleError)
);
}
  public getFaq() {
    return this.http.get(this.faqUrl)
  }
  public getCCategory() {
    return this.http.get(this.categoryUrl)
  }
  public getsub(id){
    return this.http.get(this.subcategoryUrl +id)
  }
  public getWordPress(){
    return this.http.get(this.wordpressUrl )
  }
public getSlider(){
  return this.http.get(this.sliderUrl)
}
public getContact(){
  return this.http.get(this.settingUrl)
}
public getMyOffer(){
  var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
    'Authorization' : 'Bearer ' + token

}); 
  return this.http.get(this.myOfferUrl,{headers})
}
public getMyCart(){
  var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
    'Authorization' : 'Bearer ' + token

}); 
  return this.http.get(this.myCartUrl,{headers})
}
public getMyProfile(id){
  var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
    'Authorization' : 'Bearer ' + token

}); 
console.log(token)
  return this.http.get(this.myProfile +id ,{headers})
}
public getOffer(id){
  var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
    'Authorization' : 'Bearer ' + token

}); 
  return this.http.get(this.offerById + id ,{headers} )
}
public checkoutMethod(ip){

  var token = this.getUser().token; 
  const  headers = new  HttpHeaders({
    'Authorization' : ' +Bearer ' + token

}); 
return this.http.get(this.checkoutUrl + ip ,{headers} )
}
public getServices(id){
  return this.http.get(this.servicesUrl +id)
}
public getServicesbyname(id,name){
  return this.http.get(this.serviceUrl1 + "?subcategory_id=" + id + "&name=" +name)
}
public getServicesbynameen(name :any){
  return this.http.get(this.serviceUrl2 + name)
}
//save user
public  SaveUser(user : User) : boolean
{ 
    
    try {
    
    localStorage.setItem("user", JSON.stringify(user));
}
    catch (e) {
        return false;
    }
    return true;
}

public   getUser(): User {
     return JSON.parse(localStorage.getItem("user")) as User;
}

public   clearUser(): boolean{
    try {            
        localStorage.removeItem("user");
    }
    catch (e) {
        return false;
    }
    return true;
}

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof HttpErrorResponse) {
      // client-side error         
      errorMessage = `Error: ${error.error.error}`;
    } else {
      if (error.error.error == 'duplicated name ') {
        errorMessage = `Name Aleady Exit ... Enter Anther One `;

      } else {
        errorMessage = `Error: ${error.error.error}`;
      }
    }
    return throwError(errorMessage);
  }

}






