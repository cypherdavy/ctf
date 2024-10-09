// Using an IIFE to encapsulate the flags and avoid global namespace pollution
(function() {
    // Store the flags in an encoded format
    const encodedFlags = {
        easy: btoa("FLAG{DEADSEC}"),        // FLAG{DEADSEC}
        intermediate: btoa("FLAG{D3ADs3c}"), // FLAG{D3ADs3c}
        hard: btoa("FLAG{DeadE17hC}"),       // FLAG{DeadE17hC}
        expert: btoa("FLAG{D34dC0d3}"),      // FLAG{D34dC0d3}
        final: btoa("FL4G{DEADSEC}"),        // FL4G{DEADSEC}
    };

    // Function to decode base64
    function decodeBase64(str) {
        return atob(str);
    }

    // Verify function
    function verifyFlag() {
        const input = document.getElementById('flag-input').value.trim();
        const messageOutput = document.getElementById('message-output');

        // Check the user input against the decoded flags
        const decodedFlags = Object.fromEntries(
            Object.entries(encodedFlags).map(([key, value]) => [key, decodeBase64(value)])
        );

        if (input === decodedFlags.final) {
            messageOutput.innerHTML = `
                <p>Congratulations! You've found the final flag!</p>
                <p>Contact me on <a href="https://www.instagram.com/davycipher/" target="_blank">Instagram</a> to claim your prize!</p>
            `;
        } else if (Object.values(decodedFlags).includes(input)) {
            messageOutput.innerHTML = `
                <p>Good job! You've found a flag, but it's not the final one. Keep searching!</p>
            `;
        } else {
            messageOutput.innerHTML = `
                <p>Invalid flag. Try again or choose a different difficulty.</p>
            `;
        }
    }

    // Expose the verifyFlag function to the global scope
    window.verifyFlag = verifyFlag;
})();
