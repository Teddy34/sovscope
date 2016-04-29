# Sovscope
For years, [Verite Rendition] has been providing sov influence map for Eve-Online to track alliances influences over sov-nullsec area of New Eden.
Here's a small tool to make videos out of it!
### Install:

You should first install [FFMPEG] and check if it's available in the PATH.

```
git clone https://github.com/Teddy34/sovscope.git
npm install
```

### Configure:
All options can be set through the params.json file
```
  	"startDate":"20160401",
    "endDate": "20160429",
    "urlPrefix": "http://go-dl1.eve-files.com/media/corp/verite/",
    "inputFileExtension": "png",
    "dateFormat": "YYYYMMDD",
    "framerate": 7,
    "resolution": "1920x?",
    "outputExtension":"mp4",  
    "outputFileName":"video"
```
* startDate and endDate can accept any [ISO 8601] format. (default values: today)
* urlPrefix matches sovmap archive (default: Verite Rendition)
* inputFileExtension is sovmap files extension
* dateFormat is sovmap files date format 
* framerate is the number of sovmap per second in your output video
* resolution is the resolution from [fluent-ffmpeg resolutions format]. Examples: "640*480", "640*?", "50%"
* outputExtension is the desired video format (as long as it's supported by [FFMPEG])
* outputFileName is the name of your video file.

### Run:
```
node index.js
```

Your video file will hopefuly be created in output folder.
Downloaded images are stored in your cache folder.

[ISO 8601]: <http://en.wikipedia.org/wiki/ISO_8601>
[FFMPEG]: <https://ffmpeg.zeranoe.com/builds/>
[Verite Rendition]: <sov.space>
[fluent-ffmpeg resolutions format]: <https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#video-frame-size-options>