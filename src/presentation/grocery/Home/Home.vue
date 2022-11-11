<script src="./Home.js" />
<style src="./Home.scss" lang="scss"></style>
<i18n src="./Home.txt" lang="yaml"></i18n>

<template>
  <span>
    <!-- <Banner /> -->
    <div class="banner-home">
      <img
        width="1440"
        height="600"
        src="https://www.pingodoce.pt/wp-content/uploads/2022/09/banner_principal.png"
        class="lazy-load vc_single_image-img attachment-full is-loaded"
        alt="Cada loja Pingo Doce vai apoiar a causa mais votada com até 1.000€"
        sizes="1120px"
      />
    </div>

    <div v-if="customerGroup === 'Loyalty'"  class="pt-30 pl-15 text-center">
      <img
        src="../assets/img/PingoDoceNoviembre_15.gif"
        class="d-inline-block;"
      />
    </div>

    <div v-if="customerGroup === 'Customer'"  class="pt-30 pl-15 text-center">
      <img
        src="../assets/img/PingoDoceOctubre_11.gif"
        class="d-inline-block;"
      />
    </div>
    <div class="pt-40 pl-120 pr-120 pb-30 text-center">
      <div class="d-flex justify-content-around">
        <div class="card" style="width: 22rem; background-color: #000000; border-style: none;">
          <img class="card-img-top receitas"
            src="https://www.pingodoce.pt/wp-content/uploads/2022/10/receitas-one-pot.jpg"/>
          <div class="card-body pr-70 pl-70 pb-50 pt-50">
            <a href="/PT/pt/products/receitas"> 
              <p class="card-text" style="color: #fefefe;"> O que lhe apetece comer hoje? Temos sugestões saudáveis e equilibradas para ajudar a planear os seus
              almoços e jantares
              </p>
            </a>
          </div>
        </div>

        <div class="card" style="width: 22rem; background-color: #000000; border-style: none;">
          <img class="card-img-top frescos"
            src="https://www.pingodoce.pt/wp-content/uploads/2021/06/dourada-costa-da-madeira-pingo-doce.jpg"/>
          <div class="card-body pr-70 pl-70 pb-50 pt-50">
            <a href="https://www.pingodoce.pt/produtos/frescos/" target="_blank"> 
              <p class="card-text" style="color: #fefefe;"> Os frescos fazem parte da essência do Pingo Doce. A carne mais tenra, 
                o peixe mais fresco e a fruta e os legumes acabados de colher
              </p>
            </a>
          </div>
        </div>

        <div class="card" style="width: 22rem; background-color: #000000; border-style: none;">
          <img class="card-img-top marcas"
            src="https://www.pingodoce.pt/wp-content/uploads/2022/10/Destaque_GoActive-2.jpg"/>
          <div class="card-body pr-70 pl-70 pb-50 pt-50">
            <a href="https://www.pingodoce.pt/produtos/marca-propria-pingo-doce/" target="_blank"> 
              <p class="card-text" style="color: #fefefe;"> O melhor preço que a qualidade pode ter
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="banner-area pt-30 d-none">
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
    </div> -->
    <Icons />
  </span>
</template>
