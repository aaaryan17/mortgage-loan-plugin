<?php
/*
Plugin Name: MDS Mortgage and Loan calculator
Plugin URI:  
Description: Mosaicd Data Services frontend Mortgage and Loan calculator
Version:     1.0
Author:      Giannis Dallas, Mosaicdataservices
Author URI:  https://giannisdallas.com
License:     GPL2 etc
License URI: 
*/

function MDS_mortgage_forntend_func(){
	return "<div id='MDS_MaLC_App_container'>This is a test</div>";
}
add_shortcode( 'MDS_MaLC-App', 'MDS_mortgage_forntend_func' );

add_action( 'wp_enqueue_scripts', 'enqueue_MDS_MaLC_js' );
function enqueue_MDS_MaLC_js() {

	wp_enqueue_script(
	  'MDS_MaLC-frontend',
	  plugin_dir_url( __FILE__ ) . '/app/dist/main.js',
	  //plugin_dir_url( __FILE__ ) . '/app/src/index.js',
	  ['wp-element'],
	  time(), // Change this to null for production
	  true
	);

}