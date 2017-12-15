import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { productGuardsService } from './products/product-guards.service';


import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFiliterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFiliterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate: [productGuardsService], component: ProductDetailComponent },
      {path: 'welcome', component: WelcomeComponent }, 
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [productGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
