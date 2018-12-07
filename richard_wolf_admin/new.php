<?php
	header("Access-Control-Allow-Origin:*");
  header("Content-type: text/html; charset=utf-8");
$db_lk=@mysql_connect('bdm257698100.my3w.com:3306','bdm257698100','Shitou0124');
if($db_lk){
        if(mysql_select_db('bdm257698100_db')){
                $newUser['user_name'] = $_POST['name'];
                $newUser['user_age'] = $_POST['age'];
                $newUser['user_tel'] = $_POST['tel'];
                $newUser['user_city'] = $_POST['city'];
                $newUser['user_company'] = $_POST['company'];
                $newUser['user_dec'] = $_POST['dec'];
                $newUser['user_mark'] = $_POST['mark'];
            
                foreach ($newUser as $key => $val) {
                    $params[] = $key;
                    $values[] = $val;
                }
                //定义sql语句
                $sql = "insert into wolf_user (`".implode("`,`", $params)."`) values('".implode("','", $values)."')";
                mysql_query("set names 'utf8'");
                
             $result=mysql_query($sql);
            if($result>0){
              $resul['code'] = 0;
              $resul['data'] = "恭喜提交成功";
              echo json_encode($resul);
            }else {
              $resul['code'] = 2;
              $resul['data'] = "提交失败，请重试";
              echo json_encode($resul);
            }
        }else{
          echo "456服务器连接成功！<br>数据库使用失败..";
        }
}else{
  echo "789服务器连接失败！";
}