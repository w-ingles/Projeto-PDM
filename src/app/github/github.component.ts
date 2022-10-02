import { Component, OnInit } from '@angular/core';
import {Repositorio} from "../model/repositorio";
import {GithubRestService} from "../service/github-rest.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {

   private linguagem : string;

  private repositorios : Repositorio[] = [];

  constructor(private gitHubRestService : GithubRestService) {}
  ngOnInit(){}
  pesquisa() {
    alert(this.linguagem)
    this.gitHubRestService.pesquisaRepositorios(this.linguagem)
      .subscribe(repositorios => {
          this.repositorios = repositorios;
        },
        erro => { console.log('Erro no componente: ' + erro);

        });
  }

}
