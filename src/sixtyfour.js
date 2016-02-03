function prepareImage (file, callback) {

  if ( file.type.match(/image.*/) ) {

    var reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function() {

      var img = new Image()
      img.src = reader.result

      img.onload = function(){

        r = this.width / this.height
        h = 400

        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')

        canvas.width = h*r
        canvas.height = h

        ctx.drawImage(img, 0, 0, h*r, h)

        var dataURL = canvas.toDataURL("image/jpeg", 0.3)

        callback(dataURL)

      }
    }
  }
}

function displayImages ( array, parent ) {

  parent.innerHTML = ''

  for (var i = 0; i < array.length; i++) {

    var newImg = new Image()
    newImg.src = array[i]
    parent.appendChild(newImg)

  }
}
