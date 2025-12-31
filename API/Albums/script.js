

const container =document.getElementById("container");

const craeteAlbum=(albums)=>{
    albums.forEach((album)=>{
        const div = document.createElement("div");
        div.className=("w-25 border p-3");
        div.innerHTML = `<h2>${album.id}</h2>
            <div class="title">
                <span class="fs-2 fw-bold">title : </span>
                <span>${album.title}</span>
            </div>`;
            container.appendChild(div);
    });
}

const fetchAlbum = ()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>res.json())
    .then((data)=>{
        craeteAlbum(data);
    })
}

fetchAlbum();