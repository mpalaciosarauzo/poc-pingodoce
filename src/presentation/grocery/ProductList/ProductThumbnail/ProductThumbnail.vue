<style src="./ProductThumbnail.scss" lang="scss"></style>
<i18n src="./ProductThumbnail.txt" lang="yaml"></i18n>
<script src="./ProductThumbnail.js"></script>

<template>
  <div class="product-container">
    <div class="product-wrap">
      <div class="product-img">
        <router-link :to="productRoute(product.slug, product.sku)">
          <img class="default-img" :src="displayedImageUrl(product)" alt="" />
        </router-link>

        <span
          data-test="product-thumbnail-sale-flag"
          v-if="
            hasDiscount &&
            product.masterVariant.scopedPrice.discounted?.discount?.name
          "
          class="badge-pink badge-right"
          >{{
            (
              product.masterVariant.scopedPrice.discounted?.discount?.name || ""
            ).toUpperCase()
          }}</span
        >
      </div>

      <div class="product-description">
        <div class="cta-price">
          <BasePrice :price="product?.masterVariant?.scopedPrice" />{{
            product.productType.id === "f1a07b46-5104-4446-ba14-0289ef7e5537"
              ? "/kg"
              : ""
          }}
          {{
            product.productType.id === "2fd1da80-2956-4c98-a6f2-3f68fd9d738b"
              ? "/un"
              : ""
          }}
        </div>

        <router-link
          :to="productRoute(product.slug, product.sku)"
          data-test="product-thumbnail-name"
          ><h3>{{ product.name }}</h3>
        </router-link>
      </div>

      <div class="product-action">
        <button
          class="product-button"
          @click.prevent="() => addToCart(product.sku)"
        >
          <span class="add-label">{{ t("addToCart") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<!-- <a href @click.prevent="openAddToShoppingList"
><i class="dl-icon-heart"></i>
            <span>Shopping list</span></a
          >
          <a href @click.prevent="openQuickView"
            ><i class="dl-icon-view"></i>
            <span>Quick Shop</span></a
          > -->
<!-- @todo: need translation -->
<!-- <a
            data-toggle="tooltip"
            title="Add to Cart"
            href="#"
            @click.prevent="() => addToCart(product.sku)"
          >
            <i class="dl-icon-cart29"></i>
            <span>{{ t('addToCart') }}</span>
          </a> -->
