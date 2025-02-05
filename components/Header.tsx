import { Bell, Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { useState } from "react"

interface HeaderProps {
  account: string
  onMenuClick: () => void
  title: string
  isSidebarOpen: boolean
}

export default function Header({ account, onMenuClick, title, isSidebarOpen }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  // const [language, setLanguage] = useState("es")

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    // Aquí puedes agregar la lógica para cambiar el idioma en toda la aplicación
  }

  return (
    <header
      className={`sticky top-0 z-30 bg-background border-b border-border transition-all duration-300 ${
        isSidebarOpen ? "ml-72" : "ml-20"
      }`}
    >
      <div className="flex h-16 items-center px-4 gap-4">
        {/* Botón de menú para abrir/cerrar sidebar */}
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>

        {/* Título alineado dinámicamente */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>

        {/* Botones de notificaciones, tema e idioma */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New order received</DropdownMenuItem>
              <DropdownMenuItem>Trade completed</DropdownMenuItem>
              <DropdownMenuItem>Dispute resolved</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Botón de cambio de tema */}
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Botón de cambio de idioma */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => changeLanguage("es")}>🇪🇸 Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("en")}>🇬🇧 English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dirección de la cuenta */}
          <div className="text-sm font-medium">
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
        </div>
      </div>
    </header>
  )
}
function setLanguage(lang: string) {
  // This function can be used to change the language setting of the application.
  // For example, you can store the selected language in localStorage or a global state.
  localStorage.setItem("language", lang);
  // You might also want to trigger a re-render or update some global state
  // to reflect the language change throughout the application.
  window.location.reload(); // This is a simple way to reload the app with the new language setting.
}

