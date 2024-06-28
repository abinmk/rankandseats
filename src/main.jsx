import React from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from "./container/dashboards/sales/sales.jsx";
import Error401 from "./container/errors/error401/error401.jsx";
import Auth from "./firebase/auth.jsx";
import Login from "./firebase/login.jsx";
import Signup from "./firebase/signup.jsx";
import Scrolltop from "./components/common/scrolltop/scrolltop.jsx";
import { Allotments } from "./container/dashboards/allotments/Allotments.jsx";
import { LastRank } from "./container/dashboards/lastRank";
import { Colleges } from "./container/dashboards/colleges";
import { Courses } from "./container/dashboards/courses";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.Fragment>
		<BrowserRouter>
			<Scrolltop/>
			<React.Suspense>
				<Routes>
					<Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
						<Route index element={<Login />} />
						<Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
						<Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />} />
					</Route>
					<Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
						<Route path={`${import.meta.env.BASE_URL}dashboards/`} element={<Sales />} />
						<Route path={`${import.meta.env.BASE_URL}allotments/`} element={<Allotments />} />
						<Route path={`${import.meta.env.BASE_URL}lastrank`} element={<LastRank />}/>
						<Route path={`${import.meta.env.BASE_URL}institutes/`} element={<Colleges />} />
						<Route path={`${import.meta.env.BASE_URL}courses`} element={<Courses />} />
						<Route path={`${import.meta.env.BASE_URL}fees`} element={<Courses />} />
						<Route path={`${import.meta.env.BASE_URL}wishlist`} element={<Courses />} />
					</Route>
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	</React.Fragment>
);
