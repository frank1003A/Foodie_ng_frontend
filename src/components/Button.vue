<template>
  <button @click="onClick" :class="bclass" :id="id" >
    <fa class="ti-icon" :icon="bicon"/>{{ bword }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    bword: String,
    bicon: String,
    bclass: String,
    id: String,
  },
  methods: {
    /*
    rippleEffect() {
      const buttons = document.querySelectorAll("button");
      buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
          let x = e.clientX- e.target.offsetLeft;
          let y = e.clientY - e.target.offsetTop;

          let span = document.createElement("span");
          span.style.left = `${x}px`;
          span.style.top = `${y}px`;
          btn.appendChild(span);

          setTimeout(() => {
            span.remove();
          }, 700);
        });
      });
    },
    */
    onClick(){
      this.$emit('btn-click')
    }
  },
  mounted() {
    /*
      this.rippleEffect();
      */
  },
};
</script>

<style lang="scss" scoped>
.ti-icon {
  margin-right: 0.3rem;
}

/**Ripple effect span*/
span{
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: ripple 700ms linear infinite;
}


@keyframes ripple {
  0%{
      width:0;
      height: 0;
      opacity: .5;
  }

  100%{
      width: 200px;
      height: 200px;
      opacity: 0;
  }
}
</style>
