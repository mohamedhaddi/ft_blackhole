setTimeout(function () {
    const blackholeDiv = document
        .getElementById("bh")
        .getElementsByClassName("emote-bh")[0];

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
}, 300);

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

/*
 *
 * Callback function to execute when mutations are observed:
 *
 * const callback = function (mutationsList, observer) {
 *     for (const mutation of mutationsList) {
 *         if (mutation.type === 'childList') {
 *             console.log('A child node has been added or removed: ', mutation);
 *         }
 *         else if (mutation.type === 'attributes') {
 *             console.log('The ' + mutation.attributeName + ' attribute was modified: ', mutation);
 *         }
 *     }
 * };
 *
 * const config = {attributes: true, childList: true, subtree: true};
 * const observer = new MutationObserver(callback);
 * observer.observe(blackholeDiv, config);
 *
 */

