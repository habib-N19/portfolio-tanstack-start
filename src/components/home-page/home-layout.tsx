import { Outlet } from "@tanstack/react-router";

export function HomeLayout() {
    return <div className="container mx-auto px-4">
        <Outlet/>
    </div>
    }