import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

export const routes = [
    {
        path: '', component: HomePageComponent},
    {
        path: 'history',
        component: LayoutComponent,
        children:[

        ]
    },
    {
        path: '**', redirectTo:'home'
    }
];