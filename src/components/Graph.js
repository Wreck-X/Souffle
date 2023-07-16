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
    title: {
      display: true,
      text: 'Inflow vs Expense',
    },
  };


const labels = ['14:00', '14:30', '15:00','15:30','16:00','16:30'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Inflow',
      data: [10,30,42, 20, 30, 45],
      backgroundColor: 'rgba(51, 255, 90, 0.5)',
    },
    {
      label: 'Expense',
      data: [27,17,29 , 10, 20, 35],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',

    },
  ],
};

export default function Graph() {
  return (
    <div className='flex h-auto w-[40%] flex-col justify-center items-center'>
          <Bar className='' data={data} options={options}></Bar>
    </div>

    )
}