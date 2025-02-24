import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { TopHeaderComponent } from './top-header/top-header.component';
// import { TopMenuComponent } from './header/top-menu/top-menu.component';
// import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { containerComponent } from './container/container.component';
// import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
// import { ProductComponent } from './container/product-list/product/product.component';
// import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // TopHeaderComponent,
    // TopMenuComponent,
    // MainMenuComponent,
    containerComponent,
    // SearchComponent,
    ProductListComponent,
    // ProductComponent,
    // FilterComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Add your routes here
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
