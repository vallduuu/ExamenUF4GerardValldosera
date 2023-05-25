import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Infogerardvalldosera } from './infogerardvalldosera';
// import { IniciGerardValldosera} from './inici-gerard-valldosera';

const routes: Routes = [
  { path: '', redirectTo: 'inici', pathMatch: 'full' },
  // { path: 'inici', component: IniciGerardValldosera },
  // { path: 'info', component: Infogerardvalldosera },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
