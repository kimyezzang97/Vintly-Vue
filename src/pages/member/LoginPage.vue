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
              <q-btn
                flat
                color="grey-7"
                label="아이디찾기"
                @click="basic = true"
              />
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

    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card>
        <q-card-section>
          <div class="text-h5 flex flex-center q-mt-lg">ID 찾기</div>
        </q-card-section>

        <q-card-section class="q-mx-lg flex flex-center" style="width: 500px">
          <div class="">
            <q-input
              outlined
              v-model="name"
              placeholder="이름"
              color="teal-10"
              style="font-size: 20px"
              maxlength="20"
              class="q-py-sm"
            />
            <q-input
              outlined
              v-model="birth"
              label=""
              color="teal-10"
              style="font-size: 20px"
              type="date"
              class="q-pb-sm"
            />
            <div class="flex flex-center q-py-md">
              <q-btn
                class="text-weight-bold"
                no-caps
                color="brown-3"
                label="아이디 찾기"
                style="font-size: 20px; width: 150px; height: 50px"
                @click="findId()"
              />
            </div>
          </div>
        </q-card-section>
        <div style="height: 200px">
          <a class="flex flex-center text-h6 text-blue-grey-10">
            회원정보로 가입된 ID
          </a>
          <q-separator inset color="balck-10" spaced="md" size="1px" />
          <div class="text-center text-subtitle1 text-blue-grey-10">
            <a class="flex flex-center" v-for="id in idList" :key="id">{{
              id
            }}</a>
          </div>
          <div class="text-subtitle1 text-center q-mt-lg">
            <a v-if="status == true">가입된 ID가 없습니다.</a>
          </div>
        </div>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="teal-10" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getFindIdList } from 'src/api/member/login';
const id = ref('');
const pw = ref('');
const basic = ref(false);

const name = ref('');
const birth = ref('');

const status = ref(false);

const idList = ref([]);

// 아이디 찾기
function findId() {
  if (name.value == '' || birth.value == '') {
    alert('회원정보를 입력해주세요');
    return;
  }

  getFindIdList(name.value, birth.value)
    .then(res => {
      idList.value = res.data.data;
      if (idList.value.length == 0) {
        status.value = true;
      }
      console.log(idList);
    })
    .catch(function (error) {
      alert('잠시후 다시 이용해주세요.');
    });
}

// 변경감지
watch(name, (newValue, oldValue) => {
  status.value = false;
});
watch(birth, (newValue, oldValue) => {
  status.value = false;
});
</script>

<style lang="scss" scoped>
.q-separator-inset {
  margin-left: 18%;
  margin-right: 18%;
}
</style>
