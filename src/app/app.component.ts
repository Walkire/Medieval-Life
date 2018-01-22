import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Game = {};

  ngOnInit(){
    this.Game = {
      player: {
        level: 1,
        class: "Peasant"
      },
      farming: {
        active: true,
        progress: {
          value: 0,
          increment: 20
        },
        resource: 0,
        knowledge: 1,
        gainDifficulty: 2
      },
      woodcutting: {
        active: true,
        progress: {
          value: 0,
          increment: 10
        },
        resource: 0,
        knowledge: 1,
        gainDifficulty: 4
      },
      mining: {
        active: true,
        progress: {
          value: 0,
          increment: 5
        },
        resource: 0,
        knowledge: 1,
        gainDifficulty: 8
      },
      library: {
        active: true
      },
      questboard: {
        active: true
      },
      trader: {
        active: true
      },
    }
  }

  farmClick(clicks){
    var div = document.getElementById('farmProgBar');

    for(var i=0; i < clicks; i++){
      (this.Game as any).farming.progress.value += (this.Game as any).farming.progress.increment;
      if((this.Game as any).farming.progress.value >= 100){
        (this.Game as any).farming.progress.value = (this.Game as any).farming.progress.value%100;
        (this.Game as any).farming.resource += Number(this.getResource("farming").toFixed(0));
        (this.Game as any).farming.knowledge += 1; //For Dev
      }
    }
    div.style.width=(this.Game as any).farming.progress.value+"%";
  }

  woodClick(clicks){
    var div = document.getElementById('woodProgBar');

    for(var i=0; i < clicks; i++){
      (this.Game as any).woodcutting.progress.value += (this.Game as any).woodcutting.progress.increment;
      if((this.Game as any).woodcutting.progress.value >= 100){
        (this.Game as any).woodcutting.progress.value = (this.Game as any).woodcutting.progress.value%100;
        (this.Game as any).woodcutting.resource += Number(this.getResource("woodcutting").toFixed(0));
        (this.Game as any).woodcutting.knowledge += 1; //For Dev
      }
    }
    div.style.width=(this.Game as any).woodcutting.progress.value+"%";
  }

  mineClick(clicks){
    var div = document.getElementById('mineProgBar');

    for(var i=0; i < clicks; i++){
      (this.Game as any).mining.progress.value += (this.Game as any).mining.progress.increment;
      if((this.Game as any).mining.progress.value >= 100){
        (this.Game as any).mining.progress.value = (this.Game as any).mining.progress.value%100;
        (this.Game as any).mining.resource += Number(this.getResource("mining").toFixed(0));
        (this.Game as any).mining.knowledge += 1; //For Dev
      }
    }
    div.style.width=(this.Game as any).mining.progress.value+"%";
  }

  getResource(task){
    var knowledge = (this.Game as any)[task].knowledge;
    var level = (this.Game as any).player.level;
    var gainDifficulty = (this.Game as any)[task].gainDifficulty;

    //Resource=run*log_gainDifficulty(knowledge)+1
    return (level * (Math.log(knowledge)/Math.log(gainDifficulty))+1);
  }
}
