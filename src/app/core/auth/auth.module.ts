import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthService,
    ]
})

export class AuthModule {}