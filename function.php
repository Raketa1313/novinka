<?php

function getView(){
	$url = filter_input ( INPUT_SERVER, 'REQUEST_URI' );
	$url = trim( $url, '/' );
	$url = strtok( $url, '.');

	$segments = explode( '/', $url );

	$url = array_pop( $segments );

	return empty( $url ) || $url === getBaseFolder() ? 'index' : $url;
}


function getBaseUrl(){

	static $baseurl = null;
	if( $baseurl === null ) {
		$dir     = strtr( __DIR__, [ DIRECTORY_SEPARATOR => '/' ] );
		$docroot = strtr( filter_input( INPUT_SERVER, 'DOCUMENT_ROOT' ), [ DIRECTORY_SEPARATOR => '/' ] );
		$baseurl = str_replace( $docroot, '', $dir );
	}
	return $baseurl;
}

function getBaseFolder(){
	$url = getBaseUrl();
	return strtr( $url, [ '/'=>'', '\\'=>'', '..'=>'' ] );
}