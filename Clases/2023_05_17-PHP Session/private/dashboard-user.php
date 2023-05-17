<?php
// 0. Inicio sesion o continuo con sesion iniciada
session_start();

// 1. Comprobar si la session esta iniciada
if(isset($_SESSION['user'])){
  // Existe
  if($_SESSION['user']['rol_id'] == 1){
  // 3. Si session iniciada y rol de usuario, te mando al usuario
  header('Location: ../private/dashboard.php');
  }else{
    // 4. Si session iniciada y rol admin, todo ok
    // Fabuloso
  }
}else{
  // 2. Si no esta iniciada, te mando al login
  header('Location: ../auth/login.php');
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Página web</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#">Logo</a>
      </div>
      <div class="user-profile">
        <img src="profile-pic.jpg" alt="Foto de perfil" class="profile-pic" id="dropdownMenuLink">
        <a href="#" class="username" id="dropdownMenuLink"><?php echo $_SESSION['user']['nombre']?> <i class="fas fa-caret-down"></i></a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#"><i class="fas fa-user"></i> Ver perfil</a>
          <a class="dropdown-item" href="#"><i class="fas fa-cog"></i> Ajustes</a>
          <a class="dropdown-item" href="../auth/logout.php"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
        </div>
      </div>
    </nav>
  </header>
  
  <main>
    <!-- Contenido de la página -->
    <h1>PAGINA DE USUARIO SIN MAS</h1>
  </main>
</body>
</html>
