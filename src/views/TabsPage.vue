<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="watch" href="/page/watch">
          <ion-icon :icon="watchOutline" />
          <ion-label>Watches</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="shoes" href="/page/shoes">
          <ion-icon :icon="footstepsOutline" />
          <ion-label>Shoes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="games" href="/page/games">
          <ion-icon :icon="gameControllerOutline" />
          <ion-label>Games</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import {
  gameControllerOutline,
  watchOutline,
  footstepsOutline,
} from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      gameControllerOutline,
      watchOutline,
      footstepsOutline,
    };
  },
});
</script>
