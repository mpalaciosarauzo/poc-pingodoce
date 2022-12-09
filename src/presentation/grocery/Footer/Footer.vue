<script src="./Footer.js" />
<style src="./Footer.scss" lang="scss"></style>
<i18n src="./Footer.txt" lang="yaml"></i18n>

<template>
  <footer class="footer-area pt-50">
    <div class="footer-top">
      <div class="custom-container">
        <div class="row">
          <div class="footer-column footer-column-1">
            <div class="footer-widget footer-about-2 mb-30">
              <div class="footer-logo">
                <a href="index.html"
                  ><img
                    src="https://www.pingodoce.pt/wp-content/themes/pingodoce/library/images/v2/logo-footer.png"
                    alt="Pingo Doce"
                /></a>
              </div>
              <div class="footer-info">
                <ul>
                  <li>
                    <a href="#"
                      >212 41 08 74 ou 808 20 45 45 (chamada para a rede fixa
                      nacional)</a
                    >
                  </li>
                  <li>Lisboa, Portugal</li>
                </ul>
              </div>
              <div class="footer-map">
                <a href="contact-us.html">Google maps</a>
              </div>
            </div>
          </div>
          <div class="footer-column footer-column-2">
            <div class="footer-widget mb-30">
              <div class="widget-title">
                <h3>{{ t("categories") }}</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li v-for="category in categories" :key="category.id">
                    <router-link
                      :class="isActive(category.slug) ? 'active' : ''"
                      :to="{
                        name: 'products',
                        params: { categorySlug: category.slug },
                      }"
                      data-test="category-1st-level-link"
                    >
                      {{ category.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-column footer-column-3">
            <div class="footer-widget mb-30">
              <div class="widget-title">
                <h3>{{ t("community") }}</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/pingodoce/"
                      target="_blank"
                    >
                      <i class="lab la-facebook"></i>
                      <span>{{ t("facebook") }}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/user/pingodocept"
                      target="_blank"
                    >
                      <i class="lab la-youtube"></i>
                      <span>{{ t("youtube") }}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pingodoce/"
                      target="_blank"
                    >
                      <i class="lab la-instagram"></i>
                      <span>{{ t("instagram") }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-column footer-column-4">
            <div class="footer-widget mb-30">
              <div class="widget-title">
                <h3>{{ t("legal") }}</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/termos-condicoes/#cookies"
                      target="_blank"
                    >
                      {{ t("cookies_policy") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/termos-condicoes/"
                      target="_blank"
                    >
                      {{ t("use_terms") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/termos-condicoes/#dadospessoais"
                      target="_blank"
                    >
                      {{ t("data_privacy") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/acordo-ortografico/"
                      target="_blank"
                    >
                      {{ t("legal_notice") }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-column footer-column-5">
            <div class="footer-widget mb-30">
              <div class="widget-title">
                <h3>{{ t("contact") }}</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/apoio-ao-cliente/"
                      target="_blank"
                    >
                      {{ t("customer_support") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/apoio-ao-cliente/perguntas-frequentes/"
                      target="_blank"
                    >
                      {{ t("faqs") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/apoio-ao-cliente/#contactos"
                      target="_blank"
                    >
                      {{ t("contact") }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-column footer-column-6">
            <div class="footer-widget subscribe-right mb-30">
              <div class="widget-title">
                <h3>{{ t("about_us") }}</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/sobre-nos/"
                      target="_blank"
                    >
                      {{ t("history") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/junte-se-a-nos/"
                      target="_blank"
                    >
                      {{ t("worths") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.jeronimomartins.com/en/"
                      target="_blank"
                    >
                      {{ t("organization") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/responsabilidade/"
                      target="_blank"
                    >
                      {{ t("ethics") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/comunicacao-de-irregularidades/"
                      target="_blank"
                    >
                      {{ t("supermarkets") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/acessibilidade/"
                      target="_blank"
                    >
                      {{ t("logistic") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pingodoce.pt/sobre-nos/noticias/"
                      target="_blank"
                    >
                      {{ t("press") }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom pt-25 pb-15">
      <div class="custom-container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-12"></div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12">
            <div class="footer-widget copyright-2 text-center">
              <p>
                © 2022 A sociedade Pingo Doce – Distribuição Alimentar, S.A.
                Todos os direitos reservados
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="footer-widget payments-img">
              <a
                ><img
                  class="payments"
                  :src="require('presentation/assets/img/payments.png')"
                  alt="payments"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
