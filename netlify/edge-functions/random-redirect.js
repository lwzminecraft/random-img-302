/**
 * Netlify Edge Function 的默认处理函数。
 * 这是一个随机重定向到预设 URL 的函数。
 */
export default async (request, context) => { // <-- 错误已修正：'默认' -> 'default', '，' -> ','
  // 你的全部 URL 列表
  var urls = [
'https://wpapi.lwzmc1437.cn/Webp/0d9efb5a2fca6440b7d7f348571b9d7bfc2644b2.webp',
'https://wpapi.lwzmc1437.cn/Webp/13bdfa7bcaad054e1d38fdf04cf1cc507a18b95c.webp',
'https://wpapi.lwzmc1437.cn/Webp/20251023_000324-kkof.webp',
'https://wpapi.lwzmc1437.cn/Webp/c8ae96107fbdc1d46993215d5c69902babb06aa7.webp',
'https://wpapi.lwzmc1437.cn/Webp/background-4.webp',
'https://wpapi.lwzmc1437.cn/Webp/b52a2ae589530aa9c57e5b725b689c3420ff1e17.webp',
'https://wpapi.lwzmc1437.cn/Webp/33842921925d32fca6d98f04ee0b444e2c9e971d.webp',
'https://wpapi.lwzmc1437.cn/Webp/background-2.webp',
'https://wpapi.lwzmc1437.cn/Webp/102912132_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/102912141_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/102912160_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/107465767_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/133637578_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/137803884_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/16903028_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/17346892_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/19004863_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/19033617_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/38444556_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/39137791_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/39874924_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/40071493_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/43674975_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/48768083_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/48824021_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/48824031_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/48824034_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/48824041_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/61330061_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/63071289_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/68157365_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/84677079_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/84843716_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/89942064_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/90829116_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/91555761_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/91842494_p0.webp',
'https://wpapi.lwzmc1437.cn/Webp/99526666_p0.webp',

  ];

  // 随机生成一个索引
  var index = Math.floor(Math.random() * urls.length);
  var url = urls[index];

  // 返回 302 重定向响应
  return Response.redirect(url, 302);
};
