function Register() {
  return (
    <div>
      <div class="col-md-10 mx-auto col-lg-5 register">
        <form
          class="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          action="/register"
          method="post"
        >
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Username"
              name="username"
            />
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Register
          </button>
          <hr class="my-4" />

          <div class="col">
            <div class="card">
              <div class="card-body google">
                <a class="btn btn-block " href="/auth/google" role="button">
                  <i class="fab fa-google"></i>
                  <b>Sign In with Google</b>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
