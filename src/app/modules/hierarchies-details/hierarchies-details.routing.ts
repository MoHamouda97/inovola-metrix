import { Route } from '@angular/router';
import { HierarchiesDetailsComponent } from './hierarchies-details.component';
import { SubordinatesResolver } from './resolvers/subordinates.resolver';

export const hierarchiesDetailsRoutes: Route[] = [
    {
        path: '',
        component: HierarchiesDetailsComponent,
        resolve: {
            subordinates: SubordinatesResolver
        }
    }
];
