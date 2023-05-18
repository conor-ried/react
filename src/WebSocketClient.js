class WebSocketClient {
    constructor(url) {
      this.url = url;
      this.socket = null;
    }
  
    connect() {
      this.socket = new WebSocket(this.url);
  
      this.socket.onopen = () => {
        console.log('WebSocket connection established.');
      };
  
      this.socket.onmessage = (event) => {
        console.log('Received message:', event.data);
      };
  
      this.socket.onclose = () => {
        console.log('WebSocket connection closed.');
      };
  
      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    }
  
    send(message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message);
      } else {
        console.error('WebSocket connection is not open.');
      }
    }
  
    close() {
      if (this.socket) {
        this.socket.close();
      }
    }
  }
  
  export default WebSocketClient;