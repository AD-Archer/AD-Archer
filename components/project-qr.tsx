'use client';

import { QRCodeCanvas } from 'qrcode.react';
import Link from 'next/link';
import { ArrowLeft, QrCode } from 'lucide-react';

interface ProjectQRProps {
  projectUrl: string;
}

export default function ProjectQR({ projectUrl }: ProjectQRProps) {
  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 shadow-md border border-border/50">
      <h3 className="text-xl font-bold mb-3 flex items-center">
        <QrCode className="mr-2 h-4 w-4 text-primary" />
        Share Project
      </h3>
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <QRCodeCanvas
            value={projectUrl}
            size={200}
            level="H"
            includeMargin={true}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-3 text-center">
          Scan to visit this project
        </p>
        <Link
          href={`/qr?url=${encodeURIComponent(projectUrl)}`}
          className="mt-3 text-primary hover:underline text-sm font-medium inline-flex items-center"
        >
          View Full Screen QR
          <ArrowLeft className="ml-2 h-3 w-3 rotate-180" />
        </Link>
      </div>
    </div>
  );
}