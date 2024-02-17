import { useEffect, useRef } from "react";
import {
  registerables,
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

import { ChartData } from "@/store/quiz/types";

import styles from "./styles.module.scss";

type Props = {
  data: ChartData;
};

function BarChart({ data }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef?.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      ArcElement,
      CategoryScale,
      ...registerables
    );

    chartRef.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: data.datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (!chartRef.current) return;

      chartRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    data && (chartRef.current.data = data);

    chartRef.current.update();
  }, [data]);

  return (
    <div className={styles["container"]}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default BarChart;
