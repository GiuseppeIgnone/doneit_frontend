import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PersonalCard } from '../models/personal-card/personal-card';
import { User } from '../models/user/user.model';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;


  private username: string
  private showChat = false;
  private closeChat = true;
  private personalCards: PersonalCard[]
  private chatInfo: Map<string, boolean> = new Map()
  private chatContent: Map<string, ChatMessage[]> = new Map()
  private currentChat: ChatMessage[] = []
  private activeUser: string = ''
  private message: string = ''
  private firstIterationIgnore: boolean = false

  constructor(private userService: UserService, private chatService: ChatService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    console.warn("OK")
    this.userService.getAllUsers().subscribe(
      result => {
        this.personalCards = result;
      }
    )
    this.scrollToBottom();

    this.chatService.socketChatMessageSubject.subscribe(
      result => {
        let socketChatMessage = result
        if (socketChatMessage.content && this.firstIterationIgnore) {
          this.addReceivedMessage(socketChatMessage)
          this.notifyUserMessageReceived(socketChatMessage)
        }
        this.firstIterationIgnore = true
      },
      error => {
      }
    )
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    console.warn("Destroy")

  }

  isSent(chatMessage) {
    let u1 = sessionStorage.getItem('username')
    let u2 = chatMessage.from.username
    return u1 === u2

  }

  //oppure se è un messaggio ricevuto
  isReceived(chatMessage) {
    let u1 = sessionStorage.getItem('username')
    let u2 = chatMessage.to.username
    return u1 === u2
  }

  addReceivedMessage(socketChatMessage) {
    if (!this.chatContent[socketChatMessage.userFrom]) {
      this.chatContent[socketChatMessage.userFrom] = []
    }
    let userFrom = new User(socketChatMessage.userFrom, "")
    let userTo = new User(socketChatMessage.userTo, "")
    let chatMessage = new ChatMessage(userFrom, userTo, socketChatMessage.content)
    this.chatContent[socketChatMessage.userFrom].push(chatMessage)
    this.currentChat = this.chatContent[socketChatMessage.userFrom]
  }

  addSentMessage(message) {
    if (!this.chatContent[this.activeUser]) {
      this.chatContent[this.activeUser] = []
    }
    let userFrom = new User(sessionStorage.getItem("username"), "")
    let userTo = new User(this.activeUser, "")
    let chatMessage = new ChatMessage(userFrom, userTo, message)

    this.chatContent[this.activeUser].push(chatMessage)
    this.currentChat = this.chatContent[this.activeUser]
  }



  notifyUserMessageReceived(socketChatMessage) {
    if (this.activeUser !== socketChatMessage.userFrom) {
      this.chatInfo[socketChatMessage.userFrom] = true
    }
  }


  handleChatBox() {
    if (this.showChat) {
      this.showChat = false;
    }
    else {
      this.showChat = true;
    }
  }

  closeChatBox() {
    this.closeChat = true
    this.activeUser = ''
  }

  openChat(p) {
    this.closeChat = false;
    this.showChat = true;
    this.activeUser = p.user.username
    console.log("Ora tolgo: " + this.activeUser)
    this.chatInfo[this.activeUser] = null
    this.currentChat = this.chatContent[this.activeUser]
  }


  notifyMessageArrived(p) {
    return this.chatInfo[p.user.username]
  }


  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMessage(event) {
    event.preventDefault();
    this.addSentMessage(this.message)
    this.chatService.sendChatMessage(this.activeUser, this.message)
    this.message = ''
  }

}
