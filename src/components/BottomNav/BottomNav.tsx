import { Home, Plus, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./BottomNavStyle.css";

export default function BottomNav() {
	return (
		<div className="bottom-nav-wrapper">
			{/* Floating Add Button */}
			<nav className="bottom-nav">
				<NavLink to="/add-service" className="fab-button">
					<Plus size={28} color="white" />
				</NavLink>

				{/* Navbar */}
				<NavLink to="/" end>
					<Home size={22} />
					<span>Home</span>
				</NavLink>

				<NavLink to="/settings">
					<Settings size={22} />
					<span>Settings</span>
				</NavLink>
			</nav>
		</div>
	);
}
