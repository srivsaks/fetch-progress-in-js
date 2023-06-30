import axios from "axios";
const options = {
  responseType: "blob"
};

const loader = document.querySelector(".progress");
const download = document.querySelector(".text");

function fetchData() {
  axios
    .get("https://picsum.photos/800/800", {
      responseType: "blob",
      onDownloadProgress: (e) => {
        console.log(e.loaded, e.total);
        loader.style.width = `${(e.loaded / e.total) * 100}%`;
        download.textContent = `${parseInt((e.loaded / e.total) * 100)}%`;
      }
    })
    .then((res) => {
      //console.log(res);
    });
}

fetchData();
