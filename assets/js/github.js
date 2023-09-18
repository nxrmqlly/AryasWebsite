function fetchAndDisplayGitHubRepos(e) {
    fetch(`https://api.github.com/users/${e}/repos`)
        .then((e) => e.json())
        .then((e) => {
            document.getElementById("github-repos").innerHTML = generateRepoArticles(e);
        })
        .catch((e) => {
            console.error("Error fetching GitHub repos:", e);
        });
}
function generateRepoArticles(e) {
    let t = "";
    return (
        e.forEach((e) => {
            t += `\n          <article class="article-box">\n              <div class="article-textbox">\n                  <div>\n                      <h3 class="betterh3">${e.name}</h3>\n                      <p class="article-text">${
                e.description || "No description available."
            }</p>\n                  </div>\n                  <div class="article-info">\n                      <a href="${
                e.html_url
            }" class="link" target="_blank">View on GitHub</a>\n                  </div>\n              </div>\n          </article>`;
        }),
        t
    );
}
const githubUsername = "not-arya";
fetchAndDisplayGitHubRepos("not-arya");
