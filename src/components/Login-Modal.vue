<template>
   <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="login-modal">
                    <slot name="content"></slot>
                </div>
                </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Login-modal', 

}
</script>
