//dependeencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';

// more specific routes should be placed above less specific routes
// define the pokemon route to use
const routes: Routes = [
{ path: 'pokemon-component', component: PokemonComponent},
{ path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
