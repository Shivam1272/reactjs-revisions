
export const gitHubInfo = async () => {
    const res = await fetch("https://api.github.com/users/shivam1272");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    else return await res.json();
};
