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
        src="https://www.pingodoce.pt/wp-content/uploads/2022/09/banner_principal.png"
        class="lazy-load vc_single_image-img attachment-full is-loaded"
        alt="Cada loja Pingo Doce vai apoiar a causa mais votada com até 1.000€"
        sizes="1120px"
      />
    </div>

    <div class="pt-30 pl-15 text-center">
      <img
        src="https://www.consum.es/wp-content/uploads/2022/05/1208x256-banner-1º-JUNIO-CASTE.gif"
        class="d-inline-block;"
      />
    </div>
    <div class="pt-40 pl-120 pr-120 pb-30 text-center">
      <div class="d-flex justify-content-around">
        <div>
          <a href="https://www.pingodoce.pt/receitas/" target="_blank">
            <img class="receitas"
              src="https://www.pingodoce.pt/wp-content/uploads/2022/10/receitas-one-pot.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.pingodoce.pt/produtos/frescos/" target="_blank"
          >
            <img class="frescos"
              src="https://www.pingodoce.pt/wp-content/uploads/2021/06/dourada-costa-da-madeira-pingo-doce.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.pingodoce.pt/produtos/marca-propria-pingo-doce/" target="_blank"
          >
            <img class="marcas"
              src="https://www.pingodoce.pt/wp-content/uploads/2022/10/Destaque_GoActive-2.jpg"
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
