import React, { Component } from "react";

class Registration extends Component {
    render() {    
        return (
            <footer className="w-full bottom-0">
                <div className="w-full bg-green-400">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 ">

                    <div className="lg:flex md:block justify-between text-white">
                        <div className="md:w-full">© 2021 Lukas Menzel</div>
                        <div className="items-center justify-end">
                            <nav className="md:w-full">
                                <ul className="flex">
                                    <li className="lg:w-32 md:w-1/2">Imprint</li> 
                                    <li className="lg:w-32 md:w-1/2">Privacy policy</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>

            );
}
}
export default Registration;
