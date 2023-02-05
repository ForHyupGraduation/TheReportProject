import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SalesChart from "../Graphs/SalesChart";
import OperatingProfit from "../Graphs/OperatingProfitChart";
import PostPerDayChart from "../Graphs/PostPerDayChart";
import VolumePerDayChart from "../Graphs/VolumePerDayChart";

/*
flag 0 means revenue
flag 1 means netProfit
flag 2 means operatingProfit
flag 3 means margin
*/

const SubInfoItem = ({ revenue, flag }) => {
  const [sales, setSales] = useState(null);
  const [operating, setOperating] = useState(null);
  const [volumePerDay, setVolumePerDay] = useState(null);
  const [postPerDay, setPostPerDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSales(revenue.companyData.sales);
    setOperating(revenue.companyData.operatingProfit);
    setVolumePerDay(revenue.companyData.interestRatioDtos);
    setPostPerDay(revenue.companyData.interestRatioDtos);
    setIsLoading(false);
  }, []);

  if (!isLoading && sales && operating && volumePerDay && postPerDay) {
    if (flag === 0) {
      return (
        <>
          <PostPerDayChart postPerDayData={postPerDay} />
        </>
      );
    } else if (flag === 1) {
      return (
        <>
          <VolumePerDayChart volumePerDay={volumePerDay} />
        </>
      );
    } else if (flag === 2) {
      return (
        <>
          <SalesChart sales={sales} />
        </>
      );
    } else if (flag === 3) {
      return (
        <>
          <OperatingProfit operating={operating} />
        </>
      );
    }
  }
};

export default SubInfoItem;
