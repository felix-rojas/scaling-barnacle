//dependeencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';

// more specific routes should be placed above less specific routes
// define the pokemon route to use
const routes: Routes = [
  {path: 'pokemon-component', component: PokemonComponent },
  {path: '', redirectTo: '/pokemon-component', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
