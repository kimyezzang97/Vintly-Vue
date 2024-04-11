<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered class="bg-primary text-black">
      <q-toolbar class="items-center q-pt-md">
        <q-toolbar-title class="flex flex-center">
          <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg" /> -->
          <div>
            <router-link to="/">
              <q-img src="../assets/logo_brown.png" width="130px" to="/" />
            </router-link>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <!-- align="left" -->
        <q-space />
        <q-route-tab to="/page1" label="게시판" />
        <q-space />
        <q-space />
        <q-space />
        <q-route-tab to="/member/login" label="로그인" />
        <q-route-tab to="/member/join" label="회원가입" />
        <q-space />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-tabs v-model="tab" class="text-black bg-primary">
        <q-tab label="회사소개" />
        <q-tab label="이용약관" />
        <q-tab label="개인정보처리방침" />
        <q-tab label="청소년보호방침" />
        <q-tab label="광고 문의 및 안내" />
      </q-tabs>
      <q-tabs class="q-py-md bottom">
        <q-space />
        <div class="">
          <div class="">
            <img src="../assets/logo_black.png" width="65px" />
          </div>
          <div class="">관리자 : 김예짱 | E-mail : jvintaged@gmail.com</div>
          <div class="">©VINTLY. ALL RIGHTS RESERVED</div>
        </div>
        <q-space />
        <q-space />
        <q-space />
        <q-space />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

import EssentialLink from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.bottom {
  color: $red-1;
  background-color: #a08771;
}
</style>
