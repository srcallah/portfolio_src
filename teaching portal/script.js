const CHANNEL = {
        slug: "archive-of-disappearance",
}

const SECTION = document.getElementById("student__links")

async function handleArenaContent(channel){
        const randomString = Math.random().toString(16).slice(2)
        const contentUrl = `https://api.are.na/v2/channels/${channel}/contents?sort=position&order=asc&per=100?nocache=${randomString}`
        return fetch(contentUrl).then(data => data.json())
}

async function getContents() {
        const { contents } = await handleArenaContent(CHANNEL.slug);
        console.log(contents)
        await Promise.all(contents.map(async (content)=>{
                await handleChannelsOnPage(content)
                }
        ))
}

async function handleChannelsOnPage(entry){
        const frag = document.createDocumentFragment();
    const container = document.createElement("div");
    container.classList.add("link");
        const anchor = document.createElement('a')
        if (entry.class === "Channel") {
                anchor.href = "/student"
                anchor.innerHTML = entry.title
                container.appendChild(anchor);
        }
        anchor.addEventListener('click', function(e){                
                localStorage.setItem('student_slug', entry.slug)
        })
        frag.appendChild(container);
        SECTION.appendChild(frag);
}


window.onload = function () {
        getContents();
}
