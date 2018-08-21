import { ServService } from './../../services/serv.service';
import { Example } from './../../example';
import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html'
})
export class CompComponent implements OnInit {
xyz: Example[] ;

  constructor(private sservice: ServService) { }

  ngOnInit() {
    this.sservice.getPosts().subscribe(responseposts => {this.xyz = responseposts });
  }

}
