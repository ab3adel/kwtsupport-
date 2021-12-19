import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { HomepageTwoComponent } from './components/pages/homepage-two/homepage-two.component';
import { HomepageThreeComponent } from './components/pages/homepage-three/homepage-three.component';
import { HomepageFourComponent } from './components/pages/homepage-four/homepage-four.component';
import { HomepageFiveComponent } from './components/pages/homepage-five/homepage-five.component';
import { HomepageSixComponent } from './components/pages/homepage-six/homepage-six.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { TeampageOneComponent } from './components/pages/teampage-one/teampage-one.component';
import { TeampageTwoComponent } from './components/pages/teampage-two/teampage-two.component';
import { ServicespageOneComponent } from './components/pages/servicespage-one/servicespage-one.component';
import { ServicespageTwoComponent } from './components/pages/servicespage-two/servicespage-two.component';
import { ServicespageThreeComponent } from './components/pages/servicespage-three/servicespage-three.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import {PricingComponent} from './components/common/pricing/pricing.component'
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
import { PortfolioNoSpacePageComponent } from './components/pages/portfolio-no-space-page/portfolio-no-space-page.component';
import { PortfolioThreeColumnsPageComponent } from './components/pages/portfolio-three-columns-page/portfolio-three-columns-page.component';
import { PortfolioTwoColumnsPageComponent } from './components/pages/portfolio-two-columns-page/portfolio-two-columns-page.component';
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
import { SeoAnalysisComponent } from './components/common/Register/seo-analysis.component';
const routes: Routes = [

    {path: '', component: HomepageOneComponent},
    {path: 'programservice', component: BlogSliderComponent},
    {path: 'register', component: SeoAnalysisComponent},
    {path: 'home-two', component: HomepageTwoComponent},
    {path: 'home-three', component: HomepageThreeComponent},
    {path: 'home-four', component: HomepageFourComponent},
    {path: 'home-five', component: HomepageFiveComponent},
    {path: 'home-six', component: HomepageSixComponent},
    {path: 'home-seven', component: HomepageSevenComponent},
    {path: 'myProfile', component: AboutPageOneComponent},
    {path: 'about-us-2', component: AboutPageTwoComponent},
    {path: 'twofactor', component: TeampageOneComponent},
    {path: 'wallet', component: TeampageTwoComponent},
    {path: 'servicedet', component: ServicespageOneComponent},
    {path: 'services-2', component: ServicespageTwoComponent},
    {path: 'category', component: ServicespageThreeComponent},
    {path: 'single-services', component: ServicesDetailsPageComponent},
    {path: 'how', component: PricingPageComponent},
    {path: 'verifyEmail', component: PricingComponent},
    {path: 'SecurityAwareness', component: GalleryPageComponent},
    {path: 'services', component: ProductsListPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'offer', component: ProductsDetailsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'error-404', component: ErrorPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-of-service', component: TermsOfServicePageComponent},
    {path: 'scuccess', component: PortfolioTwoColumnsPageComponent },
    {path: 'failed', component: PortfolioThreeColumnsPageComponent},
    {path: 'portfolio-3', component: PortfolioNoSpacePageComponent},
    {path: 'single-portfolio', component: PortfolioDetailsPageComponent},
    {path: 'login', component: BlogGridTwoInRowPageComponent},
    {path: 'myoffer', component: BlogGridThreeInRowPageComponent},
    {path: 'wordpress1', component: BlogGridFullWidthPageComponent},
    {path: 'worddet', component: BlogRightSidebarPageComponent},
    {path: 'purches', component: BlogLeftSidebarPageComponent},
    {path: 'subcategory', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }