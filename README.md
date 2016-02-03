# sixtyfour
Convert images to base64 client side and store it easier in your database

## Usage

Sixtyfour expose two global functions `prepareImage` and `displayImages`

### prepareImage
```
prepareImage(elementID, quality, width, height, callback)
```
**elementID** : `string` ID of your html input  
**quality** : `number` in percent  
**width** : `number` in px  
**height** : `number` in px   

You can't set width and height you have to choose one and set the other to `null`.
**Callback** argument is your base64 image.

### displayImages
```
displayImages(imagesArray, elementID)
```
**imagesArray** : the array where you store your **preparedImages**  
**elementID** : ID of your html display div  

## Example

**HTML :**
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
