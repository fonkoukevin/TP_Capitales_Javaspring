import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ProjetComponent } from './projet/projet/projet.component';
import { AproposComponent } from './apropos/apropos/apropos.component';
import { ContactComponent } from './contact/contact/contact.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found/page-not-found.component';

export const routes: Routes = [

    {path: "accueil",component: AccueilComponent},
    {path: "projet",component: ProjetComponent},
    {path: "apropos",component: AproposComponent},
    {path: "contact",component: ContactComponent},
    {path: "", redirectTo: "accueil", pathMatch:"full"},
    {path: "**",component: PageNotFoundComponent}

];
