import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue({
  date,
  callback,
}: {
  date: any | Date;
  callback: (data: Date) => void;
}) {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  useEffect(() => {
    if (typeof date === "object") {
      setValue(dayjs(date));
    } else {
      const format = date.split("T");
      setValue(dayjs(format[0]));
    }
  }, [date]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]}>
        <DateCalendar
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            callback(dayjs(newValue, 'YYYY-MM-DD').toDate());
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}