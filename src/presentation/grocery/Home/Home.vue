<script src="./Home.js" />
<style src="./Home.scss" lang="scss"></style>
<i18n src="./Home.txt" lang="yaml"></i18n>

<template>
  <span>
    <!-- <Banner /> -->
    <div class="banner-home">
      <img
        width="1440"
        height="auto"
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
    </div>

    <div class="pt-30 pl-15 text-center">
      <img
        src="https://www.consum.es/wp-content/uploads/2022/05/1208x256-banner-1º-JUNIO-CASTE.gif"
        class="d-inline-block;"
      />
    </div>
    <div class="pt-30 pl-15 text-center">
      <div class="d-flex justify-content-around">
        <div>
          <a href="https://entrenosotros.consum.es/esparragos-propiedades" target="_blank">
            <img class="esparragos"
              src="https://www.consum.es/wp-content/uploads/2022/05/CAST_esparragos_reposo_386x552px.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.consum.es/carta-helados/cast/index.html" target="_blank"
          >
            <img class="helados"
              src="https://www.consum.es/wp-content/uploads/2022/05/FRAME1-1.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://labodega.consum.es/tipos-de-cerveza-roja" target="_blank"
          >
            <img class="cerveza"
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
    <Icons />
  </span>
</template>
