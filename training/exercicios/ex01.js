// ### 1. O Consumidor de API (Async/Await)
// **Objetivo:** Praticar requisições HTTP e tratamento de erros.
// *   **Tarefa:** Crie uma função chamada `getGitHubUser(username)` que use a [GitHub API](https://api.github.com/users/github_username).
// *   **Requisitos:**
//     *   Use `fetch` com `async/await`.
//     *   Exiba no console o nome, a bio e o número de repositórios.
//     *   Implemente um `try/catch` para lidar com usuários não encontrados (erro 404).


async function getGitHubUser(username) {
    try {
        const user = await fetch(`https://api.github.com/users/${username}`);

        if (!user.ok) {
            throw new Error("Erro na API");
        }

        const dados = await user.json();

        console.log(`Nome: ${dados.name} \nBio: ${dados.bio} \nRepositórios: ${dados.public_repos}`);

    } catch (erro) {
        console.log(erro);
    }
}

getGitHubUser("becsnr")