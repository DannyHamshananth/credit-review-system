import { Input } from "@/components/ui/input";
import { Bell, HelpCircle, Search } from "lucide-react";
export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
            <h1 className="text-xl font-bold">DemoApp</h1>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search..." className="pl-8 w-48" />
                </div>
                <HelpCircle className="h-5 w-5 cursor-pointer text-gray-600" />
                <Bell className="h-5 w-5 cursor-pointer text-gray-600" />
            </div>
        </header>
    );
}