// Página principal del Panel de Vendedor
// Ubicación: /seller/pages/sellerPage.jsx

import SellerData from '../components/sellerData';

export default function SellerDashboard() {
  const {
    renderSellerProfile,
    renderTabs,
    renderTabContent
  } = SellerData();

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-4">Panel de Vendedor</h1>
          {renderSellerProfile()}
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          {renderTabs()}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}