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
  private repositorios : Repositorio[];

  constructor(private gitHubRestService : GithubRestService) {}
  ngOnInit(){}
  pesquisa() {

    this.gitHubRestService.pesquisaRepositorios(this.linguagem)
      .subscribe(repositorios => {
          this.repositorios = repositorios;
          console.log("Repositorios cadastrados..: " , repositorios);
        },
        erro => { console.log('Erro no componente: ' + erro);

        });
  }

  limpar(){
    console.log("Dentro de limpar.: " + this.repositorios)
    this.gitHubRestService.removerRepositorios()
    this.repositorios = []
    console.log("Depois de limpar.: " + this.repositorios)
  }

}
