import vimeo from "@vimeo/player";
import lodash from "lodash.throttle";

const VIDEO_DURATION = "videoplayer-current-time";

const iframe = document.querySelector("#vimeo-player");
const player = new vimeo(iframe);

player.on("timeupdate", lodash(saveVideoTimeToLocalStorage, 1000));

function saveVideoTimeToLocalStorage(evt) {
	localStorage.setItem(VIDEO_DURATION, evt.seconds);
}

if (localStorage.getItem(VIDEO_DURATION)) {
	player.setCurrentTime(localStorage.getItem(VIDEO_DURATION));
}
