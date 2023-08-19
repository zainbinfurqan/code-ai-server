import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('search-auto-suggest') // 'chat' is the event name
  handleMessage(client: Socket, payload: any) {
    console.log('Received message:', payload);

    // Emit a response event to the client
    this.server.emit('response', 'Message received by server');
  }
}