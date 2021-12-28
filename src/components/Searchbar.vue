<template>
<!--
  <div class="search-bar">
                    <span class="ti-search"></span>
                    <input type="search" placeholder="search food or restaurant..."/>
                    <button class="btn btn-main-gradient"><img src="../assets/icons/search_16.png" alt=""></button>
                </div>
                -->

     <form id="search-form-new" >
                        <input type="search" placeholder="search food item or restaurant..." name="">
                        <input type="search" placeholder="Address, Neighborhood..." name="">
                        <button id="searchbtn" class="btn btn-main-gradient">
                            <fa icon="search" />
                        </button>
     </form>           
</template>

<script>
export default {
    name: 'Searchbar',
    props:{
        keyword: String,
        searchword: String
    }
}
</script>

<style lang="scss">
#search-form-new{
    background: #eee;
    border-radius: 4px;
    display: flex;
    padding: 5px;
    height: 45px;
    /* width: 100%; */
    align-items: center;
    justify-content: center;

    input {
    border: none;
    outline: none;
    background: #eee;
    border-radius: 5px;
    width: 50%;
    padding: 10px;             
                &:focus{
                    border-color: #faae0a;
                }
            }

    select{
    width: 30%;
    background: #eee;
    border: none;
    color: #666;
    }
            

}
#searchbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    height: 35px;
}

.search-bar {
            display: flex;
            width: 100%;

            span {
                padding: 1rem 1.4rem;
                font-size: 1.5rem;
            }

            input {
                border: none;
                outline: none;
                height: 40px;
                flex: 1;
                //background:#f9f9f9;
                background: whitesmoke;
                border-radius: 5px;
                padding: 1rem 1.4rem;
                //border-left: 1px solid var(--text-grey);

                &:focus{
                    border-color: #faae0a;
                }
            }
        }

  @media only screen and (max-width: 860px) {
     .search-bar{
         justify-content: center;
         width: 100%;
     }
  }
    
</style>