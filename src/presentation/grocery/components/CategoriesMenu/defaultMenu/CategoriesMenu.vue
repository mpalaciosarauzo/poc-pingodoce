<style src="./CategoriesMenu.scss" lang="scss"></style>
<i18n src="./CategoriesMenu.txt" lang="yaml"></i18n>
<script src="./CategoriesMenu.js"></script>

<template>
  <nav class="categories-menu">
    <ul v-if="categories && categories.length" class="menu-list">
      <li
        v-for="category in categoriesWithoutReceita"
        :key="category.id"
        class="menu-item"
        data-test="category-1st-level"
      >
        <router-link
          :class="isActive(category.slug) ? 'active' : ''"
          :to="{
            name: 'products',
            params: { categorySlug: category.slug },
          }"
          data-test="category-1st-level-link"
        >
          {{ category.name.toUpperCase() }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
