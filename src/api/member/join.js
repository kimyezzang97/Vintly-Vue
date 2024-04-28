import { api } from 'src/boot/axios';

// 중복 ID 조회
export const getChkId = async id => {
  const data = await api.get(`/members/id/${id}`);
  return data;
};

// 중복 email 조회
export const getChkEmail = async email => {
  const data = await api.get(`/members/email/${email}`);
  return data;
};

// 중복 nickname 조회
export const getChkNickname = async nickname => {
  const data = await api.get(`/members/nickname/${nickname}`);
  return data;
};

export const postMemberJoin = async joinForm => {
  const data = await api.post(`/members/join`, joinForm);
  return data;
};
