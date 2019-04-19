import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;
  private queryalldocs ={
    'query': {
      'match_all': {}
    }
  };
  constructor() {
    if (!this.client) {
      this._connect();
    }
  }
 
  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }
 
  private _connect() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
    console.log(this.client);
  }
 
  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello grokonez!'
    });
  }
  // Add/Create the Customer Index/Data
  addToIndex(value):any{
    return this.client.create(value);
  } 
  
  getAllDocuments(_Index, _type):any {
    return this.client.search({
      index: _Index,
      type: _type,
      body: this.queryalldocs,
      filterPath:['hits.hits._source']
    });
  }
}