<template>
                <div class="card-single">
                    <div class="card-body">
                        <span class="ti-briefcase">{{icon_left}}</span>
                        <div>
                        <h5>{{text}}</h5>
                        <h4>{{amount}}</h4>
                        </div>
                        <img src="" alt="ico">
                    </div>
                    <!--
                    <div class="card-footer">
                        <a class="a" href="">View all</a>
                    </div>-->
                </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        text: String,
        amount: String,
        icon_left: Object
    }
}
</script>

<style lang="scss" scoped>
.card-single {
    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}

.card-body {
    padding: 1.3rem 1rem;
    display: flex;
    align-items: center;
}

.card-body span {
    font-size: 1.5rem;
    color: #777;
    padding-right: 1.4rem;
}

.card-body img{
    font-size: 1.5rem;
    padding-left: 1.4rem;
}

.card-body h5 {
    color: var(--text-grey);
    font-size: 1rem;
}

.card-body h4 {
    color: var(--color-dark);
    font-size: 1.1rem;
    margin-top: .2rem;
}

.card-footer {
    padding: .2rem 1rem;
    background: #f9fafc;
    border-radius: 10px
}

.card-footer a {
    color: var(--main-color);
}
    
</style>