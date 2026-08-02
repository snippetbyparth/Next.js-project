import {ReactNode} from "react";


import { employees } from "./employees";

interface RecentEmployeeProps {
    employee: {
        id: number;
        name: string;
        position: string;
        status: string;
    };
}

export default function RecentEmployees(){}
