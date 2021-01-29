class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }

    tampilProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="col-md-3 mb-2">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">Lihat Profil</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-secondary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Perusahaan: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Bergabung Sejak: ${user.created_at}</li>
                    </ul>
                </div>
            </div>    
        `;
    }

    alert(message, className){
        clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');
        const input = document.querySelector('.search');
        container.insertBefore(div, input);
    }

    clearAlert(){
        const alert = document.querySelector(".alert");
        if(alert){
            alert.remove();
        }
    }

    clear(){
        this.profile.innerHTML = '';
    }

}   
