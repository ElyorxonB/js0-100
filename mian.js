var a = +prompt('Введите число');

if(a === 0 || a<19){
    console.log('нужно учиться');
    alert('нужно учиться')

}else if(a === 19 || a<51){
    console.log('надо работать');
    alert('надо работать')
    
}else if(a === 51 || a<60){
    console.log('скоро на пенсию');
    alert('скоро на пенсию')
}else if(a === 60 || a<100){
    console.log('вы пенсионер');
    alert('вы пенсионер')
}else {
    console.log('the end');
    alert('the end')
} 
