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

  private rank : Repositorio

  constructor(private httpClient : HttpClient) {}

  pesquisaRepositorios(query : string) :

    Observable<Repositorio[]> {

    let params = new HttpParams().set("q",  query);

    return this.httpClient.get<any>(
      this.url + 'search/repositories', { params : params }
    ).pipe(map(resposta => {
        if (resposta && resposta.total_count)




          return resposta.total_count;
        else
          return [];
      }),
      catchError(error => {
        console.log('Erro ao fazer a pesquisa: ' + error);
        return Observable.throw(error);
      })

    );
  }


}
