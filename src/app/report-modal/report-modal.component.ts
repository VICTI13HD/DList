import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent {
  @Input() guild: any;
  @Output() report = new EventEmitter();
  @ViewChild('reason') reason: ElementRef;

  canSubmit = false;

  resolved(captchaResponse: string) {
    this.canSubmit = true;
    
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  emitReport() {    
    this.report.emit(this.reason.nativeElement.value);
  }
}
