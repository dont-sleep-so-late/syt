import axios from "axios";
const AK = "l6JIrAXN7LwIhYNd7dzXo0Ep";
const SK = "xudkrENNehMLg5fB4holMXteYTq9DPQZ";

async function ToVoice(text) {
  var options = {
    method: "POST",
    url: "https://tsn.baidu.com/text2audio",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
    },
    form: {
      tex: text,
      tok: await getAccessToken(),
      cuid: "0H6HP3e7oiWnPz3vl09DC7EiJ6RhJddb",
      ctp: "1",
      lan: "zh",
      spd: "5",
      pit: "5",
      vol: "5",
      per: "1",
      aue: "3",
    },
  };

  axios(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
function getAccessToken() {
  let options = {
    method: "POST",
    url:
      "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=" +
      AK +
      "&client_secret=" +
      SK,
  };
  return new Promise((resolve, reject) => {
    axios(options, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(response.body).access_token);
      }
    });
  });
}

export default ToVoice;
