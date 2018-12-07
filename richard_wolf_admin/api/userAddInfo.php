<?php 
	header("Access-Control-Allow-Origin:*");
	// require "./extends/config.php";
	require "./extends/Model.class.php";


			// 注册
			$newUser['user_name'] = $_POST['name'];
			$newUser['user_age'] = $_POST['age'];
			$newUser['user_tel'] = $_POST['tel'];
			$newUser['user_city'] = $_POST['city'];
			$newUser['user_company'] = $_POST['company'];
			$newUser['user_dec'] = $_POST['dec'];
			$newUser['user_mark'] = $_POST['mark'];

			$userModel = new Model("wolf_user");
			$addResult = $userModel->add($newUser);
			if($addResult>0){
				$result['code'] = 0;
				$result['data'] = "恭喜提交成功";
				echo json_encode($result);
			}else {
				$result['code'] = 2;
				$result['data'] = "提交失败，请重试";
				echo json_encode($result);
			}
		

