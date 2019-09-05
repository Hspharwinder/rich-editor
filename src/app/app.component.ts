import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ngx-quill';  

  public value: string = ' <p>The RichTextEditor triggers events based on its actions. </p>'+
  '<p> The events can be used as an extension point to perform custom operations.</p>';

  public tools: object = {
    items: [
            'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
            'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
            'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
            'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
            'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    };
   

  onSubmit(form: NgForm): void {
    alert(form.value.name);
  }
}
