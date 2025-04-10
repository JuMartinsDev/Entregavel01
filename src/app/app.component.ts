import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MesComponent } from './components/mes/mes.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { ListTarefaComponent } from './components/list-tarefa/list-tarefa.component';
import { ExibirMensagensComponent } from './components/exibir-mensagens/exibir-mensagens.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MesComponent, ListComprasComponent, AcessoComponent, ListTarefaComponent, ExibirMensagensComponent, ListaUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividade01';
}
