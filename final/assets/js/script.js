document.addEventListener('click', function (event) {
    // Get the clicked element
    var clickedElement = event.target;

    // Check if the clicked element is not the image or the bubble
    if (!clickedElement.closest('.griditem') && !clickedElement.closest('.bubble')) {
        // Hide all bubbles
        var bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(function (bubble) {
            bubble.style.display = 'none';
        });
    }
});

function toggleDescription(drinkId) {
    // Hide all bubbles
    var bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(function (bubble) {
        bubble.style.display = 'none';
    });

    // Toggle the selected bubble
    var selectedBubble = document.getElementById(drinkId + '-bubble');
    selectedBubble.style.display = selectedBubble.style.display === 'none' ? 'block' : 'none';
}