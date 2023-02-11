import { Component, AfterViewInit } from '@angular/core';
import { applyCount } from '../shared/utilis/count';

declare const $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('#menu1').circleMenu({
      direction: 'down',
      position: {
          x: 'left',
          y: 'top'
      }
    });

    applyCount();
  } 

}
