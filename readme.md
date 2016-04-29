# Sovscope
For years, [Verite Rendition] has been providing fantastic sov influence maps for [Eve Online] to track alliances influences over sov-nullsec area of New Eden.
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
* startDate and endDate can accept any [ISO 8601] format. (if not provided: today)
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

### How to be on the map ?

To try [Eve Online], here's a referral link to [try Eve]

### Disclaimers

EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.

EVE Online/ CCP hf does not endorse, and is not in any way affiliated with this project

Thanks again to [Verite Rendition].

[ISO 8601]: <http://en.wikipedia.org/wiki/ISO_8601>
[FFMPEG]: <https://ffmpeg.zeranoe.com/builds/>
[Verite Rendition]: <sov.space>
[fluent-ffmpeg resolutions format]: <https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#video-frame-size-options>
[Eve Online]: https://www.eveonline.com/
[try Eve]: http://secure.eveonline.com/trial/?invc=30c46ce9-891f-44a8-8558-28cc8d204efe&action=buddy