<style src="./PageCheckout.scss" lang="scss"></style>
<script src="./PageCheckout.js"></script>
<i18n src="./PageCheckout.txt" lang="yaml"></i18n>

<template>
  <span>
    <div v-if="cartNotEmpty(cart)" class="checkout-main-area pt-40 pb-100">
      <div class="container">
        <div class="checkout-header mb-60">
          <h2 class="checkout-title">{{ t("Checkout") }}</h2>
        </div>

        <div class="checkout-wrap">
          <div class="row">
            <div class="col-lg-7">
              <BillingDetails
                :billingAddress="billingAddress"
                :shippingAddress="shippingAddress"
                @update-billing-details="updateBilling"
                @update-shipping-details="updateShipping"
                @valid-billing-form="setValidBillingForm"
                @valid-shipping-form="setValidShippingForm"
              />
            </div>
            <div class="col-lg-5">
              <OrderOverview
                @update-shipping="updateShippingMethod"
                @complete-order="placeOrder"
                @payment-changed="paymentChanged"
                :paymentMethod="paymentMethod"
                :showError="showError"
                :cart="cart"
              />
              <ServerError :error="error" class="server-error">{{
                "unknownError"
              }}</ServerError>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="orderComplete" class="pt-80 pb-100">
      <div class="container">
        <div class="order-complete text-center">
          <h2>{{ t("thankYou") }}</h2>
        </div>
        <div class="mt-30 text-center">
          <TabOrderDetail :id="id" />
        </div>
        <div class="order-complete text-center">
          <router-link class="mt-50" to="/">
            {{ t("continueShopping") }}
          </router-link>
        </div>
      </div>
    </div>
  </span>
</template>
