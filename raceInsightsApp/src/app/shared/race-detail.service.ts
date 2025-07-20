import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RaceDetail } from './race-detail.model';
import { NgForm } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})

export class RaceDetailService {

  url: string = environment.apiBaseUrl + '/RaceDetail'
  list: RaceDetail[] = [];
  formData: RaceDetail = new RaceDetail()
  formSubmitted: boolean = false;

  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as RaceDetail[]
        },
        error: err => { console.log(err) }
      })
  }
   postRaceDetail() {
    return this.http.post(this.url, this.formData)
  }

  putRaceDetail() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData)
  }


  deleteRaceDetail(id: number) {
    return this.http.delete(this.url + '/' + id)
  }


  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new RaceDetail()
    this.formSubmitted = false
  }
}