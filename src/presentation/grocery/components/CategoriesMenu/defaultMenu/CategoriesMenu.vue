<style src="./CategoriesMenu.scss" lang="scss"></style>
<i18n src="./CategoriesMenu.txt" lang="yaml"></i18n>
<script src="./CategoriesMenu.js"></script>

<template>
  <nav class="categories-menu">
    <ul v-if="categories && categories.length" class="menu-list">
      <li
        v-for="category in categoriesWithoutReceita.filter(
          (category) => !category.parent
        )"
        :key="category.id"
        class="menu-item"
        data-test="category-1st-level"
      >
        <router-link
          :class="isActive(category.slug) ? 'active' : ''"
          :to="{
            name: 'products',
            params: { categorySlug: category.slug },
            props: true,
          }"
          data-test="category-1st-level-link"
          @click="toggle = !toggle"
        >
          {{ category.name.toUpperCase() }}
        </router-link>
        <div v-show="isActive(category.slug) ? 'toggle' : ''">
          <ul>
            <li
              v-for="subcategory in subcategoriesList"
              :key="subcategory.id"
              class="menu-subitem"
              data-test="category-2nd-level-link"
            >
              <router-link
                :class="isActive(subcategory.slug) ? 'active' : ''"
                :to="{
                  name: 'products',
                  params: { categorySlug: subcategory.slug },
                }"
                data-test="category-2nd-level-link"
                v-if="category.id === subcategory.parent.id"
              >
                {{ subcategory.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
