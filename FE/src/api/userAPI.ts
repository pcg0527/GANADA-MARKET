import { defaultInstance } from 'api';
import { ACCESS_TOKEN } from 'constants/headers';
import AddressForm from 'types/Form/AddressForm';
import BankForm from 'types/Form/BankForm';
import Payload from 'types/Form/Payload';
import {
  UserUpdateNicknameForm,
  UserUpdatePasswordForm,
} from 'types/Form/UserForm';

const api = defaultInstance();
// api.defaults.headers.common.Authorization = ACCESS_TOKEN;
api.defaults.headers.common.Authorization =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxcmVzMzQwM0Bzc2FmeS5jb20iLCJpc3MiOiJnYW5hZGFtYXJrZXQuY29tIiwiZXhwIjoxNjUyOTcyNDU2LCJpYXQiOjE2NTI4ODYwNTZ9.0JUakXnNkyrrS686zDu_qlfc6AukZ4hmcnRAFKOgXBBLPuoTRLl1ewo35KlN0BEF1qJ6gUV_mgFOVKm_6XU0jg';
// 회원정보
// 내 정보
function getUser() {
  // responseBody 타입 사용예정
  return api.get('/user');
}

// 회원 탈퇴
function deleteUser() {
  return api.delete('/user');
}

// 닉네임 변경
// function updateNickname(payload: UserUpdateNicknameForm) {
function updateNickname(payload: Payload<UserUpdateNicknameForm>) {
  return api.put('/user/nickname', payload);
}
// 비밀번호 변경
// function updatePassword(payload: UserUpdatePasswordForm) {
function updatePassword(payload: Payload<UserUpdatePasswordForm>) {
  return api.put('/user/pw', payload);
}

// 주소록 정보
// 주소록 조회
function getAddressbook() {
  return api.get('/user/addressbook');
}

// 주소록 등록
// function createAddressbook(payload: AddressForm) {
function createAddressbook(payload: Payload<AddressForm>) {
  return api.post('/user/addressbook', payload);
}

// 주소록 삭제
// function deleteAddressbook() {
function deleteAddressbook() {
  return api.delete('/user/addressbook');
}

// 주소록 수정
// function updateAddressbook(payload: AddressForm, param: string) {
function updateAddressbook(payload: Payload<AddressForm>, pathValue: string) {
  return api.put(`/user/addressbook/:${pathValue}`, payload);
}

// 계좌 정보
// 정산 계좌 조회
function getBank() {
  return api.get('/user/bank');
}
// 정산 계좌 등록 및 수정
// function updateBank(payload: BankForm) {
function updateBank(payload: Payload<BankForm>) {
  return api.put('/user/bank', payload);
}

// function getSalesHistory() {
function getSalesHistory(params?: string) {
  return api.get(`/user/sales-history?${params}`);
}

// function getOrderHistory() {
function getOrderHistory(params?: string) {
  return api.get(`/user/order-history?${params}`);
}
// function getWishList() {
function getWishList(params?: string) {
  return api.get(`/user/likelist?${params}`);
}

const userAPI = {
  getUser,
  deleteUser,
  updateNickname,
  updatePassword,
  getAddressbook,
  createAddressbook,
  deleteAddressbook,
  updateAddressbook,
  getBank,
  updateBank,
  getSalesHistory,
  getOrderHistory,
  getWishList,
};

export default userAPI;
