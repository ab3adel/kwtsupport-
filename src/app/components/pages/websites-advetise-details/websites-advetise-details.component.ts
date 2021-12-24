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
                    advertisevideo:  { en:'   design & montage advetising videos',ar:"  تصميم ومونتاج فيديو اعلانات"
                            ,src:"../../../../assets/img/myImage/00 (1).png",
                        descAr:["مدة التصوير 60 دقيقة","تصوير فيديو مدته 60 ثانية"],
                        descEn:["recording video duartion 60 min","recording for 60 sec"],
                        price:150},
                    store: {en:' hosting and reverse website domain',ar:" استضافة وحجز اسم موقع"
                            ,src:"../../../../assets/img/myImage/000.png",
                            descAr:["مبني على نظام WordPress","لوحة تحكم بعدة لغات","واجهة مستخدم متجاوبة تعمل على الهاتف والكومبيوتر بشكل كامل,لغة واحدة"],
                        descEn:["fully built on WordPres","UI responsive work perfectly on mobile and computer","panel control multi langauges"]
                        ,price:300},
                    web:{ en: 'hosting & revers website domain ',ar:" استضافة وحجز اسم موقع "
                                ,src:"../../../../assets/img/myImage/0 (2).png"
                            ,descAr:[" استضافة سنوية لبيانات الموقع",   "حجز اسم واحد بنطاق com سنويا" ,"اضافة بريد الكتروني تجاري 2"]
                            ,descEn:["hosting yearly for web data","revers one com domain","add tow commerce emails"],
                            price:90},
                    intrologo: {en:'Design intro logo graphic',ar:"تصميم انترو لوغو غرافيك"
                                ,src:"../../../../assets/img/myImage/y (1).png"
                            ,descAr:["فيديو لمدة 3-9 ثواني"],descEn:["video duration 3-9 sec"],
                            price:35},
                    logo:{en:' logo Design',ar:"تصميم لوغو",src:"../../../../assets/img/myImage/y (2).png",
                            price:120},
                    video:{ en:'video Design',ar:"تصميم فيديو",src:"../../../../assets/img/myImage/y (3).png",
                                descAr:["مدة التصوير 60 دقيقة"],descEn:["60 minutes video duration"],
                                price:100},
                    visualfull: {en:'full visual Identity Design',ar:" تصميم الهوية البصرية كاملة",src:"../../../../assets/img/myImage/32.png"
                            ,descAr:["تصميم شعار وانترو لوجو غرافيك","اختيار الخط الرسمي للهوية باللغة العربية والانجليزية مع تحديد ألوان الرسمية"
                                ,"تصاميم المطبوعات(كروت-أظرف بمقياس A4 ومراسلة-اوراق رسميةأكياس ورقيةوكرتونية-ملابس وهويات عمل-بنرات-اعلانات زجاجية وطرقية)"
                                ,"- تصميم وتوحيد االيقونات الرمزية وقوالب المنشورات الورقية وااللكتروني"],price:280},
                    photoshotwhite:{ en:'photoshoting white background products   ',ar:" تصوير منتجات خلفية بيضاء",src:"../../../../assets/img/myImage/5 (1).png"
                                    , price:1.500},
                    photoshotlife:{ en:'photoshoting life style products   ',ar:" تصوير منتجات  لايف ستايل",src:"../../../../assets/img/myImage/5 (1).png"
                                    , price:2.500},
                    instagram:{ar:"تصميم صور وفيديوهات لحساب انستغرام",en:"making videos & photos for insta account",
                        src:"../../../../assets/img/myImage/5 (1).png",descAr:["اشتراك شهري","30 صورة بوست","40 صورة ستوري","4 فيديوهات"]
                        ,descEn:["4 videos","40 story photos","30 post photos","monthly subscribe"],price:200},
                    visualhalf:{en:"Design half visual identity",ar:"تصميم نصف هوية بصرية",src:"../../../../assets/img/myImage/5 (1).png"
                                ,descAr:["تصميم شعار","تصاميم المطبوعات ) كروت – أظرف بمقاس A4 و مراسلة - أوراق رسمية ("]
                                ,descEn:["logo design","design copies (carts,A4 envelopses,official papers )"],
                                price:170},
                    motiongraphic:{en:"Design motion graphic video",ar:"تصميم فيديوهات موشن غرافيك"
                            ,src:"../../../../assets/img/myImage/5 (1).png",descAr:["40-50 ثانية","تعليق صوتي بشري ","استخدام موسيقى ومؤثرات صوتية"]
                             ,descEn:["40-50 sec","human voice commentar","using music and audio implications"]
                             ,price:150},
                   montage:{en:"video montage",ar:"مونتاج فيديو",src:"../../../../assets/img/myImage/5 (1).png"
                          ,descAr:["تصدير فيديو مدة 60 ثانية"],descEn:["exporting 60 sec video"],price:50},


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
