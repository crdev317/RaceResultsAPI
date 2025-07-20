import { Component, OnInit  } from '@angular/core';
import { RaceDetail } from '../shared/race-detail.model';
import { RaceDetailService } from '../shared/race-detail.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styles: ``
})
export class RaceDetailsComponent implements OnInit {

  constructor(public service: RaceDetailService){ //, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: RaceDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deleteRaceDetail(id)
        .subscribe({
          next: res => {
            this.service.list = res as RaceDetail[]
            //this.toastr.error('Deleted successfully', 'Race Detail Register')
          },
          error: err => { console.log(err) }
        })
  }
}