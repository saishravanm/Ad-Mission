<template>
  <div class="div">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c73ed8845853a17df4f129392ffb34b636ba894fbc651536b25db5d761cc7b61?apiKey=837ef3c925004e4fb8d9b6661e66fd14&"
      class="img"
    /><img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e536e1d78bfacaa1bd26db2440e8583abef4bce17befdf70924ef83e4d32ec8f?apiKey=837ef3c925004e4fb8d9b6661e66fd14&"
      class="img-2"
    /><img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/657ad8e1d065d7fd7ba5418e99446fa47afd1a5ad324fd4d6dc975933fbb0689?apiKey=837ef3c925004e4fb8d9b6661e66fd14&"
      class="img-3"
    />
  </div>
</template>



<style scoped>
.div {
  background-color: #000;
  display: flex;
  align-items: start;
  gap: 20px;
  padding: 12px 12px 0 80px;
}
@media (max-width: 991px) {
  .div {
    flex-wrap: wrap;
    padding-left: 20px;
  }
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
  fill: #f8f8f8;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
}
.img-3 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
}
</style>