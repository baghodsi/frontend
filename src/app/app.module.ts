import '../polyfills';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './product-list/material-module';
// import {DialogOverviewExampleDialog} from './product-list/product-list.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDtlComponent } from './product-dtl/product-dtl.component';
import { TitleListComponent } from './title-list/title-list.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
  ],
  entryComponents: [MyDialogComponent],
  declarations: [
    AppComponent,
    HeroesComponent,
    TopBarComponent,
    SearchComponent,
    ProductListComponent,
    ProductDtlComponent,
    TitleListComponent,
    MyDialogComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }