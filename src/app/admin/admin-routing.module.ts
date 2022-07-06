import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { CreateTvShowComponent } from './createtvshow/createtvshow.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [ 
  { path: 'showdetail', component: CreateTvShowComponent },
  { path: 'showlist', component: ShowListComponent},
  { path: 'tvshow', component: TvshowDetailComponent}
];

// const routes: Routes = [
//   {
//       path: 'admin', component: AdminComponent,
//       children: [
//         { path: 'showdetail', component: CreateTvShowComponent },
//         { path: 'showlist', component: ShowListComponent},
//         { path: 'tvshow', component: TvshowDetailComponent}
//       ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
