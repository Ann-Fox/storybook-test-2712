import MyButton from './MyButton.vue';

export default {
    component: MyButton,
};

export const MyPrimary = {
    render: () => ({
        name: 'I am the primary',
        components: { MyButton },
        template: '<MyButton property label="MyButton" />',
    }),
};

export const MySecondary = {
    render: () => ({
        components: { MyButton },
        template: '<MyButton backgroundColor="#ff0" label="😄👍😍💯" />',
    }),
};

export const MyTertiary = {
    render: () => ({
        components: { MyButton },
        template: '<MyButton backgroundColor="#ff0" label="📚📕📈🤓" />',
    }),
};
