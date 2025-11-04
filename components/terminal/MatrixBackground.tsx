'use client';

import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("@/components/effects/MatrixRain"), {
  ssr: false,
  loading: () => null,
});

type MatrixBackgroundProps = {
  enabled?: boolean;
  opacity?: number;
};

export default function MatrixBackground({ enabled = false, opacity = 0.06 }: MatrixBackgroundProps) {
  if (!enabled) {
    return null;
  }

  return <MatrixRain opacity={opacity} />;
}


