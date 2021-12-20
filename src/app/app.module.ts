import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NgModuleFactory} from '@angular/core';
import {ProgressBarModule} from "angular-progress-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { HomepageTwoComponent } from './components/pages/homepage-two/homepage-two.component';
import { TeamStyleOneComponent } from './components/common/team-style-one/team-style-one.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HomeoneServicesComponent } from './components/pages/homepage-one/homeone-services/homeone-services.component';
import { WhatWeDoComponent } from './components/common/what-we-do/what-we-do.component';
import { HomeoneAboutComponent } from './components/pages/homepage-one/homeone-about/homeone-about.component';
import { HomeoneMainBannerComponent } from './components/pages/homepage-one/homeone-main-banner/homeone-main-banner.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

import { ProjectStartComponent } from './components/common/project-start/project-start.component';
import { TeamStyleTwoComponent } from './components/common/team-style-two/team-style-two.component';
import { HometwoPortfolioComponent } from './components/pages/homepage-two/hometwo-portfolio/hometwo-portfolio.component';
import { HometwoServicesComponent } from './components/pages/homepage-two/hometwo-services/hometwo-services.component';
import { HometwoAboutComponent } from './components/pages/homepage-two/hometwo-about/hometwo-about.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { HometwoMainBannerComponent } from './components/pages/homepage-two/hometwo-main-banner/hometwo-main-banner.component';
import { HomepageThreeComponent } from './components/pages/homepage-three/homepage-three.component';
import { HomepageFourComponent } from './components/pages/homepage-four/homepage-four.component';
import { HomepageFiveComponent } from './components/pages/homepage-five/homepage-five.component';
import { HomepageSixComponent } from './components/pages/homepage-six/homepage-six.component';
import { FeaturedServicesComponent } from './components/common/featured-services/featured-services.component';
import { HomesixAboutComponent } from './components/pages/homepage-six/homesix-about/homesix-about.component';
import { HomethreeAboutComponent } from './components/pages/homepage-three/homethree-about/homethree-about.component';
import { HomethreeServicesComponent } from './components/pages/homepage-three/homethree-services/homethree-services.component';
import { SeoAnalysisComponent } from './components/common/Register/seo-analysis.component';
import { HomethreePortfolioComponent } from './components/pages/homepage-three/homethree-portfolio/homethree-portfolio.component';
import { HowItsWorkComponent } from './components/common/how-its-work/how-its-work.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { HomethreeMainBannerComponent } from './components/pages/homepage-three/homethree-main-banner/homethree-main-banner.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { HomefourServicesComponent } from './components/pages/homepage-four/homefour-services/homefour-services.component';
import { HomefourAboutComponent } from './components/pages/homepage-four/homefour-about/homefour-about.component';
import { HomefourMainBannerComponent } from './components/pages/homepage-four/homefour-main-banner/homefour-main-banner.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { HomefiveMainBannerComponent } from './components/pages/homepage-five/homefive-main-banner/homefive-main-banner.component';
import { HomefiveFeaturedServicesComponent } from './components/pages/homepage-five/homefive-featured-services/homefive-featured-services.component';
import { HomefiveAboutComponent } from './components/pages/homepage-five/homefive-about/homefive-about.component';
import { HomefiveServicesComponent } from './components/pages/homepage-five/homefive-services/homefive-services.component';
import { HomefivePortfolioComponent } from './components/pages/homepage-five/homefive-portfolio/homefive-portfolio.component';
import { HomesixMainBannerComponent } from './components/pages/homepage-six/homesix-main-banner/homesix-main-banner.component';
import { HomesixFeaturedServicesComponent } from './components/pages/homepage-six/homesix-featured-services/homesix-featured-services.component';
import { HomesixServicesComponent } from './components/pages/homepage-six/homesix-services/homesix-services.component';
import { HomesixPortfolioComponent } from './components/pages/homepage-six/homesix-portfolio/homesix-portfolio.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { HistoryComponent } from './components/common/history/history.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { TeampageOneComponent } from './components/pages/teampage-one/teampage-one.component';
import { TeampageTwoComponent } from './components/pages/teampage-two/teampage-two.component';
import { ServicespageOneComponent } from './components/pages/servicespage-one/servicespage-one.component';
import { ServicespageTwoComponent } from './components/pages/servicespage-two/servicespage-two.component';
import { ServicespageThreeComponent } from './components/pages/servicespage-three/servicespage-three.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { ProductsListPageComponent } from './components/pages/products-list-page/products-list-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsOfServicePageComponent } from './components/pages/terms-of-service-page/terms-of-service-page.component';
import { PortfolioTwoColumnsPageComponent } from './components/pages/portfolio-two-columns-page/portfolio-two-columns-page.component';
import { PortfolioThreeColumnsPageComponent } from './components/pages/portfolio-three-columns-page/portfolio-three-columns-page.component';
import { PortfolioNoSpacePageComponent } from './components/pages/portfolio-no-space-page/portfolio-no-space-page.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { BlogGridTwoInRowPageComponent } from './components/pages/blog-grid-two-in-row-page/blog-grid-two-in-row-page.component';
import { BlogGridThreeInRowPageComponent } from './components/pages/blog-grid-three-in-row-page/blog-grid-three-in-row-page.component';
import { BlogGridFullWidthPageComponent } from './components/pages/blog-grid-full-width-page/blog-grid-full-width-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomepageSevenComponent } from './components/pages/homepage-seven/homepage-seven.component';
import { BlogSliderComponent } from './components/common/blog-slider/blog-slider.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomesevenAboutComponent } from './components/pages/homepage-seven/homeseven-about/homeseven-about.component';
import { HomesevenMainBannerComponent } from './components/pages/homepage-seven/homeseven-main-banner/homeseven-main-banner.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
//new
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';
import { PurshasedServiceDetailsComponent } from './components/pages/purshased-service-details/purshased-service-details.component';
import { WebsitesAdvetiseDetailsComponent } from './components/pages/websites-advetise-details/websites-advetise-details.component';


