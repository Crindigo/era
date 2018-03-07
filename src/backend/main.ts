
export class Main
{
    constructor(private workerContext: DedicatedWorkerGlobalScope) {
        
    }

    makeResp(obj: any): string {
        return this + ': ' + obj;
    }

    onMessage(e: MessageEvent): void {
        this.workerContext.setTimeout(() => {
            this.postMessage(this.makeResp(e.data));
        }, 1000);
    }

    postMessage(obj: any) {
        // needs to be called in global context
        this.workerContext.postMessage(obj);
    }
}
