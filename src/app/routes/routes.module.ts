import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true
  }),
  ],
  declarations: [
    LoginComponent
  ],
  exports: [RouterModule],
  entryComponents:[]
})

export class RoutesModule { }
