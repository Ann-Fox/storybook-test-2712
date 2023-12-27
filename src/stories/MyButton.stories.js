import MyButton from './MyButton.vue';


export default {
    // title: "Example/Button",
    component: MyButton,
    tags: ["autodocs"],
    // decorators: [() => ({ template: '<div style="margin: 10em;"><story /></div>' })],
    parameters: {
        backgrounds: {
            value: [
                {name: 'red', value: '#f00'},
                {name: 'green', value: '#0f0'},
                {name: 'blue', value: '#00f'},
                {name: 'black', value: '#000'},
                {name: 'light', value: '#DDD'},
                {name: 'dark', value: '#222'},
            ],
        },
    },
};

export const MyPrimary = {
    render: (args) => ({
        name: 'I am the primary',
        components: { MyButton },
        setup() {
            return {args};
        },
        template: '<MyButton v-bind="args" />',
    }),
    args: {
        primary: true,
        backgroundColor: '#ff0',
        label: 'MyButton',
    },
    decorators: [() => ({ template: '<div style="margin: 5em; background: antiquewhite"><story/></div>' })],
};

export const MySecondary = {
    render: (args) => ({
        components: { MyButton },
        setup() {
            return { args };
        },
        template: '<MyButton v-bind="args" />',
    }),
    args: {
        ...MyPrimary.args,
        label: '😄👍😍💯',
    },
};

export const MyTertiary = {
    render: (args) => ({
        components: { MyButton },
        setup(){
            return {args};
        },
        template: '<MyButton v-bind="args" />',
    }),
    args: {
        ...MyPrimary.args,
        label: '📚📕📈🤓',
        primary: false,
    },
};
