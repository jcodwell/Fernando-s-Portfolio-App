import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ElasticsearchService } from '../elasticsearch.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isConnected = false;

  form: FormGroup;
  status: String;

  constructor( private es: ElasticsearchService, private cd: ChangeDetectorRef) { 
    this.isConnected = false;

    this.form = new FormGroup ({
       index: new FormControl('gkz_index', Validators.required),
       id: new FormControl('', Validators.required),
       name: new FormControl('', Validators.required),
       age: new FormControl('', Validators.required),
       address: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
    this.es.isAvailable().then(() => {
        this.status = 'OK';
        this.isConnected = true;
    },
    error => {
      this.status = 'Error';
      this.isConnected = false;
      console.error('You are probably not Connected', error);
    }).then(() => {
      this.cd.detectChanges();
    });

  }


onSubmit(value){
  this.es.addToIndex({
    index: value.index,
    type: 'customer',
    id: value.id,
     body: {
      name: value.name,
      age: value.age,
      address: value.address,
      published: new Date().toLocaleString()
    }
  
  }).then((result)=> {
    console.log(result);
    alert('Document Added, see log');
  }, error => {
    alert('Something Wrong');
    console.log(error);
  
  });
 }
}
