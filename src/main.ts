import { sayHello } from "./greet";
import Vue = require("vue")

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "UglifyDelayTypeScript2");

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
            window.alert(this.message);
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