import React from "react";

export default function NavBar(props) {
  const { logOutRetailer, account } = props;
  return (
    <header class="page-header">
      <div class="header-container layout-2 layout-3-additional sticky-header">
        <div class="topbar hidden-xs hidden-sticky">
          <div class="container">
            <div class="topbar-inner">
              <div class="flex-layout space-between center_vertical center-mobile">
                <div class="col-left col-top-link flex-layout center_vertical hidden-sm no-wrap-desktop">
                  <div class="language-currency">
                    <div class="container-setting-language-currency">
                      <div
                        class="switcher language switcher-language"
                        data-ui-id="language-switcher"
                        id="switcher-language"
                      >
                        <strong class="label switcher-label">
                          <span>Language</span>
                        </strong>
                        <div class="actions dropdown options switcher-options">
                          <div
                            class="action  switcher-trigger"
                            id="switcher-language-trigger"
                          >
                            <strong class="view-en3">
                              <span>English</span>
                            </strong>
                            <i class="fas fa-dropdown"></i>
                          </div>
                        </div>
                      </div>
                      <div
                        class="switcher currency switcher-currency"
                        id="switcher-currency"
                      >
                        <strong class="label switcher-label">
                          <span>Currency</span>
                        </strong>
                        <div class="actions dropdown options switcher-options">
                          <div class="action  switcher-trigger">
                            <strong class="language-USD">
                              <span>KSH. - Kenyan Shilling</span>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hotline">
                    <p>
                      Need Help?{" "}
                      <a title="+001 123 456 789" href="tel:+001123456789">
                        +001 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
                <div class="col-right col-top-link flex-layout center_vertical">
                  <div class="topbar-menu hozital-menu">
                    <ul class="hozital-menu">
                      <li>
                        <a
                          title="Order Tracking"
                          href="customer/account/login/referer/aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv/index.html"
                        >
                          My account
                        </a>
                      </li>
                      <li>
                        <a title="About Us" href="about-us/index.html">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a title="Contact Us" href="contact/index.html">
                          Contact Us
                        </a>
                      </li>
                      <li onClick={() => logOutRetailer()}>
                        <a title="LogOut" href="#">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header panel flex-layout-sticky center_vertical no-wrap-desktop">
          <div class="flex-layout space-between center_vertical no-wrap-desktop header-middle">
            <div class="logo-container">
              <div class="logo-site">
                {/* <span data-action="toggle-nav" class="action nav-toggle">
                  <span>Toggle Nav</span>
                </span> */}
                <a
                  class="logo"
                  href="index.html"
                  title=""
                  aria-label="store logo"
                >
                  <img
                    src="https://mageblueskytech.com/dukamarket/media/logo/stores/5/logo-x2-home-3.png"
                    title=""
                    alt=""
                    width="201"
                    height="28"
                  />
                </a>
              </div>
              {/* <div class="primary-menu-container mobile-style">
                <span
                  data-action="toggle-nav"
                  class="action nav-toggle d-xl-none sticky-toggle"
                >
                  <span>Toggle Nav</span>
                </span>
                <div
                  class="navigation custommenu main-nav nav-sections mobile-style"
                  role="navigation"
                >
                  <div class="close-menu-mobile">
                    <a href="#" id="close-menu">
                      Close
                    </a>
                  </div>
                  <div class="menu-mobile-title d-block d-xl-none">
                    <a class="active" data-menu="custommenu-list" href="#">
                      Menu
                    </a>
                  </div>
                  <ul class="custommenu-list menu">
                    <li class="ui-menu-item level0 classic ">
                      <a class="level-top" href="index.html">
                        Home
                      </a>
                    </li>
                    <li class="ui-menu-item level0 nav-1 fullwidth menu-item-has-children parent">
                      <div class="open-children-toggle"></div>
                      <a href="shop.html" class="level-top">
                        Shop
                      </a>
                      <div class="level0 submenu">
                        <div class="row">
                          <ul class="subchildmenu col-sm-9 mega-columns columns4">
                            <li class="ui-menu-item nav-1-1 level1 parent ">
                              <div class="open-children-toggle"></div>
                              <a href="shop/computer-accessories.html">
                                <span>Computer Accessories</span>
                              </a>
                              <ul class="subchildmenu ">
                                <li class="ui-menu-item nav-1-1-1 level2 ">
                                  <a href="shop/computer-accessories/blue-light-blocking.html">
                                    <span>Blue Light Blocking </span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-1-2 level2 ">
                                  <a href="shop/computer-accessories/cable-security-devices.html">
                                    <span>Cable Security Devices</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-1-3 level2 ">
                                  <a href="shop/computer-accessories/cables-interconnects.html">
                                    <span>Cables & Interconnects</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-1-4 level2 ">
                                  <a href="shop/computer-accessories/cleaning-repair.html">
                                    <span>Cleaning & Repair</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-1-5 level2 ">
                                  <a href="shop/computer-accessories/computer-cable-adapters.html">
                                    <span>Computer Cable Adapters</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-1-6 level2 ">
                                  <a href="shop/computer-accessories/game-hardware.html">
                                    <span>Game Hardware</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-1-7 level2 ">
                                  <a href="shop/computer-accessories/hard-drive-accessories.html">
                                    <span>Hard Drive Accessories</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="ui-menu-item nav-1-2 level1 parent ">
                              <div class="open-children-toggle"></div>
                              <a href="shop/peripherals.html">
                                <span>Peripherals</span>
                              </a>
                              <ul class="subchildmenu ">
                                <li class="ui-menu-item nav-1-2-1 level2 ">
                                  <a href="shop/peripherals/input-devices.html">
                                    <span>Input Devices</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-2-2 level2 ">
                                  <a href="shop/peripherals/keyboards.html">
                                    <span>Keyboards</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-2-3 level2 ">
                                  <a href="shop/peripherals/mice-accessories.html">
                                    <span>Mice & Accessories</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-2-4 level2 ">
                                  <a href="shop/peripherals/memory-card-accessories.html">
                                    <span>Memory Card Accessories</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-2-5 level2 ">
                                  <a href="shop/peripherals/memory-cards.html">
                                    <span>Memory Cards</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-2-6 level2 ">
                                  <a href="shop/peripherals/monitor-accessories.html">
                                    <span>Monitor Accessories</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-2-7 level2 ">
                                  <a href="shop/peripherals/printer-accessories.html">
                                    <span>Printer Accessories</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="ui-menu-item nav-1-3 level1 parent ">
                              <div class="open-children-toggle"></div>
                              <a href="shop/video-accessories.html">
                                <span>Video Accessories</span>
                              </a>
                              <ul class="subchildmenu ">
                                <li class="ui-menu-item nav-1-3-1 level2 ">
                                  <a href="shop/video-accessories/printer-ink-toner.html">
                                    <span>Printer Ink & Toner</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-3-2 level2 ">
                                  <a href="shop/video-accessories/racks-cabinets.html">
                                    <span>Racks & Cabinets</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-3-3 level2 ">
                                  <a href="shop/video-accessories/scanner-accessories.html">
                                    <span>Scanner Accessories</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-3-4 level2 ">
                                  <a href="shop/video-accessories/usb-gadgets.html">
                                    <span>USB Gadgets</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-3-5 level2 ">
                                  <a href="shop/video-accessories/usb-hubs.html">
                                    <span>USB Hubs</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-3-6 level2 ">
                                  <a href="shop/video-accessories/uninterruptible.html">
                                    <span>Uninterruptible</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-3-7 level2 ">
                                  <a href="shop/video-accessories/power-supply-ups.html">
                                    <span>Power Supply (UPS)</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="ui-menu-item nav-1-4 level1 parent ">
                              <div class="open-children-toggle"></div>
                              <a href="shop/blank-media.html">
                                <span>Blank Media</span>
                              </a>
                              <ul class="subchildmenu ">
                                <li class="ui-menu-item nav-1-4-1 level2 ">
                                  <a href="shop/blank-media/computer-headsets.html">
                                    <span>Computer Headsets</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-4-2 level2 ">
                                  <a href="shop/blank-media/computer-speakers.html">
                                    <span>Computer Speakers</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-4-3 level2 ">
                                  <a href="shop/blank-media/webcam-stands-mounts.html">
                                    <span>Webcam Stands & Mounts</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-4-4 level2 ">
                                  <a href="shop/blank-media/laptop-accessories.html">
                                    <span>Laptop Accessories</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-4-5 level2 ">
                                  <a href="shop/blank-media/networking-products.html">
                                    <span>Networking Products</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-4-6 level2 ">
                                  <a href="shop/blank-media/power-strips-surge.html">
                                    <span>Power Strips & Surge</span>
                                  </a>
                                </li>
                                <li class="ui-menu-item nav-1-4-7 level2 ">
                                  <a href="shop/blank-media/tablet-accessories.html">
                                    <span>Tablet Accessories</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <div class="menu-right-block col-sm-3">
                            <p>
                              <img
                                style={{ float: "right" }}
                                src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-menu.png"
                                // data-src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-menu.png"
                                alt="Banner Menu"
                              />
                            </p>
                          </div>
                        </div>
                        <div class="menu-bottom-block">
                          <p style={{ textAlign: "center" }}>
                            <strong>30% Off</strong> the shipping of your first
                            order with the code: <strong>DUKA-SALE30</strong>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="ui-menu-item level0  classic menu-item-has-children parent">
                      <a class="level-top">Page</a>
                      <div class="open-children-toggle">&nbsp;</div>
                      <div class="level0 submenu">
                        <div class="row">
                          <ul class="subchildmenu ">
                            <li class="ui-menu-item level2 ">
                              <a href="store-locator/index.html">
                                Store Locator
                              </a>
                            </li>
                            <li class="ui-menu-item level2 ">
                              <a href="rokanthemes-brand.html">Shop by brand</a>
                            </li>
                            <li class="ui-menu-item level2 ">
                              <a href="rokanfaq.html">Faq</a>
                            </li>
                            <li class="ui-menu-item level2 ">
                              <a href="404/index.html">404 page</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="ui-menu-item level0">
                      <a class="level-top" href="blog/index.html">
                        Blog
                      </a>
                    </li>
                    <li class="ui-menu-item level0 classic ">
                      <a class="level-top" href="contact/index.html">
                        Contact us
                      </a>
                    </li>
                    <li class="ui-menu-item level0 classic ">
                      <a class="level-top" href="about-us/index.html">
                        About us
                      </a>
                    </li>
                    <li class="my_account_link_custom ui-menu-item level0 classic">
                      <a
                        href="customer/account/login/referer/aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv/index.html"
                        title="My Account"
                        class="level-top"
                      >
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            */}
            </div>
            <div class="top-search-not-dropdown button-search-full">
              <div class="block block-search">
                <div class="block-content">
                  <div class="dropdown">
                    <div class="dropdown-toggle">
                      <div class="top-search">
                        <i class="main-icon-search"></i>
                        <span class="text">Search</span>
                      </div>
                    </div>
                    <div
                      class="form minisearch search-content cat-search"
                      id="search_mini_form"
                      method="get"
                    >
                      <div class="search-form">
                        <div class="field-by-cat-search hidden-xs view_row">
                          <select name="cat" id="choose_category">
                            <option value="">All Categories</option>
                            <option value="3">Top Deals</option>
                            <option value="5">Top Featured Products</option>
                            <option value="6">Top Selling Products</option>
                            <option value="10">Cameras & Accessories</option>
                            <option value="8">Tablets & Mobile Phone</option>
                            <option value="7">Computer & Desktop</option>
                            <option value="11">Kitchen accessories</option>
                            <option value="9">Home & Accessories</option>
                            <option value="12">Sport & Outdoors</option>
                            <option value="13">Audio & Headphones</option>
                            <option value="14">Toys & Hobbies </option>
                            <option value="17">Fashion & Clothing</option>
                            <option value="16">Decor & Furniture</option>
                            <option value="50">Shop</option>
                            <option value="161">Stereo Headphones</option>{" "}
                          </select>
                        </div>
                        <div class="field search">
                          <label
                            class="label"
                            for="search-input-autocomplate"
                            data-role="minisearch-label"
                          >
                            <span>Search</span>
                          </label>
                          <div class="control">
                            <input
                              id="search-input-autocomplate"
                              type="text"
                              name="q"
                              value=""
                              placeholder="Search entire store here..."
                              class="input-text"
                              maxlength="128"
                              role="combobox"
                              aria-haspopup="false"
                              aria-autocomplete="both"
                              aria-expanded="false"
                              autocomplete="off"
                            />
                            <div
                              id="search_autocomplete"
                              class="search-autocomplete"
                            ></div>
                            <div data-bind="scope: 'searchsuiteautocomplete_form'"></div>
                          </div>
                          <div class="actions">
                            <button
                              type="submit"
                              // title="Search"
                              class="action search"
                            >
                              <i class="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-action col-right">
              <div class="flex-layout center_vertical">
                <ul class="flex-layout action-header center_vertical no-wrap-desktop">
                  <li class="account-link-header hidden-xs">
                    <i class="far fa-user nav_icon"></i>
                    <ul class="header links">
                      <li class="link authorization-link" data-label="or">
                        <a href="customer/account/login/referer/aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zLw%2c%2c/index.html">
                          <span class="text">Sign In</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="customer/account/create/index.html"
                          id="idUyXnC0ZF"
                        >
                          Create an Account
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="account-link-header hidden-xs">
                    <i class="far fa-heart nav_icon"></i>
                    <ul class="header links">
                      <li class="link authorization-link" data-label="or">
                        <a href="customer/account/login/referer/aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zLw%2c%2c/index.html">
                          <span class="text">Favourite</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="customer/account/create/index.html"
                          id="idUyXnC0ZF"
                        >
                          My WishList
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="account-link-header ">
                    <i class="fas fa-shopping-bag nav_icon"></i>
                    <ul class="header links">
                      <li class="link authorization-link" data-label="or">
                        <a href="customer/account/login/referer/aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zLw%2c%2c/index.html">
                          <span class="text">My Cart</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="customer/account/create/index.html"
                          id="idUyXnC0ZF"
                        >
                          Ksh. 0.00
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <li class="minicart-li-content-show-hide">
                    <div data-block="minicart" class="minicart-wrapper">
                      <a
                        class="action showcart"
                        href="checkout/cart/index.html"
                        data-bind="scope: 'minicart_content'"
                      >
                        <span
                          class="counter qty empty"
                          data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading"
                        >
                          <span class="total-mini-cart-item"></span>
                        </span>
                        <span class="mini-cart-text">
                          <span class="text">My Cart</span>
                          <span class="content-cart hidden-xs">
                            <span class="total-mini-cart-price"></span>

                            <span class="total-mini-cart-price">
                              <span class="price">$0.00</span>
                            </span>
                          </span>
                        </span>
                      </a>
                      <div class="block block-minicart">
                        <div
                          id="minicart-content-wrapper"
                          data-bind="scope: 'minicart_content'"
                        ></div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel wrapper">
        <div class="panel header">
          <a class="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
        </div>
      </div>
    </header>
  );
}
