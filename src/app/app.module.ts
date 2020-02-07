import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TodoBoardComponent } from './components/home/todo-board/todo-board.component';
import { LogoutComponent } from './components/home/logout/logout.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { TodoComponent } from './components/todo/todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { UserInfoComponent } from './components/home/user-info/user-info.component';
import { CreateFormComponent } from './components/home/create-form/create-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { GenericBoardComponent } from './components/home/generic-board/generic-board.component';
import { StoryViewerComponent } from './components/home/story-viewer/story-viewer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompleteRegisterComponent } from './components/complete-register/complete-register.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { MyTodoBoardComponent } from './components/my-todo-board/my-todo-board.component';
import { MyTodoCardComponent } from './components/my-todo-card/my-todo-card.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ListItemUserComponent } from './list-item-user/list-item-user.component';
import { EventComponent } from './components/event/event.component';
import { EventBoardComponent } from './event-board/event-board.component';
import { EventCardComponent } from './event-card/event-card.component';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ProfileBoardComponent } from './components/profile-board/profile-board.component';
import { MyEventComponent } from './components/my-event/my-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    HomeComponent,
    TodoBoardComponent,
    LogoutComponent,
    TodoComponent,
    ListTodoComponent,
    NavbarComponent,
    FooterComponent,
    TodoCardComponent,
    UserInfoComponent,
    CreateFormComponent,
    ChatComponent,
    GenericBoardComponent,
    StoryViewerComponent,
    CarouselComponent,
    ProfileComponent,
    CompleteRegisterComponent,
    MyTodoBoardComponent,
    MyTodoCardComponent,
    UserProfileComponent,
    ListItemUserComponent,
    EventComponent,
    EventBoardComponent,
    EventCardComponent,
    SearchComponent,
    ChatboxComponent,
    ProfileBoardComponent,
    MyEventComponent,
  ],
  imports: [
    GooglePlaceModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [MatInputModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }, [NgxImageCompressService]
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
