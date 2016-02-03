# sixtyfour
Convert images to base64 and store it easier in your database


## Usage

Sixtyfour expose two functions `prepareImage` and `displayImages`

### prepareImage
```
prepareImage(elementID, imageQuality, width, height, callback)
```
**elementID** : ID of your html input  
**imageQuality** : `number` in percent  
**width** : `number` in px  
**height** : `number` in px   

You can't set width and height choose one and set the other to `null`
  
### displayImages
```
displayImages(imagesArray, elementID)
```
**imagesArray** : the array where you store preparedImage  
**elementID** : ID of your html display div  

## Example
```html
<input id="newImage" type="file">
<div id="showImage"></div>
```

**ES5 :**
```javascript
var imageArray = []
var input = document.getElementById('newImage')
input.addEventListener('change', onChange)

function onChange(){

  prepareImage('newImage', 100, 600, null, function(base64){
    imageArray.push(base64)
    displayImages(imageArray, 'showImage')
  })

}
```
