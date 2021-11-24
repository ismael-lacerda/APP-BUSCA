import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'listar-deputados',
  templateUrl: './listar-deputados.component.html',
  styleUrls: ['./listar-deputados.component.css']
})
export class ListarDeputadosComponent implements OnInit {
  deputados: Deputado;
  nome: string;

  constructor(private dep: DeputadoService) {
  }

  ngOnInit(): void {
  }

  pesquisarDeputado() {
    this.dep.obterDeputados(this.nome).subscribe(res => {
      this.deputados = res.dados;
      
    });
    console.log(this.deputados);
  }

  pesquisarDeputadoPorSexo() {
      this.dep.obterDeputados(this.sexo).subscribe(res => {
        this.deputados = res.dados;
        
    });


    console.log(this.deputados);

  }
  sexo(sexo: sexo) {
    throw new Error('Method not implemented.');
  }

}
  function pesquisarDeputadoPorSexo(): void {
    throw new Error('Function not implemented.');
  }

