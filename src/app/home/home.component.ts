import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: object;
  selectedData: object;
  displayedColumns: string[] = ['name', 'price', 'image'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://api-for-learning.herokuapp.com/fe1/get/5001').subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data['cards']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  showInfo(item) {
    this.selectedData = item;
  }

  upperCaseFirstLetter(word: string) {
    if (!word) {
      return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}

