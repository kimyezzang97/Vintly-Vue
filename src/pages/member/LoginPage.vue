<template>
  <q-page class="">
    <div class="" style="height: 50px; background-color: #ffffff"></div>
    <div class="q-mt-xl q-pt-xl flex flex-center text-h5 text-weight-bold">
      로그인
    </div>

    <div class="flex flex-center q-gutter-lg q-pt-xl">
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="id"
          placeholder="ID를 입력해주세요."
          color="teal-10"
          style="font-size: 20px"
          maxlength="20"
        />
      </div>
    </div>

    <div class="flex flex-center q-gutter-lg q-pt-md">
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="pw"
          placeholder="비밀번호를 입력해주세요."
          color="teal-10"
          style="font-size: 20px"
          type="password"
          maxlength="20"
        />
      </div>
    </div>

    <div class="flex flex-center q-pb-xl">
      <q-flex justify="center">
        <div style="width: 390px">
          <!-- 내용을 오른쪽 정렬하려는 div -->
          <div class="text-right">
            <div>
              <router-link to="/"
                ><q-btn flat color="grey-7" label="아이디찾기"
              /></router-link>
              <a>|</a>
              <router-link to="/"
                ><q-btn flat color="grey-7" label="비밀번호찾기"
              /></router-link>
            </div>
          </div>
        </div>
      </q-flex>
    </div>

    <div class="flex flex-center q-py-xl">
      <q-btn
        class="text-weight-bold"
        no-caps
        color="brown-3"
        label="로그인"
        style="font-size: 22px; width: 160px; height: 55px"
        @click="login()"
      />
    </div>

    <div class="" style="height: 200px; background-color: #ffffff"></div>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue';
const id = ref('');
const pw = ref('');
</script>

<style lang="scss" scoped>
.q-separator-inset {
  margin-left: 18%;
  margin-right: 18%;
}
</style>
