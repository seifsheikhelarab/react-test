import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const style = {
    //     color: "red",
    //     fontSize: "48px",
    //     textTransform: "uppercase",
    // };
    return (
        <header className="header">
            <h1 style={{}}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {pizzas.length > 0 ? (
                <React.Fragment>
                    <p>
                        Authentic Italian cuisine. 6 Creative dishes to choose
                        from, all from our stone oven, all organic all
                        delicious{" "}
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>We're still working on the menu pls come back later</p>
            )}
        </main>
    );
}

function Pizza({ pizzaObj }) {

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}:00
                </p>
            )}
        </footer>
    );
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>We're Open until {closeHour}:00 Come visit us or order online</p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
