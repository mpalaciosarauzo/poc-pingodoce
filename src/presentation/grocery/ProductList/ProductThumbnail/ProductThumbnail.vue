<style src="./ProductThumbnail.scss" lang="scss"></style>
<i18n src="./ProductThumbnail.txt" lang="yaml"></i18n>
<script src="./ProductThumbnail.js"></script>

<template>
  <div class="product-container">
    <div class="product-wrap">
      <div class="product-img mb-25">
        <router-link
          :to="productRoute(product.slug, product.sku)"
        >
          <img
            height="135"
            width="135"
            class="default-img"
            :src="displayedImageUrl(product)"
            alt=""
          />
          <span
            data-test="product-thumbnail-sale-flag"
            v-if="hasDiscount && product.masterVariant.scopedPrice.discounted?.discount?.name"
            class="badge-pink badge-right"
            >{{
              (
                product.masterVariant.scopedPrice.discounted
                  ?.discount?.name || ''
              ).toUpperCase()
            }}</span
          >
        </router-link>
        
      </div>
      <div class="product-content text-center">
        <h3>
          <router-link
            :to="productRoute(product.slug, product.sku)"
            data-test="product-thumbnail-name"
            >{{ product.name }}
          </router-link>
        </h3>
        <div class="product-price mt-25" v-if="hasPrice">
          <span>
            <BasePrice
            :price="product?.masterVariant?.scopedPrice"
            />{{product.productType.id === 'f1a07b46-5104-4446-ba14-0289ef7e5537' ? '/kg' : ''}}
          </span>
        </div>
        <div class="product-action mt-15">
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
          <button class="product-button" @click.prevent="() => addToCart(product.sku)">{{ t('addToCart') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
