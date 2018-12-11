import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DetailComponent } from './home/detail/detail.component';
import { StartComponent } from './home/start/start.component';
import { EditComponent } from './home/edit/edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';


  const routes: Routes = [{
      path: '', redirectTo: '/signin', pathMatch: 'full'
    },
    {
      path: 'home', component: HomeComponent,
      children: [
      { path: 'signin', component: SigninComponent },
      { path: '', component: StartComponent },
      { path: 'new', component: EditComponent },
      { path: ':id', component: DetailComponent },
      { path: ':id/edit', component: EditComponent }
    ],
    canActivate:[AuthGuard]
    },
    {
      path: 'shoppinglist', component: ShoppingListComponent, canActivate:[AuthGuard]
    },
    {
        path: 'signin', component:SigninComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
