import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./Layout.jsx/Rootlayout"
import Expenselayout from "./Layout.jsx/ExpenseLayout.jsx"
import SMS from "./Pages/Sms.jsx"
import SettingLayout from "./Layout.jsx/Settingslayout.jsx"
import Fiat from "./Pages/FiatIncome.jsx"
import Crypto from "./Pages/CryptoIncome.jsx"
import Total from "./Pages/TotalIncome.jsx"
import IncomeLayout from "./Layout.jsx/IncomeLayout.jsx"
import NotFound from "./Pages/Notfound.jsx"
import { fiatLoader } from "./Pages/FiatIncome.jsx"
import { cryptoLoader } from "./Pages/CryptoIncome.jsx"
import { totalLoader } from "./Pages/TotalIncome.jsx"
import FiatExpenses from "./Pages/FiatExpenses.jsx"
import Totalexpenses from "./Pages/TotalExpenses.jsx"
import CryptoExpenses from "./Pages/CryptoExpenses.jsx"
import TotalInvest from "./Pages/TotalInvest.jsx"
import FiatInvest from "./Pages/FiatInvest.jsx"
import CryptoInvest from "./Pages/CryptoInvest.jsx"
import InvestLayout from "./Layout.jsx/InvestLayout.jsx"
import { smsLoader } from "./Pages/Sms.jsx"
import Account from "./Pages/Accout.jsx"
import Payment from "./Pages/Payment.jsx"

function App() {
 const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>

    <Route
      path="/"
      element={<IncomeLayout/>}>
      
      <Route
      index
      element={<Fiat/>}
      loader={fiatLoader}
      />

      <Route
        path="fiat"
        element={<Fiat/>}
        loader={fiatLoader}
      />

      <Route
        path="crypto"
        element={<Crypto/>}
        loader={cryptoLoader}
      />

      <Route
        path="total"
        element={<Total/>}
        loader={totalLoader}
      />


      </Route>

    <Route path="expenses" element={<Expenselayout/>}>
      <Route
        index
        element={<FiatExpenses/>}
        loader={fiatLoader}
      />

      <Route
        path="fiat"
        element={<FiatExpenses/>}
        loader={fiatLoader}
      />

      <Route
        path="crypto"
        element={<CryptoExpenses/>}
        loader={cryptoLoader}
      />

      <Route
        path="total"
        element={<Totalexpenses/>}
        loader={totalLoader}
      />
    
    </Route>


    <Route
      path="sms"
      element={<SMS/>}
      loader={smsLoader}
    />

    <Route path="investments" element={<InvestLayout/>}>
      <Route
        index
        element={<FiatInvest/>}
        loader={fiatLoader}
      />

      <Route
        path="fiat"
        element={<FiatInvest/>}
        loader={fiatLoader}
      />

      <Route
        path="crypto"
        element={<CryptoInvest/>}
        loader={cryptoLoader}
      />

      <Route
        path="total"
        element={<TotalInvest/>}
        loader={totalLoader}
      />
    
    </Route>


    <Route path="settings" element={<SettingLayout/>}>
      <Route
      index
      element={<Account/>}
      />

      <Route
      path="account"
      element={<Account/>}
      />

      <Route
      path="payment"
      element={<Payment/>}
      />
    
    </Route>

    <Route
      path="*"
      element={<NotFound/>}
    />
  </Route>
 ))

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
