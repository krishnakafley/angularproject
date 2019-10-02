import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Observable } from 'rxjs';
import { state } from 'src/app/model/State';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private data : DataserviceService) { }

  year : string;
  states : state[] = [];
  
  
  ngOnInit() {
  }

  showUSPopulation(){
    this.data.showUSData(this.year).subscribe(
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

  // phone : string = "555-555-5555";
  // email : string = "data@statesdept.gov";
  // address : string = "1 data ave, Anywhere, US 12345";

}
