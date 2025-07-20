import { Component } from '@angular/core';
import { RaceDetailService } from '../../shared/race-detail.service';
import { NgForm } from "@angular/forms";
import { RaceDetail } from '../../shared/race-detail.model';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-race-detail-form',
  imports: [],
  templateUrl: './race-detail-form.component.html',
  styles: ``
})

export class RaceDetailFormComponent { //, private toastr: ToastrService) {  
  constructor(public service: RaceDetailService) {}  // , private toastr: ToastrService) {

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }

  }

  insertRecord(form: NgForm) {
    this.service.postRaceDetail()
      .subscribe({
        next: res => {
          this.service.list = res as RaceDetail[]
          this.service.resetForm(form)
          //this.toastr.success('Inserted successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putRaceDetail()
      .subscribe({
        next: res => {
          this.service.list = res as RaceDetail[]
          this.service.resetForm(form)
          //this.toastr.info('Updated successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
   }

}