import { Component, OnInit } from '@angular/core';
import { CustomerSource } from '../customer.interface';
import { ElasticsearchService } from '../../elasticsearch.service'

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  private static readonly INDEX = 'gkz_index';
  private static readonly TYPE = 'customer';
 
  customerSources: CustomerSource[];
 
  constructor(private es: ElasticsearchService) { }
 
  ngOnInit() {
    this.es.getAllDocuments(ShowCustomersComponent.INDEX, ShowCustomersComponent.TYPE)
      .then(response => {
        this.customerSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('Show Customer Completed!');
      });
  }
 
}
