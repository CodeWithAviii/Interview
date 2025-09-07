async function apiFetch() {
    let url = 'https://api.github.com/users/CodeWithAviii'
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.login)
    console.log(data.bio);
    return data;
}

apiFetch();
