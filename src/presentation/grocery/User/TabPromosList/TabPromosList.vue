<i18n src="./TabPromosList.txt" lang="yaml"></i18n>
<script src="./TabPromosList.js"></script>
<style src="./TabPromosList.scss" lang="scss"></style>

<template>
    <div class="myaccount-content">
        <h3>{{ t('promos') }}</h3>
        <p>{{_promos}}</p>
        <Spinner v-if="loading" />
         <div v-else-if="promosListNotEmpty">
             <div class="promos">
                <div class="card" v-for="promo in promos" :key="promo.id">
                    <div class="body">
                        <h5 class="card-title">{{promo.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <span>{{ t('validUntil') }}</span>
                            <BaseDate
                                :date="promo.validUntil"
                                :format="'short'"
                            />
                        </h6>
                        <p class="card-text">{{promo.description}}</p>
                        <p>{{promo.id}}</p>
                    </div>
                </div>
            </div>
         </div>
         <div v-else>
            <span>
                {{ t('emptyPromos') }}
            </span>
        </div>
    </div>
</template>