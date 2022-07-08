<template>
  <ion-page>
    <ion-split-pane content-id="main" when="lg">
    <!--  the side menu  -->
    <ion-menu content-id="main" menu-id="mainMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item>
          Home
        </ion-item>
        <ion-item button router-link="/contact">
          Contact
        </ion-item>
      </ion-content>
    </ion-menu>

    <!-- the main content -->
    <ion-content id="main">
      <ion-tabs>
      <ion-router-outlet ></ion-router-outlet>
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
    </ion-content>
  </ion-split-pane>
    
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
  IonRouterOutlet,IonSplitPane,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonItem
} from '@ionic/vue';
import {
  gameControllerOutline,
  watchOutline,
  footstepsOutline,
} from 'ionicons/icons';

export default defineComponent({
  name: 'MainLayout',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,IonSplitPane,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonItem
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
