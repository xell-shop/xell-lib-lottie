import React from "react";
import type { Preview } from "@storybook/react";
import { PageProgress } from "../src/PageProgress";
import { NotificationPop } from "fenextjs";
import { useReportWebVitals } from "next/web-vitals";

import "../node_modules/fenextjs-component/styles/index.css";
import "../node_modules/fenextjs-component/styles/font.css";
import "../styles/index.css";

import { env_log } from "fenextjs-functions";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => {
            useReportWebVitals((metric) => {
                console.log(metric?.name,metric?.value,metric);
                
                env_log(metric, {
                    name: "metric",
                    color: "#cf00ff",
                });
            });
            return (
               <>
                    <NotificationPop />
                    <PageProgress />
                    <Story />
               </>
            );
        },
    ],
};

export default preview;
