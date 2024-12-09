import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule, 
    MatMenuModule, 
    MatButtonModule, 
    HttpClientModule, 
    MatPaginatorModule,
    MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public user_role = "unknow";
  public displayedColumns: string[] = ['company', 'entityId', 'businessId', 'country', 'regNumber', 'actions'];
  
  public dataSource = new MatTableDataSource<any>([]);

  private entityMap: { [key: number]: string } = {
    1:"Trust",
    2:"Association",
    3:"Private Company"
  }

  private businessMap: { [key: number]: string } = {
    1:"Banking",
    2:"Fishing",
    3:"Manufacturing"
  }

  constructor(private http: HttpClient, private router: Router) {
    this.user_role = localStorage.getItem("role") || "unknow";
    this.fetchApplicationsList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getEntityName(entityId: number){
    return this.entityMap[entityId];
  }

  getBusinessName(businessId: number){
    return this.businessMap[businessId];
  }

  fetchApplicationsList(){
    this.http.get<any>('http://localhost:8081/applications?page=0&size=100').subscribe({
      next: (response) => {
        this.dataSource.data = response._embedded.applications;
      },
      error: (error) => {
        console.error('Loading failed:', error);
        this.dataSource.data = [];
      }
    });
  }

  updateStatus(item: any, status_field: string, status: number){
    item[status_field]=status;
    const regex = /(?<=\/applications\/)[a-f0-9]{32}/;
    if(item._links.onboardingApplication.href){
      const match = item._links.onboardingApplication.href.match(regex);
      if(match){
        item["id"] = match[0];
      } 
    }
    this.http.post<any>('http://localhost:8081/applications', item).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error('Loading failed:', error);
      }
    });
  }

}
