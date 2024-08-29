import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "react-apexcharts";

import type { RootState } from "@app/store/store";
import { useData } from "@hooks/index";
import { CellItemContainer } from "./";
export const BarChart = () => {
  const dispatch = useDispatch();
  const { fetchUsers, fetchTasks } = useData();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTasks());
  }, [dispatch]);

  const { usersState, tasksState } = useSelector((state: RootState) => state);

  const userTasks = usersState.users.map((user) => {
    const filteredTasks = tasksState.tasks.filter(
      (task) => task.userId === user._id,
    );

    const completedTasks = filteredTasks.filter(
      (task) => task.completed,
    ).length;

    const uncompletedTasks = filteredTasks.length - completedTasks;

    return [completedTasks, uncompletedTasks];
  });

  const chartOptions = {
    series: [
      {
        name: "Uncompleted tasks",
        data: userTasks.map((el) => {
          return el[0];
        }),
      },
      {
        name: "Completed tasks",
        data: userTasks.map((el) => {
          return el[1];
        }),
      },
    ],
    chart: {
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    dataLabels: {
      formatter: (val: number) => {
        return val;
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [...usersState.users.map((user) => user.name)],
      labels: {
        formatter: (val: number) => {
          return val;
        },
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#008FFB", "#00E396"],
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
  };

  return (
    <>
      <CellItemContainer />
      <Chart
        type="bar"
        height={400}
        options={chartOptions}
        series={chartOptions.series}
      />
    </>
  );
};
