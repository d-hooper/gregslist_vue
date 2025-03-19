<script setup>
import { AppState } from '@/AppState.js';
import HouseDetails from '@/components/HouseDetails.vue';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/HouseListing.vue';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

onMounted(() => {
  getHouses()
})

async function getHouses() {
  try {
    await housesService.getHouses()
  }
  catch (error) {
    Pop.error('Could not get houses', error);
    logger.error('COULD NOT GET HOUSES', error)
  }
}

</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center mb-3 mt-2">
          <h1 class="display-3">Houses</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <HouseForm />
      </div>
      <div class="col-md-6 px-0">
        <img src="https://images.unsplash.com/photo-1622790410882-c1f00a56083e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="A family playing a game in their home" class="rounded-2 shadow-lg">
      </div>
    </div>
  </section>
  <section class="container">
    <div v-for="house in houses" :key="house.id" class="row my-4">
      <div class="col-12">
        <HouseListing :houseProp="house" />
      </div>
    </div>
  </section>
  <HouseDetails />
</template>


<style lang="scss" scoped>
img {
  max-height: 70dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>