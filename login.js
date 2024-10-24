import "./Login.css"; // Importing specific styles for the login component

export default function Login({ onLogin }) {
  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="login-footer">
        <p>
          New to our site? <a href="#">Create an account</a>
        </p>
        <p>
          <a href="#">Forgot your password?</a>
        </p>
      </div>
    </div>
  );
}
