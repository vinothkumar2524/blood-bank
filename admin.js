
const onLoad = () => {
    console.log("log from admin page");
    if (!localStorage.isDonationEnabled) {
        localStorage.setItem("isDonationEnabled", true)
    }
}

const toggleData = () => {
    
    localStorage.setItem("isDonationEnabled", !JSON.parse(localStorage.isDonationEnabled));
    console.log("Toggle button clicked", localStorage.isDonationEnabled);
    if (JSON.parse(localStorage.isDonationEnabled)) {
        document.getElementById("button").innerText = "Disable Donation"
    }
    else {
        document.getElementById("button").innerText = "Enable Donation"
    }
}

