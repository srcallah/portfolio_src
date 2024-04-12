const CHANNEL = {
        slug: localStorage.getItem('student_slug'),
}

const MAIN = document.querySelector("main")


async function handleArenaContent(channel){
        const randomString = Math.random().toString(16).slice(2)
        const contentUrl = `https://api.are.na/v2/channels/${channel}/contents?sort=position&order=asc&per=100?nocache=${randomString}`
        return fetch(contentUrl).then(data => data.json())
}

async function getContents() {
        const { contents } = await handleArenaContent(CHANNEL.slug);
        await Promise.all(contents.map(async (content)=>{
                await handleChannelsInContent(content)
                }
        ))
}

async function handleChannelsInContent(content){
        if (content.class === "Channel"){
                const slug =  content.slug;
                const {contents} = await handleArenaContent(slug);
                handleEntriesOnPage(contents, 'Text')
                handleEntriesOnPage(contents, 'Image')
        }
}

function handleEntriesOnPage(entries, entryClass) {
    const frag = document.createDocumentFragment();
    const container = document.createElement("div");
    container.classList.add("student");
     container.classList.add(entryClass.toLowerCase());

    
    for (const entry of entries) {
        if (entry.class === entryClass) {
            if (entryClass === "Image") {
                const imgDiv = document.createElement("div");
                imgDiv.classList.add("image-wrapper");
                const img = document.createElement("img");
                const imageCaption = document.createElement("p")
                imageCaption.classList.add("caption")
                imageCaption.innerHTML = entry.title;
                img.src = entry.image.original.url;
                imgDiv.appendChild(img);
                imgDiv.appendChild(imageCaption);
                container.appendChild(imgDiv);
            } else if (entryClass === "Text") {
                container.insertAdjacentHTML('beforeend', entry.content_html);
            }
        }
    }
    
    frag.appendChild(container);
    MAIN.appendChild(frag);
}


window.onload = function () {
        getContents();
}
