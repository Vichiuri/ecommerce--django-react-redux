window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('reset_password_btn').addEventListener("click", (e)=>{
       let alert_container = document.getElementById('alert_container')
       let loading_screen = document.getElementById('loading_screen')
       let new_password = document.getElementById('new_password').value
       let confirm_password = document.getElementById('c_password').value

       let email = document.getElementById('reset_email').value
       let reset_token = document.getElementById('reset_token').value
       let reset_csrf = document.getElementById('reset_csrf').value

       if (!new_password) {
           showAlertBar("Please enter a new password", 'danger')
       }else if (!confirm_password) {
        showAlertBar("Please enter confirmation password", 'danger')
       }else if (new_password != confirm_password) {
        showAlertBar("New password does not match confirmation password", 'danger')
       }else  {
           let formData = new FormData();
           formData.append('reset_token', reset_token)
           formData.append('email', email)
           formData.append('new_password', new_password )
           formData.append('confirm_password', confirm_password)
           formData.append('csrfmiddlewaretoken', reset_csrf)
            loading_screen.style.visibility='visible';
           fetch('/retailer/api/auth/forgot/', {
            method: 'PUT',
            body: formData,
        }).then(res=>res.json()).then(response=>{
            loading_screen.style.visibility='hidden';
           showAlertBar(response.message, 'success')
           window.location.assign("/");

        }).catch(error=>{
            loading_screen.style.visibility='hidden';
             showAlertBar("Something went wrong", 'danger')
        })
       }


       function showAlertBar(message, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        alert_container.appendChild(div)

        setTimeout(() => {
            while (alert_container.firstChild) {
                alert_container.removeChild(alert_container.firstChild);
            }
        }, 3000);
       }
    })
})