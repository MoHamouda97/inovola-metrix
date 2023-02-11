import { Route } from "@angular/router";
import { AuthGuard } from "./core/auth/guards/auth-guard";
import { LoginGuard } from "./core/auth/guards/login-guard";
import { LayoutComponent } from "./layout/layout.component";
import { SignInComponent } from "./modules/auth/sign-in/sign-in.component";

export const appRoutes: Route[] = [
    // Redirect empty path to 'sign-in'
    {path: '', pathMatch : 'full', redirectTo: 'sign-in'}, 
    
    {
        path: '',
        component: SignInComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: 'sign-in',
                loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
            }
        ]
    },

    // Main app routs
    {
        path: 'app',
        component: LayoutComponent,
        children: [
            // Form builder route
            {
                path: 'form-builder',
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/form-builder/form-builder.module').then(m => m.FormBuilderModule),
                data: {
                    urls: [
                        {title: 'Form Builder', current: true}
                    ]
                }
            },
            
            // Hierarchies details route
            {
                path: 'hierarchies-details',
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/hierarchies-details/hierarchies-details.module').then(m => m.HierarchiesDetailsModule),
                data: {
                    urls: [
                        {title: 'Hierarchies list'},
                        {title: 'Hierarchy name', current: true}
                    ]
                }                
            }
        ]
    }
] 