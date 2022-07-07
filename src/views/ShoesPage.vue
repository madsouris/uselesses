<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Shoes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Shoes</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding">
        <ion-text>
          <p>Look at this stunning shoes.</p>
        </ion-text>

        <ion-thumbnail>
          <ion-img
            src="https://api.lorem.space/image/shoes?w=400"
            alt="image"></ion-img>
        </ion-thumbnail>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonThumbnail,
  IonImg,
} from '@ionic/vue';

export default defineComponent({
  name: 'ShoesPage',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonText,
    IonThumbnail,
    IonImg,
  },
});
</script>
