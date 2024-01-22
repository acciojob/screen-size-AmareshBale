function updateWindowSize() {
            var widthElement = document.getElementById('width');
            var heightElement = document.getElementById('height');

            // Get the window width and height
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            // Update the content of the elements
            widthElement.textContent = windowWidth;
            heightElement.textContent = windowHeight;
        }

        // Call the function on page load
        updateWindowSize();

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowSize);