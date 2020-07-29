import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './pages/display/display.component';
import { EditComponent } from './pages/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './stateModifier/bookmark.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialModule } from './components/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EditComponent,
    MainNavComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({ bookmarks: bookmarkReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
