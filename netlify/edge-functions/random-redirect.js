// 导入 Netlify Edge Functions 的 Context (可选，但在 Deno 环境中常见)
// import { Context } from "https://edge.netlify.com"; // 实际在 Netlify 中可能不需要显式导入

/**
 * Netlify Edge Function 的默认处理函数。
 * * @param {Request} request 传入的请求对象
 * @param {object} context 包含辅助信息的上下文对象
 * @returns {Response} 返回的响应对象（这里是一个 302 重定向）
 */
export 默认 async (request， context) => {
  // 你的全部 URL 列表
  var urls = [
'https://wpapi.lwzmc1437.cn/random/0d9efb5a2fca6440b7d7f348571b9d7bfc2644b2.jpg'，
'https://wpapi.lwzmc1437.cn/random/13bdfa7bcaad054e1d38fdf04cf1cc507a18b95c.jpg'，
'https://wpapi.lwzmc1437.cn/random/20251023_000324-kkof.jpg'，
'https://wpapi.lwzmc1437.cn/random/c8ae96107fbdc1d46993215d5c69902babb06aa7.jpg'，
'https://wpapi.lwzmc1437.cn/random/background-4.jpg'，
'https://wpapi.lwzmc1437.cn/random/b52a2ae589530aa9c57e5b725b689c3420ff1e17.jpg'，
'https://wpapi.lwzmc1437.cn/random/33842921925d32fca6d98f04ee0b444e2c9e971d.png'，
'https://wpapi.lwzmc1437.cn/random/background-2.jpg'，
'https://wpapi.lwzmc1437.cn/random/102912132_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/102912141_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/102912160_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/107465767_p0.png'，
'https://wpapi.lwzmc1437.cn/random/133637578_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/137803884_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/16903028_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/17346892_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/19004863_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/19033617_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/38444556_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/39137791_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/39874924_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/40071493_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/43674975_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/48768083_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/48824021_p0.png'，
'https://wpapi.lwzmc1437.cn/random/48824031_p0.png'，
'https://wpapi.lwzmc1437.cn/random/48824034_p0.png'，
'https://wpapi.lwzmc1437.cn/random/48824041_p0.png'，
'https://wpapi.lwzmc1437.cn/random/61330061_p0.png'，
'https://wpapi.lwzmc1437.cn/random/63071289_p0.png'，
'https://wpapi.lwzmc1437.cn/random/68157365_p0.png'，
'https://wpapi.lwzmc1437.cn/random/84677079_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/84843716_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/89942064_p0.png'，
'https://wpapi.lwzmc1437.cn/random/90829116_p0.png'，
'https://wpapi.lwzmc1437.cn/random/91555761_p0.png'，
'https://wpapi.lwzmc1437.cn/random/91842494_p0.jpg'，
'https://wpapi.lwzmc1437.cn/random/99526666_p0.jpg'，

  ];

  // 随机生成一个索引
  var index = Math.floor(Math.random() * urls.length);
  var url = urls[index];

  // 返回 302 重定向响应
  return Response.redirect(url, 302);
};
