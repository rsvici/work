<?php 
	header("Access-Control-Allow-Origin:*");
	require "./extends/Model.class.php";
	require "./extends/config.php";
	// 接口文件
	// 客户端请求服务器的接口文件
	// 提交4个参数注册
	if(isset($_POST['name']) && 
	isset($_POST['password'])&&
	isset($_POST['tel'])&&isset($_POST['id'])){
		// 添加数据库的验证
	
		$newUser['user_name'] = $_POST['name'];
		$newUser['user_password'] = $_POST['password'];
		$newUser['user_tel'] = $_POST['tel'];
		$newUser['user_id'] = $_POST['id'];
		$userModel = new Model("c_user");
		$updateResult = $userModel->save($newUser);
		if($updateResult>0){
			$result['code'] = 0;
			$result['data'] = "恭喜修改成功";
			echo json_encode($result);
		}else {
			$result['code'] = 2;
			$result['data'] = "修改失败 请求重试";
			echo json_encode($result);
		}

		
	}else if(isset($_POST['name']) && 
		isset($_POST['password'])&&
		isset($_POST['tel'])){
		// 添加数据库的验证
		$username =  $_POST['name'];
		$userModel = new Model('c_user');

		// 注册时先查询该用户是否存在
		$selectResult = $userModel->where("user_name='$username'")->select();

		if($selectResult){
			$result['code'] = 1;
			$result['data'] = "该用户名已经存在 请更换用户名称";
			echo json_encode($result);
		}else {
			// 注册
			$newUser['user_name'] = $_POST['name'];
			$newUser['user_password'] = $_POST['password'];
			$newUser['user_tel'] = $_POST['tel'];

			$addResult = $userModel->add($newUser);
			if($addResult>0){
				$result['code'] = 0;
				$result['data'] = "恭喜注册成功";
				echo json_encode($result);
			}else {
				$result['code'] = 2;
				$result['data'] = "注册失败 请求重试";
				echo json_encode($result);
			}
		}
	}else {
		$result['code'] = 3;
		$result['data'] = "没有获取到对应的参数";
		echo json_encode($result);
	}
