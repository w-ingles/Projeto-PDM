import { Injectable } from '@angular/core';
import { Repositorio} from "../model/repositorio"
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubRestService {

  private url : string = "https://api.github.com/";

  private rank : Repositorio [] = []

  constructor(private httpClient : HttpClient) {
  }

  pesquisaRepositorios(query : string): Observable<Repositorio[]> {

    let params = new HttpParams().set("q", `language:${query}` );
    return this.httpClient.get<any>(
      this.url + 'search/repositories', { params : params }
    ).pipe(map(resposta => {
      console.log("Query..: " + query)
      //Se já tiver no Array e o array já tiver alguma coisa
      if(this.rank.length > 0) {
        console.log("Linguagem: " + query)
        var isInArray = this.rank.some(function (el): Boolean {
          console.log("Nome do elemento..: " + el.linguagem)
          return el.linguagem === query;
        });
      }
      console.log("Está no array? " + isInArray)
      if(isInArray) {return this.rank;} //Retorna somente o Array
      console.log("Se não tiver no array")
        //Se tiver resposta
      console.log("Resposta..: " + resposta && resposta.total_count)
        if (resposta && resposta.total_count){
          let resultado = {
            total_count : resposta.total_count,
            linguagem: query
          }
          this.rank.push(resultado)
          return this.rank
        } else{
          return [];
        }

      }),
      catchError(error => {
        console.log('Erro ao fazer a pesquisa: ' + error);
        return Observable.throw(error);
      })

    );
  }

  removerRepositorios(){
    this.rank = [];
    return this.rank
  }



}
