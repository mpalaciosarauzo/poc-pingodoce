<script src="./VariableWeightSelector.js"></script>
<i18n src="./VariableWeightSelector.txt" lang="yaml"></i18n>

<template>
  <div class="row select-row">
    <ul class="list-inline"
        data-test="input-selector-weight">
      <li>
        <p>Introduzca el peso en gramos</p>
        <input type="number" id="weightQty" v-model="weightSelection" @change="selectedWeight">
        <span> Gramos</span>
      </li>
    </ul>
  </div>
</template>
