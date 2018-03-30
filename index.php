<?php 
include_once( __DIR__ . '/function.php' );

$slug = getView();

include_once( __DIR__ . '/view/head.phtml' );
include_once( __DIR__ . '/view/menu.phtml' );

$template = __DIR__ . '/view/'.$slug.'.phtml';
if( file_exists( $template )) {
	include( $template );
}
else{
	include(  __DIR__ . '/view/404.phtml' );
}
	
include_once( __DIR__ . '/view/footer.phtml' );