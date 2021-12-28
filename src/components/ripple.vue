<template> 
 <div
      ref="container"
      @mousedown="addRipple"
      class="ripple-outer"
    >
      <transition-group class="ripples" name="grow" tag="div">
        <div
          class="ripple"
          v-for="ripple in ripples"
          :key="ripple.id"
          :style="{
            top: ripple.top,
            left: ripple.left,
            width: ripple.width,
            height: ripple.height,
            background: color
          }"
        ></div>
      </transition-group>
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "ripple",
  props: {
      color: {
      type   : String,
      default: "rgba(255, 255, 255, 0.3)"
    }
  },
  data() {
    return {
      ripples: [],
    };
  },
  method: {
      addRipple(e) {
      const { left, top } = this.$refs.container.getBoundingClientRect();
      const rippleId      = Date.now();
      this.ripples.push({
        width : `${this.rippleWidth}px`,
        height: `${this.rippleWidth}px`,
        left  : `${e.clientX - left - this.halfRippleWidth}px`,
        top   : `${e.clientY - top - this.halfRippleWidth}px`,
        id    : rippleId
      });
    },
    purgeRipples() {
      this.ripples = [];
    }
  },
  mounted() {
    const width = this.$refs.container.offsetWidth;
    const height = this.$refs.container.offsetHeight;
    this.rippleWidth = width > height ? width : height;
    this.halfRippleWidth = this.rippleWidth / 2;

    window.addEventListener("mouseup", this.purgeRipples);
  },
  beforeMount() {
    window.removeEventListener("mouseup", this.purgeRipples);
  },
};
</script>

<style lang="scss" scoped>
.fab {
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background: #F44336;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease-out;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}

.fab.fab-cyan {
  background: rgb(35, 206, 206);
}

.fab:hover {
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
}

.btn {
  text-align: center;
  border-radius: 2px;
  user-select: none;
  font-family: Roboto;
  cursor: pointer;
  background: #26a69a;
  color: #FFF;
  transition: .3s ease-out;
  text-transform: uppercase;
  font-weight: bold;
  height: 40px;
  width: 100px;
  line-height: 40px;
  padding: 0 40px;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}
.btn.btn-flat,
.btn.btn-flat:hover {
  box-shadow: none;
  color: #333;
  background: transparent;
}
.btn.btn-white,
.btn.btn-white:hover {
  background: #FFF;
  color: #333
}
.btn:hover {
  background: #2bbbad;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
}

.fab.fab-purple {
  background: rgb(123, 35, 206);
}


/*************************************/
/**
/**         RIPPLE CLASSES
/**
/*************************************/

.ripple-outer {
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
}
.ripples {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events:none;
}
.ripple {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}


.grow-enter-active, .grow-enter-to-active {
  transition: all 1500ms ease-out;
}
.grow-leave-active, .grow-leave-to-active {
  transition: all 700ms ease-out;
}

.grow-enter {
  transform: scale(0);
  opacity: 1;
}

.grow-enter-to {
  transform: scale(4);
  opacity: 1;
}

.grow-leave {
  transform: scale(4);
  opacity: 1;
}
.grow-leave-to {
  transform: scale(4);
  opacity: 0;
}
</style>
