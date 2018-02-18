import { Component, OnInit } from '@angular/core';
import {LOCPOINTS} from '../mock-loc'
import {LocPoint} from '../locPoint'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as  Web3 from 'web3';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  nodeObservable: Observable<any[]>;
  web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/UiFZYgJw80AI7LbKtG7o:8545"));
  lat: number = 51.0486;
  lng: number = -114.0708;
  locPoints = new Array<LocPoint>();
  locPoint: LocPoint;
  address:string;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.nodeObservable = this.getNodes('/');
    this.nodeObservable.subscribe(val => this.getContract(val));//this.getData(val)); 
  }

  getNodes(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getData(val){
    this.getContract(val).then(node => {
      this.getSensorData(node).then((data) => {
          this.locPoint = new LocPoint();
          this.locPoint.date = new Date(0);
          this.locPoint.date.setUTCSeconds(data[5].c);
          this.locPoint.lng = data[0].s*(data[0].c / 1000000);
          this.locPoint.lat = data[1].s*(data[1].c / 1000000);
          this.locPoint.temperature = data[2].s*(data[2].c/1000);
          this.locPoint.humidity = data[3].c;
          this.locPoint.warning = data[4].c;
          this.locPoint.address = val[0].address;
          this.locPoints.push(this.locPoint);
      }).catch((err) => {
          console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  
  getContract(val) {
    return new Promise((resolve, reject) => {
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        var contract = this.web3.eth.contract(JSON.parse(val[0].ABI));
        console.log(contract);
        var blokfirenode = contract.at(String(val[0].address));
        console.log(blokfirenode);
        if (blokfirenode) {
            resolve(blokfirenode)
        } else {
            reject("error getting contract")
        }
    })
}

getSensorData(blokfirenode) {
  return new Promise((resolve, reject) => {
      blokfirenode.sensorstate((err, data) => {
          if (err) {
              reject(err)
          } else {
              resolve(data)
          }
      })

  })
}
}
