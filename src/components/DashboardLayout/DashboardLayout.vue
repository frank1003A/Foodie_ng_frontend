<template>
    <div>
        <input type="checkbox" id="sidebar-toggle">
        <div class="sidebar">
            <div class="sidebar-header">
                <h3 class="brand">
                    <span class="ti-bolt"></span> 
                    <span>Foodie</span>
                </h3> 
                <label for="sidebar-toggle" class="ti-menu-alt"> <img src="" alt="ico"></label>
            </div>
            
            <div class="sidebar-menu-wrapper">
                <ul>
                    <li>
                        <router-link to="/admin/dashboard">
                        <div class="sidebar-menu">
                            <span class="ti-home"></span>
                                <span>Home</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/categories">
                        <div class="sidebar-menu">
                            <span class="ti-face-smile"></span>
                                <span>Categories</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/menu">
                        <div class="sidebar-menu">
                            <span class="ti-agenda"></span>
                                <span class="letter">Menu</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/orders">
                        <div class="sidebar-menu">
                            <span class="ti-clipboard"></span>
                                <span>Orders</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/users">
                        <div class="sidebar-menu">
                            <span class="ti-folder"></span>
                                <span >User</span>
                            </div>
                        </router-link>
                    </li>

                    <div class="profile_content">
                        <div class="profile">
                            <div class="profile_details">
                                <img class="img-1" src="@/assets/simg/img2.jpg" alt="">
                                <div class="name_position" >
                                    <div class="name">
                                        <h5>Frank.Ezene</h5>
                                    </div>
                                        <div class="position">
                                            <p>Admin</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
            </div>
        
        
        <div class="main-content">
            
            <header>
                <div class="search-wrapper-second">
                    <div class="searchBar">
                        <input id="searchQueryInput" name="searchQueryInput" type="text" placeholder="search">
                    </div>
                    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit"></button>
                </div>

                <div class="rounded-ribs-wrapper" >
                    <button class="rounded-ribs"><img src="" alt=""/></button>
                    <button class="rounded-ribs"><img src="" alt=""/></button>
                    <button class="rounded-ribs"><img src="" alt=""/></button>
                </div>

                <div class="divider">
                    |
                </div>

                    <div class="rounded-ribs-wrapper">
                        <!--
                        <div class="usertext" >
                        <h3>Ezene B</h3>
                        <p>Admin</p>
                        </div>
                        -->
                       <img class="img-1" src="@/assets/simg/img2.jpg" alt="">
                    </div>
                
                <div class="social-icons">
                    <span @click="signout" class="ti-power-off"></span>
                    <div></div>
                </div>
            </header>
            
            <main>
                <slot name="main-content"></slot>
            </main>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardLayout'
}
</script>