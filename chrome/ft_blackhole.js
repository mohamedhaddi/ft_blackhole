const username = document
    .getElementsByClassName("login")[0]
    .getAttribute("data-login");

const blackholeDataAPI = "https://profile.intra.42.fr/users/" + username + "/goals?cursus=42cursus";

fetch(blackholeDataAPI)
    .then((res) => res.json())
    .then((out) => {
        if (Object.getOwnPropertyNames(out).length !== 0) {

            const daysLeft = out['singularity'];

            const statuses = {
                'sad': {cat: "😿", color: "#D8636F"},
                'scared': {cat: "🙀", color: "#F0AD4E"},
                'happy': {cat: "😸", color: "#5CB85C"}
            }

            const emotion = (() => {
                if (daysLeft <= 15) {
                    return 'sad';
                } else if (daysLeft <= 42) {
                    return 'scared';
                } else {
                    return 'happy';
                }
            })();

            const daysLeftDiv = document.createElement("div");

            daysLeftDiv.innerText = daysLeft + ' days left ' + statuses[emotion]["cat"];
            daysLeftDiv.style.color = statuses[emotion]["color"];
            daysLeftDiv.style.fontSize = "0.7em";
            daysLeftDiv.style.fontWeight = "400";
            daysLeftDiv.style.animation = "0.42s ease 0s 1 normal none running fadeIn";

            document.getElementById("modern-bh-date").appendChild(daysLeftDiv);

        }
    })
    .catch((err) => {
        throw err;
    });

// My Upwork overview:
