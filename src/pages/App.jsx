import { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";
import store from "../redux/store";
import Header from "../components/common/header/header";
import Switcher from "../components/common/switcher/switcher";
import Sidebar from "../components/common/sidebar/sidebar";
import Pageheader from "../components/pageheader/pageheader";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/footer";
import Tabtotop from "../components/common/tab-to-tap/tabtotap";

function App() {

	const [lateLoad, setlateLoad] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setlateLoad(true);
	}, []);

	const showPageHeader = location.pathname.includes("dashboard");

	return (
		<Fragment>
			<Provider store={store}>
				<div style={{ display: `${lateLoad ? "block" : "none"}` }}>
					<Switcher />
					<div className="page">
						<Header />
						<Sidebar />
						{showPageHeader && <Pageheader />}
						<div className="main-content app-content">
							<div className="container-fluid">
								<Outlet />
							</div>
						</div>
					</div>
					<Tabtotop />
				</div>
			</Provider>
		</Fragment>
	);
}

export default App;
