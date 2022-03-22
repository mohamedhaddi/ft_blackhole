let blackholeDiv = document
    .getElementById("bh")
    .getElementsByClassName("emote-bh")[0];

let blackholeDate = (() => {
    let date = blackholeDiv.getAttribute("data-original-title");
    let [day, month, year] = [...date.split("/")];
    return `${month}/${day}/${year}`;
})();

let daysLeft = Math.floor(
    (new Date(blackholeDate) - new Date())
    / (1000 * 60 * 60 * 24)
);

blackholeDiv
    .children[2]
    .appendChild((() => {
        let daysLeftDiv = document.createElement("div");
        daysLeftDiv.innerText = `${daysLeft} days left`;
        daysLeftDiv.style.fontSize = "0.7em";
        daysLeftDiv.style.fontWeight = "400";
        return daysLeftDiv;
    })()
    );
