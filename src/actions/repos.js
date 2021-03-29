export const fetchUserRepos = async (user) => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
        const repositories = await response.json();
        return repositories;
    } catch (err) {
        return { message: 'Error fetching user repos' }
    }
}
