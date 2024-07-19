import React from "react";
import '../src/index.css';
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";
import ShopContextProvider from "../src/Context/ShopContext";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
);
