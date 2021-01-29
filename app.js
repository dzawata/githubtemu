const github = new Github;
const ui = new UI;

const cariUser = document.getElementById("cariUser");

cariUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !==''){
        github.getUser(userText)
        .then(data => {
            if(data.profileData.message === 'Not Found') {
                //alert
                ui.alert('User tidak ditemukan', 'alert-danger');
            }else{
                //profile
                ui.tampilProfile(data.profileData);
            }
        });
    }else{
        //hapus profile di div
        ui.clear();
    }
})