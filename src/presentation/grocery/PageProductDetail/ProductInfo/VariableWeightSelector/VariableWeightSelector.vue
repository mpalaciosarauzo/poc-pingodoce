<script src="./VariantSelector.js"></script>
<i18n src="./VariantSelector.txt" lang="yaml"></i18n>

<template>
  <div class="row select-row">
    <ul class="list-inline"
        data-test="input-selector-weight">
      <li>
        <p>Introduzca el peso en gramos</p>
        <input type="number" id="weightQty" value="1000" v-model="weightSelection" @change="selectedWeight">
        <span> Gramos</span>
      </li>
    </ul>
  </div>
</template>
