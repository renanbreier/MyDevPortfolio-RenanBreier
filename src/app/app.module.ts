import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigcardComponent } from './components/bigcard/bigcard.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/atom/button/button.component';
import { ContactComponent } from './components/contact/contact.component';
import { InputComponent } from './components/atom/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BackToTopDirective } from './directive/back-to-top.directive';
import { ExperienceComponent } from "./components/experience/experience.component";
import { FormationsComponent } from './components/formations/formations.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigcardComponent,
    HomeComponent,
    AboutComponent,
    ButtonComponent,
    ContactComponent,
    InputComponent,
    BackToTopDirective,
    FormationsComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    ExperienceComponent
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
