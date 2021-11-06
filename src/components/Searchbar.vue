<template>
  <div class="search-bar">
                   <!-- <span class="ti-search"></span>-->
                    <input type="search" placeholder="search food or restaurant..."/>
                    <button class="btn btn-main-gradient"><img src="../assets/icons/search_16.png" alt=""></button>
                </div>
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
.search-bar {
            display: flex;
            width: 30%;

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

                &:checked{
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