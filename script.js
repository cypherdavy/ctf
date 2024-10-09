(function() {
    // Base64 encoding of flags
    const encodedFlags = {
        easy: "RkxBR3tERUFEU0VDFQ==",        // FLAG{DEADSEC}
        intermediate: "RkxBR3tEM0FEdHMzY30=", // FLAG{D3ADs3c}
        hard: "RkxBR3tEZWFkRTE3aEN9",       // FLAG{DeadE17hC}
        expert: "RkxBR3tEMzREQzA0ZzM=",      // FLAG{D34dC0d3}
        final: "RkxBR3tGRUFEU0VDFQ==",       // FL4G{DEADSEC}
        hidden1: "RkxBR3tBSElERU5BfQ==",      // FLAG{4_HIDDEN}
        hidden2: "RkxBR3tE34RDSFJNRVJ9",     // FLAG{D34D_H1DDE_N2}
        hidden3: "RkxBR3tEMkZTTw==",          // FLAG{D33DSECU5}
        hidden4: "RkxBR3tZMEZVTk5FRQ==",      // FLAG{Y0U_F0UND_M3}
        hidden5: "RkxBR3tWRVhBVEhFTQ==",       // FL4G{WH0_W0ULD_VAULT_H3RE}
    };

    // Function to decode base64
    function decodeBase64(str) {
        return atob(str);
    }

    // Decode the flags
    const flags = Object.fromEntries(
        Object.entries(encodedFlags).map(([key, value]) => [key, decodeBase64(value)])
    );

    function verifyFlag() {
        const input = document.getElementById('flag-input').value.trim();
        const messageOutput = document.getElementById('message-output');

        // Hidden verification logic
        const isFinalFlag = (input === flags.final);
        const isAnyValidFlag = Object.values(flags).includes(input);

        if (isFinalFlag) {
            messageOutput.innerHTML = `
                <p>Congratulations! You've found the final flag!</p>
                <p>Contact me on <a href="https://www.instagram.com/davycipher/" target="_blank">Instagram</a> to claim your prize!</p>
            `;
        } else if (isAnyValidFlag) {
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
