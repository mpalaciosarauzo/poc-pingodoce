<style src="./Header.scss" lang="scss"></style>
<i18n src="./Header.txt" lang="yaml"></i18n>
<script src="./Header.js"></script>

<template>
  <header class="header">
    <div class="main-header-wrap">
      <div class="custom-container">
        <div class="header-top">
          <router-link to="/" class="site-logo">
            <img
              src="https://www.pingodoce.pt/wp-content/themes/pingodoce/library/images/v2/supermercados-pingo-doce.png"
              alt="Pingo Doce"
              class="img-responsive sunrise-logo"
            />
          </router-link>

          <div class="header-right">
            <div class="store-sections">
              <!-- <div class="header-selectors curr-lang-inc">
                <ul>
                  <Selector
                    data-test="country-selector-dropdown"
                    v-if="showLocationSelector"
                    :values="locations"
                    title="Location"
                    :value="location"
                    :setValue="setLocation"
                  />
                  <Selector
                    data-test="language-selector-dropdown"
                    :values="locales"
                    title="Language"
                    :value="locale"
                    :setValue="setLocale"
                  />
                </ul>
              </div> -->

              <router-link
                v-if="showStoreSelector"
                :to="{ name: 'stores' }"
                data-test="stores-link"
                class="header-store"
              >
                {{ t("stores") }}
              </router-link>
            </div>
            <div class="user-sections">
              <button @click.prevent="toggleSearch" class="header-search">
                <i class="dl-icon-search10" />
              </button>

              <button
                @click.prevent="miniCart.open"
                data-test="mini-cart-open-button"
                class="header-cart cart-active"
              >
                <i class="dl-icon-cart1" />

                <span
                  class="count-style"
                  :class="{ active: totalCartItems > 0 }"
                  >{{ totalCartItems }}
                </span>
              </button>

              <LoginButton />
            </div>
          </div>
        </div>

        <div class="header-bottom">
          <CategoriesMenu />
        </div>
      </div>
    </div>
    <div
      class="search-content-wrap main-search-active"
      :class="{ 'search-visible': searchOpen }"
    >
      <a @click="toggleSearch" class="search-close"
        ><i class="dl-icon-close"></i
      ></a>
      <div class="search-content">
        <form class="search-form">
          <input
            name="q"
            type="text"
            v-model="search"
            placeholder="Pesquisar toda a loja…"
            @submit.prevent="doSearch"
          />
          <button @click.prevent="doSearch" class="button-search">
            <i class="dl-icon-search10"></i>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<!-- CTA BUTTONS -->
<!-- <div
  class="search-content-wrap main-search-active"
  :class="{ 'search-visible': searchOpen }"
>
  <a @click="toggleSearch" class="search-close"
    ><i class="dl-icon-close"></i
  ></a>
  <div class="search-content">
    <form class="search-form">
      <input
        name="q"
        type="text"
        v-model="search"
        placeholder="Pesquisar toda a loja…"
        @submit.prevent="doSearch"
      />
      <button
        @click.prevent="doSearch"
        class="button-search"
      >
        <i class="dl-icon-search10"></i>
      </button>
    </form>
  </div>
</div> -->

<!-- colocar en el footer -->
<!-- <a href="#">{{ t('help') }}</a> -->
