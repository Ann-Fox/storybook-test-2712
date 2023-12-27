<template>
  <button type="button">{{ label }}</button>
</template>

<script>
// import {computed, reactive} from "vue";

export default {
  name: 'button',

  props: {
    label: {
      type: String,
      require: true,
    },
    backgroundColor: {
      type: String,
    },
  },

  // setup(props, { emit }) {
  //   props = reactive(props);
  //   return {
  //     classes: computed(() => ({
  //       'storybook-button': true,
  //       'storybook-button--primary': props.primary,
  //       'storybook-button--secondary': !props.primary,
  //       [`storybook-button--${props.size || 'medium'}`]: true,
  //     })),
  //     style: computed(() => ({
  //       backgroundColor: props.backgroundColor,
  //     })),
  //     onClick() {
  //       emit('click');
  //     },
  //   };
  // },
};

</script>


<style lang="scss">
button {
  background-color: #66bf3c;
  font-size: 30px;
}
</style>
