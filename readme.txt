=== WooCommerce Product Price Based on Countries ===
Contributors: oscargare
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NG75SHRLAX28L
Tags: price based country, dynamic price based country, price by country, dynamic price, woocommerce, geoip
Requires at least: 3.6.1
Tested up to: 4.4.2
Stable tag: 1.5.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add multicurrency support to WooCommerce, allowing you set product's prices in different currencies based on country of your site's visitor.

== Description ==

**WooCommerce Product Price Based on Countries** is a extension for WooCommerce that allows you to set prices and receive payments in different currencies.

The plugin detect automatically visitor's country using geolocation features and display the currency and price you have defined previously for this country (or region). 
You have two ways to set product's price for each region:

* Calculate price by applying a exchange rate.
* Set price manually.


**Key Features**

* Easy settings and integrated with Woocommerce settings page.
* Geolocation integrated with WooCommerce Gelocation feature.
* Multicurrency: allows to receive payments in different currencies, reducing the costs of currency conversions.
* Include regular price and sale price by region.
* Apply currency conversion to Flat and International Flar Rate Shipping.
* It's possible set a exchange rate to automatically calculate price for a region.
* Automatically detects of customer's country, with price and currency set accordingly.
* Refresh price and currency on order preview, cart and shop when country changes on checkout page.
* Included a Widget, action hook and shortcode to add a country selector to front-end.
* Compatible With WPML.


**Requirements**

* WordPress 3.6 or later
* WooCommerce 2.3.0 or later.

== Installation ==

1. Download, install and activate the plugin.
1. Go to WooCommerce -> Settings -> Product Price Based on Country and configure as required.
1. Go to the product page and sets the price for the countries you have configured avobe.

= Adding a country selector to the front-end =

Once you’ve added support for multiple country and their currencies, you could display a country selector in the theme. You can display the country selector with a shortcode or as a hook.

**Shortcode**

[wcpbc_country_selector]

**PHP Code**

do_action('wcpbc_manual_country_selector');

= Customize country selector (only for developers) =

1. Add action "wcpbc_manual_country_selector" to your theme.
1. To customize the country selector:
	1. Create a directory named "woocommerce-product-price-based-on-countries" in your theme directory. 
	1. Copy to the directory created avobe the file "country-selector.php" included in the plugin.
	1. Work with this file.

== Frequently Asked Questions ==

= How might I test if the prices are displayed correctly for a given country? =

If you are in a test environment, you can configure the test mode in the setting page.

In a production environment you can use a privacy VPN tools like [hola](http://hola.org/) or [ZenMate](https://zenmate.com/)

You should do the test in a private browsing window to prevent data stored in the session. Open a private window on [Firefox](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history#w_how-do-i-open-a-new-private-window) or on [Chrome](https://support.google.com/chromebook/answer/95464?hl=en)

== Screenshots ==

1. /assets/screenshot-1.png
2. /assets/screenshot-2.png
3. /assets/screenshot-3.png
4. /assets/screenshot-4.png
5. /assets/screenshot-5.png
5. /assets/screenshot-6.png

== Changelog ==

= 1.5.5 (2016-02-20) =
* Fixed: Bug in Country switcher widget.
* Added: Country switcher widget title.

= 1.5.4 (2016-02-14) =
* Fixed: Non-static method be called statically.<br />
https://wordpress.org/support/topic/deprecated-15?replies=1#post-8025565
* Added: Code improvements.

= 1.5.3 (2016-02-05) =
* Fixed: Wrong name in callback function.<br />
https://wordpress.org/support/topic/warning-call_user_func_array-expects-parameter-1-to-be-a-valid-callback-7

= 1.5.2 (2016-02-03) =
* Fixed: Anonymous functions caused a syntax error in settings page.

= 1.5.1 (2016-01-17) =
* Fixed: Anonymous functions caused a syntax error.<br />
https://wordpress.org/support/topic/compatibility-issue-19

= 1.5.0 (2016-01-14) =
* Added: Country Selector Widget.
* Added: Support to WooCommerce Products on Sale Widget.
* Added: Code improvements.
* Added: Option Price based on Billing or Shipping Country.<br />
https://wordpress.org/support/topic/bug-with-prices-if-the-shipping-and-billing-country-are-different
* Added: Flat and International Flar Rate Shipping currency conversion.<br />
https://wordpress.org/support/topic/shipping-price
* Fixed: Incorrect value for price included tax.<br />
https://wordpress.org/support/topic/prices-are-to-high
* Fixed: Country selector Shortcode not works properly.<br />
https://wordpress.org/support/topic/wcpbc_country_selector-widget-should-return-not-echo

= 1.4.2 =
* Added: Multicurrency support for WooCommerce Status dashboard Widget.
* Added: Improved performance for variable product.
* Fixed: WPML compatiblity - Fields of variable products are not blocked.

= 1.4.1 =
* Added: Ready for WPML.
* Fixed: Max And Min Values in Price Filter Widget not works.

= 1.3.5 =
* Added: Ready for WooCommerce 2.4

= 1.3.4 =
* Fixed: Country of Base Location not in list of countries.
* Added: Improved settings page.

= 1.3.3 =
* Fixed: The manual price is not saved in external/affiliate products.
* Fixed: The exchange rate only supports dot as decimal separator.
* Added: Support for WooCommerce Price Filter Widget (beta).

= 1.3.2 =
* Required: WooCommerce 2.3.0 or or later!
* Fixed: Incorrect currency conversion for variable products.
* Added: Integrate with WooCommerce geolocation function.
* Added: Improved test mode.
* Added: Radio button to select the price method (calculate by exchange rate or manually) for each product.

= 1.3.1 =
* Fixed: Price before discount not show for variable products with sale price.

= 1.3.0 =
* Added: Exchange rate to apply when price leave blank.
* Added: Hook and template to add a country selector.
* Fixed minor bugs.

= 1.2.5 =
* Fixed bug that breaks execution of cron jobs when run from wp-cron.php.
* Fixed bug: Error in uninstall procedure.

= 1.2.4 =
* Fixed bug that break style in variable products.
* Fixed bug: prices not show in variable products.

= 1.2.3 =
* Added: Sale price by groups of countries.
* Added: Refresh prices and currency when user changes billing country on checkout page.
* Fixed minor bugs.

= 1.2.2 =
* Fixed bug that not show prices per countries group when added a new variation using the "add variation" button.
* Fixed bug: product variation currency label is wrong.

= 1.2.1 =
* Fixed bug that not allow set prices in variable products.

= 1.2 =
* Added: REST service is replaced by GEOIP Database.
* Added: Improvements in the plugin settings page.
* Added: Debug mode

= 1.1 =
* Added: currency identifier per group of countries.
* Fixed bug in settings page.

= 1.0.1 =
* Fixed a bug that did not allow to add more than one group of countries.

= 1.0 =
* Initial release!

== Upgrade Notice ==

= 1.3.2 =
1.3.2 is a major update so it is important that you make backups before upgrade. Required WooCommerce 2.3.0 or later, ensure you have installed a compatible version of WooCommerce.
