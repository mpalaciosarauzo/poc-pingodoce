<style src="./ProductInfo.scss" lang="scss" scoped></style>
<i18n src="./ProductInfo.txt" lang="yaml"></i18n>
<script src="./ProductInfo.js"></script>

<template>
  <div class="row product-info" v-if="currentVariant">
    <div class="product-image-column col-lg-6">
      <div class="product-details-tab">
        <ProductGallery :currentVariant="currentVariant" />
      </div>
    </div>

    <div class="product-info-column col-lg-6">
      <div
        class="product-details-content product-details-ptb"
        data-test="product-data"
      >
        <h2 class="product-name" data-test="product-name">
          {{ currentVariant.name }}
        </h2>

        <div
          class="price-container"
          :class="{
            'has-discount': currentVariant.scopedPrice.discounted != null,
          }"
        >
          <DiscountTag
            v-if="currentVariant.scopedPrice.discounted != null"
            :name="currentVariant?.scopedPrice?.discounted?.discount?.name"
            class="discounted-price"
          />

          <BasePrice
            :price="currentVariant.scopedPrice"
            class="original-price"
          />{{
            productType.id === "f1a07b46-5104-4446-ba14-0289ef7e5537"
              ? "/kg"
              : ""
          }}
        </div>

        <VariableWeightSelector
          v-if="productType.id === 'f1a07b46-5104-4446-ba14-0289ef7e5537'"
          :currentVariant="currentVariant"
          :sku="sku"
        />

        <VariantSelector :sku="sku" :allVariants="allVariants" />

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

        <a class="wishlist-button" href @click.prevent="openAddToShoppingList">
          <i class="dl-icon-heart" />
          <span>Lista da compra</span>
        </a>

        <DetailsSection
          :currentVariant="currentVariant"
          :productDescription="productDescription"
        />
      </div>
    </div>
  </div>
</template>
