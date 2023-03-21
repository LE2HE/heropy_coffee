// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
    // 책에 있는 ID가 적용이 되지 않아서 스타벅스 유튜브 영상을 가져옴 (문제시 삭제 예정)
    videoId: 'ee973zMi0Cs', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'ee973zMi0Cs' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }
  });
}