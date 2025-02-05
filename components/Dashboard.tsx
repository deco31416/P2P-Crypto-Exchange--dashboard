"use client"

import { useState, useEffect } from "react"
import type { ethers } from "ethers"
import Sidebar from "./Sidebar"
import Header from "./Header"
import P2PMarket from "./P2PMarket"
import QuickBuy from "./QuickBuy"
import MyOrders from "./MyOrders"
import MyTrades from "./MyTrades"
import RecentTransactions from "./RecentTransactions"
import MyBalance from "./MyBalance"
import Settings from "./Settings"
import Deposit from "./Deposit"
import Withdraw from "./Withdraw"
import Exchange from "./Exchange"
import OngoingOperations from "./OngoingOperations"
import Appeals from "./Appeals"
import IDO from "./IDO"
import Staking from "./Staking"
import Referrals from "./Referrals"
import SocialFiRewards from "./SocialFiRewards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardProps {
  account: string
  provider: ethers.providers.Web3Provider | null
}

export default function Dashboard({ account, provider }: DashboardProps) {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Diccionario para obtener títulos de secciones (en lugar de switch-case)
  const sectionTitles: Record<string, string> = {
    dashboard: "Dashboard",
    market: "P2P Market",
    deposit: "Deposit",
    withdraw: "Withdraw",
    exchange: "Exchange",
    orders: "My Orders",
    trades: "My Trades",
    "ongoing-operations": "Ongoing Operations",
    appeals: "Appeals",
    ido: "IDO",
    staking: "Staking",
    settings: "Settings",
    referrals: "Referrals",
    "socialfi-rewards": "SocialFi Rewards",
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header
          account={account}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          title={sectionTitles[activeSection] || "Dashboard"}
        />

        <main
          className={`flex-1 p-2 sm:p-4 md:p-6 overflow-auto transition-all duration-300 ${
            sidebarOpen && !isMobile ? "ml-72" : "ml-20"
          }`}
        >
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {activeSection === "dashboard" && (
              <>
                <MyBalance showSecondary={true} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <Card className="sm:col-span-2">
                    <CardHeader>
                      <CardTitle>Quick Exchange</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <QuickBuy provider={provider} />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Completion Rate</div>
                          <div className="text-xl sm:text-2xl font-bold">98.5%</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Average Response</div>
                          <div className="text-xl sm:text-2xl font-bold">5 min</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions />
                  </CardContent>
                </Card>
              </>
            )}
            {activeSection === "market" && <P2PMarket />}
            {activeSection === "deposit" && <Deposit />}
            {activeSection === "withdraw" && <Withdraw />}
            {activeSection === "exchange" && <Exchange />}
            {activeSection === "orders" && <MyOrders />}
            {activeSection === "trades" && <MyTrades />}
            {activeSection === "settings" && <Settings />}
            {activeSection === "ongoing-operations" && <OngoingOperations />}
            {activeSection === "appeals" && <Appeals />}
            {activeSection === "ido" && <IDO />}
            {activeSection === "staking" && <Staking />}
            {activeSection === "referrals" && <Referrals />}
            {activeSection === "socialfi-rewards" && <SocialFiRewards />}
          </div>
        </main>
      </div>
    </div>
  )
}

