import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContackBlock() {
  function copyEmail() {
    const mail = document.getElementById("email").textContent;

    navigator.clipboard.writeText(mail).then(() => {
      //   alert("Email address copied to clipboard!");
      toast.success("Email copied to clipboard!", {
        position: "top-right",
        autoClose: 2000, // Hide after 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  }

  return (
    <div className="h-container contact-ctn" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-lg about-col">
            <h6 className="sub-head">Get in touch</h6>
          </div>
        </div>
        <div className="row py-1">
          <div className="col-lg">
            <p className="text-center txt-color">
              What's next? Feel free to reach out to me if you're looking for
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg">
            <h5 className="text-center mail">
              <i class="fa-regular fa-envelope"></i> &nbsp;
              <span id="email">thamaraiselvan5069@gmail.com</span> &nbsp;
              <i
                class="fa-regular fa-clone cursor-pointer btn btn-sm btn-light"
                onClick={copyEmail}
              ></i>
            </h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg">
            <p className="text-center txt-color">
              You may also find me on this platforms!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <p className="text-center">
              <a
                href="https://www.linkedin.com/in/selvatsk-k-9605ts96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin social-icon"></i>
              </a>
              &nbsp; &nbsp;
              <a
                href="https://www.linkedin.com/in/selvatsk-k-9605ts96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github social-icon"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContackBlock;
