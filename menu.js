function showIframe(option) {
  const iframe = document.getElementById('content-frame');
  const canvasContainer = document.getElementById('canvas-container'); // 新增一個容器來放動畫
  if (option === 'home') {
    iframe.style.display = 'none';
    canvasContainer.style.display = 'block'; // 顯示動畫
  } else {
    iframe.style.display = 'block';
    canvasContainer.style.display = 'none'; // 隱藏動畫
    switch (option) {
      case 'about':
        iframe.src = './教科一A 徐朗恩.png'; // 指向資料夾中的圖片檔案
        break;
      case 'week1':
        iframe.src = 'https://andyhsu95041600.github.io/042423/';
        break;
      case 'week2':
        iframe.src = 'https://andyhsu95041600.github.io/0424/';
        break;
      case 'week3':
        iframe.src = 'https://andyhsu95041600.github.io/042811/';
        break;
      case 'week4':
        iframe.src = 'https://hackmd.io/@AndyHsu123/andy'
        break;
      case 'quiz':
        iframe.src = 'https://andyhsu95041600.github.io/042877/';
        break;
      case 'tutorial':
        iframe.src = '4月24日(1).mp4'; // 指向資料夾中的影片檔案
        break;
    }
  }
}