@NgModule({
  exports: [




  ],
  declarations: [
    AppComponent,
    FooterComponent,
    SubscribeComponent,
    HomepageOneComponent,
    PreloaderComponent,
    PricingComponent,
    HomepageTwoComponent,
    TeamStyleOneComponent,
    PartnerComponent,
    HomeoneServicesComponent,
    WhatWeDoComponent,
    HomeoneAboutComponent,
    HomeoneMainBannerComponent,
    NavbarComponent,
    ProjectStartComponent,
    TeamStyleTwoComponent,
    HometwoPortfolioComponent,
    HometwoServicesComponent,
    HometwoAboutComponent,
    BoxesComponent,
    HometwoMainBannerComponent,
    HomepageThreeComponent,
    HomepageFourComponent,
    HomepageFiveComponent,
    HomepageSixComponent,
    FeaturedServicesComponent,
    HomesixAboutComponent,
    HomethreeAboutComponent,
    HomethreeServicesComponent,
    SeoAnalysisComponent,
    HomethreePortfolioComponent,
    HowItsWorkComponent,
    BlogComponent,
    HomethreeMainBannerComponent,
    TestimonialsComponent,
    HomefourServicesComponent,
    HomefourAboutComponent,
    HomefourMainBannerComponent,
    FeedbackComponent,
    HomefiveMainBannerComponent,
    HomefiveFeaturedServicesComponent,
    HomefiveAboutComponent,
    HomefiveServicesComponent,
    HomefivePortfolioComponent,
    HomesixMainBannerComponent,
    HomesixFeaturedServicesComponent,
    HomesixServicesComponent,
    HomesixPortfolioComponent,
    AboutPageOneComponent,
    HistoryComponent,
    AboutPageTwoComponent,
    TeampageOneComponent,
    TeampageTwoComponent,
    ServicespageOneComponent,
    ServicespageTwoComponent,
    ServicespageThreeComponent,
    ServicesDetailsPageComponent,
    PricingPageComponent,
    GalleryPageComponent,
    ProductsListPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProductsDetailsPageComponent,
    FaqPageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent,
    ProfileAuthenticationPageComponent,
    PrivacyPolicyPageComponent,
    TermsOfServicePageComponent,
    PortfolioTwoColumnsPageComponent,
    PortfolioThreeColumnsPageComponent,
    PortfolioNoSpacePageComponent,
    PortfolioDetailsPageComponent,
    BlogGridTwoInRowPageComponent,
    BlogGridThreeInRowPageComponent,
    BlogGridFullWidthPageComponent,
    BlogRightSidebarPageComponent,
    BlogLeftSidebarPageComponent,
    BlogDetailsPageComponent,
    ContactPageComponent,
    HomepageSevenComponent,
    BlogSliderComponent,
    AboutComponent,
    HomesevenAboutComponent,
    HomesevenMainBannerComponent,
    PurshasedServiceDetailsComponent,
    WebsitesAdvetiseDetailsComponent








  ],
  imports: [
    LeafletModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule ,
    ProgressBarModule,
    NgSelectModule,
    NgxDocViewerModule,
    // ngx-translate and the loader module
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      enableHtml: true
    }),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
