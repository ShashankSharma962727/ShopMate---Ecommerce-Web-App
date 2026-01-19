import DashboardTabs from "../../Components/DasboardTabs/DashboardTabs"
import { DashboardInfo } from "../../Components/DashboardInfo/DashboardInfo"
import Layout from "../../Components/Layout/Layout"

const Admin = () => {
  return (
    <Layout>
        <div className="w-[90%] m-auto">
          <DashboardInfo/>
          <DashboardTabs/>
        </div>
    </Layout>
  )
}

export default Admin