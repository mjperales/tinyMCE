<?php
/**
 * Include these functions within your function.php file
 * located inside your theme
 *
 */

/********************* SHORTCODES ******************************/

// [button link="#"]Text[/button]
function button( $atts, $content = null ) {
   extract( shortcode_atts( array( 'link' => '#' ), $atts ) );
   return '<a class="button" href="'. $link .'">' . do_shortcode( $content ) . '</a>';
}
add_shortcode( 'button', 'button' );

/******************* Lets add a shortcode button to TinyMCE **************/

// Register our button
function mjp_mce_buttons( $buttons ) {
   array_push( $buttons, '|','mjp_shortcodeselect' );
   return $buttons;
} // don't remove this bracket

// Points to the path of the JS file
function mjp_add_plugin( $plugin_array ) {
   $plugin_array['mjp_shortcodeselect'] = get_template_directory_uri() . '/library/js/mjpshortcodebuttons.js';
   return $plugin_array;
} // don't remove this bracket

function mjp_shortcode_button() {
   // check user permissions
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
      return;
   }
   // check if WYSIWYG is enabled
   if ( get_user_option('rich_editing') == 'true' ) {
      add_filter( 'mce_external_plugins', 'mjp_add_plugin' );
      add_filter( 'mce_buttons', 'mjp_mce_buttons' );
   }
} // don't remove this bracket

add_action('init', 'mjp_shortcode_button');

?>