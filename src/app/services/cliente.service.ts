import { Cliente } from './../interfaces/Clientes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';


@Injectable({
  providedIn: 'root'
})


export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; //url da API
  clientes: Cliente[] = [
    {
      id: "jklfjkalfddjksaf",
      nome: "Thiago",
      telefone: "12"
    },
    {
      id: "dfadfadsfcvdsdaf",
      nome: "Maria"
    }
  ]

  //injeção de dependência dp htpp
  constructor(private http: HttpClient) {

  }

  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>
  }

  // //retornar a lista de clientes
  // list(): Cliente[] {
  //   return this.clientes;
  // }

  //método para remover um cliente
  remove(id: string) {
    const cliente = this.clientes.find(
      c => c.id == id
    ) //buscar o cliente na lista

    if (cliente) {//Se encontrar o cliente
      //busca o index
      const index = this.clientes.indexOf(cliente)
      //remove da lista
      this.clientes.splice(index, 1)
    }
  }

  //método adicionar um cliente
  add(cliente: Cliente) {
    //O push adiciona um item (objeto) dentro
    //de uma array (lista)
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  update(id: string, cliente: Cliente) {
    const index = this.clientes.findIndex(
      c => c.id == id
    )

    if (index !== -1) {
      this.clientes[index] =
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }
}
