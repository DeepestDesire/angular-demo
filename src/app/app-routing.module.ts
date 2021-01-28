import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgPageComponent } from './svg-page/svg-page.component'
import { SiderPageComponent } from './sider-page/sider-page.component';

const routes: Routes = [
  { path: 'svg-page', component: SvgPageComponent },
  { path: 'sider-page', component: SiderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
