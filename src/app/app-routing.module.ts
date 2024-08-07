import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SessionGuard } from "@core/guards/session.guard"; // Corrected import
import { HomePageComponent } from "@modules/home/pages/home-page/home-page.component";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '', //localhost:4200/
        component: HomePageComponent,
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        canActivate: [SessionGuard] // Corrected usage
    },
    {
        path: '**',
        redirectTo: '/tracks'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
