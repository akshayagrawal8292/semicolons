import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { PolicyWiseComponent } from './components/policy-wise/policy/policy-wise.component';
import { CompareComponent } from './components/policy-wise/compare/compare.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GuruUiService } from './services/guru-ui.service';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GuruAppComponent } from './components/guru-app/guru-app/guru-app.component';
import { ClaimListComponent } from './components/atlas/claim-list/claim-list.component';
import { ClaimOverviewComponent } from './components/atlas/claim-overview/claim-overview.component';
import { EmailComponent } from './components/atlas/email/email.component';
import {DialogModule} from '@angular/cdk/dialog';
import {MatDialogModule} from '@angular/material/dialog'
import { SubjectModelComponent } from './subject-model/subject-model.component';
import { PendingComponent } from './pending/pending.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    PolicyWiseComponent,
    CompareComponent,
    GuruAppComponent,
    ClaimListComponent,
    ClaimOverviewComponent,
    EmailComponent,
    SubjectModelComponent,
    PendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    RouterModule,
    FlexLayoutModule,
    DialogModule,
    MatDialogModule
  ],
  providers: [GuruUiService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
