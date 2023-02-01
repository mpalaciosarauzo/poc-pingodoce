<style src="./MiniCart.scss" lang="scss" scoped></style>
<i18n src="./MiniCart.txt" lang="yaml"></i18n>
<script src="./MiniCart.js"></script>

<template>
  <span>
    <div
      class="sidebar-cart-active"
      :class="{ inside: isOpen }"
      data-test="mini-cart-content"
    >
      <div class="sidebar-cart-all">
        <a
          class="cart-close"
          href="javascript:;"
          @click="close"
          data-test="mini-cart-close-button"
        >
          <i class="dl-icon-close"></i>
        </a>
        <div class="cart-content">
          <h3>{{ t("miniCart") }}</h3>
          <div v-if="cartNotEmpty(cart)" class="cart-product-table">
            <ul>
              <li
                v-for="lineItem in cart.lineItems"
                :key="lineItem.id"
                data-test="mini-cart-line-item"
                class="single-product-cart"
              >
                <div class="cart-img">
                  <router-link :to="productRoute(lineItem)">
                    <img
                      :src="displayedImageUrl(lineItem.variant)"
                      :alt="lineItem.name"
                    />
                  </router-link>
                </div>
                <div class="cart-title">
                  <h4>
                    <router-link
                      :to="productRoute(lineItem)"
                      data-test="cart-line-item-link"
                    >
                      {{ lineItem.name }}
                      {{ lineItemAttr(lineItem) }}
                    </router-link>
                  </h4>
                  <span data-test="cart-line-item-quantity">
                    {{ lineItem.quantity }} ud.
                    <BasePrice :price="total(lineItem)" />
                  </span>
                </div>
                <LineItemDeleteForm :lineItemId="lineItem.lineId" />
              </li>
            </ul>
            <div class="cart-total">
              <h4>
                <!-- @todo: when discounted the strikout style is not working -->
                {{ t("subtotal") }}:
                <BasePrice
                  :price="subTotal(cart)"
                  data-test="mini-cart-price"
                />
              </h4>
            </div>
            <div class="cart-checkout-btn">
              <router-link
                :to="{ name: 'cart' }"
                @click="close"
                class="checkout-button"
              >
                {{ t("viewBag") }}
              </router-link>
              <router-link
                :to="{ name: 'checkout' }"
                data-test="checkout-button"
                class="confirm-button"
                @click="close"
                >{{ t("checkout") }}</router-link
              >
            </div>
          </div>
          <div v-if="!cartNotEmpty(cart)">
            <h5>{{ t("emptyCart") }}</h5>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
