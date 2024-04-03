<template>
  <q-page class="">
    <div class="q-mt-xl q-mb-lg flex flex-center text-h5 text-weight-medium">
      회원가입
    </div>
    <q-tabs class="q-mt-xl">
      <q-space />
      <q-space />
      <q-space />
      <q-space />
      <div><a style="color: red">*</a>는 필수입력 사항입니다.</div>
      <q-space />
    </q-tabs>

    <q-separator
      inset
      color="teal-10"
      class="q-separator-inset"
      spaced="md"
      size="3px"
    />
    <div class="flex flex-center q-gutter-lg q-pt-xl">
      <div style="font-size: 17px; width: 160px">
        아이디<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="id"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <q-btn
        outline
        color="brown-5"
        text-color="brown-5"
        label="중복확인"
        style="font-size: 16px; width: 130px; height: 55px"
        @click="test(id)"
      />
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        비밀번호<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="pw"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <div style="width: 130px"></div>
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        비밀번호 확인<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="pwChk"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <div style="width: 130px"></div>
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        이름<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="name"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <div style="width: 130px"></div>
    </div>

    <div class="flex flex-center q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px">
        이메일<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="email"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <q-btn
        outline
        color="brown-5"
        text-color="brown-5"
        label="중복확인"
        style="font-size: 16px; width: 130px; height: 55px"
      />
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        주소<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="address"
          label="주소검색"
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <div style="width: 130px"></div>
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        상세주소
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="addressDetail"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <div style="width: 130px"></div>
    </div>

    <div class="flex flex-center q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px">
        닉네임<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="nickname"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <q-btn
        outline
        color="brown-5"
        text-color="brown-5"
        label="중복확인"
        style="font-size: 16px; width: 130px; height: 55px"
      />
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        생년월일<a style="color: red"> *</a>
      </div>
      <div class="" style="width: 380px">
        <q-input
          outlined
          v-model="birth"
          label=""
          color="teal-10"
          style="font-size: 20px"
        />
      </div>
      <div style="width: 130px"></div>
    </div>

    <div class="flex flex-center te q-gutter-lg q-pt-lg">
      <div style="font-size: 17px; width: 160px" class="flex-left">
        성별<a style="color: red"> *</a>
      </div>
      <div class="q-gutter-sm">
        <q-radio
          v-model="gender"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          val="line"
          label="남자"
          color="teal-9"
          class="q-px-xl"
        />

        <q-radio
          v-model="gender"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          val="rectangle"
          label="여자"
          color="orange-10"
          class="q-px-xl"
        />
      </div>

      <div style="width: 170px"></div>
    </div>

    <div class="flex flex-center q-py-xl">
      <q-btn
        class="text-weight-bold"
        no-caps
        color="brown-5"
        label="회원가입"
        style="font-size: 20px; width: 160px; height: 55px"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { getChkId } from 'src/api/member/join';

const id = ref('');
const pw = ref('');
const pwChk = ref('');
const name = ref('');
const email = ref('');
const address = ref('');
const addressDetail = ref('');
const nickname = ref('');
const birth = ref('');

const gender = ref('line');

function test(id) {
  getChkId(id)
    .then(res => {
      alert(res.data.data);
    })
    .catch(function (error) {
      alert('잠시후 다시 이용해주세요.');
    });
}
</script>

<style lang="scss" scoped>
.q-separator-inset {
  margin-left: 18%;
  margin-right: 18%;
}
</style>
