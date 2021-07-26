import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDisplayComponent } from './main/main-display/main-display.component';
import { E404Component } from './misc/e404/e404.component';

const routes: Routes = [
  {path: '', redirectTo: '/main/main-display', pathMatch: 'full'},
  {path: 'main/main-display', component: MainDisplayComponent},
  {path: '**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
