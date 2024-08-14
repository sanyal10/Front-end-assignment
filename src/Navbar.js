import React from "react";

function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                            
            <a class="navbar-brand" href="#">
            <img src="https://t.ly/2z5KV" alt="" width="30" height="40" class="d-inline-block align-text-top"/>
                Navbar
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="/comparepage">Compare Items</a>
                            </li>      
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar; 