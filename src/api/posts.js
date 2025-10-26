// 학습 조작과 관련된 CRUD API 함수 파일 
import { posts } from "./index";

// 학습 노트 데이터를 조회하는 API
export function fetchPosts() {
  return posts.get("/");
}

// 학습 노트 데이터를 등록 API
export function addPost(postData) {
  return posts.post("/", postData);
}
