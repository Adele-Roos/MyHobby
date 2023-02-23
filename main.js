let saveLater = document.querySelectorAll('.btn-saved');

// Object array with projects, description and image
let projects = [
    {
        name:  "Landscape",
        tag: "wet_wet",
        description: 'This is a lesson covering the wet-into-wet technique',
        inFolder: 0,
        image: "./IMAGES/wet_wet.jpg",
    },

    {
        name:  "Design Card",
        tag: "pen_ink",
        description: 'In this lesson you will be using pen and ink',
        inFolder: 0,
        image: "./IMAGES/pen_ink.jpg",
    },

    {
        name:  "Trees",
        tag: "tree",
        description: 'In this lessons you will use wet-into-wet and brush strokes',
        inFolder: 0,
        image: "./IMAGES/tree.jpg",
    },

    {
        name:  "Skies",
        tag: "sky",
        description: 'This is a lesson covering gradient washes and wet-into-wet techniques',
        inFolder: 0,
        image: "./IMAGES/sky.jpg",
    },

    {
        name:  "Cherry Blossoms",
        tag: "cherry",
        description: 'In this lessons you will be using masking and washes',
        inFolder: 0,
        image: "./IMAGES/cherry.jpg",
    },

    {
        name:  "Flowers",
        tag: "flowers",
        description: 'This is a lesson covering various brush  and dry-brush techniques',
        inFolder: 0,
        image: "./IMAGES/flowers.jpg",
    },

    {
        name:  "Beach",
        tag: "beach",
        description: 'You will be using gradient washes and wet-into-wet techniques',
        inFolder: 0,
        image: "./IMAGES/beach.jpg",
    },

    {
        name:  "Leaves",
        tag: "leaves",
        description: 'This is a lesson covering various brush  and dry-brush techniques',
        inFolder: 0,
        image: "./IMAGES/leaves.jpg",
    },
]


    // Event listener to capture each click
    for (let i = 0; i < saveLater.length; i++) {
        saveLater[i].addEventListener('click', () => {
            savedNumbers(projects[i]);
        })
    }
    // Get number for clicks from local storage
    function onLoadSavedNumbers() {
        let clickNumbers = localStorage.getItem('savedNumbers');

            if(clickNumbers) {
                document.querySelector('.saved_folder span').textContent = clickNumbers;
            }   
     }
     
     // function to check local storage for saved items, if empty start counter @ 1, if not add 1 to the number found
    function savedNumbers(projects) {
        let clickNumbers = localStorage.getItem('savedNumbers');
        clickNumbers = parseInt(clickNumbers);

            if(clickNumbers) {
                localStorage.setItem('savedNumbers', clickNumbers + 1);
                document.querySelector('.saved_folder span').textContent = clickNumbers + 1;
                alert("You have "+ (clickNumbers +1) +" saved projects");
                
            } else {
                localStorage.setItem('savedNumbers', 1);
                document.querySelector('.saved_folder span').textContent = 1;
                alert("You have 1 saved project")
            }  
            
            setSavedItems(projects);
        }
        


        // function to add projects to object array in local storage
        function setSavedItems(projects) {
            let savedItems = localStorage.getItem("projectsInFolder");
            savedItems = JSON.parse(savedItems);
            
            if(savedItems != null) {

                if (savedItems[projects.tag] == undefined) {
                    savedItems = {
                        ...savedItems,
                        [projects.tag]: projects
                    }
                }
                savedItems[projects.tag].inFolder += 1;
               
            } else {
                projects.inFolder += 1;
                savedItems = {
                    [projects.tag]: projects
            }
        }
            localStorage.setItem("projectsInFolder", JSON.stringify
            (savedItems));
        }
    // display saved items on 'saved projects' page in div class="projectsSAVED"
    function displaySavedItems() {
        let savedItems = localStorage.getItem("projectsInFolder");
        savedItems = JSON.parse(savedItems);
        let projectContainer = document.querySelector(".projectsSAVED");

        if(savedItems && projectContainer ) {
            projectContainer.innerHTML = '';
            Object.values(savedItems).map(item => {
                projectContainer.innerHTML += `
                <div class="projectsSAVED">
                <hr>
                <h3>${item.name}<h3> <br>
                <div class="savedRow">
                <img src="./IMAGES/${item.tag}.jpg" width="100" height="70">
                <p><span class="tools__tools-title__bullet"> &#10095;</span> ${item.description}</p>
                <hr>
                </div>
                `
            })
        }  
    }
    onLoadSavedNumbers();
    displaySavedItems();

    // Like icon toggle
    $(".fa-solid").click(function() {
        $(this).toggleClass("heart");
    });

// GALLERY //
$(function() {

    // settings for slider
    let animationSpeed = 1000;
    let pause = 3000;
    let currentSlide = 1;

    let width = 1004;
    let $slider = $('#slider');
    let $slideContainer = $('.slides', '#slider');
    let $slides = $('.slide', '#slider');
    let interval = 1000;

    // set slider interval, move images left and return to first image in the slider
    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
                
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    // mouse enter and leave to pause the image slider
    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
});

// envelope animation
$(document).ready(function(){
    function slideContent() {
        $('.fa-envelope').animate({
        "margin-left": "+=400px",
        }, 2000, "linear");
  
        $('.fa-envelope').animate({
        "margin-left": "-=400px",
        "opacity": 0,
        }, 1000, "linear");

        $('.fa-envelope').animate({
            "margin-left": "+=400px",
            "opacity": 100,
            }, 2000, "linear");
            
            $('.fa-envelope').animate({
            "margin-left": "-=400px",
            "opacity": 0,
            }, 1000, "linear");
  }
  slideContent();
});

    // function to create drop-down menu
    // Dropdown toggle
 $(function() { 
    let dropdownMenu = $('.dropdown').hide();
    $('.dropdown-toggle').click(function() { 
        $(this).next('.dropdown').slideToggle();
    });
    
    $(document).click(function(e) { 
    var target = e.target; 
    if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
      { $('.dropdown').slideUp(2000); }
    });
    });

    // hide and show function
    $(document).ready(function(){
        $("button").on("click", function() {
            $("img[alt=art]").hide(1000).show(1000);            
        });
    });