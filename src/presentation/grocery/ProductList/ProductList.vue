<i18n src="./ProductList.txt" lang="yaml"></i18n>
<style src="./ProductList.scss" lang="scss"></style>
<script src="./ProductList.js"></script>

<template>
  <div class="shop-area">
    <div v-if="error">
      <pre>{{ JSON.stringify(error, undefined, 2) }}</pre>
    </div>
    <Spinner v-if="loading" />
    <div class="custom-container" v-else-if="products">
      <!-- <TopBar
        v-on:toggle-filter="toggleFilter"
        @change-sort="changeSort"
        v-bind:show="show"
        v-bind:sort="sort"
        v-bind:count="products.count"
        v-bind:offset="products.offset"
        v-bind:total="products.total"
      /> -->
      <!-- <ProductFilter
        :facets="facets"
        :facetFilter="facetFilter"
        @filter-change="facetFilterChange"
        @channel-change="channelChange"
        :allChannels="allChannels"
        v-bind:show="show"
      /> -->

      <div class="category-header">

        <section
          v-if="categorySlug === 'frescos'"
          class="home-section image-section fresh-banner"
        >
          <div class="section-container">
            <img
              src="../assets/img/Frescos.png"
              class="d-inline-block;"
            />
          </div>
        </section>

        <section
          v-else-if="categorySlug === 'bebidas'"
          class="home-section image-section drinks-banner"
        >
          <div class="section-container">
            <img
              src="../assets/img/Bebidas.png"
              class="d-inline-block;"
            />
          </div>
        </section>

        <div v-else-if="categorySlug != ('frescos' || 'bebidas')">
          <h1>{{ categorySlug.split('-')[0] }}</h1>
        </div>
      </div>

      <div class="shop-wrapper" v-if="products.length">
        <div class="row justify-content-center mb-40">
          <!-- @open-quick-view="openQuickView"
            @open-add-shopping-list="openAddToShoppingList" -->
          <ProductThumbnail
            v-for="product in products"
            data-test="product-list"
            :key="product.id"
            :product="formatProduct(product)"
            :addToCart="addToCart"
          />
        </div>
        <Pagination :total="total" :page="page" :setPage="setPage" />
      </div>

      <div v-else>
        <div class="empty-results-container">
          <span class="empty-results" data-test="empty-results">
            {{ t("notFound") }}
          </span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="empty-results-container">
        <span class="empty-results" data-test="category-not-found">
          {{ t("categoryNotFound") }}
        </span>
      </div>
    </div>
  </div>
  <Icons />
</template>
