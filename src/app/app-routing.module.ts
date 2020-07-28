import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './pages/display/display.component';
import { EditComponent } from './pages/edit/edit.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [{ path: '**', component: MainNavComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
