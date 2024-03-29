<template>
  <q-page class="">
    <div class="q-mt-xl flex flex-center">
      <img
        alt="Quasar logo"
        src="../assets/vintly-bg-1.jpg"
        style="width: 1100px; height: 430px"
        class="q-mt-none q-pt-none"
      />
    </div>
    <q-tabs class="q-mt-xl">
      <q-space />
      <div class="text-h6">NOTICE</div>
      <q-space />
      <q-space />
      <q-space />
      <q-route-tab to="/page3" label="more" />
      <q-space />
    </q-tabs>
    <q-separator inset class="q-separator-inset" spaced="md" size="3px" />

    <div class="q-mt-md">
      <div v-for="n in 3" :key="n">
        <div class="q-separator-inset q-my-md">
          &nbsp; 24.02.05(월) 서버 업그레이드 작업 안내 사용 부분 제한
        </div>
        <q-separator inset class="q-separator-inset" spaced="md" />
      </div>
    </div>

    <q-tabs class="q-mt-xl">
      <q-space />
      <div class="text-h6">Q&A</div>
      <q-space />
      <q-space />
      <q-space />
      <q-route-tab to="/page3" label="more" />
      <q-space />
    </q-tabs>
    <q-separator inset class="q-separator-inset" spaced="md" size="3px" />

    <div class="q-mt-md">
      <div v-for="n in 3" :key="n">
        <div class="q-separator-inset q-my-md">&nbsp; 회원가입이 안 돼요.</div>
        <q-separator inset class="q-separator-inset" spaced="xs" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>
.q-separator-inset {
  margin-left: 18%;
  margin-right: 18%;
}
</style>
