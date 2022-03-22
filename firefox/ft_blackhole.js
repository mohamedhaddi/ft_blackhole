let blackholeDiv = document
    .getElementById("bh")
    .getElementsByClassName("emote-bh")[0];

/*
 *
 * In case `data-original-title`'s value was removed or changed, use this code calculate it:
 *
 * let blackholeDate = (() => {
 *     let date = blackholeDiv.getAttribute("data-original-title");
 *     let [day, month, year] = [...date.split("/")];
 *     return `${month}/${day}/${year}`;
 * })();
 *
 * let daysLeft = `${
 *     Math.floor(
 *          (new Date(blackholeDate) - new Date())
 *          / (1000 * 60 * 60 * 24)
 *     )
 * } days left`;
 *
*/

let daysLeft = blackholeDiv.getAttribute("data-original-title");
let daysNum = daysLeft.split(" ")[0];

let status = (() => {
    if (daysNum <= 14)
        return {cat: "😿", color: "#D8636F"};
    else if (daysNum <= 42)
        return {cat: "🙀", color: "#F0AD4E"};
    else
        return {cat: "😸", color: "#5CB85C"};
})();

blackholeDiv
    .children[1]
    .appendChild((() => {
        let daysLeftDiv = document.createElement("div");
        daysLeftDiv.style.fontSize = "0.7em";
        daysLeftDiv.style.fontWeight = "400";
        daysLeftDiv.innerText = daysLeft + ' ' + status["cat"];
        daysLeftDiv.style.color = status["color"];
        return daysLeftDiv;
    })()
    );
