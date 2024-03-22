//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
  
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    if (totalImages > 0) { // Ensure there are images
        images[currentIndex].style.display = 'block'; // Show the first image

        setInterval(function() {
            if (totalImages > 0) { // Check again to ensure safety
                images[currentIndex].style.display = 'none'; // Hide the current image
                currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
                images[currentIndex].style.display = 'block'; // Show the next image
            }
        }, 3000); // Change image every 3000 milliseconds (3 seconds)
    } else {
        console.log('No carousel images found.'); // Debug message if no images found
    }
});