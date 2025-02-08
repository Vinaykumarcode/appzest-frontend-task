import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const printPage=()=>{
        window.print();
    }
  return (
//     <div className="navbar navbar-sticky">
// 	<div className="navbar-start">
// 		<Link className="navbar-item" to="/">Ripple UI</Link>
// 	</div>
// 	<div className="navbar-end">
// 		<Link className="navbar-item" to="/">Home</Link>
// 		<Link className="navbar-item" to="/register">Register</Link>
// 		<Link className="navbar-item" to="/login">Login</Link>
// 	</div>
// </div>



<div className="navbar rounded-lg">
	<div className="navbar-start">
	<svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
		<a className="navbar-item p-0">Appzest</a>
	</div>
	<div className="navbar-end">
		<div className="avatar avatar-ring avatar-md">
			<div className="dropdown-container">
				<div className="dropdown">
					<label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
						<img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
					</label>
					<div className="dropdown-menu dropdown-menu-bottom-left">
						<Link className="dropdown-item text-sm" to="/">Home</Link>
						<Link tabIndex="-1" className="dropdown-item text-sm" to="/register">Register</Link>
						<Link tabIndex="-1" className="dropdown-item text-sm" to="/login">Login</Link>
                        <button className="btn btn-primary" onClick={printPage}>Print</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Navbar