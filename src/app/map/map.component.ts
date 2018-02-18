import { Component, OnInit } from '@angular/core';
import {LOCPOINTS} from '../mock-loc'
import {LocPoint} from '../locPoint'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  nodeObservable: Observable<any[]>;

  lat: number = 51.0486;
  lng: number = -114.0708;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.nodeObservable = this.getNodes('/Nodes');
  }

  getNodes(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}

//temperature is 2 digits above
//long and lat is 6 digits above