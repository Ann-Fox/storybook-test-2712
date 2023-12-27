import MyButton from './MyButton.vue';


export default {
    component: MyButton,
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
        backgroundColor: '#ff0',
    label: 'MyButton',
    },
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
    },
};
