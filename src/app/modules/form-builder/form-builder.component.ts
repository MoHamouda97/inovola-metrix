import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('#question-box').hide();
    $('#addSection-box').hide();
    $('#addsubSection-box').hide();
    $('#title-dis-box').hide();
    $("#addImage-box").hide();
    $("#bannerImage").hide();
    $("#addVideo-box").hide();
  }
}
