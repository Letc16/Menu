import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/',
    pathMatch: 'full'
  },
  {
    path: 'folder/:',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'entrega',
    loadChildren: () => import('./entrega/entrega.module').then( m => m.EntregaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pedido-detalhes',
    loadChildren: () => import('./pedido-detalhes/pedido-detalhes.module').then( m => m.PedidoDetalhesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
