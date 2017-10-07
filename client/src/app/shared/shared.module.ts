import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule

  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
