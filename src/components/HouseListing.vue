<script setup>
import { House } from '@/models/House.js';


defineProps({
  houseProp: { type: House, required: true }
})
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
        <div class="d-flex justify-content-between mb-3">
          <div class="d-flex gap-2 align-items-center">
            <img :src="houseProp.creator.picture" class="creator-img">
            <span>{{ houseProp.creator.name }}</span>
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