import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterChipComponent } from './components/filter-chip/filter-chip.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './views/home/home.component';
import { FilterSelectionComponent } from './components/filter-selection/filter-selection.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { SpacexDetailComponent } from './components/spacex-detail/spacex-detail.component';
import { HomeService } from './services/home.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterChipComponent,
    FilterComponent,
    HomeComponent,
    FilterSelectionComponent,
    FilterSectionComponent,
    SpacexDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterChipComponent,
    FilterComponent,
    HomeComponent,
    FilterSelectionComponent
  ],
  providers: [HomeService]
})
export class HomeModule { }
