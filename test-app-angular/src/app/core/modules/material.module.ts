import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule, MatDividerModule, MatTooltipModule, MatBadgeModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    exports: [
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatSelectModule,
        MatTabsModule,
        MatIconModule,
        MatDividerModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }