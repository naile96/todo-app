//array oluşturuyoruz belirtmek için köşeli parantez kullandık. 
//buraya eklediğimiz to do list elemanlarını ekleyeceğiz
var data = [];

//id vermek açısından değişken oluşturduk
var count = 0;


function AddTask(){
    var taskValue = document.getElementById('task').value;


//obje oluşturuyoruz
    var task = {
//data arrayin itemı olucak
        id:count,
        task:taskValue,
        statu:'to-do',
    }
    data.push(task);

//task eklendikten sonra inputun içini sıfırlamak için
    document.getElementById('task').value = null;
    FillData();
    count++;

}

//eklediğimiz arrayi ekranda göstermek için fonksiyon oluşturuyoruz
function FillData(){
    var tempHTML = "";

    for(var i=0; i<data.length; i++){
        if(data[i].statu == 'to-do'){
            // += yaptık çünkü her to do eklendiğinde listeye eklesin diye  
            tempHTML += '<div class="input-group mb-3">'+
            '<div class="input-group-prepend">'+
              '<div class="input-group-text">'+
                '<input type="checkbox" aria-label="Checkbox for following text input" onclick="ClickCheck('+data[i].id+')">'+
              '</div>'+
            '</div>'+
            '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].task+'</p>'+
            '<div class="input-group-append">'+
                '<button class="btn btn-outline-primary" type="button" onclick="AddTask();"><i class="fas fa-edit"></i></button>'+
                '<button class="btn btn-outline-danger" type="button" onclick="AddTask();"><i class="fas fa-trash-alt"></i></button>'+
            '</div>'+
        '</div>'
        }else{
            
        }
    }
    //ekranda görünmesi için
    document.getElementById('to-do').innerHTML = tempHTML;
}
//check yaptığımızda completed kısmına taşınması için method oluşturuyoruz
function ClickCheck(id){
    var index = data.findIndex(x => x.id == id);

    data[index].statu = 'completed';

    //tik attığımızı görmek için
    setTimeout(function(){
        FillData();
    },500);

}