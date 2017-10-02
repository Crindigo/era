
// Function that takes any object and does not return
interface WorkerPostMessage {
    (obj: any): void
}

export class Main
{
    constructor(public postMessage: WorkerPostMessage) {
        
    }

    onMessageHandler(e: MessageEvent): void {
        this.postMessage('Response: ' + e.data);
    }
}
