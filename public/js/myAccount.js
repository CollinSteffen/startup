function openNav(){
    document.getElementById("mySidepanel").style.width = "12%";
    document.getElementsByClassName("openbtn").style.opacity = "0%";
}

function closeNav(){
    document.getElementById("mySidepanel").style.width = "0%";
    document.getElementsByClassName("openbtn").style.opacity = "100%";
}


class Post {
    constructor({author, date, desc, id, img, profile}){
        this.author = author
        this.date = date
        this.desc = desc
        this.id = id
        this.img = img;
        this.profile = profile;
    }
    toHTML(){
        return `
        <div class="card">
            <div class="container">
                <img src="${this.profile}" alt="Avatar" class="card-profile">
                <h4><b class="cardtitle">${this.author}</b></h4>'
                <img src="${this.img}" alt="post" style="width:100%" class="cardimages">'
            </div>
        </div>
        `;
    }
}