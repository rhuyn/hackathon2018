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
  lat: number = 51.1784;
  lng: number = -115.5708;
  locPoints = new Array<LocPoint>();
  locPoint: LocPoint;
  address:string;
  inter:any;
  counter: number = 0;
  changeIcon = "../../assets/icon1.png";
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.nodeObservable = this.getNodes('/');
    this.nodeObservable.subscribe(val => {
      this.getData(val);
    }); 
  }
  ngOnDestory(){
    clearInterval(this.inter);
  }

  getNodes(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getData(val){
    this.getDataLoop(val);
    this.inter = setInterval(()=>{
      this.locPoints = new Array<LocPoint>();
      this.getDataLoop(val);
    }, 10000);
  }

  getDataLoop(val){
    for( var i = 0; i < val.length; i++){
      this.getContract(val[i]).then(node => {
        this.getSensorData(node).then((data) => {
            this.locPoint = new LocPoint();
            this.locPoint.date = new Date(0);
            this.locPoint.date.setUTCSeconds(data[5].c);
            this.locPoint.lng = data[0].s*(data[0].c / 1000000);
            this.locPoint.lat = data[1].s*(data[1].c / 1000000);
            this.locPoint.temperature = data[2].s*(data[2].c/1000);
            this.locPoint.humidity = data[3].c;
            this.locPoint.warning = data[4].c;
            this.locPoint.address = "https://rinkeby.etherscan.io/address/"+val[this.counter].address;
            if(this.locPoint.warning = 1){
              this.locPoint.warningImg = "../../assets/icon1.png";
            }
            else if(this.locPoint.warning = 2){
              this.locPoint.warningImg = "../../assets/icon2.png";
            }
            else if(this.locPoint.warning = 3){
              this.locPoint.warningImg = "../../assets/icon3.png";
            }
            else if(this.locPoint.warning = 4){
              this.locPoint.warningImg = "../../assets/icon4.png";
            }
            else if(this.locPoint.warning = 5){
              this.locPoint.warningImg = "../../assets/icon5.png";
            }
            else if(this.locPoint.warning = 6){
              this.locPoint.warningImg = "../../assets/icon6.png";
            }
            else if(this.locPoint.warning = 7){
              this.locPoint.warningImg = "../../assets/icon7.png";
            }

            this.counter = this.counter + 1;
            if(this.counter >= val.length){
              this.counter = 0;
            }
            this.locPoints.push(this.locPoint);
        }).catch((err) => {
            console.log(err)
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  
  getContract(val) {
    return new Promise((resolve, reject) => {
      console.log(val.address);
        var contract = this.web3.eth.contract(JSON.parse(val.ABI));
        var blokfirenode = contract.at(String(val.address));
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
