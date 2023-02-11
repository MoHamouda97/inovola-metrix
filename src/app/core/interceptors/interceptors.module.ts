import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageHttpInterceptor } from './message-interceptor.service';
import { TokenHttpInterceptor } from './token-interceptor.service';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MessageHttpInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenHttpInterceptor,
            multi: true
        },
    ]
})

export class InterceptorsModule {}