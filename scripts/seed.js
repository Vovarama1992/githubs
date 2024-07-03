const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbx1yfGYp5C4r7-Fku_vlQRngSbSI5b8633n5Arn7Knu0PyPo0GlSJU8x630nGh6EdVDnw/exec' //URL поставщика
/**
 * Для решения данной задачи разрешается производить любые изменения в текущий код
 */

/**
 * Функция возвращает тело запроса, содержащее указанные параметры
 * @param {string} apiMethod 
 * @returns {object}
 */
function getRequestOptions_(method){
  const payload = JSON.stringify({ //тело запроса
    method, 
    access_token: ''
  })

  const requestOptions = {
    method: 'POST',
    muteHttpExceptions: true,
    payload
  }

  return requestOptions
}



/**
 * Можно посмотреть доступные методы через API
 */
function getAvailableMethods(){
  const requestOptions = getRequestOptions_('getMethods')
  const response = UrlFetchApp.fetch(WEBAPP_URL, requestOptions)
  Logger.log(response);
}


/**
 * Простой триггер
 * При открытии таблицы функция создает меню в интерфейсе таблицы
 */
function onOpen(){
  SpreadsheetApp
    .getUi()
    .createMenu('🔄 Синхронизация')
    .addItem('📥 Загрузить информацию об остатках', 'refreshQuantity')
    .addToUi()
}



/* Функция для решения задачи */
function refreshQuantity(){
  const ss = SpreadsheetApp.getActive()
  
  ss.toast('Начато обновление!')
  /**
   * Напишите решение здесь
   */
  ss.toast('Обновление завершено!')
}

async function main() {
  const res = await getAvailableMethods();
  return res;
}

main().then(res => console.log(res)).catch(err => console.error(err));



