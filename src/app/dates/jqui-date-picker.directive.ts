/// <reference types="jquery" />
/// <reference types="jqueryui" />
import { Directive, AfterViewChecked, ElementRef, PLATFORM_ID, Inject, EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-ui/ui/widgets/datepicker';

@Directive({
  selector: 'input[ngModel][jquiDatePicker]'
})
export class JquiDatePickerDirective implements AfterViewChecked {
  
  @Output()
  ngModelChange = new EventEmitter();

  constructor(private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewChecked() {
    if (isPlatformServer(this.platformId))
      return;

    $(this.el.nativeElement).datepicker({
      onSelect: (val) => this.ngModelChange.emit(val)
    });
  }
}