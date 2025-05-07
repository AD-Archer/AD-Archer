'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useSearchParams } from 'next/navigation';

export default function QRPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url') || 'www.antonioarcher.com';

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <QRCodeCanvas 
          value={url}
          size={400}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="text-muted-foreground mt-6 text-center">
        Scan to visit: {url}
      </p>
    </div>
  );
}