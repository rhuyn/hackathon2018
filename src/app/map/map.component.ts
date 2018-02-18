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
  address:string;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.nodeObservable = this.getNodes('/');
    this.nodeObservable.subscribe(val => this.getData(val));
    if(this.web3.isConnected()){
      console.log(this.web3);
    }
    else{
      console.log("no");
    }     
  }

  getNodes(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getData(val){
    this.getContract(val).then(node => {
      this.getSensorData(node).then((data) => {
          console.log(data)
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
        var blokfirenode = contract.at(String(val[0].address));
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
