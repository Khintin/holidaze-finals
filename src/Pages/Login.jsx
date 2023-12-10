export default function Login() {
    return <>
    <main className="bg-gray-300 p-6">
    <section className="flex flex-col gap-6 md:flex-row md:justify-center">
        <div className="my-10 grid place-items-center">
            <img src="/public/images/logo.png" className="big-logo" alt="logo" />
        </div>
        <div className="grid place-items-center text-center md:text-start p-2">
            <form action="/profile.html">
                
                <div class="gap-2 mb-2">
                    <label class="form-label text-sm" for="form1Example13"
                        >EMAIL ADDRESS</label
                    >
                    <input
                    className="border-green-600 w-full max-w-md h-7 p-1"
                        type="email"
                        id="username"
                        minlength="8"
                    />
                </div>

                
                <div class="gap-2 mb-2">
                    <label class="form-label text-sm" for="form1Example23">PASSWORD</label>
                    <input class="border-green-600 w-full max-w-md h-7 p-1" type="password" id="password" minlength="8"/>
                </div>

                <div>
                    
                    <div >
                        <input type="checkbox" value="" id="form1Example3" checked />
                        <label for="form1Example3"> Remember me </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                </div>

              
                <div className="justify-center flex md:justify-start content-center mt-5">
                    <button
                    id="btn-login"
                        type="button"
                        class="rounded-sm !bg-white py-2 px-4 hover:!bg-green-500"
                    >
                        LOG IN
                    </button>
                    </div>
            </form>
        </div>
    </section>
</main>
</>
}