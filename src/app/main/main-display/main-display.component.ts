import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Main } from '../main.class';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  rates!: Main;
  customerid: number =60224;
  carrierid: number =107021;
  originstate: string ='PA';
  destinationstate: string ='PA';
  showMainForm: boolean = false;
  userWeight: number=0;
  userMileage: number=0;

  constructor(
    private mainsvc: MainService
  ) { }


  getRates(): void{
    this.mainsvc.getRates(this.customerid, this.carrierid, this.originstate, this.destinationstate).subscribe(
      res =>{console.debug("AvgRates:", res);
      this.rates = res[0];
      this.showMainForm = true;
      },
      err => {console.error(err);}
    )
  }


  ngOnInit(): void {
  }

}
