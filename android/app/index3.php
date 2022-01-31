<?php

// Firebase Cloud Messaging Authorization Key
define('FCM_AUTH_KEY', 'AAAA-OkRO-4:APA91bG4sG-ur_0JSYjyQPi39mUfArIOzVvhYmKUmz-rIF2spbBOoDnDRufkxEb66PkB0aRgHrDW8JOdy9dJIr8xqvtITrGu_-uKuZy0JgKngj6pb9yhY-wqjW6JZjpPN879u-0FewPu ');

function sendPush($to, $title, $body, $icon, $url) {
	$postdata = json_encode(
	    [
	        'notification' => 
	        	[
	        		'title' => $title,
	        		'body' => $body,
	        		'icon' => $icon,
	        		'click_action' => $url
	        	]
	        ,
	        'to' => $to
	    ]
	);

	$opts = array('http' =>
	    array(
	        'method'  => 'POST',
	        'header'  => 'Content-type: application/json'."\r\n"
	        			.'Authorization: key='.FCM_AUTH_KEY."\r\n",
	        'content' => $postdata
	    )
	);

	$context  = stream_context_create($opts);

	$result = file_get_contents('https://fcm.googleapis.com/fcm/send', false, $context);
	if($result) {
		return json_decode($result);
	} else return false;
}
$keyclient ="fj6yxcSXSCaJci2Ko-1BSc:APA91bFrvQzGBZo60Nl7KDZ94xon_MrDHkJ65RYju7lbnVL5et7yEvGWeEm_J5czGP-pjpqCCXqpTOhOCKfkrXS0oBCw_26W885dAYBYuVWsCMicSMw1iiQ2d1HzfRn-r_i_Af7wzFbq";
$title ="Check";

sendPush($keyclient, $title, " Test token", 'https://anysite.com/some_image.png', 'https://openthissiteonclick.com');