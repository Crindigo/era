import { sayHello } from "./greet";
import Vue from 'vue'
import './sass/main.scss'

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "UglifyDelayTypeScript2");

const worker = new Worker('dist/backend.js');
worker.postMessage("hello, worker 2");
worker.onmessage = function(e) {
    console.log('onmessage:', e.data);
};

interface MyComponent extends Vue {
    message: string
    onClick(): void
}

const myComponent = {
    //template: '<button @click="onClick">Click!</button>',
    data: function() {
        return {
            message: 'Hello!'
        }
    },
    methods: {
        onClick: function() {
            worker.postMessage("clicked!");
        }
    },

    render(createElement: Vue.CreateElement): Vue.VNode {
        return createElement(
            'button', 
            {
                on: {
                    click: this.onClick
                }
            }, 
            'Click!');
    }
} as Vue.ComponentOptions<MyComponent>;

Vue.component('my-component', myComponent);

const app = new Vue({
    el: '#app'  
});