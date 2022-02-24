import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

export const routes = [
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