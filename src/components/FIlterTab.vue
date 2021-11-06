<template>
<div>
          <div class="custom-select">
                       <select name="location" id="main-select">
                            <option value="">Sort by popularity</option>
                       </select>
        </div>
        <br/>
        <div class="box">
          <div class="custom-select">
                       <select name="location" id="order-location">
                            <option value="">Categories</option>
                       </select>
        </div>
        <div class="checkbox-options">
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Meals</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Drinks</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Snacks</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Water</label>
          </div>
        </div>
        </div>
        <div class="box">
          <div class="custom-select">
                       <select name="location" id="order-location">
                            <option value="">Rating</option>
                       </select>
        </div>
        <div class="checkbox-options">
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Excellent 10+</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Good 8+</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Mediocre 5+</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">Bad -5</label>
          </div>
        </div>
        </div>
        <!--date option-->
        <div class="box">
          <div class="custom-select">
                       <select name="location" id="order-location">
                            <option value="date">Pick-up date</option>
                       </select>
                       
        </div>
        <div class="checkbox-options">
          <div class="options">
            <input type="date" name="date" id="date">
          </div>
          </div>
        </div>
        <!-- option end-->

        <div class="box">
          <div class="custom-select">
                       <select name="location" id="order-location">
                            <option value="">Price</option>
                       </select>
        </div>
        <div class="checkbox-options">
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">&#8358;0  &#8212; &#8358;1000</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">&#8358;1000  &#8212; &#8358;2000</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">&#8358;2000 &#8212; &#8358;3000</label>
          </div>
          <div class="options">
            <input type="checkbox" name="Pizza" id="italian">
          <label for="italian">&#8358;4000  &#8212; &#8358;10000</label>
          </div>
        </div>
        </div>
        <div class="box">
        <button class="btn btn-main-gradient btn-block">Filter</button>
        </div>
</div>
</template>

<script>
export default {
    name: 'FilterTab',
    data(){
        return{

        }
    }

}
</script>

<style lang='scss' scoped>
.custom-select{

    #main-select{
        width: 100%;
        padding: .5em 1.5em .5em 0;
        border-radius: 5px;
        background: #f4f4f4;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
    
    }
    select{
        width: 100%;
        padding: .5em 1.5em .5em 0;
        border-radius: 5px;
        background: #f4f4f4;
        border: none;
        outline: none;
        cursor: pointer;
    }
}

.box {
    border: 1px solid #f4f4f4;
    padding: 10px;
    height: auto;
}

.checkbox-options{
    display: flex;
    flex-direction: column;
}

.options{
    display: inline-flex;
    margin-top: 5px;
    margin-bottom: 5px;

    input{
        margin-right:5px;
    }
    label{
        color: #242424 ;
        font-size: .8rem;
    }
    #date{
        display: block;
    }
}
</style>