//Negatyw
//(c) 2011 by Tomasz Lubinski
//www.algorytm.org
 
/* Source of the image */
var imgSrc;
 
/* make canvas negative */
function nagatyw()
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    // read the width and height of the canvas
    var width = canvas.width;
    var height = canvas.height;
    
    // create a new pixel array
    var imageData;
    try
    {
        imageData = ctx.getImageData(0, 0, width, height);
    } catch(e)
    {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = ctx.getImageData(0, 0, width, height);
    }
 
    // make nagative
    for (var i=0; i<height; i++)
    {
        for (var j=0; j<width; j++)
        {
        index = (i*width+j)*4;
        // invert pixel
        imageData.data[index+3] = 255;
        imageData.data[index+0] = 255-imageData.data[index+0];
        imageData.data[index+1] = 255-imageData.data[index+1];
        imageData.data[index+2] = 255-imageData.data[index+2];
        }
    }
    
    // copy the image data back onto the canvas
    ctx.putImageData(imageData, 0, 0); 
}
 
/* load image pointed by param_file to canvas */
function loadImage()
{
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
 
// add file:// if user specified local path
if (imgSrc.indexOf("//") == -1 && imgSrc.indexOf(".") != 0)
{
imgSrc = "file:///" + imgSrc;
}
 
// load file into canvas
var img = new Image();
img.src = imgSrc;
img.onload = function(){
var width = img.width;
var height = img.height;
canvas.width = width;
canvas.height = height;
ctx.drawImage(img,0,0);
// replace transparent with white
var imageData;
try
{
imageData = ctx.getImageData(0, 0, width, height);
} catch(e)
{
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
imageData = ctx.getImageData(0, 0, width, height);
}
for (var i=0; i<height; i++)
{
for (var j=0; j<width; j++)
{
index = (i*width+j)*4;
if (imageData.data[index+3] == 0)
{
imageData.data[index+3] = 255;
imageData.data[index+0] = 255;
imageData.data[index+1] = 255;
imageData.data[index+2] = 255;
}
}
}
ctx.putImageData(imageData, 0, 0);
}
}
