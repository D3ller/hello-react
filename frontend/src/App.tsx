import { Routes, Route } from "react-router";
import Navbar from "@components/Navbar.tsx";
import HomePage from "./pages/index/HomePage.tsx";
import FindMyJob from "./pages/index/FindMyJob.tsx";
import ListAllCompanies from "@features/company/pages/ListAllCompanies.tsx";
import GetCompany from "@features/company/pages/GetCompany.tsx";
import Login from "@features/auth/pages/Login.tsx";

function App() {
    return (
        <>
            <main className={"min-h-dvh"}>
                <Routes>
                    <Route element={<Navbar />}>
                        <Route index element={<HomePage/>}/>
                        <Route path={"/find-my-employee"} element={<FindMyJob/>} />

                        <Route path={"/company"}>
                            <Route index element={<ListAllCompanies/>}/>
                            <Route path={":company-slug"} element={<GetCompany/>}/>
                        </Route>
                    </Route>

                    <Route path={"/auth"}>
                        <Route path={"login"} element={<Login/>}/>
                    </Route>
                </Routes>
            </main>
        </>
    );
}

export default App
