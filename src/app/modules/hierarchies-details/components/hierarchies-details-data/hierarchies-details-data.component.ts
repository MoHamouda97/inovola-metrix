import { ChangeDetectionStrategy, Component, AfterViewInit, Input } from '@angular/core';
import { applyScroll } from 'src/app/shared/utilis/scroll';
import { ISubordinates } from '../../interfaces/subordinates.interface';

@Component({
  selector: 'app-hierarchies-details-data',
  templateUrl: './hierarchies-details-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchiesDetailsDataComponent implements AfterViewInit {
  @Input('subordinates') subordinates: ISubordinates[] = [];

  ngAfterViewInit(): void {
    applyScroll();
  }

}
