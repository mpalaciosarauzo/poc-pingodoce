<style src="./style.css" scoped></style>
<i18n src="./CartLikePriceDetail.txt" lang="yaml"></i18n>
<script src="./CartLikePriceDetail.js"></script>
<template>
  <div v-if="cart" class="grand-total-wrap">
    <h4 class="summary-title">{{ t("cartTotals") }}</h4>

    <div class="grand-total-content">
      <div class="single-grand-total">
        <div class="single-grand-total-left">
          <span>{{ t("subtotal") }}</span>
        </div>
        <div class="single-grand-total-right" data-test="cart-subtotal-price">
          <span>
            <BasePrice :price="subTotal(cart)" />
          </span>
        </div>
      </div>

      <div class="single-grand-total">
        <div class="single-grand-total-left">
          <span>{{ t("salesTax") }}</span>
        </div>
        <div class="single-grand-total-right" data-test="cart-taxes-amount">
          <span>
            <BasePrice :price="taxes(cart)" />
          </span>
        </div>
      </div>
      <DiscountCodes
        v-if="discountCodesExist(cart)"
        :cart="cart"
        :editable="editable"
      />
      <Promotions v-if="promotionsCodesExists" :promotionsCodes="promos" />
    </div>
    <div class="cart-total-wrap">
      <div class="single-cart-total-left">
        <b>{{ t("total") }}</b>
      </div>
      <div class="single-cart-total-right" data-test="cart-total-price">
        <b>
          <BasePrice :price="{ value: cart.totalPrice }" />
        </b>
      </div>
    </div>
    <div class="grand-btn">
      <router-link :to="{ name: 'checkout' }" data-test="checkout-button">{{
        t("checkout")
      }}</router-link>
    </div>
  </div>
</template>
