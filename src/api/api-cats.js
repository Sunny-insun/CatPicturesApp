import LoadingModal from "../components/LoadingModal.js";
const API_ENDPOINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

const loadingModal = new LoadingModal(document.getElementById("App"));
const request = async (url) => {
  try {
    loadingModal.setVisibility(true)
    const result = await fetch(url)
    return result.json();
  } catch (e) {
      alert("에러가 발생하여 다시 검색합니다.")
      request(e)//에러 발생 시 다시 검색
    }
    finally{
      loadingModal.setVisibility(false)
    }
  }


export const api = {
  fetchDirectories: () => {
    const response = request(`${API_ENDPOINT}`)
    return response
  },
  
  fetchDirectory: (id) => {
    const response = request(`${API_ENDPOINT}/${id}`)
    return response
  }
};


