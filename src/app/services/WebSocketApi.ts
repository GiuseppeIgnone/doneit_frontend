// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
// import { SocketChatMessage } from '../models/chat-message';
// import { BehaviorSubject } from 'rxjs';
// import { API_URL } from '../constants/constant';

// // npm i sockjs-client --save
// // npm i stompjs --save
// // npm i net

// export class WebSocketAPI {

//     private stompClient = null;

//     socketChatMessage = new SocketChatMessage()
//     socketChatMessageSubject = new BehaviorSubject<SocketChatMessage>(this.socketChatMessage)

    

//     constructor() {

//     }


//     connect() {

//         let socket = new SockJS(`${API_URL}/gs-guide-websocket`);
//         this.stompClient = Stomp.over(socket);
//         const _this = this;
//         _this.stompClient.connect({
//             "Auth": sessionStorage.getItem("token")
//         }, function (frame) {
//             _this.stompClient.subscribe("/user/queue/reply", function (frame) {
//                 console.log(frame)
//                 let chatMessage = JSON.parse(frame.body)
//                 _this.updateSocketChatMessage(chatMessage)
//             })
//         })
//     }

//     disconnect() {
//         if (this.stompClient != null) {
//             this.stompClient.disconnect();
//         }

//     }


//     sendChatMessage(dest, message) {
//         console.warn("Sto mandando un messaggio a " + dest)
//         this.stompClient.send("/app/send", {
//         }, JSON.stringify({
//             'userTo': dest,
//             'content': message
//         }));
//     }

//     updateSocketChatMessage(chatMessage) {
//         this.socketChatMessageSubject.next(chatMessage)
//     }
// }