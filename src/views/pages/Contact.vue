<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title> Contact page </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-text>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          iure ullam vel beatae harum architecto, tenetur quod qui? Beatae, ad
          enim? Laboriosam facere hic tenetur corporis voluptates voluptatibus
          perferendis deserunt.
        </p>
      </ion-text>
      <ion-thumbnail>
        <ion-img
          src="https://api.lorem.space/image/game?w=400"
          alt="image"></ion-img>
      </ion-thumbnail>
      <ion-text>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          iure ullam vel beatae harum architecto, tenetur quod qui? Beatae, ad
          enim? Laboriosam facere hic tenetur corporis voluptates voluptatibus
          perferendis deserunt.
        </p>
      </ion-text>
      <ion-text>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          iure ullam vel beatae harum architecto, tenetur quod qui? Beatae, ad
          enim? Laboriosam facere hic tenetur corporis voluptates voluptatibus
          perferendis deserunt.
        </p>
      </ion-text>
      <ion-text>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          iure ullam vel beatae harum architecto, tenetur quod qui? Beatae, ad
          enim? Laboriosam facere hic tenetur corporis voluptates voluptatibus
          perferendis deserunt.
        </p>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonContent,
  IonText,
  IonButtons,
  IonThumbnail,
  IonImg,
} from '@ionic/vue';
export default defineComponent({
  name: 'ContactPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonContent,
    IonText,
    IonButtons,
    IonThumbnail,
    IonImg,
  },
});
</script>

<style></style>
