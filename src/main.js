import './style.css'

const app = document.querySelector(`#app`);
function renderLogin() {
app.innerHTML = ` <main>
        <section id="formulario" class="h-screen flex justify-center items-center ">
            <form class="w-96 p-8 flex flex-col gap-4 border border-gray-300 rounded-2xl shadow-md" id="formData">
                <div>
                    <img class="md:shrink-0 w-60 mx-auto block" src="https://i.ibb.co/G4S14VBK/micaela.png" alt="clan-micaela">
                    <div class="col-span-1 space-y-2">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Jhon.doe"
                            class="border border-gray-200 w-full p-2 rounded-lg"
                            required
                        />
                        <p id="errorUsername" class="text-red-500 text-sm hidden"></p>
                    </div>
                    <div></div>
                    <div class="col-span-1 space-y-2 h-20">
                        <label for="password">password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="******"
                            class="border border-gray-200 w-full p-2 rounded-lg"
                            required
                        />
                        <p id="errorPassword" class="text-red-500 text-sm hidden"></p>
                    </div>
                    <div class="flex justify-center">
                        <button 
                        type="submit" 
                        class="w-60 bg-blue-400 hover:bg-blue-600 hover:scale-105 transition duration-200 px-5 py-2 rounded cursor-pointer"
                        >
                            LOGIN
                        </button>
                    </div>                
                </div>
            </form>
        </section>
    </main>
`
}

renderLogin();

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