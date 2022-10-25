<script src="./Icons.js" />

<i18n src="./Icons.txt" lang="yaml"></i18n>

<template>
    <div class="service-area pt-70 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="service-icon">
                <img src="../assets/img/discount-50_green.png"/>
              </div>
              <div class="service-content">
                <h6>{{ t('discounts') }}</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="service-icon">
                <img src="../assets/img/meat-50-green.png"/>
              </div>
              <div class="service-content">
                <h6>{{ t('fresh') }}</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="service-icon">
                <img src="../assets/img/clock-50-green.png"/>
              </div>
              <div class="service-content">
                <h6>{{ t('24h') }}</h6>
                <h6>{{ t('24h_body') }}</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="service-icon">
                <img src="../assets/img/country-house-50-green.png"/>
              </div>
              <div class="service-content">
                <h6>{{ t('orders') }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>