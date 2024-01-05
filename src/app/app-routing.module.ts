import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChiledComponent } from './components/chiled/chiled.component';

const routes: Routes = [
  {
    path: '',
    component : ParentComponent
  },
  {
    path: 'chiled',
    component : ChiledComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
