//  <p><span class="fs-4 fw-bold">Id no. : </span> &nbsp; <span></span class=" fw-5 fw-medium"></p>
//             <p><span class="fs-4 fw-bold">Title :  </span> &nbsp; <span class="title fw-5 fw-medium">sfcwd</span></p>
//            <p><span class="fs-4 fw-bold">Url : </span>  &nbsp;<span class="url fw-5 fw-medium">scf</span></p>
//            <span class="fs-4 fw-bold">Album url : </span>&nbsp; <span class="thumbnailurl fw-5 fw-medium">faswe</span>
//             <br>
//             <br>
//             <button class="btn btn-primary">go to </button>


const container = document.getElementById("container");
const creatAlbum=(albums)=>{
    albums.forEach((album)=>{
        const div = document.createElement("div");
        div.className=("w-25 border p-3");
        div.innerHTML=` <p><span class="fs-4 fw-bold">Id no. : </span> &nbsp; <span></span class=" fw-5 fw-medium">${album.id}</p>
            <p><span class="fs-4 fw-bold">Title :  </span> &nbsp; <span class="title fw-5 fw-medium">${album.title}</span></p>
           <p><span class="fs-4 fw-bold">Url : </span>  &nbsp;<span class="url fw-5 fw-medium"> ${album.url}</span></p>
           <span class="fs-4 fw-bold">Album url : </span>&nbsp; <span class="thumbnailurl fw-5 fw-medium">${album.thumbnailUrl}</span>
            <br>
            <br>
            <button class="btn btn-primary">go to </button>`;
            container.appendChild(div);
    });
}

 const fetchAlbum = ()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json())
    .then((data)=>{
        creatAlbum((data));
    })
}

fetchAlbum();