import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true
  }),
  LoginModule
  ],
  declarations: [],
  exports: [RouterModule],
  entryComponents:[]
})

export class RoutesModule { }
