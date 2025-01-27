"use client"
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
export default function ModeToggleButton() {
    const { theme, setTheme } = useTheme();
    return (
        <Button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} className="ml-10">
            ModeToggle
        </Button>
    );
}