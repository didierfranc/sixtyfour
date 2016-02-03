function prepareImage (id, q, w, h, callback) {

var file = document.getElementById(id).files[0]

  if ( file.type.match(/image.*/) ) {

    var reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function() {

      var img = new Image()
      img.src = reader.result

      img.onload = function(){

        r = this.width / this.height

        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')

        if(h){
          canvas.width = h*r
          canvas.height = h
          ctx.drawImage(img, 0, 0, h*r, h)
        }

        if(w){
          canvas.width = w
          canvas.height = w/r
          ctx.drawImage(img, 0, 0, w, w/r)
        }

        var dataURL = canvas.toDataURL("image/jpeg", q/100)

        callback(dataURL)

      }
    }
  }
}

function displayImages ( array, id ) {

  var parent = document.getElementById(id)
  parent.innerHTML = ''

  for (var i = 0; i < array.length; i++) {

    var newImg = new Image()
    newImg.src = array[i]
    parent.appendChild(newImg)

  }
}
