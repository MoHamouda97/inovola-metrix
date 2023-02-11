import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { formBuilderRoutes } from './form-builder.routing';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
    declarations: [
        FormBuilderComponent
    ],
    imports: [
        RouterModule.forChild(formBuilderRoutes),  
        SharedModule
    ],
    providers: [],
})
export class FormBuilderModule {}
