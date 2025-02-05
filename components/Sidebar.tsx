import { useState } from "react";
import {
  Home,
  DollarSign,
  CreditCard,
  RefreshCw,
  Settings,
  ChevronLeft,
  ChevronRight,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  Clock,
  Scale,
  Rocket,
  Award,
  Users,
  Gift,
  LayoutGrid,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({
  isOpen,
  setIsOpen,
  activeSection,
  setActiveSection,
}: SidebarProps) {
  const [isPinned, setIsPinned] = useState(false);

  // const toggleSidebar = () => {
  //   if (!isPinned) {
  //     setIsOpen(!isOpen);
  //   }
  // };

  // <button onClick={toggleSidebar}>Toggle Sidebar</button>

  const menuItems = [
    { icon: Home, text: "Dashboard", section: "dashboard" },
    { icon: RefreshCw, text: "P2P Market", section: "market" },
    { icon: ArrowDownToLine, text: "Deposit", section: "deposit" },
    { icon: ArrowUpFromLine, text: "Withdraw", section: "withdraw" },
    { icon: DollarSign, text: "Exchange", section: "exchange" },
    { icon: Wallet, text: "My Orders", section: "orders" },
    { icon: CreditCard, text: "My Trades", section: "trades" },
    { icon: Clock, text: "Ongoing Operations", section: "ongoing-operations" },
    { icon: Scale, text: "Appeals", section: "appeals" },
    { icon: Rocket, text: "IDO", section: "ido" },
    { icon: Award, text: "Staking", section: "staking" },
    { icon: Users, text: "Referrals", section: "referrals" },
    { icon: Gift, text: "SocialFi Rewards", section: "socialfi-rewards" },
    { icon: LayoutGrid, text: "Extras", section: "extras" },
    { icon: Settings, text: "Settings", section: "settings" },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 h-screen backdrop-blur-lg bg-card/80 border-r border-border shadow-lg transition-all duration-300 ease-in-out",
        isOpen ? "w-72" : "w-20",
        isPinned && "shadow-xl"
      )}
      onMouseEnter={() => !isPinned && setIsOpen(true)}
      onMouseLeave={() => !isPinned && setIsOpen(false)}
    >
      <div className="flex h-full flex-col">
        {/* Logo y Título */}
        <div className="flex items-center gap-3 p-4">
          <img
            src="https://cryptologos.cc/logos/chainx-pcx-logo.svg"
            alt="Logo"
            className="h-8 w-8 transition-all duration-300"
          />
          {isOpen && (
            <span className="text-lg font-bold tracking-wide">
              CriptoCambio
            </span>
          )}
        </div>

        {/* Menú de Navegación */}
        <ScrollArea className="flex-1 p-2 pr-6">
          <nav className="space-y-1">
            {menuItems
              .filter((item) => item.section !== "settings")
              .map((item) => (
                <Button
                  key={item.section}
                  variant={activeSection === item.section ? "secondary" : "ghost"}
                  className={cn(
                    "w-full flex items-center justify-start px-4 py-3 rounded-lg hover:bg-accent transition-all",
                    !isOpen && "justify-center px-0"
                  )}
                  onClick={() => setActiveSection(item.section)}
                >
                  <item.icon className="h-5 w-5" />
                  {isOpen && <span className="ml-3">{item.text}</span>}
                </Button>
              ))}
          </nav>
        </ScrollArea>

        {/* Separador */}
        <div className="w-full h-0.5 bg-border my-2"></div>

        {/* Sección Inferior - Settings & Pin Sidebar */}
        <div className="w-full p-4 flex flex-col gap-3">
          {/* Botón de Settings */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveSection("settings")}
            className={cn(
              "w-full flex items-center justify-start px-4 py-3 rounded-lg hover:bg-accent transition-all",
              !isOpen && "justify-center px-0"
            )}
          >
            <Settings className="h-5 w-5" />
            {isOpen && <span className="ml-3">Settings</span>}
          </Button>

          {/* Botón de Pin Sidebar */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPinned(!isPinned)}
            className={cn(
              "w-full flex items-center justify-start px-4 py-3 rounded-lg hover:bg-accent transition-all",
              !isOpen && "justify-center px-0"
            )}
          >
            {isPinned ? (
              isOpen ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )
            ) : isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            {isOpen && (
              <span className="ml-3">
                {isPinned ? "Unpin Sidebar" : "Pin Sidebar"}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
