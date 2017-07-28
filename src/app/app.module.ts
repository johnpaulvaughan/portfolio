import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {ScrollToModule} from 'ng2-scroll-to';

import { ActiveStateService } from './services/active-state.service';
import { ProjectService } from './services/project.service';

import { AppComponent } from './app.component';
import { LogoBurgerComponent } from './components/logo-burger/logo-burger.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuBackButtonComponent } from './components/menu-back-button/menu-back-button.component';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { PortfolioGridItemComponent } from './components/portfolio-grid-item/portfolio-grid-item.component';
import { ProjectMastheadComponent } from './components/project-masthead/project-masthead.component';
import { ProjectNittyGrittyComponent } from './components/project-nitty-gritty/project-nitty-gritty.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { ProjectParallaxImageComponent } from './components/project-parallax-image/project-parallax-image.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './containers/about/about.component';
import { LandingComponent } from './containers/landing/landing.component';
import { ProjectDetailComponent } from './containers/project-detail/project-detail.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioGridStubComponent } from './components/portfolio-grid-stub/portfolio-grid-stub.component';
import { ContactComponent } from './containers/contact/contact.component';

//define router navigation
const appRoutes: Routes = [
  { path: 'hello', component: LandingComponent, data: { name: 'hello', menuBackButton: false } },
  { path: 'about', component: AboutComponent, data: { name: 'about', menuBackButton: false } },
  { path: 'work', component: ProjectsComponent, data: { name: 'work', menuBackButton: false } },
  { path: 'contact', component: ContactComponent, data: { name: 'contact', menuBackButton: false } },
  { path: 'project/:id',  component: ProjectDetailComponent, data: { name: 'project', menuBackButton: true } },
  { path: '',   redirectTo: 'hello', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    LogoBurgerComponent,
    MenuComponent,
    MenuBackButtonComponent,
    PortfolioGridComponent,
    PortfolioGridItemComponent,
    ProjectMastheadComponent,
    ProjectNittyGrittyComponent,
    ProjectOverviewComponent,
    ProjectParallaxImageComponent,
    WelcomeComponent,
    AboutComponent,
    LandingComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    FooterComponent,
    PortfolioGridStubComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    ScrollToModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProjectService,ActiveStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
