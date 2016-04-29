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
All options can be set through the params.json file (here're the default values)
```
{
  	"startDate":"20160101",
    "endDate": "20160421",
    "urlPrefix": "http://go-dl1.eve-files.com/media/corp/verite/",
    "inputFileExtension": "png",
    "dateFormat": "YYYYMMDD",
    "framerate": 3,
    "outputExtension:":"avi",  
    "outputFileName":"video"
}
```
* startDate and endDate can accept any [ISO 8601] format.
* urlPrefix matches sovmap archive (default: Verite Rendition)
* inputFileExtension is sovmap files extension
* dateFormat is sovmap files date format 
* framerate is the number of sovmap per second in your output video
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