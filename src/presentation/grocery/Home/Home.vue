<script src="./Home.js" />
<style src="./Home.scss" lang="scss"></style>
<i18n src="./Home.txt" lang="yaml"></i18n>

<template>
  <span>
    <!-- <Banner /> -->
    <img
      width="1680"
      height="380"
      src="https://www.consum.es/wp-content/uploads/2022/05/ban-folleto-1208x380px-cast.jpg"
      class="lazy-load vc_single_image-img attachment-full is-loaded"
      alt=""
      srcset="
        https://www.consum.es/wp-content/uploads/2022/05/ban-folleto-1208x380px-cast.jpg          1208w,
        https://www.consum.es/wp-content/uploads/2022/05/ban-folleto-1208x380px-cast-300x94.jpg    300w,
        https://www.consum.es/wp-content/uploads/2022/05/ban-folleto-1208x380px-cast-768x242.jpg   768w,
        https://www.consum.es/wp-content/uploads/2022/05/ban-folleto-1208x380px-cast-1024x322.jpg 1024w
      "
      sizes="1120px"
    />

    <div class="pt-30 pl-15 text-center">
      <img
        src="https://www.consum.es/wp-content/uploads/2022/05/1208x256-banner-1º-JUNIO-CASTE.gif"
        class="d-inline-block;"
      />
    </div>
    <div class="pt-30 pl-15 text-center">
      <div class="d-flex justify-content-around">
        <div class="esparragos">
          <a href="https://entrenosotros.consum.es/esparragos-propiedades" target="_blank">
            <img
              src="https://www.consum.es/wp-content/uploads/2022/05/CAST_esparragos_reposo_386x552px.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.consum.es/carta-helados/cast/index.html" target="_blank"
          >
            <img
              src="https://www.consum.es/wp-content/uploads/2022/05/FRAME1-1.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://labodega.consum.es/tipos-de-cerveza-roja" target="_blank"
          >
            <img
              src="https://www.consum.es/wp-content/uploads/2022/05/CAST_bodega_cerveza_roja_reposo_386x552px.jpg"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="banner-area pt-30 d-none">
      <div class="custom-container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link
                  :to="{
                    //TODO: Change to the proper link with proper categorySlug
                    name: 'home',
                    //params: { categorySlug: 'accessories' },
                  }"
                >
                  <img
                    src="../assets/img/jeans1.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('w_jeans') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link
                  :to="{
                    //TODO: Change to the proper link with proper categorySlug
                    name: 'home',
                    //params: { categorySlug: 'accessories' },
                  }"
                >
                  <img
                    src="../assets/img/sho3.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('sneakers') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link
                  :to="{
                    //TODO: Change to the proper link with proper categorySlug
                    name: 'home',
                    //params: { categorySlug: 'accessories' },
                  }"
                >
                  <img
                    src="../assets/img/acc.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('accessories') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link
                  :to="{
                    //TODO: Change to the proper link with proper categorySlug
                    name: 'home',
                    //params: { categorySlug: 'accessories' },
                  }"
                >
                  <img
                    src="../assets/img/s3.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('bathing_suits') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-area pt-70 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="service-icon">
                <i class="las la-shipping-fast"></i>
              </div>
              <div class="service-content">
                <h6>{{ t('free_shipping_head') }}</h6>
                <p>
                  {{ t('free_shipping_body') }}&nbsp;
                  <BaseMoney
                    :money="{
                      centAmount: 10000,
                      fractionDigits: 2,
                    }"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="service-icon">
                <i class="las la-coins"></i>
              </div>
              <div class="service-content">
                <h6>{{ t('return_head') }}</h6>
                <p>{{ t('return_body') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="service-icon">
                <i class="las la-headphones"></i>
              </div>
              <div class="service-content">
                <h6>{{ t('support_head') }}</h6>
                <p>{{ t('support_body') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="service-icon">
                <i class="las la-shield-alt"></i>
              </div>
              <div class="service-content">
                <h6>{{ t('secure_checkout_head') }}</h6>
                <p>{{ t('secure_checkout_body') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
