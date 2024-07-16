document.getElementById('profile_btn_toggle').addEventListener('click', () =>{
    let dropdown = document.getElementById('profile_drop_down')
    dropdown.classList.toggle('visibility_view');
});


document.getElementById('notification_btn_toggle').addEventListener('click', () =>{
    let dropdown = document.getElementById('notification_drop_down')
    dropdown.classList.toggle('visibility_view');
});



window.addEventListener("click", (e) => {
    
    const dropdown = document.getElementById("notification_drop_down");
        if (!dropdown.classList.contains('visibility_view')) {
            dropdown.classList.add('visibility_view')
        }
        // const profileHide = document.getElementById("profile_drop_down");
        // if (!profileHide.classList.contains('visibility_view')) {
        //     profileHide.classList.add('visibility_view')
        // }
});



setDistributorsDropDown()
function setDistributorsDropDown() {
    const dropBtns = document.getElementsByClassName('distributors_list_btn');
    for (let i = 0; i < dropBtns.length; i++) {
        dropBtns[i].addEventListener('click',()=>{
            var dropdownContent = dropBtns[i].nextElementSibling;
            if (dropdownContent != null){
                dropdownContent.classList.toggle('visibility_view');
            }
        } );
    }
}


var x = setInterval(function() {
  // If the count down is finished, write some text
    addNotifs();
    jQuery.ajax({
            type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url         : "/notifications/update", // the url where we want to POST
            data        : "", // our data object
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                document.getElementById("notification_drop_down").innerHTML =data;
                // here we will handle errors and validation message
                });

}, 50000);

function addNotifs(){
    jQuery.ajax({
            type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url         : "/notifications/num", // the url where we want to POST
            data        : "", // our data object
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                document.getElementById("notiy_num").innerHTML =data;
                // here we will handle errors and validation message
                });
}
jQuery("#id_country").change(function (){
    var country=jQuery("#id_country").val();
   jQuery.ajax({
            type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url         : "/cities/change/"+country, // the url where we want to POST
            data        : "", // our data object
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                document.getElementById("state_id").innerHTML =data;
                // here we will handle errors and validation message
                });
});
