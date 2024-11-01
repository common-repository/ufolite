<?php
/*
Plugin Name: UFOlite
Description: Activate this plugin and suddenly an UFO will fly on your pages. What a nice cheer up gadget!
Version: 1.0.0
Author: Moki-Moki Ios
Author URI: http://mokimoki.net/
Text Domain: text-effect-shortcodes
License: GPL3
*/

/*
Copyright (C) 2017 Moki-Moki Ios http://mokimoki.net/

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * UFOlite
 * A little and nice cheer up gadget
 *
 * @version 1.0.0
 */

if (!defined('ABSPATH')) return;

add_action('init', array(UFOlite::get_instance(), 'initialize'));
add_action('admin_notices', array(UFOlite::get_instance(), 'plugin_activation_notice'));
register_activation_hook(__FILE__, array(UFOlite::get_instance(), 'setup_plugin_on_activation')); 

/**
 * Main class of the plugin.
 */
class UFOlite {
	
	const PLUGIN_NAME = "UFOlite";
	const VERSION = '1.0.0';
	const TEXT_DOMAIN = 'ufolite';
	
	private static $instance;

	private function __construct() {}
		
	public static function get_instance() {
		if (!isset(self::$instance)) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	
	public function initialize() {
		load_plugin_textdomain(self::TEXT_DOMAIN, FALSE, basename(dirname( __FILE__ )) . '/languages');
		add_action('wp_enqueue_scripts', array($this, 'add_ufo_javascript'));
		add_action('admin_enqueue_scripts', array($this, 'add_ufo_javascript'));
	}
	
	public function setup_plugin_on_activation() {		
		set_transient('ufo_activation_notice', TRUE, 5);
		add_action('admin_notices', array($this, 'plugin_activation_notice'));
	}
	
	public function plugin_activation_notice() {
		if (get_transient('ufo_activation_notice')) {
			echo '<div class="notice updated"><p><strong>'.__('You just activated the UFO plugin. No further actions required &ndash; the plugin is now up and running!', self::TEXT_DOMAIN).'</strong></p></div>';	
		}		
	}
	
	public function add_ufo_javascript() {
		wp_enqueue_script('ufo_js', plugin_dir_url(__FILE__) . 'ufo.js', 'jquery');		
	}
}
