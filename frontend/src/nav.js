import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default function Nav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">SBI BANK </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#/bank">Bank <span class="sr-only"></span></a>
      </li> */}
      <li class="nav-item">
        <a class="nav-link" href="#/register">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login">Login</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link " href="#/alldata">UserData</a>
      </li>
    </ul>
  </div>
</nav>
        </>

    )
}