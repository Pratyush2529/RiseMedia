        function validateForm() {
      
          document.getElementById('nameError').textContent = '';
          document.getElementById('emailError').textContent = '';
          document.getElementById('passwordError').textContent = '';
          document.getElementById('phoneNumberError').textContent = '';
      
          var name = document.getElementById('name').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var phoneNumber = document.getElementById('phoneNumber').value;
      
          if (!/^[a-zA-Z]+$/.test(name) || name.length < 6) {
            document.getElementById('nameError').textContent = 'Name should contain alphabets and be at least 6 characters long.';
            return;
          }
      
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format. Please use name@domain.com.';
            return;
          }
      
          if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password should be at least 6 characters long.';
            return;
          }
          
          if (!/^\d{10}$/.test(phoneNumber)) {
            document.getElementById('phoneNumberError').textContent = 'Phone number should contain 10 digits only.';
            return;
          }
      
          alert('Form submitted successfully!');
        }
