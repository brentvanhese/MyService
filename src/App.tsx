import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import BottomNav from "./components/BottomNav/BottomNav";
import AddService from "./pages/AddService";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function AppContent() {
	const location = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: trying to fix
	useEffect(() => {
		window.scrollTo(0, 0);
		// Prevent back swipe by pushing a new history state
		window.history.pushState(null, "", window.location.href);
	}, [location.pathname]);

	useEffect(() => {
		// Handle back button/swipe - prevent navigation
		const handlePopState = () => {
			window.history.pushState(null, "", window.location.href);
		};

		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	return (
		<div className="app">
			<main style={{ paddingBottom: "70px" }} key={location.pathname}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add-service" element={<AddService />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</main>

			<BottomNav />
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter basename="/MyService">
			<AppContent />
		</BrowserRouter>
	);
}
