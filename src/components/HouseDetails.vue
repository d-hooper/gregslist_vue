<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const house = computed(() => AppState.activeHouse)

</script>


<template>
  <div class="modal fade" id="houseDetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div v-if="house" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">1234 Address Placeholder</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="fs-3 mb-0">
            {{ `This house has: ${house.levels} stories, ${house.bedrooms} bedrooms, and ${house.bathrooms} bathrooms.`
            }}
          </p>
          <div class="my-2 text-center">
            <img :src="house.imgUrl"
                 :alt="`A ${house.levels}-Story Home with ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms`"
                 class="house-img">
          </div>
          <div class="">
            <p class="fs-4 mb-0">
              {{ house.description }}
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-vue">Contact the Owner</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  width: 90%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>