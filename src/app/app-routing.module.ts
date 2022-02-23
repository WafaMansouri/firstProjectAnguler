import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstCompListComponent } from "./first-comp-list/first-comp-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes: Routes = [ // tableau de toutes les routes de l'application
    { path: "exemple/:id", component: SingleFaceSnapComponent},
    { path: "exemple", component: FirstCompListComponent },
    { path: "", component: LandingPageComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes) // RouterModule est le module principale du router d'Angular qui permet d'ajouter du routing
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}