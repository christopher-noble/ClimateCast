"use client"

import { DEFAULT_CITY } from "@/utils/constants";
import Dashboard from "./[city]/page";

const DashboardPage = ({}) => {
    return (
        <div>
            <Dashboard params={{
                city: DEFAULT_CITY
            }}/>
        </div>
    )
}

export default DashboardPage;

