import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuardService } from './services/route-guard.service';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { LogoutComponent } from './components/home/logout/logout.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompleteRegisterComponent } from './components/complete-register/complete-register.component';
import { MyTodoBoardComponent } from './components/my-todo-board/my-todo-board.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventComponent } from './components/event/event.component';
import { SearchComponent } from './search/search.component';
import { ChatComponent } from './components/chat/chat.component';
import { MyEventComponent } from './components/my-event/my-event.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [RouteGuardService] },
  { path: 'update-todo/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'create-todo', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'list-todos', component: ListTodoComponent, canActivate: [RouteGuardService] },
  { path: 'todo-card', component: TodoCardComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  // da cancellare: { path: 'show-my-profile', component: ProfileComponent, canActivate: [RouteGuardService] },
  { path: 'show-profile/:username', component: UserProfileComponent, canActivate: [RouteGuardService] },
  { path: 'complete-register', component: CompleteRegisterComponent, canActivate: [RouteGuardService] },
  { path: "my-todo-board", component: MyTodoBoardComponent, canActivate: [RouteGuardService] },
  { path: "my-events-board", component: MyEventComponent, canActivate: [RouteGuardService] },
  { path: "chat", component: ChatComponent, canActivate: [RouteGuardService] },

  // {path: 'register', component: RegisterComponent, canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
