import { applyCount } from 'src/app/shared/utilis/count';
import { ChangeDetectionStrategy, Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ISubordinates } from './interfaces/subordinates.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllSubordinates } from 'src/app/store/subordinates/subordinates.selectors';

declare function kpiChart(): void;
declare function linkedObjectChart(): void;

@Component({
  selector: 'app-hierarchies-details',
  templateUrl: './hierarchies-details.component.html',
  styleUrls: ['./hierarchies-details.component.css']
})
export class HierarchiesDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  subordinates: ISubordinates[] = [];
  unsubscribeAll: Subject<any> = new Subject<any>();
  
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.pipe(
      takeUntil(this.unsubscribeAll),
      select(selectAllSubordinates)
      ).subscribe(
        (data: any) => {
          this.subordinates = data;
        }
      )
  }   

  ngAfterViewInit(): void {
    applyCount();
    kpiChart();
    linkedObjectChart();
  }
  
  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }  

}
