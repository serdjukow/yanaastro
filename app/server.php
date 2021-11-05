<?php
$xml = file_get_contents("https://ignio.com/r/export/utf/xml/daily/com.xml");
file_put_contents("gabestore.xml" , $xml);
?>