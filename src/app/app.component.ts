import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/', icon: 'person-add' },
    { title: 'Cadastro', url: '/cadastro/', icon: 'person-add' },
    { title: 'Entrega', url: '/entrega/', icon: 'motorcycle' },
    { title: 'Login', url: '/login/', icon: 'log-in' },
    { title: 'Detalhes do Pedido', url: '/pedido-detalhes/', icon: 'archive' },
    { title: 'Configuração', url: '/folder/', icon: 'archive' },
    
  ];
 
}
