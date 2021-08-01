<?php
	function censor(string $text) {
		$text = preg_split('//u', $text, -1, PREG_SPLIT_NO_EMPTY);

		$censor = "#\$%&()*+/@";

		for ($i=0; $i < count($text); $i++) {
			if($text[$i] == "{" && $text[$i+1] == "{" && is_numeric($text[$i+2])) {
				$i += 2;
				$count = intval($text[$i])*2;
				$text[$i] = "";

				for ($j=0; $j < $count; $j++) { 
					$text[$i] = $text[$i].$censor[rand(0, strlen($censor)-1)];
				}
			}
		}
		return implode("", $text);
	}

	function generate(string $name, string $type, string $level, int $length) {
		$kumda = [
			"low" => [
				"{{name}}ไอ้{{2}}ไอ้คน{{3}}",
				"ไอ{{name}}คน{{2}}",
				"ไอ{{name}}{{2}}",
				"{{name}}{{3}}นัก",
				"ไม่{{2}}ได้ปะ{{name}}",
				"ไอ{{name}}นิสัย{{2}}",
				"{{name}}เลิกเป็น{{2}}ได้ยัง",
				"ไอต้าว{{name}}คน{{2}}",
				"ไอ{{name}}ชอบ{{4}}คนอื่น",
				"อย่า{{1}}{{name}}",
				"{{name}}ไม่ต้อง{{5}}",
				"{{name}}อย่า{{4}}",
				"ทำตัว{{3}}เลยนะ ไอต้าวนิสัย{{2}}",
				"ทำตัว{{2}} ไปทำ{{3}}",
				"ทำตัว{{2}} ไม่{{2}}แล้วนะ",
				"{{2}}",
				"{{name}}มี{{4}}หรอ",
				"พ่อแม่{{3}}หรอไง{{name}}",
				"{{name}}มี{{3}}เองหรอ",
				"{{name}}IQ {{3}}หรอ",
				"{{2}}{{name}}{1}}หรอ",
				"เลิกพูด{{5}}นะ{{name}}",
				"{{2}}หรือ{{3}}อะ{{name}}",
				"{{2}}แล้วไม่ได้{{1}}หรอไง{{name}}",
				"{{name}}เลิกทำ{{5}}ได้มั้ยอะ",
				"ทำไม{{name}}ชอบทำ{{2}}อ่ะ กลัว{{2}}หรอ",
				"ถ้า{{name}}ชอบ{{1}} ก็ไป{{3}}นะ",
				"{{name}}เกิดไป{{3}}น่าจะมี{{2}}กว่า",
				"ยกระดับ{{2}}{{name}}บ้างก็ดีนะ",
				"คนอย่าง{{name}}{{9}}",
				"ทำตัว{{2}} ระวังเพื่อน{{2}}นะ"
			],
			"middle" => [
                "ไอ้{{name}}ไอ{{3}}",
                "{{3}}ไอ{{name}}",
                "อย่า{{3}}ไอ{{name}}",
                "{{5}}ไอ{{name}}",
                "{{9}}ไอ{{name}}",
                "ไอ{{name}}{{2}}",
                "ไอ{{name}}{{2}}หรอ? {{8}}",
                "{{9}}ไอ{{name}}",
                "{{3}}ไอ{{name}}อะ {{4}}",
                "{{8}}ไอ{{name}}",
                "{{4}}ไอ{{3}}{{name}}",
                "{{9}}ไอ{{name}}",
                "{{8}}ไอ{{1}}{{name}} {{3}}",
                "{{4}}ไอ{{1}}{{name}} {{6}}",
                "{{8}}ไอ{{name}}{{2}}",
                "ไอ{{name}}ไอ{{1}}ไอ{{1}}",
                "{{4}}ไอ{{1}}ไอ{{name}}",
                "ไป{{5}}ไอ{{1}}{{name}}",
                "ไอ{{9}}",
                "{{1}}กบ{{name}}วะ",
                "{{2}}",
                "{{9}}",
                "{{5}}",
                "{{5}}",
                "ไอ{{2}}",
                "ไอ{{1}}",
                "ไอ{{3}}",
                "ไอ{{2}}",
                "ไอ{{4}}",
                "ไอ{{5}}"
			],
			"high" => [
                "ไอ้{{name}}คน{{1}}{{name}}นี่แม่{{4}}ออกมาได้นะ{{2}}",
                "ไอ้{{1}}{{name}}{{1}}แม่",
                "ไอ้{{1}}{{name}}{{4}}มาเกิด",
                "ไอ้{{3}}{{name}}ไอ้{{2}}",
                "พ่อเเม่{{name}}ไม่{{4}}",
                "{{4}}หรอไอ้{{name}}{{5}}เเบบนี้",
                "หายใจไม่สะดวก{{1}}ไอ{{name}}{{3}}บ้างก็ได้นะ",
                "ไอ้{{name}}สมอง{{1}}ปัญญา{{1}}",
                "พ่อ{{name}}น่าจะ{{3}}ท่อน้ำแทน{{3}}",
                "{{2}}แม่{{name}}{{2}}คลอดลูกออกมา{{2}}",
                "{{2}}ขอให้{{name}}{{6}}",
                "นั่น{{1}}{{name}}หรือดาราจักรแอนดรอมิดา",
                "{{name}}นั่น{{2}}หรือ{{2}}ในดงป่า",
                "{{name}}{{2}}แต่{{2}} ไป{{1}}",
                "{{name}}{{1}}มาเเบบไหน{{5}}หรือ{{2}}?",
                "อี{{2}}"
            ]
        ];

		$use = [];
		$text = "";

		for ($i=0; $i < $length; $i++) {
			do {
				$random = rand(0,count($kumda[$level])-1);
			} while(in_array($random, $use));
			$use[] = $random;
			$text = $text . str_replace("{{name}}", $name, censor($kumda[$level][$random])) . " ";
			$text = str_replace("{{", "", $text);
			$text = str_replace("}}", "", $text);
		}
		
		$text = mb_substr($text, 0, -1);
		return $text;
	}

	header('Content-Type: application/json');

	if(!isset($_GET['name']) || !isset($_GET['type']) || !isset($_GET['level']) || !isset($_GET['length']) || !is_numeric($_GET['length'])) {
		http_response_code(400);
		die(json_encode("Bed Request"));
	}
	if(!in_array($_GET['type'], ['teen', 'loo'])) {
		http_response_code(400);
		die(json_encode("Type not found"));
	}
	if(!in_array($_GET['level'], ['low', 'middle', 'high'])) {
		http_response_code(400);
		die(json_encode("Level not found"));
	}

	echo json_encode(generate($_GET['name'], $_GET['type'], $_GET['level'], $_GET['length']), JSON_UNESCAPED_UNICODE);
?>






























