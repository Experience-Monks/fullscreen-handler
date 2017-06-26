Cross-browser fullscreen handler utility.
Works in IE10+ and mobile browsers (Android - Chrome , iOS - Chrome + Safari)

## Syntax
```javascript
fullscreenHandler(element [, onEnterCallback, onExitCallback]);
```

## API
* ```enter``` - enter fullscreen
* ```exit``` - exit fullscreen
* ```destroy``` remove all even listeners


## Example
```javascript
import fullscreenHandler from 'fullscreen-handler';

const video = document.querySelector('video');
const fs = fullscreenHandler(video);

video.addEventListener('play', fs.enter);
video.addEventListener('pause', fs.exit);

...

// make sure to destroy when it's time
fs.destroy();

```

## Install
```sh
npm install fullscreen-handler --save
``` 

## License
MIT, see [LICENSE.md](http://github.com/Jam3/fullscreen-handler/blob/master/LICENSE) for details.
