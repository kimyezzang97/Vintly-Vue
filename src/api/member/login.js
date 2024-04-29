import { api } from 'src/boot/axios';

// 중복 ID 조회
export const getFindIdList = async (name, birth) => {
  const data = await api.get(`/members/find/id?name=${name}&birth=${birth}`);
  return data;
};
