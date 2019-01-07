import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/content/about/about.component';
import { ExperienceComponent } from './components/content/experience/experience.component';
import { EducationComponent } from './components/content/education/education.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { IntroButtonHighlightDirective } from './directives/intro-button-highlight.directive';
import { BioComponent } from './components/content/bio/bio.component';
import { LanguagesComponent } from './components/content/languages/languages.component';
import { IntroImageComponent } from './components/intro/intro-image/intro-image.component';

import { ScrollSpyService } from './services/scroll-spy/scroll-spy.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ContentComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    IntroButtonHighlightDirective,
    BioComponent,
    LanguagesComponent,
    IntroImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgsRevealModule
  ],
  providers: [
    ScrollSpyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
