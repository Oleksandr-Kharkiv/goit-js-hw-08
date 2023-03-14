import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY_CURRENT_TIME = "videoplayer-current-time";

const currentTimeObj = JSON.parse(localStorage.getItem(LS_KEY_CURRENT_TIME));

if(localStorage.getItem(LS_KEY_CURRENT_TIME)){
  player.setCurrentTime(currentTimeObj.seconds)
} 
  
player.on(
    'timeupdate',
    throttle(function (time) {
      localStorage.setItem(LS_KEY_CURRENT_TIME, JSON.stringify(time));
    }, 1000)
    );

  console.log(currentTimeObj);
  console.log(localStorage.getItem(LS_KEY_CURRENT_TIME));