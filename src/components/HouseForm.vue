<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableHouseData = ref({
  levels: null,
  bedrooms: null,
  bathrooms: null,
  year: null,
  price: null,
  description: '',
  imgUrl: ''
})

async function createHouse() {
  try {
    await housesService.createHouse(editableHouseData.value)
    editableHouseData.value = {
      levels: null,
      bedrooms: null,
      bathrooms: null,
      year: null,
      price: null,
      description: '',
      imgUrl: ''
    }
  }
  catch (error) {
    Pop.error(error, 'Could not create house listing');
    logger.error('COULD NOT CREATE HOUSE LISTING', error)
  }
}

</script>


<template>
  <form @submit.prevent="createHouse()">
    <div class="mb-3">
      <label for="updateHouseLevels">Number of Stories</label>
      <input v-model="editableHouseData.levels" id="updateHouseLevels" name="levels" type="number" required
             placeholder="1">
    </div>
    <div class="mb-3">
      <label for="updateNumOfBedrooms">Number of Bedrooms</label>
      <input v-model="editableHouseData.bedrooms" id="updateNumOfBedrooms" name="bedrooms" type="number" required
             placeholder="3">
    </div>
    <div class="mb-3">
      <label for="updateNumOfBathrooms">Number of Bathrooms</label>
      <input v-model="editableHouseData.bathrooms" id="updateNumOfBathrooms" name="bathrooms" type="number" required
             placeholder="2">
    </div>
    <div class="mb-3">
      <label for="updateHouseYear">Year of Construction</label>
      <input v-model="editableHouseData.year" id="updateHouseYear" name="year" type="number" required min="0" max="2025"
             placeholder="2015">
    </div>
    <div class="mb-3">
      <label for="updateHousePrice">Price</label>
      <input v-model="editableHouseData.price" id="updateHousePrice" name="price" type="number" required max="100000000"
             placeholder="450000">
    </div>
    <div class="mb-3">
      <label for="updateHouseDescription">House Description</label>
      <input v-model="editableHouseData.description" id="updateHouseDescription" name="description" type="text"
             max="500" placeholder="This house is...">
    </div>
    <div class="mb-3">
      <label for="updateHouseImgUrl">House Image URL</label>
      <input v-model="editableHouseData.imgUrl" id="updateHouseImgUrl" name="imgUrl" type="url" max="500"
             placeholder="https://image.com...">
    </div>
    <div class="d-flex">
      <button class="btn btn-outline-orange me-2" type="reset">
        Reset
      </button>
      <button class="btn btn-outline-vue" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
label {
  display: block;

}

input:not([type='color']) {
  width: 100%;
}

button:hover {
  color: #f8f9fa;
  text-shadow: 2px 2px 4px #000;
}
</style>