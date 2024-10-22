document.addEventListener("DOMContentLoaded", function(event) {

    let tooltips = document.querySelectorAll('.tooltip');
    let tooltipcontent = document.querySelector('.tooltip-content');
    
    // function to add aria hidden and remove active function
    function hiddenandremoveactive() {
        tooltipcontent.classList.add('d-none');
        tooltipcontent.setAttribute('aria-hidden', 'true');
        tooltips.forEach(function(tooltip, index) {
            tooltip.classList.remove('active');
        });
    }
    
    // Check if click outside of tooltip and close
    document.addEventListener('click', function(e) {  
           const isClickInside = tooltipcontent.contains(e.target);
            if (!isClickInside && !e.target.classList.contains('tooltip')) {
            hiddenandremoveactive();
          }
    });
    
    document.addEventListener('keydown', (event) => {
        // conditions for tabbing
        if (event.key === "Tab") {
          setTimeout(() => {
            // check if element has tooltip class
            let tooltiplinkparent = document.activeElement.parentElement;
            if (!tooltiplinkparent.classList.contains("tooltip-content")){
                hiddenandremoveactive();
            } 
            console.log(tooltiplinkparent);
           }, 100);
        }
      
        // Check escape key and close tooltip
        if (event.key === 'Escape') {
           hiddenandremoveactive();
        }
    });
    
    //make an on scroll close tooltip
    document.addEventListener("scroll",function(e) {  
       setTimeout(() => {
          hiddenandremoveactive();
         }, 100);
    });
    
    // Add click event listener and set positions 
    tooltips.forEach(function(tooltip, index) {
     
      // create and add id to tooltip triggers
      let logtooltipid = "tooltip-"+(index+1);
      tooltip.setAttribute("id", logtooltipid);
      
      // on spacebar action trigger click
      tooltip.addEventListener('keydown', function(e) {
        if(e.keyCode == 32){
          tooltip.click();
          e.preventDefault();
        }
      });
      
      tooltip.addEventListener('click', function(e) {  
          hiddenandremoveactive();
         //add active class
         tooltip.classList.add('active');
         
         tooltipcontent.setAttribute("aria-describedby", logtooltipid);
         //attach tooltip content
         tooltip.after(tooltipcontent);
         
         //function to set positioning of tooltip
         function repositiontooltip() {

           let tooltiptop = tooltip.getBoundingClientRect().top;
           let tooltipleft = tooltip.getBoundingClientRect().left;
           let tooltipright = tooltip.getBoundingClientRect().right;
           let tooltipheight = tooltip.getBoundingClientRect().height;
           let tooltipwidth = tooltip.getBoundingClientRect().width;
           let tooltipcontentwidth = tooltip.nextElementSibling.getBoundingClientRect().width;
           let tooltiphtmlwidth = document.querySelector('html').getBoundingClientRect().width;
           let tooltiphtmlheight = document.querySelector('html').getBoundingClientRect().height;
           let tooltiphtmltop = document.querySelector('html').getBoundingClientRect().top;
           let tooltiptruetop = Math.abs(tooltiphtmltop) + tooltiptop;
    

          //reset bottom class
          tooltipcontent.classList.remove('tt-bottom');
    
          //reset position class for helper and info icons
          tooltipcontent.classList.remove('tooltip-icon-pos');
          
          // add position class for helper and info content if exists on trigger
          if (tooltip.classList.contains("tooltip-info") || tooltip.classList.contains("tooltip-help")){
              tooltipcontent.classList.add('tooltip-icon-pos');
          }
         
          // check height and set top or bottom position
          if (tooltiptop < (tooltiphtmlheight * 0.5)) {
             tooltipcontent.style.top = tooltiptruetop + tooltipheight + "px";
             tooltipcontent.style.bottom = "unset";
          } else {
             tooltipcontent.style.top = "unset";
             tooltipcontent.style.bottom = tooltiphtmlheight - tooltiptruetop + 4 + "px";
           tooltipcontent.classList.add('tt-bottom');
          }
         
          //reset top classes
          tooltipcontent.classList.remove('tt-top-mid');
          tooltipcontent.classList.remove('tt-top-right');
         
          // if top left 
          if (tooltipleft < (tooltiphtmlwidth * 0.333)) {
              tooltipcontent.style.left = tooltipleft + "px";
              tooltipcontent.style.right = "unset";
          }
            
          // if top middle 
          if (tooltipleft > (tooltiphtmlwidth * 0.333) && tooltipleft < (tooltiphtmlwidth * 0.666) ) {
           
            tooltipcontent.style.left = (tooltipleft + (tooltipwidth/2)) - (tooltipcontentwidth/2) + "px";
            tooltipcontent.style.right = "unset";
            tooltipcontent.classList.add('tt-top-mid');
         }
         
         // if top right
         if (tooltipleft > (tooltiphtmlwidth * 0.666)) {
             tooltipcontent.style.left = "unset";
             tooltipcontent.style.right = tooltiphtmlwidth - tooltipright + "px";
             tooltipcontent.classList.add('tt-top-right');
         }
         
        }
        tooltipcontent.innerHTML = tooltip.getAttribute('data-content') ;




        
         
        tooltipcontent.classList.remove('d-none');
        tooltipcontent.setAttribute('aria-hidden', 'false');
       

        repositiontooltip();
        // end repositiontooltip function
         
      
        //resize script conditions to reposition toolip
        window.addEventListener("resize", function(e){
           repositiontooltip();
        });
         e.preventDefault();
       });
    });


});