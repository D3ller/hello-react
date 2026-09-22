import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/index/HomePage.tsx";
import FindMyCompany from "./pages/index/FindMyCompany.tsx";
import FindMyJob from "./pages/index/FindMyJob.tsx";

function App() {
    return (
        <>
            <main className={"min-h-dvh"}>
                <Routes>
                    <Route element={<Navbar user={null}/>}>
                        <Route index path={"/"} element={<HomePage/>}/>
                        <Route path={"/find-my-company"} element={<FindMyCompany/>}/>
                        <Route path={"/find-my-job"} element={<FindMyJob/>} />
                    </Route>

                    <Route path={"/auth"}>
                        <Route path={"login"}/>
                    </Route>
                </Routes>
            </main>
        </>
    );
}

export default App
