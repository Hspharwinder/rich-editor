# rich-editor


this.route.navigateByUrl('/dashboard/'+ id + projectName);

this.route.navaigate[('/dashboard/', id , projectName)];

1. npm install @syncfusion/ej2-angular-richtexteditor --save 
# app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

# app.component.html
<ejs-richtexteditor></ejs-richtexteditor>

# index.html

<link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" />



