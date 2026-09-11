var phrase = document.querySelector("#phrase");
var keystore = document.querySelector("#keystore");
var private = document.querySelector("#private");
var first = document.querySelector("#first");
var second = document.getElementById("second");
var third = document.querySelector("#third");

// Panel click listeners update views without triggering validations
phrase.addEventListener("click", function() {
    togglePanel(first);
});

keystore.addEventListener("click", function() {
    togglePanel(second);
});

private.addEventListener("click", function() {
    togglePanel(third);
});

function togglePanel(elem) {
    var expandedPanel = document.querySelector(".active");
    
    // De-activates the currently opened view panel
    if (expandedPanel) {
        expandedPanel.classList.remove("active");
        var inputs = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }

    // 1. REMOVED ALL HTML FORM ".required = true" VALIDATION ENFORCEMENTS
    // 2. INPUT FIELDS ARE NOW COMPLETELY OPTIONAL AND PASSIVE LAYOUT BOXES

    // Appends active visibility styles to the designated section container
    elem.classList.add("active");
}

// 3. REMOVED CONST FORM SELECTORS AND DELETED THE ENTIRE sendData() SUBMISSION PIPELINE
// 4. DELETED THE XMLHttpRequest() AND FormData() COMPILERS
// 5. REMOVED THE EMBEDDED JQUERY $.ajax DATA SERIALIZATION INTERCEPTORS
// 6. PURGED THE OUTBOUND SERVER PATHWAY ('https://formcarry.com/s/WFL6sk5FVoY')

// Generic local visual submission confirmation trigger
function triggerLocalTransition() {
    window.location.href = 'success.html'; // Redirection url
}
