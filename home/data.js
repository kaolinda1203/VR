var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "濱海灣花園",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": 2.0116726524183406,
        "pitch": -0.015727018764776446,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.680219845883669,
          "pitch": 0.27805452732140523,
          "title": "濱海灣花園",
          "text": "濱海灣花園位在新加坡灣區，是一座面積廣闊、色彩繽紛又充滿未來感的公園。<div><img src=\"data:image/png;base64,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\" alt=\"\"><br><p><br></p></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
