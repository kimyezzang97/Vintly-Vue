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
          label="5자 이상 20자 이하의 영어, 숫자만 입력해주세요."
          color="teal-10"
          style="font-size: 20px"
          maxlength="20"
        />
      </div>
      <q-btn
        outline
        color="brown-5"
        text-color="brown-5"
        label="중복확인"
        style="font-size: 16px; width: 130px; height: 55px"
        @click="joinChkId(id)"
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
          label="8자 이상 20자 이하로 입력해주세요."
          color="teal-10"
          style="font-size: 20px"
          type="password"
          maxlength="20"
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
          type="password"
          maxlength="20"
          class="inputPwChk"
          :hint="pwHint"
          hint-color="red"
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
          maxlength="10"
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
          maxlength="64"
          type="email"
        />
      </div>
      <q-btn
        outline
        color="brown-5"
        text-color="brown-5"
        label="중복확인"
        style="font-size: 16px; width: 130px; height: 55px"
        @click="joinChkEmail(email)"
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
          readonly
        />
      </div>
      <q-btn
        outline
        backg
        color="teal"
        text-color="teal-10"
        label="주소검색"
        style="font-size: 16px; width: 130px; height: 55px"
      />
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
          maxlength="60"
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
        @click="joinChkNickname(nickname)"
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
          type="date"
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
          val="M"
          label="남자"
          color="teal-9"
          class="q-px-xl"
        />

        <q-radio
          v-model="gender"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          val="W"
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
    <div class="" style="height: 100px; background-color: #ffffff"></div>
    <input v-model="idChkStatus" type="text" />
    <input v-model="emailChkStatus" type="text" />
    <input v-model="nicknameChkStatus" type="text" />
    <input v-model="gender" type="text" />
    <input v-model="birth" type="text" />
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getChkId, getChkEmail, getChkNickname } from 'src/api/member/join';

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

const idChkStatus = ref(false);
const emailChkStatus = ref(false);
const nicknameChkStatus = ref(false);
const pwHint = ref('');
// 변경감지
watch(id, (newValue, oldValue) => {
  idChkStatus.value = false;
});
watch(email, (newValue, oldValue) => {
  emailChkStatus.value = false;
});
watch(nickname, (newValue, oldValue) => {
  nicknameChkStatus.value = false;
});
watch(pwChk, (newValue, oldValue) => {
  console.log(pw);
  console.log(pwChk);
  if (pw.value != pwChk.value) {
    pwHint.value = '비밀번호가 일치하지 않습니다.';
    //inputPwChk.hint.value = '비밀번호가 일치하지 않습니다';
  } else {
    pwHint.value = '';
  }
});
function joinChkId(idParam) {
  if (4 >= idParam.length || idParam.length >= 21) {
    alert('5자이상 20자 이하로 입력해주세요');
    return;
  }
  getChkId(idParam)
    .then(res => {
      if (res.data.data == 0) {
        idChkStatus.value = true;
        alert('사용가능한 ID 입니다.');
      }
    })
    .catch(function (error) {
      alert('잠시후 다시 이용해주세요.');
    });
}

function joinChkEmail(emailParam) {
  if (emailParam.length >= 65) {
    alert('64자 이하로 입력해주세요');
    return;
  }
  // 이메일 형식 정규식 패턴
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailParam)) {
    alert('이메일 형식에 맞게 입력해주세요.');
    return;
  }
  getChkEmail(emailParam)
    .then(res => {
      if (res.data.data == 0) {
        emailChkStatus.value = true;
        alert('사용가능한 이메일 입니다.');
      }
    })
    .catch(function (error) {
      alert('잠시후 다시 이용해주세요.');
    });
}

function joinChkNickname(nicknameParam) {
  if (1 >= nicknameParam.length || nicknameParam.length >= 16) {
    alert('2자이상 15자 이하로 입력해주세요');
    return;
  }
  getChkNickname(nicknameParam)
    .then(res => {
      if (res.data.data == 0) {
        nicknameChkStatus.value = true;
        alert('사용가능한 닉네임 입니다.');
      }
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
