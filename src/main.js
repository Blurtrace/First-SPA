import './style.css'

const app = document.querySelector(`#app`);
function renderLogin() {
app.innerHTML = ` 
<main class="bg-gray-100 flex justify-center items-center min-h-screen">
  <div
    class="container relative w-[790px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden flex"
  >

    <!-- LOGIN -->
    <div class="w-1/2 overflow-hidden">
      <form
        class="sign-in h-full flex flex-col justify-center items-center gap-4 transition duration-500 ease-in-out"
      >
        <img
          class="w-40"
          src="https://i.ibb.co/G4S14VBK/micaela.png"
          alt=""
        />

        <h2 class="text-3xl font-bold">Login</h2>

        <span class="text-gray-500 text-sm">
          Enter your username and password
        </span>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="mail-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="text"
            placeholder="Email"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="lock-closed-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="password"
            placeholder="******"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <a href="#" class="text-sm text-blue-500 hover:underline">
          Forgot your password?
        </a>

        <button
          class="w-60 bg-blue-400 hover:bg-blue-600 hover:scale-105 transition duration-200 px-5 py-3 rounded-xl text-white font-semibold cursor-pointer"
        >
          LOGIN
        </button>
      </form>
    </div>

    <!-- REGISTER -->
    <div class="w-1/2 overflow-hidden">
      <form
        class="sign-up h-full flex flex-col justify-center items-center gap-4 transition duration-500 ease-in-out"
      >

        <img
          class="w-40"
          src="https://i.ibb.co/G4S14VBK/micaela.png"
          alt=""
        />
        <h2 class="text-3xl font-bold">Register</h2>

        <span class="text-gray-500 text-sm">
          Create your account
        </span>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="person-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="text"
            placeholder="Jhon Doe"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="mail-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="text"
            placeholder="Email"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="lock-closed-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="password"
            placeholder="******"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <button
          class="w-60 bg-blue-400 hover:bg-blue-600 hover:scale-105 transition duration-200 px-5 py-3 rounded-xl text-white font-semibold cursor-pointer"
        >
          REGISTER
        </button>
      </form>
    </div>

    <!-- PANEL DERECHO -->
    <div
      class="container-welcome absolute top-0 right-0 w-1/2 h-full bg-blue-500 text-white flex items-center justify-center rounded-l-[100px] transition-all duration-500"
    >

      <!-- WELCOME REGISTER -->
      <div
        class="welcome welcome-sign-up absolute flex flex-col items-center gap-5 px-10 text-center transition duration-500"
      >
        <h3 class="text-4xl font-bold">Welcome!</h3>

        <p>
          Enter your information to sign up
        </p>

        <button
          id="btn-sign-up"
          class="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-500 transition"
        >
          Register
        </button>
      </div>

      <!-- WELCOME LOGIN -->
      <div
        class="welcome welcome-sign-in absolute flex flex-col items-center gap-5 px-10 text-center transition duration-500 translate-x-full"
      >
        <h3 class="text-4xl font-bold">Hello!!</h3>

        <p>
          Enter your information to unlock your profile
        </p>

        <button
          id="btn-sign-in"
          class="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-500 transition"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</main>
`
}

renderLogin();

document.addEventListener("DOMContentLoaded", ()=>{
const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", ()=>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", ()=>{
    container.classList.add("toggle");
});

})



function validarLogin() {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const errorUsername = document.querySelector('#errorUsername');
    const errorPassword = document.querySelector('#errorPassword');

    let hayError = false;

    if (username.value === '') {
    errorUsername.classList.remove('hidden');
    errorUsername.textContent = 'Este campo es requerido';
    username.classList.add('border-red-500');
    hayError = true;
    }

    if (password.value === '') {
        errorPassword.classList.remove('hidden');
        errorPassword.textContent = 'Este campo es requerido';
        password.classList.add('border-red-500');
        hayError = true;
    }

    if (hayError) return;

    if (username.value === 'admin' && password.value === '1234') {
        // renderCrud();
        console.log("inicio de sesion correcto")
    } else {
        alert('Usuario o contraseña incorrectos');
    }
    }

    document.querySelector('#formData').addEventListener('submit', function(e) {
    e.preventDefault();
    validarLogin();
    });