<style src="./ShippingMethod.scss" lang="scss" scoped></style>
<i18n src="./ShippingMethod.txt" lang="yaml"></i18n>
<script src="./ShippingMethod.js"></script>

<template>
  <div class="payment-method">
    <div
      v-for="shippingMethod in shippingMethods"
      :key="shippingMethod.methodId"
      class="pay-top sin-payment"
    >
      <input
        class="input-radio"
        v-model="method"
        type="radio"
        :value="shippingMethod.methodId"
        name="shipping_method"
      />
      <label data-test="checkout-form-shipping-method-name">
        <span class="col-md-10" style="padding: 0">
          {{ shippingMethod.name }}
        </span>
        <BaseMoney
          :money="price(shippingMethod)"
          data-test="checkout-form-shipping-method-price"
        />
      </label>
      <date-picker class="mx-datepicker" v-model:value="datePickerDate" format="YYYY-MM-DD" @change="setDatePickerDate"></date-picker>
      <div class="payment-box payment_method_bacs">
        <p
          data-test="checkout-form-shipping-method-description"
        >
          {{ shippingMethod.localizedDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
