$( ".mw-ytVideo" ).toArray().forEach( function ( ytVideo ) {
    ytVideo.addEventListener( "click", function ( event ) {
        // Disable cursor: pointer effect on ytVideo
        event.target.style.cursor = 'unset';

        // Hide placeholder thumbnail
        event.target.children[0].style.display = 'none'; 

        // Hide placeholder play button
        event.target.children[1].style.display = 'none';

        // Show YouTube embed iframe
        event.target.children[2].style.display = '';
        event.target.children[2].setAttribute( 'src', event.target.children[2].attributes['data-src'].textContent ); 
    });
});