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
		<a className="navbar-item">Ripple UI</a>
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