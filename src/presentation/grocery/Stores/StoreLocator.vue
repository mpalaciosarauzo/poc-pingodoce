<i18n src="./StoreLocator.txt" lang="yaml"></i18n>
<script src="./StoreLocator.js" />
<style lang="scss" src="./StoreLocator.scss"></style>
<template>
  <div class="store-finder-wrapper">
    <div class="container pt-50">
      <div class="store-location-wrapper">
        <div class="map">
          <GMapMap :center="center" :zoom="7">
              <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />
          </GMapMap>
        </div>
        <div>
          <div id="googlePlaceBar">
            <h4>{{ t('search') }}</h4>
            <div id="place-radius">
              <GMapAutocomplete
                placeholder="Digite a sua localização"
                id="place-input"
                @place_changed="setPlace"
              >
              </GMapAutocomplete>
              <select v-model="searchRadius" id="radius">
                <option
                  v-for="opt in radiusOptions"
                  :key="opt.distance"
                  :value="opt.distance"
                >
                  {{ opt.label }}
                </option>
              </select>
            </div>
          </div>
          <h3>Lojas</h3>
          <div class="addresses">
            <ul class="list" v-if="channels?.length > 0">
              <li
                v-for="channel in channels"
                :key="channel.id"
                class="item address address--active mb-15"
                @click="click(channel)"
              >
                <div class="item-link">
                  <span class="distance mb-15">
                    <span
                      class="gm-computed-distance"
                      :data-coord-lat="
                        channel.geoLocation.coordinates[1]
                      "
                      :data-coord-lng="
                        channel.geoLocation.coordinates[0]
                      "
                    ></span>
                    <strong
                      class="title text-center"
                      data-test="store-name"
                    >
                      {{ channel.name }}
                    </strong>
                    <div class="text-center store-distance">
                      {{ distance(channel) }} quilômetros de distância
                    </div>
                  </span>
                  <b class="price"> </b>
                  <div class="info">
                    <div class="info-title">Endereço:</div>
                    <div class="info-content">
                      {{ channel.address.streetNumber }}
                      {{ channel.address.streetName }}
                      <br />
                      {{ channel.address.city }},
                      {{ channel.address.postalCode }}
                    </div>
                    <div class="info-title">
                      Horário de funcionamento:
                    </div>
                    <div class="info-content">
                      {{ openingHours(channel) }}
                    </div>
                  </div>
                  <div class="box-footer">
                    <div
                      class="action text-center"
                      v-if="!isSelected(channel)"
                    >
                      <input
                        type="hidden"
                        :value="channel.id"
                      />
                      <button
                        @click="setStore(channel)"
                        class="selectBtn"
                        :value="channel.id"
                        data-test="select-store"
                      >
                        Selecione esta loja
                      </button>
                    </div>
                    <div
                      class="
                        text-center
                        store-selected
                        action
                      "
                      v-on:click="unsetStore"
                      v-else
                      data-test="unselect-store"
                    >
                      Selecionado
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="no-stores-found" v-else>
              Nenhuma loja encontrada. Tente aumentar seu raio de pesquisa.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
