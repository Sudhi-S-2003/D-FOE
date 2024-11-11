"use client";
import './globals.css';

import { TailSpin } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading-spinner"
      />
    </div>
  );
}
