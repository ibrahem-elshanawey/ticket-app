import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApexChartComponent } from './components/chart/chart.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { HomeComponent } from './pages/home-rtl/home.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { HomeLtrComponent } from './pages/home-ltr/home-ltr.component';
import { UsersService } from './services/user.services';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    ApexChartComponent,
    HeaderComponent,
    TicketCardComponent,
    HomeComponent,
    FilterComponent,
    TableComponent,
    HomeLtrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    QRCodeModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    TooltipModule,
    TableModule,
    ButtonModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
