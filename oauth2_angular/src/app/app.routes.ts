import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";

const redirectoToUrl = '';

const routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'auth', component: AuthComponent, pathMatch: 'full'},
    { path: '', redirectTo: "auth", pathMatch: 'full'},
    { path: 'authorized', redirectTo: "auth", pathMatch: 'full'},
    { path: 'login', redirectTo: redirectoToUrl, pathMatch: 'full'}
];

export default routes;

