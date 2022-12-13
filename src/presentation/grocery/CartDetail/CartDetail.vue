<style src="./CartDetail.scss" lang="scss"></style>
<i18n src="./CartDetail.txt" lang="yaml"></i18n>
<script src="./CartDetail.js"></script>

<template>
  <div class="cart-page">
    <div v-if="cartNotEmpty(cart)" class="cart-header">
      <h2 class="cart-title">{{ t("yourCart") }}</h2>
    </div>

    <Spinner v-if="loading" />

    <div class="cart-main-area pb-100" v-else-if="cartNotEmpty(cart)">
      <div class="container-fluid pl-50 pr-50">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <form>
              <div class="row">
                <div class="col-lg-8 cart-product-table">
                  <CartLikeContentDetail :cart="cart" :editable="true" />
                  <div class="cart-shiping-update-wrapper">
                    <AddDiscountCodeForm />
                  </div>
                </div>
                <div class="col-lg-4 cart-summary">
                  <CartLikePriceDetail
                    :cart="cart"
                    :editable="true"
                    class="total-price-calc"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!cartNotEmpty(cart)" class="empty-area pt-120 pb-120">
      <div class="container">
        <div class="empty-content text-center" data-test="empty-cart">
          <h2>{{ t("yourCart") }}</h2>
          <p>{{ t("empty") }}</p>
          <router-link to="/">{{ t("continueShopping") }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
