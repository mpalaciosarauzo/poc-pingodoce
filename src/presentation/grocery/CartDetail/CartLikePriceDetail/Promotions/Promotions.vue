<i18n src="./Promotions.txt" lang="yaml"></i18n>
<script src="./Promotions.js"></script>

<template>
    <div class="single-grand-total">
        <div class="single-grand-total-left col-sm-6">
            <span>{{ t('appliedPromotions') }}</span>
        </div>
        <div
            class="single-grand-total-right col-sm-6"
        >
            <div
                v-for="promo in promotionsCodes"
                :key="promo.discount.id"
            >
                <b>
                    {{promo.discount.name}}
                </b>
            </div>
        </div>
    </div>
</template>