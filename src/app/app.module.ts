import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveAccountsComponent } from './active-accounts/active-accounts.component';
import { InactiveAccountsComponent } from './inactive-accounts/inactive-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveAccountsComponent,
    InactiveAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
