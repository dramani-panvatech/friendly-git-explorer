
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';

const Offering = () => {
  const [sidebarWidth, setSidebarWidth] = useState('250px');

  // Listen for sidebar width changes
  useEffect(() => {
    const handleSidebarWidthChange = () => {
      const width = document.documentElement.style.getPropertyValue('--sidebar-width') || '250px';
      setSidebarWidth(width);
    };

    // Set up a MutationObserver to watch for style changes
    const observer = new MutationObserver(handleSidebarWidthChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    return () => observer.disconnect();
  }, []);



  const handleAddSpecialOffer = () => {
    console.log('Add Special Day Offer clicked');
  };

  const handleCreateCoupon = () => {
    console.log('Create Coupon Code clicked');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50"
        style={{ '--sidebar-width': sidebarWidth } as React.CSSProperties}>
        <AdminSidebar onWidthChange={setSidebarWidth} />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mx-auto">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Offering</h1>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Manage Offering</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Set special day offers, apply coupon codes, and manage availability.
                  </p>

                  <div className="flex gap-4">
                    <Button onClick={handleAddSpecialOffer}>
                      Add Special Day Offer
                    </Button>
                    <Button variant="secondary" onClick={handleCreateCoupon}>
                      Create Coupon Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div >
    </SidebarProvider >
  );
};

export default Offering;
