import { Component, OnInit } from '@angular/core';
import {Repositorio} from "../model/repositorio";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
