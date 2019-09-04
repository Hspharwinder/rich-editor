import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { QuillModule } from 'ngx-quill'
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
    // QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
