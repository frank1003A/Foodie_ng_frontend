<template>
<dashboard-layout>
        <template v-slot:main-content >
            <h2 class="dash-title">Dashboard</h2>
              <div class="dash-cards">    
            <Card :text="'Account Balance'" :amount="'$30,659.45'" :icon_left="'B'" ></Card>
            
            <Card :text="'Sales Balance'" :amount="'$30,659.45'" :icon_left="'S'" ></Card>

            <Card :text="'Pending'" :amount="'$19,500.45'" :icon_left="'P'"></Card>


            </div>
            
            <section class="recent">
                <div class="">
                    <div class="activity-card">
                        <h3>Recent menu items</h3>
                        
                        <div class="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>price</th>
                                        <th>Available?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(menuItem, index) in menu" :key="index" >
                                        <td>#{{index + 1}}</td>
                                        <td><img class="img-1" :src="menuItem.image" style="border-radius: 50%" height="50px" width="50px" alt=""></td>
                                        <td>{{menuItem.name}}</td>
                                        <td>{{menuItem.category}}</td>
                                        <td>{{menuItem.price}}</td>
                                        <td>
                                            <span class="badge success" v-if="Number(menuItem.isAvailable) === 1">Available</span>
                                            <span class="badge warning" v-else>Not available</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
    </template>
    </dashboard-layout>
  
</template>

<script>
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout.vue'
import Card from '../../components/Card.vue'

export default {
    name: 'Dashboard',
    components:{
        DashboardLayout,
        Card
    },
    data(){
        return{
            menu:[
                {
                    name: 'Fried rice and chicken',
                    price: '1200',
                    category: 'food and drinks',
                    restaurant: 'KFC Restaurant',
                    menu: 'Sunday Specials',
                    image: '../assets/simg/img3.jpg',
                    isAvailable: true,

                },
                {
                    name: 'Beans and wheat',
                    price: '1000',
                    category:' food and drinks',
                    restaurant: 'Onehouse Restaurant',
                    menu: 'green menu',
                    image: '../assets/simg/img2.jpg',
                    isAvailable: false
                }
            ]
        }
    },
    methods: {
        isAvailable(){

        }
    },

}
</script>

<style>

</style>