<script src="./VariableWeightSelector.js"></script>
<i18n src="./VariableWeightSelector.txt" lang="yaml"></i18n>

<template>
  <div class="row select-row">
    <ul class="list-inline"
        data-test="input-selector-weight">
      <li>
        <p>Introduzca el peso en gramos</p>
        <div class="d-flex flex-row justify-content-center align-items-center align-content-center">
          <input type="number" id="weightQty" v-model="weightSelection" @change="selectedWeight">
          <span class="ml-2">Gramos</span>
        </div>
      </li>
    </ul>
  </div>
</template>
