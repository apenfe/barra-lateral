<template>

    <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">

        <header class="header">

            <button class="menu-button" @click="collapsed = !collapsed">

                <font-awesome-icon :icon="['fas', 'bars']" />

            </button>

        </header>

        <div class="profile">

            <img :src="`/images/${menuItems.profile.image}`" alt="imagen">
            <div class="profile-name" v-if="!collapsed">{{menuItems.profile.name}}</div>

        </div>

        <div class="menu-items">

            <ul>

                <MenuItem v-for="MenuItem in menuItems.items" :key="MenuItem.id" :item="MenuItem" :collapsed="collapsed"/>

            </ul>

        </div>

    </div>
    
</template>
  
<script setup>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import menuItems from './menuItems';
import MenuItem from './MenuItem.vue';

const collapsed = ref(false);
  
</script>
  
<style scoped>

.menu{
    background-color: #222;
    color: white;
    height: 100vh;
    transition: width 0.3s;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    top: 0;
}

.header{
    display: flex;
    justify-content: end;
}

.menu-button{
    border: none;
    background-color: transparent;
    color: white;
    padding: 10px;
}

.collapsed{
    width: 80px;
}

.expanded{
    width: 350px;
}

.profile{
    padding: 10px;
    text-align: center;
}

.profile img{
    border-radius: 50%;
    min-width: 50px;
    max-width: 300px;
    width: 100%;
}

.profile-name{
    padding: 10px 0;
    font-size: 18px;
}

.menu-items ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
  
</style>
  