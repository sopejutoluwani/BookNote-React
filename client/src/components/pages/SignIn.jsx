import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h2 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Your personal <h1>LIBRARY</h1>
            </h2>
            <p class="col-lg-10 fs-4">
              A dedicated space to store and track the books you've read. Keep
              notes, rate your reads, and share summaries with others who might
              enjoy the same books. Build your own literary journey—all in one
              place.
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              class="p-4 p-md-5 border rounded-3 bg-body-tertiary"
              action="/login"
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
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Log In
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

              <small class="text-body-secondary">
                By clicking 
                <Link to="/register">Sign up</Link>, you agree to the
                terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
