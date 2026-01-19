function askAI() {
    let query = document.getElementById("userQuery").value.toLowerCase();
    let response = "";

    if(query.includes("donate") || query.includes("food near me")) {
        response = "🌟 You can post your food on the Donate Food page or check the Find Food page for nearby requests.";
    } else if(query.includes("leftover") || query.includes("surplus")) {
        response = "💡 Consider packaging it and donating immediately to prevent waste.";
    } else if(query.includes("how to reduce hunger") || query.includes("help")) {
        response = "🤝 You can volunteer, share this platform, or post excess food to help those in need.";
    } else {
        response = "🤖 Sorry, I didn’t understand. Try asking about donating food or finding food.";
    }

    document.getElementById("aiResponse").innerText = response;
}
