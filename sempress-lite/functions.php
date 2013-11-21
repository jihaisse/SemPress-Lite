<?php
function sempress_lite_setup() {
remove_theme_support( 'custom-background' );
remove_action( 'customize_register', 'sempress_customize_register' );
remove_action( 'wp_head', 'sempress_customize_css');
}
 
/**
* Tell WordPress to run sempress_setup() when the 'after_setup_theme' hook is run.
*/
add_action( 'after_setup_theme', 'sempress_lite_setup', 30 );
?>