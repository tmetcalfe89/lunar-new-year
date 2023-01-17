import moment from "moment";
import "moment-lunar";
import { useMemo, useState } from "react";
import { useInterval } from "react-use";

const getCurrentYear = () => new Date().getUTCFullYear();
const animals = [
  "tiger",
  "rabbit",
  "dragon",
  "snake",
  "horse",
  "goat",
  "monkey",
  "rooster",
  "dog",
  "pig",
  "rat",
  "ox",
];

function useLunarNewYear() {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  useInterval(() => {
    setCurrentYear(getCurrentYear());
  }, 1000);

  const nextLunarNewYear = useMemo(() => {
    const dateOne = moment().year(currentYear).month(0).date(1).solar();
    const dateTwo = moment()
      .year(currentYear + 1)
      .month(0)
      .date(1)
      .solar();
    if (dateOne > moment()) {
      return dateOne;
    }
    return dateTwo;
  }, [currentYear]);

  const nextAnimal = useMemo(() => {
    return animals[nextLunarNewYear.year() % 2022];
  }, [nextLunarNewYear]);

  const currentAnimal = useMemo(() => {
    return animals[(nextLunarNewYear.year() - 1) % 2022];
  }, [nextLunarNewYear]);

  const daysRemaining = useMemo(() => {
    return moment(nextLunarNewYear).diff(moment(), "days");
  }, [nextLunarNewYear]);

  return {
    currentYear,
    nextLunarNewYear,
    nextAnimal,
    currentAnimal,
    daysRemaining,
  };
}

export default useLunarNewYear;
