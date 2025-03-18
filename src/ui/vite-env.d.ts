/// <reference types="vite/client" />

// // src/golden-layout.d.ts
// declare module 'golden-layout' {
//     interface Config {
//       content: Array<{
//         type: string;
//         component?: string;
//         props?: Record<string, unknown>;
//         content?: Config['content'];
//       }>;
//     }
  
//     class GoldenLayout {
//       constructor(config: Config, container: HTMLElement);
//       registerComponent(name: string, component: React.ComponentType): void;
//       init(): void;
//       destroy(): void;
//     }
  
//     export default GoldenLayout;
//   }

export {};

declare global {
  interface Window {
    electron: {
      send: (channel: string, data?: any) => void;
      receive: (channel: string, func: (data: any) => void) => void;
    };
  }
}
