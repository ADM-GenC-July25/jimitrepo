import { Routes } from '@angular/router';
import { BioComponent } from './bio/bio';
import { HomeComponent } from './home/home';
import { BioDetails } from './bio-details/bio-details';
import { BioCreate } from './bio-create/bio-create';
import { LoginComponent } from './login/login';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'bio', component: BioComponent},
    {path: 'bio/:id', component: BioDetails},
    {path: 'bio-create', component: BioCreate, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent}
];
