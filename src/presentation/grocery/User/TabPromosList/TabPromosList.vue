<i18n src="./TabPromosList.txt" lang="yaml"></i18n>
<script src="./TabPromosList.js"></script>
<style src="./TabPromosList.scss" lang="scss"></style>

<template>
    <div class="myaccount-content">
        <h3>{{ t('promos') }}</h3>
        <Spinner v-if="loading" />
        <div v-else-if="customFieldsNotEmpty">
            <PromosList :idsPromos="idsPromos" />
        </div>
        <!-- <PromosList :idsPromos="idsPromos" /> -->
    </div>
</template>