<script src="./VariableWeightSelector.js"></script>
<i18n src="./VariableWeightSelector.txt" lang="yaml"></i18n>

<template>
  <div class="variable-weight-selector">
    <ul class="list-inline" data-test="input-selector-weight">
      <li>
        <p>Insira o peso em gramas</p>
        <div
          class="d-flex flex-row justify-content-center align-items-center align-content-center"
        >
          <input
            type="number"
            id="weightQty"
            v-model="weightSelection.value"
            @change="selectedWeight"
          />
          <span class="ml-2">Gramas</span>
        </div>
      </li>
    </ul>
  </div>
</template>
