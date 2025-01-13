import { Component, OnInit } from '@angular/core';
import { OfficeServiceService } from '../../services/office-service.service';
@Component({
  selector: 'app-office-service',
  imports: [],
  templateUrl: './office-service.component.html',
  styleUrl: './office-service.component.css'
})
export class OfficeServiceComponent implements OnInit {
  officeServices: any;
  constructor(private officeService: OfficeServiceService) { }

  ngOnInit(): void {
    this.officeService.getOfficeServices().subscribe((data) => {
      this.officeServices = data;
      console.log(this.officeServices);
    });
  }

}
