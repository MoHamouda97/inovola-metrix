import { Router } from '@angular/router';
import { Token } from 'src/app/core/token/token';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout() {
    Token.setToken('');
    this.router.navigate(['sign-in'])
  }

}
