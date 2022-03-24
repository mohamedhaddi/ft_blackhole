const blackholeDiv = document
    .getElementById("bh")
    .getElementsByClassName("emote-bh")[0];
const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
const blackholeDate = document.getElementById("bh-date").firstChild;

const observer = new MutationObserver(function (mutationList) {
    for (const mutation of mutationList) {
        if (!mutation.addedNodes) return;
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            if (dateRegex.test(mutation.addedNodes[i].data)) {
                main();
            }
        }
    }
});

if (blackholeDate && dateRegex.test(blackholeDate.data))
    main();
else {
    try {
        observer.observe(blackholeDiv, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false,
        });
    } catch (error) {
        console.log(error);
    }
}

function main() {
    const daysLeft = blackholeDiv.getAttribute("data-original-title");
    const daysNum = daysLeft.split(" ")[0];

    const status = (() => {
        if (daysNum <= 14)
            return {cat: "😿", color: "#D8636F"};
        else if (daysNum <= 42)
            return {cat: "🙀", color: "#F0AD4E"};
        else
            return {cat: "😸", color: "#5CB85C"};
    })();

    const daysLeftDiv = document.createElement("div");
    daysLeftDiv.innerText = daysLeft + ' ' + status["cat"];
    daysLeftDiv.style.color = status["color"];
    daysLeftDiv.style.fontSize = "0.7em";
    daysLeftDiv.style.fontWeight = "400";
    daysLeftDiv.style.animation = "0.42s ease 0s 1 normal none running fadeIn";

    blackholeDiv
        .children[1]
        .appendChild(daysLeftDiv);
}

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
