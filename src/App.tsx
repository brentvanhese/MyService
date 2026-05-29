import { BrowserRouter, Route, Routes } from "react-router-dom";

import BottomNav from "./components/BottomNav/BottomNav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

export default function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<main style={{ paddingBottom: "70px" }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</main>

				<BottomNav />
			</div>
		</BrowserRouter>
	);
}
