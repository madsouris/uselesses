<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Watch</ion-title>
        <ion-buttons slot="end">
          <ion-button
            color="primary"
            router-link="/contact"
            router-direction="forward">
            <ion-icon slot="icon-only" :icon="chatbubbleOutline"></ion-icon>
          </ion-button>
          <ion-menu-button auto-hide></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Watch</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <ion-text>
          <p>Look at this stunning watch.</p>
        </ion-text>

        <ion-thumbnail>
          <ion-img
            src="https://api.lorem.space/image/watch?w=400"
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
  IonIcon,
  IonButtons,
  IonButton,
  IonText,
  IonThumbnail,
  IonImg,IonMenuButton
} from '@ionic/vue';
import { chatbubbleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'WatchPage',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonIcon,
    IonButtons,
    IonButton,
    IonText,
    IonThumbnail,
    IonImg,IonMenuButton
  },
  setup() {
    return {
      chatbubbleOutline,
    };
  },
});
</script>
