var ngModule = angular.module("ngModule" , []);

ngModule.controller("project" , function($scope , $log , $http){
    console.log("Working...");

    $scope.studentUpdate = function(){
       // alert("hello");
        console.log("its working....");
 /*      $scope.employees =  $http({
            method:"POST",
            url:"http://localhost:3000/api/detail",
            */$scope.data={
                name:$scope.name,
                regno:$scope.regNo,
                password:$scope.passWord,
                age:$scope.age,
                groupno:$scope.groupNo
            }/*

           */ $http.post("http://localhost:3000/api/student",$scope.data)
           .then(response => {
console.log(response); 
}); /*
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        })

        .then(function(response){
            console.log(response);
        })*/
    };

    $scope.teacherUpdate = function(){
        // alert("hello");
         console.log("its working....");
  /*      $scope.employees =  $http({
             method:"POST",
             url:"http://localhost:3000/api/detail",
             */$scope.datat={
                 name:$scope.tname,
                 regno:$scope.tregno,
                 password:$scope.tpassword,
             }/*
 
            */ $http.post("http://localhost:3000/api/teacher",$scope.datat)
            .then(response => {
 console.log(response); 
 }); /*
             headers: {'Content-Type':'application/x-www-form-urlencoded'}
         })
 
         .then(function(response){
             console.log(response);
         })*/
     };

    $scope.logStuentsd = function(){
        $http.get("http://localhost:3000/api/students")
        .then(response=>{
            $scope.students = response;
           // alert($scope.students);
            console.log($scope.students.s_regno);
            $scope.students2 = JSON.stringify($scope.students);
            console.log($scope.students2);
           // alert($scope.students2[8]);
            $scope.word1 = "s_regno";
            $scope.word2 = "s_password";
            var input_regno=$scope.input_regNo;
            var input_password=$scope.input_passWord;
            var regnos=[];
            var passwords=[];
            var value = $scope.students2;
            var idcount=0,lettercount=0,password_count=0;
           // console.log(value[5]);
            for(let i=0; i<value.length; i++){
                regnos[idcount]='';
                passwords[password_count]='';
                //console.log(value[i]);
                if(value[i]=='s'){
                    //console.log(value[i]);
                  for(let j=i; j<=i+7; j++){
                    if($scope.word1[j-i]==value[j]){
                       // console.log(value[j]);
                      lettercount++;
                    }
                  }
                  if(lettercount>=7){
                      lettercount=0;
                    for(let j=i+10; value[j]!='"'; j++){
                      regnos[idcount]+=value[j];
                     // console.log(value[j]);
                    }
                    console.log(regnos[idcount]);
                    idcount++;
                  }
                  else
                  {
                    for(let j=i; j<=i+10; j++){
                        if($scope.word2[j-i]==value[j]){
                         //   console.log(value[j]);
                          lettercount++;
                        }
                      }
                      if(lettercount>=10){
                          lettercount=0;
                        for(let j=i+13; value[j]!='"'; j++){
                          passwords[password_count]+=value[j];
                          console.log(value[j]);
                        }
                        console.log(passwords[password_count]);
                        password_count++;
                        if(password_count==idcount){
                            var word='';
                            word=regnos[idcount-1]+passwords[idcount-1];
                            console.log(word);
                            if(input_regno==regnos[idcount-1]){
                                if(input_password==passwords[idcount-1]){
                                    window.location.replace("file:///C:/Users/ZUH/meanstack_projects/website_learning/logstudents.html");
                                }
                                else{
                                    console.log("Wrong password");
                                }
                            }
                            else{
                                ///anything
                            }
                        }
                      }
                  }
                }
                
                    
                    lettercount=0;
              }
        });
    };

    $scope.logTeacher = function(){
        $http.get("http://localhost:3000/api/teachers")
        .then(response=>{
            $scope.teachers = response;
           // alert($scope.students);
            $scope.teachers2 = JSON.stringify($scope.teachers);
            console.log($scope.teachers2);
           // alert($scope.students2[8]);
            $scope.word1 = "t_regno";
            $scope.word2 = "t_password";
            var input_regno=$scope.input_regNo;
            var input_password=$scope.input_passWord;
            var regnos=[];
            var passwords=[];
            var value = $scope.teachers2;
            var idcount=0,lettercount=0,password_count=0;
           // console.log(value[5]);
            for(let i=0; i<value.length; i++){
                regnos[idcount]='';
                passwords[password_count]='';
                //console.log(value[i]);
                if(value[i]=='t'){
                    //console.log(value[i]);
                  for(let j=i; j<=i+7; j++){
                    if($scope.word1[j-i]==value[j]){
                       // console.log(value[j]);
                      lettercount++;
                    }
                  }
                  if(lettercount>=7){
                      lettercount=0;
                    for(let j=i+10; value[j]!='"'; j++){
                      regnos[idcount]+=value[j];
                     // console.log(value[j]);
                    }
                    console.log(regnos[idcount]);
                    idcount++;
                  }
                  else
                  {
                    for(let j=i; j<=i+10; j++){
                        if($scope.word2[j-i]==value[j]){
                         //   console.log(value[j]);
                          lettercount++;
                        }
                      }
                      if(lettercount>=10){
                          lettercount=0;
                        for(let j=i+13; value[j]!='"'; j++){
                          passwords[password_count]+=value[j];
                          console.log(value[j]);
                        }
                        console.log(passwords[password_count]);
                        password_count++;
                        if(password_count==idcount){
                            var word='';
                            word=regnos[idcount-1]+passwords[idcount-1];
                            console.log(word);
                            if(input_regno==regnos[idcount-1]){
                                if(input_password==passwords[idcount-1]){
                                    window.location.replace("file:///C:/Users/ZUH/meanstack_projects/website_learning/logteachers.html");
                                }
                                else{
                                    console.log("Wrong password");
                                }
                            }
                            else{
                                ///anything
                            }
                        }
                      }
                  }
                }
                
                    
                    lettercount=0;
              }
        });
    };

    $scope.deletes = function(){
        var idno = document.getElementById("id_no");
        $scope.url = "http://localhost:3000/api/detail/"+$scope.IdNo;
        $http.delete($scope.url)
        .then(response=>{
            console.log(response);
        });
    };
});