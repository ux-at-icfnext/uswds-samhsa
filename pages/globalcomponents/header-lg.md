---
layout: page
title: Global Header - Large Screens
category: global-component
permalink: "/header-lg/"
sidenav: side-navigation
---

## Overview
This global component applies to desktop versions of the SAMHSA website. (View the [mobile version]({{ site.url }}/header-sm).) The desktop has both a standardized header and a top-level menu.

**Contents:**
- [Header Design](#head)
- [Default Submenus](#submenus)
- [Submenu Locations](#location)
- [Submenu About](#about)
- [Accessibility & Multidevice](#accessibility)
- [Table Of Menu Links](#table)


<a name="head"></a>
## Header Design

![Header Image](../assets/img/header/header.png)

<div class="main-nav-menu">
{% if site.data.main_nav.samhsa-navigation[0] %}
  <ul class="mainNav parent-level">
  {% for item in site.data.main_nav.samhsa-navigation %}
    <li class="{% if item.title == 'About Us' %}about-us{% endif %}"><a href="{{ item.url }}">{{ item.title }}</a>
      {% if item.second-level[0] %}
        <ul class="submenu second-level">
          {% for item in item.second-level %}
              <li><a href="{{ item.url }}">{{ item.page }}</a>
                {% if item.third-level[0] %}
                  <ul class="submenu third-level">
                    {% for item in item.third-level %}
                      <li><a href="{{ item.url }}">{{ item.page }}</a>
                        {% if item.fourth-level[0] %}
                          <ul class="submenu fourth-level">
                            {% for item in item.fourth-level %}
                              <li><a href="{{ item.url }}">{{ item.page }}</a>
                                {% if item.fifth-level[0] %}
                                  <ul class="submenu fifth-level">
                                    {% for item in item.fifth-level %}
                                      <li><a href="{{ item.url }}">{{ item.page }}</a>
                                        {% if item.sixth-level[0] %}
                                          <ul class="submenu sixth-level">
                                            {% for item in item.sixth-level %}
                                              <li><a href="{{ item.url }}">{{ item.page }}</a></li>
                                            {% endfor %}
                                          </ul> <!--End Submenu Sixth Level-->
                                        {% endif %}
                                      </li>
                                    {% endfor %}
                                  </ul> <!--End Submenu Fifth Level-->
                                {% endif %}
                              </li>
                            {% endfor %}
                          </ul> <!--End Submenu Fourth Level-->
                        {% endif %}
                      </li>
                    {% endfor %}
                  </ul> <!--End Submenu Third Level-->
                {% endif %}
              </li>
          {% endfor %}
          {% if item.title == 'About Us' %}
            <span class="about-leadership no-link">
              <div>
                <span>IMG GOES HERE
                </span>
                <span>Elinore McCance-Katz, M.D., Ph.D., Assistant Secretary for Mental Health and Substance Use</span>
                <div>
                  <a href="https://www.samhsa.gov/about-us/who-we-are/leadership/biographies/elinore-mccance-katz" id="anch_634">View full biography</a>
                </div>
              </div>
            </span>
          {% endif %}
        </ul> <!--End Submenu Second Level-->
      {% endif %}

    </li> <!--End Parent Menu Item-->
    {% endfor %}
  </ul> <!--End Parent Nav Menu-->
{% endif %}
</div> <!-- End Header Menu -->

1. Top Hat
- contains HHS logo and name
2. Utility Nav

   Links to:

- Home ([http://samhsa.gov](http://samhsa.gov)),
- Sitemap ([https://www.samhsa.gov/sitemap](https://www.samhsa.gov/sitemap)),
- and Contact Us ([https://www.samhsa.gov/about-us/contact-us](https://www.samhsa.gov/about-us/contact-us))
- **Functionality** onClick of link, the target page is displayed in main window

3. [Logo]({{ site.url }}logos)
4. Global Search / Local Search
   On the SAMHSA main site, this search box is used to search the global main site. However, for some sites the search uses a local search, for instance on the Data Page and the SAMHSA store. This difference is decided on a case by case bases. (see the [search widget pattern]({{ site.url }}search)) for more information.

5. Main Menu
  **Functionality**
  - OnClick of Menu item, the target page is displayed in main window. (see table below for contents and links)
  - OnHover of Menu the submenu is displayed. (see below for each submenu type)

<a name="submenus"></a>
## Submenu
OnHover of the main menu items, the submenus slide open. OnClick of submenu item,the target page is displayed in main window. Please not that the Find Treatment and About Us menu have more content. Please see those sections below.
### Example shows the Public Messages menu
_See table below for list of links_

![Find Treatment Menu](../assets/img/header/messages.png)

<a name="location"></a>
## Submenu Find Treatment
- A paragraphy of introduction text
- A link to each locator with a map icon -- (fas fa-map-marker-alt) <i class="fas fa-map-marker-alt"></i>
   - See table below for link information
- The final link is to view all locators and links to the [Find Treatment](https://www.samhsa.gov/find-treatment) page.

![Find Treatment Menu](../assets/img/header/find-treatment.png)

<a name="about"></a>
## Submenu About Us
In addition to the submenu links...
- Photo of Elinore McCance-Katz, M.D., Ph.D.
- Descriptive text: "Elinore McCance-Katz, M.D., Ph.D., Assistant Secretary for Mental Health and Substance Use"
- Link to biography: "View full biography" - links to [https://www.samhsa.gov/about-us/who-we-are/leadership/biographies/elinore-mccance-katz](https://www.samhsa.gov/about-us/who-we-are/leadership/biographies/elinore-mccance-katz)

![About Us Menu](../assets/img/header/aboutus.png)

<a name="accessibility"></a>
## Accessibility & Multidevice
### Accessibility
?? What is our Accessibility on this menu ??

### Multidevice
Small and medium screen devices are using the header & menu system described on the specifications for the small screen --> [mobile version]({{ site.url }}/header-sm). However, there are still touch screen devices that exist on the large and extra-large breakpoints. All click actions should also equate to tap-a-able actions. With that being said, the hover state of the main menu can not be used though by those devices. Users will either use touch and be directed to the resulting landing page or they will use hover based actions for the full use of the menu.

{% include patterns/header/menu-links-table.html %}
