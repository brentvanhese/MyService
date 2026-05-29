import { Home, BarChart3, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./BottomNavStyle.css";

export default function BottomNav() {
	return (
		<div className="bottom-nav-wrapper">
			{/* Floating Add Button */}
			<button type="button" className="fab-button">
				<Plus size={28} />
			</button>

			{/* Navbar */}
			<nav className="bottom-nav">
				<NavLink to="/" end>
					<Home size={22} />
					<span>Home</span>
				</NavLink>

				<NavLink to="/stats">
					<BarChart3 size={22} />
					<span>Stats</span>
				</NavLink>
			</nav>
		</div>
	);
}
