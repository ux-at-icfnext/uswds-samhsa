---
---

{%- if site.anchor_js_targets -%}
  {%- assign _anchor_js_targets = site.anchor_js_targets -%}
  {%- assign _prepended_targets = '' | split: '' -%}
  {%- for _target in _anchor_js_targets -%}
    {%- assign _prepended_target = _target | prepend: '.usa-layout-docs ' -%}
    {%- assign _prepended_targets = _prepended_targets | push: _prepended_target -%}
  {%- endfor -%}

// Adding anchor links to headers on docs layouts only
anchors.add('{{ _prepended_targets | join: ', ' }}');
{%- endif -%}

//Test jQuery
jQuery(document).ready(function($) {
    //$("h2").css("color", "red");
	//alert("JQUERY IS HERE");

    //Desktop Main Menu Hover Support
    $(".mainNav li").children("ul").hide();
    $(".mainNav li").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children("ul").show(300);
            $(this).children("ul li .third-level").hide();
        } else {
            $(this).children("ul").stop().hide(300);
        }
    });

    //Side Tertiary Nav Active Support
    var sideNav = $("div.nav.side-menu ul.menu li.level-1");
    //$(sideNav).children("ul").css("display", "none");
    $(document).ready(function() { 
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $(this).each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });

        $(sideNav).click(function() {   
        }); 
    });


});// End document load function