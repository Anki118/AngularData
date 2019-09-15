import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import {CustDetailsService} from '../cust-details.service'

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Create array to hold the information of batches
  public batches = [];
  public custs=[]
  // Add instance of Service in constructor
  constructor(private _batchservice:BatchService,private _custService:CustDetailsService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this._batchservice.GetBatchDetails()
    .subscribe(data=>this.batches=data);
    this._custService.getDetails()
    .subscribe(data=>this.custs=data);
  }
}
