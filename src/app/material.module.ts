import { NgModule } from '@angular/core';
import {
	MatTableModule,
	MatPaginatorModule,
	MatInputModule,
	MatFormFieldModule,
	MatCardModule,
	MatSortModule,
	MatDialogModule,
	MatButtonModule,
	MatToolbarModule,
	MatSlideToggleModule
} from '@angular/material';


@NgModule({
	exports: [
		MatTableModule,
		MatPaginatorModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatSortModule,
		MatDialogModule,
		MatButtonModule,
		MatToolbarModule,
		MatSlideToggleModule
	],
})
export class MaterialModule { }
