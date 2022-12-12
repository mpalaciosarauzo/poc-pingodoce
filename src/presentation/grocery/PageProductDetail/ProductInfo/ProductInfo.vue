<style src="./ProductInfo.scss" lang="scss" scoped></style>
<i18n src="./ProductInfo.txt" lang="yaml"></i18n>
<script src="./ProductInfo.js"></script>

<template>
  <div class="row" v-if="currentVariant">
    <div class="col-lg-5">
      <div class="product-details-tab">
        <ProductGallery :currentVariant="currentVariant" />
      </div>
    </div>
    <div class="col-lg-7">
      <div
        class="product-details-content product-details-ptb"
        data-test="product-data"
      >
        <h2 data-test="product-name">
          {{ currentVariant.name }}
        </h2>
        {{cart}}
        <h3>
          <BasePrice :price="currentVariant.scopedPrice" />{{productType.id === 'f1a07b46-5104-4446-ba14-0289ef7e5537' ? '/kg' : ''}}
          <span v-if="currentVariant.scopedPrice.discounted != null">
            <DiscountTag 
              :name="currentVariant?.scopedPrice?.discounted?.discount?.name" />
          </span>
        </h3>
        <VariableWeightSelector v-if="productType.id === 'f1a07b46-5104-4446-ba14-0289ef7e5537'" :sku="sku" />
        <VariantSelector
          :sku="sku"
          :allVariants="allVariants"
        />
        <VariantNotes v-if="allVariants.length > 1" :sku="sku" />
        <!-- @todo: calculate in stock -->
        <!-- <div v-if="availableQ">
          {{ t('available') }}: {{ availableQuantity }}
        </div> -->
        <AddToCartForm
          :sku="sku"
          :isOnStock="true"
          :availableQuantity="10"
          :productId="productType.id"
        />
        <a href @click.prevent="openAddToShoppingList">
          <i class="dl-icon-heart"></i
          ><span>Lista da compra</span>
        </a>

        <DetailsSection :currentVariant="currentVariant" :productDescription="productDescription"/>
      </div>
    </div>
  </div>
</template>
