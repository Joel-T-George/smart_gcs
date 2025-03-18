
import { GoldenLayout, ComponentContainer , LayoutConfig} from "golden-layout";
// import { Component } from "react";
// import TestComponent from "./TestCompoent";


// all the featured components 



const components: Record<string, (container: ComponentContainer) => void> = {
    windowA: (container) => {
        container.element.innerHTML = "<h1>Window A</h1>";
    },
    windowB: (container) => {
        container.element.innerHTML = "<h1>Window B</h1>";
    },
    windowC: (container) => {
        container.element.innerHTML = "<h1>Window C</h1>";
    }
};


export function constructDefaultGoldenLayout(containerElement:HTMLElement):GoldenLayout {
    const layout = new GoldenLayout(containerElement);

    // Register components dynamically using Object.entries()
    Object.entries(components).forEach(([name, renderFn]) => {
        console.log(name)
        layout.registerComponentFactoryFunction(name, renderFn);
    });

    const config: LayoutConfig = {
        settings: {
            hasHeaders: true,  // Enables tab headers
            showPopoutIcon: true,  // Enables detach window button
            showMaximiseIcon: true, // Enables maximize button
            showCloseIcon: true,  // Enables close button

        },
      
        root: {
            type: "row",
            content: [
                {
                    type: "column",
                    content: [
                        { type: "component", componentType: "windowA", title: "Window A" },
                        { type: "component", componentType: "windowB", title: "Window B" }
                    ]
                },
                { type: "component", componentType: "windowC", title: "Window C" }
            ]
        }
    }

    layout.loadLayout(config)

    return layout;

    
}