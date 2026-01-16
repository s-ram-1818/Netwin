
// basic syntax
function wait() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Done"), 1000);
    });
}

async function run() {
    const result = await wait();
    console.log(result);
}

run();

// get request
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error:", err.message);
    }
}
getUsers();

// post request
async function createUser() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Ram",
                role: "Developer"
            })
        });

        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
createUser();


// error handling
async function test() {
    try {
        await Promise.reject("Failed");
    } catch (err) {
        console.log(err);
    }
}
test();

