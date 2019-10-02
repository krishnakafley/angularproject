import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Observable } from 'rxjs';
import { state } from 'src/app/model/State';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  constructor(private data : DataserviceService) { }

  ngOnInit() {
  }


  year : string;
  name : string;
  states : state[] = [];

 allStates : Observable<state[]> = this.data.showData(this.year);


  showAllData(){
    this.data.showData(this.year).subscribe(
      (response) => {
       // console.log(response);
        this.states = (response["data"]);
        console.log(this.states);
       // console.log(this.states[0]);
      },
      (response) => {
        console.log("Failed!")
      }
    );
  }
}
