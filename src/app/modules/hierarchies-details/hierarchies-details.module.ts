import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubordinatesReducer } from 'src/app/store/reducers/subordinates.reducers';
import { SubordinatesEffect } from 'src/app/store/subordinates/subordinates.effect';
import { HierarchiesDetailsDataComponent } from './components/hierarchies-details-data/hierarchies-details-data.component';
import { HierarchiesDetailsStatsComponent } from './components/hierarchies-details-stats/hierarchies-details-stats.component';
import { HierarchiesDetailsComponent } from './hierarchies-details.component';
import { hierarchiesDetailsRoutes } from './hierarchies-details.routing';
import { SubordinatesService } from './services/subordinates.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        HierarchiesDetailsComponent,
        HierarchiesDetailsStatsComponent,
        HierarchiesDetailsDataComponent
    ],
    imports: [
        RouterModule.forChild(hierarchiesDetailsRoutes), 
        EffectsModule.forFeature([
            SubordinatesEffect
        ]),
        StoreModule.forFeature('Subordinates', SubordinatesReducer),          
        SharedModule
    ],
    providers: [
        SubordinatesService
    ]
})
export class HierarchiesDetailsModule {}
