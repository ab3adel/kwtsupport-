import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/model/constants';
let langId
@Component({
  selector: 'app-websites-advetise-details',
  templateUrl: './websites-advetise-details.component.html',
  styleUrls: ['./websites-advetise-details.component.scss']
})
export class WebsitesAdvetiseDetailsComponent implements OnInit {
    service;
    ser;
    chooseprice;
    clicked:boolean[] = [];
    lang;
    array:boolean=false
    finished:boolean=false;
    original_type;
    id_service;
    linknull;
    quantitynull
    commentsnull;
    usernamesnull;
    answer_numbernull;
    postsnull;
    service_quantity_price;
    unit_price;
    min;
    max;
    services;
screenWidth:number;
    constructor(private translate: TranslateService,private toastrService: ToastrService ,private router:Router,
        private service1:Constants) {
        this.translateMethod()
           this.services={
                    advertisevideo:  { en:'   Video Advertisement Recording & Montage',ar:"  تصميم ومونتاج فيديو اعلانات"
                            ,src:"../../../../assets/img/webservices/montageadvertisments.png",
                        descAr:["مدة التصوير 60 دقيقة","تصوير فيديو مدته 60 ثانية"],
                        descEn:["Export a 60 seconds’ video","Recording for 60 minutes"],
                        price:150},
                    store: {en:' E-commerce Stores Development',ar:"  تطوير المتاجر الالكترونية  "
                    ,src:"../../../../assets/img/webservices/e-store.png",
                            descAr:["مبني على نظام WordPress","لوحة تحكم بعدة لغات","واجهة مستخدم متجاوبة تعمل على الهاتف والكومبيوتر بشكل كامل,لغة واحدة"],
                        descEn:["Yearly hosting for website data"," Register one domain with .com TLD yearly","Purchase two business E-mails"]
                        ,price:300},
                    web:{ en: 'Webhosting and Domain Registration ',ar:" استضافة وحجز اسم موقع "
                              ,src:"../../../../assets/img/webservices/domain.png",
                            descAr:[" استضافة سنوية لبيانات الموقع",   "حجز اسم واحد بنطاق com سنويا" ,"اضافة بريد الكتروني تجاري 2"]
                            ,descEn:["Yearly hosting for website data"," Register one domain with .com TLD yearly","Purchase two business E-mails"],
                            price:90},
                    intrologo: {en:'Logo Intro Graphic Design',ar:"تصميم انترو لوغو غرافيك"
                                ,src:"../../../../assets/img/webservices/intrologo.png"
                            ,descAr:["فيديو لمدة 3-9 ثواني"],descEn:["Video design, length between 3 – 9 seconds"],
                            price:35},
                    logo:{en:' logo Design',ar:"تصميم لوغو",src:"../../../../assets/img/webservices/logo.png",
                            price:120},
                    video:{ en:'Video Recording',ar:"تصوير فيديو",src:"../../../../assets/img/webservices/video.png",
                                descAr:["مدة التصوير 60 دقيقة"],descEn:["Recording for 60 minutes"],
                                price:100},
                    visualfull: {en:'Visual Identity Full-Design ',ar:" تصميم الهوية البصرية كاملة",src:"../../../../assets/img/webservices/fullvisual.png"
                            ,descAr:["تصميم شعار وانترو لوجو غرافيك","اختيار الخط الرسمي للهوية باللغة العربية والانجليزية مع تحديد ألوان الرسمية"
                                ,"تصاميم المطبوعات(كروت-أظرف بمقياس A4 ومراسلة-اوراق رسميةأكياس ورقيةوكرتونية-ملابس وهويات عمل-بنرات-اعلانات زجاجية وطرقية)"
                                ,"- تصميم وتوحيد االيقونات الرمزية وقوالب المنشورات الورقية وااللكتروني"],
                             descEn:[ "Logo intro graphic design"," Determine the official font & colors in both Arabic and English"
                             ,"Printed matter design:  cards, A4 envelops & mailings, official documents, paper & cardboard bags, clothes & ID, banners, glass & road Ads",
                            " Design and standardization of symbolic icons and templates for paper and electronic publications"]
                            ,price:280},
                    photoshotwhite:{ en:'Product Photoshoots with White Background  ',ar:" تصوير منتجات خلفية بيضاء",src:"../../../../assets/img/webservices/whitebackground.png"
                                    , price:1.500},
                    photoshotlife:{ en:'Life Style Products Photoshoots ',ar:" تصوير منتجات  لايف ستايل",src:"../../../../assets/img/webservices/lifestyle.png"
                                    , price:2.500},
                    instagram:{ar:"تصميم صور وفيديوهات لحساب انستغرام",en:"Instagram Account Photos & Videos Design",
                        src:"../../../../assets/img/webservices/instagram.png",descAr:["اشتراك شهري","30 صورة بوست","40 صورة ستوري","4 فيديوهات"]
                        ,descEn:["4 videos"," 30 story photos","30 post photos","Monthly subscription"],price:200},
                    visualhalf:{en:"Visual Identity Half-Design",ar:"تصميم نصف هوية بصرية",src:"../../../../assets/img/webservices/halfvisual.png"
                                ,descAr:["تصميم شعار","تصاميم المطبوعات ) كروت – أظرف بمقاس A4 و مراسلة - أوراق رسمية ("]
                                ,descEn:["logo design","Printed matter design: cards, A4 envelops & mailings, official documents"],
                                price:170},
                    motiongraphic:{en:"Video Motion Graphic Design",ar:"تصميم فيديوهات موشن غرافيك"
                            ,src:"../../../../assets/img/webservices/motiongraphic.png",descAr:["40-50 ثانية","تعليق صوتي بشري ","استخدام موسيقى ومؤثرات صوتية"]
                             ,descEn:["40-50 sec","Human voice over"," Use music or sound effects"]
                             ,price:150},
                   montage:{en:"Video Montage",ar:"مونتاج فيديو",src:"../../../../assets/img/webservices/montage.png"
                          ,descAr:["تصدير فيديو مدة 60 ثانية"],descEn:[" Export a 60 seconds’ video"],price:50},


         }

      let itemName = localStorage.getItem ("serviceDetailName")

      this.service=this.services[itemName]
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
  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }

}
