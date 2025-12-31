//  <div class="w-25 "> 
//                 <h2>Email Address</h2>
//                 <p class="fs-4 fw-medium">fjgyuu</p>
//                 <h2>comments</h2>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dicta illum blanditiis in
//                     molestias obcaecati libero, unde corrupti temporibus autem. Iusto doloremque a saepe quis ipsam
//                     repellendus quae non sapiente cupiditate officia corporis reiciendis dolorem, odit esse enim tempore
//                     molestiae consequatur cumque deleniti debitis modi nobis similique quos. Tempore, ex.
//                 </p>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </div>

   const container = document.getElementById("container");         
const creatComments =(comments)=>{
    comments.forEach((comment)=>{
        const div= document.createElement("div");
        div.className="w-25 border p-3";
        div.innerHTML=`<div class=" "> 
                <h2>Email Address</h2>
                <p class="fs-5 fw-medium">${comment.email}</p>
                <h2>comments</h2>
                <p >
                     ${comment.body}
                </p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>`;
            container.appendChild(div);
    });
    
}

const fetchNote = ()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>res.json())
    .then((data)=>{
        creatComments(data);
    })

} 

fetchNote();
 