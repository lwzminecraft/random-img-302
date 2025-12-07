exports。handler = async function(event, context) {
  // 随机选择一个 URL (Randomly select a URL)
  var urls = [
    'https://p0.meituan.net/csc/851df2485d26011ba63284f6c3a199562776700.jpg',
    'https://p0.meituan.net/csc/cf01e3a659af106537bee9b3099f10ca1460483.jpg',
    'https://p0.meituan.net/csc/b90d0b7ce76335fec64d8fd544eaae36329581.jpg',
    'https://p0.meituan.net/csc/97e2e56bfacfe7f1a1ad621eb61292231354553.jpg',
    'https://p0.meituan.net/csc/cc06d578b5f60531d18e0f4b4412cb452064589.jpg',
    'https://p0.meituan.net/csc/768d2ff5058388a1bf9049d5a84c542c323924.jpg',
    'https://p1.meituan.net/csc/bdb16e48648f6b66b4efb1be9a7a526a1357694.jpg',
  ];
  var index = Math.floor(Math.random() * urls.length);
  var url = urls[index];

  // 返回 302 重定向 (Return 302 redirect)
  return {
    statusCode: 302,
    headers: {
      Location: url,
    }
  };
};
