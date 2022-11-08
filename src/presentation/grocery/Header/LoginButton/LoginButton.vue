<style src="./LoginButton.scss" lang="scss"></style>
<i18n src="./LoginButton.txt" lang="yaml"></i18n>
<script src="./LoginButton.js"></script>

<template>
    <router-link
      v-if="showLoggedIn"
      :to="{ name: 'user' }"
      class="header-login account-link"
      data-test="login-info-name"
    >
      <i class="dl-icon-user12" />
      <span class="target-text hidden-xs hidden-sm">{{
        t('myAccount')
      }}</span>
    </router-link>

    <router-link 
      v-else 
      :to="{ name: 'login' }" 
      class="header-login login-link" 
      data-test="login-button"
    >
      <i class="dl-icon-user12" />
      <span class="target-text hidden-xs hidden-sm">{{
        t('Sign in')
      }}</span>
    </router-link>
</template>
