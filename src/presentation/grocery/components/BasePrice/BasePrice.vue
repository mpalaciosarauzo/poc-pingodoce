<style src="./style.css" scoped></style>
<style src="./BasePrice.scss" lang="scss" scoped></style>
<script src="./BasePrice.js"></script>

<template>
  <div v-if="!hasDiscount">
    <BaseMoney :money="originalPrice" />
  </div>
  <div v-else>
    <span data-test="price-old-value" class="old-price">
      <BaseMoney :money="originalPrice" />
    </span>
    <span data-test="price-new-value" class="new-price">
      <BaseMoney :money="discountedPrice" />
    </span>
  </div>
</template>
