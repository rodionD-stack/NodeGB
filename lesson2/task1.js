console.log('Record 1');

setTimeout(() => {
  console.log('Record 2');
  Promise.resolve().then(() => {
    setTimeout(() => {
    сonsole.log('Record 3');
    Promise.resolve().then(() => {
      console.log('Record 4');
      });       
    });
  });       
});

console.log('Record 5');

Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6')));

/*Стартует Тик-1 [
    Макротаска{
 -выполняется синхронный код Record 1,
 -SetTimeout устанавливается для следующего тика,
 -Синхронно выводится Record5,
 -Создаётся микростаска для промиса
 }
 Фаза кончилась, микротаска начинает выполняться, внутри неё создаётся ещё одна микротаска
 Фаза внутри микротаски кончилась, выполняется микротаска с выводом Record 6
]
 Стартует Тик-2 [
 срабатывает setTimeout, внутри setTimeout
 Макротаска {
 -синхронный вывод Record2,
 -создана микротаска для промиса
 }
 Фаза кончилась, микротаска ставит таймер
 }
 ]
 Стартует Тик-3 [
 срабатывает setTimeout, внутри setTimeout
 Макротаска {
 -синхронный вывод Record3,
 -создана микротаска для промиса
 }
  Фаза кончилась, микротаска выводит Record 4
 ]
 Весь код выполнен
 Итого: 1 5 6 2 3 4 */