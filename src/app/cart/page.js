"use client";
import Navbar from "../components/Navbar";
import CartTable from "@/app/cart/CartTable";
import Footer from "@/app/components/Footer";
import {useState} from "react";
import CustomerInformation from "@/app/cart/CustomerInformation";

function Cart() {

    const [customerInfoContent, setCustomerInfoContent] = useState(false);

    return (
        <div className="w-full">
            <Navbar />

            {
                customerInfoContent ? (
                    <CustomerInformation setCustomerInfoContent={setCustomerInfoContent} />
                ) : (
                    <CartTable setCustomerInfoContent={setCustomerInfoContent} />
                )
            }

            <Footer />
        </div>
    );
}

export default Cart;