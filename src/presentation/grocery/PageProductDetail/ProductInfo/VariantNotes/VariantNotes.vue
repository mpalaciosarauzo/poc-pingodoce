<script src="./VariantNotes.js"></script>
<i18n src="./VariantNotes.txt" lang="yaml"></i18n>

<template>
  <div class="select-row">
    <ul class="list-inline" data-test="input-selector-weight">
      <li>
        <p>Notas de preparação</p>
        <div
          class="d-flex flex-row justify-content-center align-items-center align-content-center"
        >
          <textarea
            id="preparationNotesTA"
            v-model="preparationNotes"
            @change="selectedPreparationNotes"
            rows="5"
            cols="60"
            name="preparationNotesTextArea"
          >
          </textarea>
        </div>
      </li>
    </ul>
  </div>
</template>
