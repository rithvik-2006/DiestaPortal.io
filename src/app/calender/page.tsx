import { Suspense } from "react";
import Calender from "./Calender";
import { headers } from "next/headers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "calender",
};

import "./CustomCalendar.css";
async function getEvents() {
  try {
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const response = await fetch(`${protocol}://${host}/api/getEvents`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Events:", error);
    return {
      Total: [],
      Culti: [],
      Sports: [],
    };
  }
}
const Page = async () => {
  const data = await getEvents();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Calender
        culturalEvents={data.culturalEvents}
        sportEvents={data.sportEvents}
      />
    </Suspense>
  );
};

export default Page;
