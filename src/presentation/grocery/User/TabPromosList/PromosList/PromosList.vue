<i18n src="./PromosList.txt" lang="yaml"></i18n>
<script src="./PromosList.js"></script>

<template>
    <p>{{promosListNotEmpty}}</p>
    <p>{{promos}}</p>
    <div v-if="promosListNotEmpty">
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
</template>