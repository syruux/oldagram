const post = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Rendering posts

const main = document.querySelector("main")

function renderPosts() {
    let postDOM = ``

    for (let i = 0; i < post.length; i++) {
        postDOM += `
        <section>
            <div class="container">
                <div class="user-info">
                    <img src="${post[i].avatar}" alt="${post[i].name} avatar" class="user-avatar-img">
                    <div>
                        <p class="bold-text" id="user-info">
                            ${post[i].name}
                            <span class="small-text">${post[i].location}</span>
                        </p>
                    </div>
                </div>
                
                <img src="${post[i].post}" alt="${post[i].name} portrait post" class="user-post"
                id="${post[i].username}-post">
                
                <div class="post-interactions">
                    <div class="interactions-imgs-wrapper">
                        <img src="images/icon-heart.png" class="interaction-img like-img" 
                        id="${post[i].username}-likebtn">
                        <img src="images/icon-comment.png" class="interaction-img">
                        <img src="images/icon-dm.png" class="interaction-img">
                    </div>
                    <p class="bold-text" id="${post[i].username}-likes">${post[i].likes} likes</p>
                    <p class="small-text" id="user-commment">
                        <span class="bold-text">${post[i].username}</span>
                        ${post[i].comment}
                    </p>
                </div>
            </div>
        </section>
        `
    }

    main.innerHTML = postDOM
}

renderPosts()

//Increasing/decreasing likes with both 
//post double click and heart icon click

const postIdsDOM = []
const likeBtnDOM = []
const likesIdsDOM = []
const likesCheck = []

for (let i = 0; i < post.length; i++) {
    postIdsDOM.push(document.getElementById(`${post[i].username}-post`))
    likesIdsDOM.push(document.getElementById(`${post[i].username}-likes`))
    likeBtnDOM.push(document.getElementById(`${post[i].username}-likebtn`))
    likesCheck.push(post[i].likes)
}

postIdsDOM[0].addEventListener("dblclick", function(){
    increaseLikes(0)
})

postIdsDOM[1].addEventListener("dblclick", function(){
    increaseLikes(1)  
})

postIdsDOM[2].addEventListener("dblclick", function(){
    increaseLikes(2)
})

likeBtnDOM[0].addEventListener("click", function(){
    increaseLikes(0)
})

likeBtnDOM[1].addEventListener("click", function(){
    increaseLikes(1)  
})

likeBtnDOM[2].addEventListener("click", function(){
    increaseLikes(2)
})

function increaseLikes(i) {
    if (post[i].likes === likesCheck[i]){
        post[i].likes += 1
        likesIdsDOM[i].innerHTML = `${post[i].likes} likes`
    } else if (post[i].likes === likesCheck[i] + 1) {
        post[i].likes -= 1
        likesIdsDOM[i].innerHTML = `${post[i].likes} likes`
    }
}