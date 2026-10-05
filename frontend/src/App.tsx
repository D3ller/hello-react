import { Route, Outlet, createRoutesFromElements, createBrowserRouter } from "react-router";
import AuthProvider from "@features/auth/provider/AuthProvider.tsx";
import Navbar from "@components/Navbar.tsx";
import HomePage from "./pages/index/HomePage.tsx";
import FindMyJob from "./pages/index/FindMyJob.tsx";
import ListAllCompanies from "@features/company/pages/ListAllCompanies.tsx";
import { GetCompany, GetCompanyLoader } from "@features/company/pages/GetCompany.tsx";
import Login from "@features/auth/pages/Login.tsx";
import Register from "@features/auth/pages/Register.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthProvider><Outlet/></AuthProvider>}>
            <Route element={<Navbar/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"/find-my-employee"} element={<FindMyJob/>}/>

                <Route path={"/company"}>
                    <Route index element={<ListAllCompanies/>}/>
                    <Route id="company" path={":company-slug"} loader={GetCompanyLoader}>
                        <Route index element={<GetCompany/>} />
                        <Route path={"postes"} />
                    </Route>
                </Route>
            </Route>

            <Route path={"/auth"}>
                <Route path={"register"} element={<Register/>}/>
                <Route path={"login"} element={<Login/>}/>
            </Route>
        </Route>
    )
);
