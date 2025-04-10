import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcessoComponent } from './components/acesso/acesso.component';
import { ExibirMensagensComponent } from './components/exibir-mensagens/exibir-mensagens.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';
import { ListTarefaComponent } from './components/list-tarefa/list-tarefa.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { MesComponent } from './components/mes/mes.component';
import { SwitchNumerosComponent } from './components/switch-numeros/switch-numeros.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MesComponent, ListComprasComponent, AcessoComponent, ListTarefaComponent, ExibirMensagensComponent, ListaUsuariosComponent, SwitchNumerosComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividade01';
}
