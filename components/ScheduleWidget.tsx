"use client";

import Script from "next/script";

interface ScheduleWidgetProps {
  widgetId?: string;
}

export function ScheduleWidget({
  widgetId = "9449371ef80",
}: ScheduleWidgetProps) {
  return (
    <>
      <div
        className="mindbody-widget min-h-[480px] w-full"
        data-widget-type="Schedules"
        data-widget-id={widgetId}
      />
      <Script
        src="https://brandedweb.mindbodyonline.com/embed/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
