import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ManagerComponent } from './manager/manager.component';
import { DeveloperComponent } from './developer/developer.component';
import { DesignerComponent } from './designer/designer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    ManagerComponent,
    DeveloperComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
