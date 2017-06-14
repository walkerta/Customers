// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

(function() {

});
// Your Code Goes Here
fetch('https://randomuser.me/api/', 'https://randomuser.me/api/?results=12')
$.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
          console.log(data);
        }

        .then(
          function(response) {
            return response.randomuser();
            console.log(response);

            function(response) {
              if (response.status !== 12) {
                console.log(response.status);
                return;

              })
            .then(function(json) {
              const firstUser = randomuser[0];
              const name = firstUser.name;
              const website = firstUser.website;
              const address = firstUser.address;
              const city = firstUser.city;
              const state = firstUser.state;
              const phone = firstUser.phone;

              console.log(name, website, address, city, state, phone);

            });
