import { Main } from './foo'

const main = new Main(postMessage);

// The worker entry point needs to be JS, because it needs to call postMessage and TypeScript
// always wants to use the window.postMessage variant which requires more parameters.
// We can still import from TypeScript files, so just keep most of the logic there, and this
// file will only be used for receiving and sending messages.
onmessage = main.onMessageHandler;
