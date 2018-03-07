import { Main } from './main'

// The worker entry point needs to be JS, because it needs to call postMessage and TypeScript
// always wants to use the window.postMessage variant which requires more parameters.
// We can still import from TypeScript files, so just keep most of the logic there, and this
// file will only be used for receiving and sending messages.

// The only thing we do here is send the worker context and postMessage function over to TypeScript,
// and tell the onmessage callback to call main.onMessage().
const main = new Main(self);
onmessage = function(e) {
    main.onMessage(e);
};
