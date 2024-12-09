import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule, MatMenuModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public displayedColumns: string[] = ['id', 'company', 'entityId', 'businessId', 'country', 'regNumber', 'actions'];
  
  public dataSource = [
    {
      "id":"#uid",
      "name":"Raotosamy",
      "email":"contact@raoto.net",
      "typeId":1,
      "company":"RAOTO.NET",
      "entityId":1,
      "businessId":1,
      "licence":"Not defined",
      "regNumber":"0000-",
      "country":"Madagascar",
      "dateInc":"2000-12-25",
      "passeport":"xxxx-",
      "processStatus":0,
      "approverStatus":0
    }
  ];

  private entityMap: { [key: number]: string } = {
    1:"Trust",
    2:"Association",
    3:"Private Company"
  }

  getEntityName(entityId: number){
    return this.entityMap[entityId];
  }

  private businessMap: { [key: number]: string } = {
    1:"Banking",
    2:"Fishing",
    3:"Manufacturing"
  }

  getBusinessName(businessId: number){
    return this.businessMap[businessId];
  }
}
