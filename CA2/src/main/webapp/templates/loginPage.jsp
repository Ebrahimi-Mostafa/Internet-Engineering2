<%@include file="header.jsp" %>

<br>  <br>  <br>  <br> 

  <h1>Welcome to Mizdooni</h1>
  <form method="post" action="">
    <label>Username:</label>
    <input name="username" type="text" required/>
    <br>
    <label>Password:</label>
    <input name="password" type="password" required/>
    <br>
    <button type="submit" class="btn btn-dark">Login!</button>
  </form>

<%@include file="scripts.jsp" %>

  <script>
    // alert("Welcome to Mizdooni");
    // Swal.fire({
    //   title: 'Welcome to Mizdooni',
    //   text: 'Please login to continue',
    //   icon: 'info',
    //   confirmButtonText: 'Login'
    // })
  </script>

<%@include file="footer.jsp" %>
