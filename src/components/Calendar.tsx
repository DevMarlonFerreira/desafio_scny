import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue({ date }: any | Date) {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  const date1 = new Date("2020-12-31");

  const d = new Date(date);
  const day = dayjs(d);

  const format = date.split("T");

  console.log(value);
  console.log(format[0]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        {/* <DemoItem label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs("2022-04-17")} />
        </DemoItem> */}
        <DemoItem label="Controlled calendar">
          <DemoItem label="Controlled calendar">
            <DateCalendar
              value={dayjs(format)}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoItem>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
