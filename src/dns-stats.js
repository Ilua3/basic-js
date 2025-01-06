const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  const result = {}; // Храним результат

  domains.forEach(domain => {
    // Разбиваем домен на части
    const domainParts = domain.split('.').reverse(); // Разделяем домен по точкам и инвертируем
  
    let dnsSubdomain = ''; // Переменная для формирования подстроки
  
    // Перебираем части домена в обратном порядке
    domainParts.forEach((part, index) => {
      // Формируем подстроку с точками в правильном порядке
      dnsSubdomain = `.${part}${dnsSubdomain}`;
  
      // Добавляем в результат
      result[dnsSubdomain] = (result[dnsSubdomain] || 0) + 1;
    });
  });
  
  return result;
}



module.exports = {
  getDNSStats
};
