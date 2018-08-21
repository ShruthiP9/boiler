import { RouterModule } from '@angular/router';
import { ModModule } from './mod/mod.module';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'app';
  btnClick= function () {
    this.router.navigateByUrl('/shru');
};
}
