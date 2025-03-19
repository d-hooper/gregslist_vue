<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

async function deleteHouse(houseId) {
  try {
    const confirmed = await Pop.confirm('Do you want to delete this listing?', 'This can not be undone', 'Yes', 'No')

    if (!confirmed) {
      return
    }

    await housesService.deleteHouse(houseId)
  }
  catch (error) {
    Pop.error(error, 'Could not delete house');
    logger.error('COULD NOT DELETE HOUSE', error)
  }
}

</script>


<template>
  <div class="row rounded house-border border-vue shadow-lg mb-3">
    <div class="col-md-7">
      <div class="d-flex flex-column justify-content-between h-100">
        <div>
          <div>
            <p class="fs-3 mb-3">{{ `${houseProp.levels}-Story ${houseProp.bedrooms} Bed ${houseProp.bathrooms} Bath
              Home`}}</p>
          </div>
          <div class="d-flex justify-content-between mt-3">
            <p class="fs-4 fw-bold">Listed Price: {{ `$${houseProp.price.toLocaleString()}` }}</p>
            <p class="fs-4 fw-bold">Built in {{ houseProp.year }}</p>
          </div>
          <div class="mt-3 fs-5">
            <p>{{ houseProp.description }} </p>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3 align-items-center">
          <div class="d-flex gap-2 align-items-center">
            <img :src="houseProp.creator.picture" class="creator-img">
            <span>{{ houseProp.creator.name }}</span>
          </div>
          <div v-if="houseProp.creator.id == account?.id">
            <button @click="deleteHouse(houseProp.id)" class="btn btn-outline-danger" type="button"
                    title="Delete house listing">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 px-0">
      <div>
        <img :src="houseProp.imgUrl"
             :alt="`A ${houseProp.levels}-Story Home with ${houseProp.bedrooms} bedrooms and ${houseProp.bathrooms} bathrooms`"
             class="house-img">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.house-border {
  border-style: ridge;
  border-width: thick;
}

.house-img {
  height: 40dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.creator-img {
  height: 3.6rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>