import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March','April','May','June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100,200,300],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [80,210,300],
      backgroundColor: 'rgba(51, 255, 90, 0.5)',
    },
  ],
};

export default function Graph() {
  
  return (
    <div className='h-[23rem] w-auto'>
          <Bar className='' data={data} options={options}></Bar>
    </div>

  )
}
