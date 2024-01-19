 $(document).ready(function(){
      let arr=[];
 $("#item1").on('click',function(){    
    $(this).css('background','grey');
   arr.push($('#title1').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
 });

 $("#item2").on('click',function(){    
    $(this).css('background','grey');
    arr.push ($('#title2').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
    
 });  
 $("#item3").on('click',function(){    
    $(this).css('background','grey');
    arr.push ($('#title3').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
    
 });  
 $("#item4").on('click',function(){    
    $(this).css('background','grey');
    arr.push ($('#title4').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
    
 });  
 $("#item6").on('click',function(){    
    $(this).css('background','grey');
    arr.push ($('#title6').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
    
 });  
 $("#item7").on('click',function(){    
    $(this).css('background','grey');
    arr.push ($('#title7').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
    
 });  
 $("#item8").on('click',function(){    
    $(this).css('background','grey');
    arr.push ($('#title8').text());
    localStorage.setItem('test', arr);
    alert(localStorage.getItem('test'));
    
 });  

})
       
