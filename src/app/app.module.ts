import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { FooterComponent } from './components/template/footer/footer.component'; 
import { PedidoComponent } from './components/template/pedido/pedido.component';

import { FlexLayoutModule } from "@angular/flex-layout";

//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { PedidoDialogComponent } from './components/template/pedido/pedido-dialog/pedido-dialog.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PedidoFormComponent } from './components/template/pedido/pedido-form/pedido-form.component'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PedidoComponent,
    PedidoDialogComponent,
    PedidoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatBadgeModule, 
    MatDialogModule,
    MatButtonToggleModule,
    ScrollingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  providers: [{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
