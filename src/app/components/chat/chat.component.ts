import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user.service';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { ChatMessage, SocketChatMessage } from 'src/app/models/chat-message';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;

  // private webSocketApi = new WebSocketAPI();

  username: string
  private personalCards: PersonalCard[]
  private imagePath: string[]
  private currentUser = new PersonalCard()
  private contactsNumber = 0
  private index = -1;
  private showInboxMessage = false;
  private sendingMessage = ''
  private chatMessage: ChatMessage[]
  private map: Map<string, ChatMessage[]> = new Map()
  private chatInfo: Map<String, boolean> = new Map()
  private lastMessage: Map<String, String> = new Map()
  private firstIterationIgnore: boolean = false

  constructor(private userService: UserService, private chatService: ChatService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    this.chatService.socketChatMessageSubject.subscribe(
      result => {
        let socketChatMessage = result
        if (socketChatMessage.content && this.firstIterationIgnore) {
          this.addReceivedMessage(socketChatMessage)
        }
        this.firstIterationIgnore = true
      },
      error => {
      }
    )
    this.scrollToBottom();
    this.userService.getAllUsers().subscribe(
      result => {
        this.personalCards = result
        this.contactsNumber = this.personalCards.length
      }
    )
  }

  ngOnDestroy() {

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  //on click, vengono caricati i messaggi relativi alla coppia di utenti
  getMessage(personalCard, index) {
    if (this.currentUser.user.username === personalCard.user.username) {
      return;
    }
    this.index = index
    this.loadChatContent(personalCard.user.username)
    this.showInboxMessage = true;
    this.currentUser = personalCard;
    this.chatInfo[personalCard.user.username] = false
  }

  isActive(i) {
    return this.index === i;
  }

  toBeRead(i: number) {
    let username = this.personalCards[i].user.username
    return this.chatInfo[username]
  }

  //carica la lista di messaggi corretta
  loadChatContent(username) {
    if (this.map[username] === undefined) {
      this.map[username] = []
    }
    this.chatMessage = this.map[username]

  }


  //determina se è inviato da me
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

  sendMessage() {
    let userTo = this.currentUser.user.username
    this.chatService.sendChatMessage(userTo, this.sendingMessage)
    this.addSentMessage(userTo)
    this.sendingMessage = ''
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


  addReceivedMessage(socketChatMessage) {
    if (this.map[socketChatMessage.userFrom] === undefined) {
      this.map[socketChatMessage.userFrom] = []
    }
    let from = new User(socketChatMessage.userFrom, "")
    let to = new User(sessionStorage.getItem("username"), "")
    this.lastMessage[socketChatMessage.userFrom] = socketChatMessage.content
    let chatMessage = new ChatMessage(from, to, socketChatMessage.content)
    this.map[socketChatMessage.userFrom].push(chatMessage)
    this.notifyUser(socketChatMessage.userFrom)
  }

  notifyUser(userFrom) {
    let i = 0;
    let personalCard;
    for (let p of this.personalCards) {
      if (p.user.username === userFrom) {
        if (i === 0) {
          break;
        }
        this.personalCards.splice(i, 1)
        this.personalCards.unshift(p)
        break;
      }
      i += 1
    }
    if (this.index !== i) {
      this.chatInfo[userFrom] = true
    }
    this.handleIndex(this.index, i)
  }

  handleIndex(selectedChat, oldPositionChat) {
    if (this.index === -1) {

    }
    else if (selectedChat === oldPositionChat && selectedChat !== 0) {
      this.index = 0

    }
    else if (selectedChat < oldPositionChat) {
      this.index++
    }
  }

  addSentMessage(userTo) {
    if (this.map[userTo] === undefined) {
      this.map[userTo] = []
    }
    let from = new User(sessionStorage.getItem("username"), "")
    let to = new User(userTo, "")
    let chatMessage = new ChatMessage(from, to, this.sendingMessage)
    this.map[userTo].push(chatMessage)
  }

}