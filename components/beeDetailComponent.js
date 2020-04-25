function BeeDetailComponent(callback) {



    AppComponent.call(this);

    //document.body.appendChild(this.container);

    var posts = document.getElementById('divPosts');

    this.userDetailName = document.createElement('h1');
    this.userDetailEmail = document.createElement('p');
    this.userDetailPhone = document.createElement('p');
    this.userDetailBackBtn = document.createElement('button');
    this.userDetailBackBtn.innerHTML = 'BACK';
    
   
    posts.appendChild(this.userDetailName);
    posts.appendChild(this.userDetailEmail);
    posts.appendChild(this.userDetailPhone);
    //posts.appendChild(this.userDetailBackBtn);

    this.userDetailName.classList.add('userDetail');
    


    this.callback = callback;
    this.userDetailBackBtn.onclick = this.userDetailBackBtnOnClick.bind(this);
}

BeeDetailComponent.prototype = Object.create(AppComponent.prototype);
BeeDetailComponent.prototype.constructor = BeeDetailComponent;

BeeDetailComponent.prototype.showBeeDetails = function (user) {
    //this.show();
    /////Estas líneas son las que muestran los elementos en el divPosts
    this.userDetailName.innerHTML = user.name;
    this.userDetailEmail.innerHTML = user.email;
    this.userDetailPhone.innerHTML = user.phone; 
}

BeeDetailComponent.prototype.userDetailBackBtnOnClick = function () {
    
    this.callback();


}


