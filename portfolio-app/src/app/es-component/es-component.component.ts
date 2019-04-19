import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';

@Component({
  selector: 'app-es-component',
  templateUrl: './es-component.component.html',
  styleUrls: ['./es-component.component.css']
})
export class EsComponentComponent implements OnInit {

  isConnected = false;
  status: string;
 
  constructor(private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
  }
 
  ngOnInit() {
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {

      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
   
    }).then(() => {

      this.cd.detectChanges();
    });
  }
 
}
