/* Complete the function/method so that it returns the url with anything
after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
  const anchor = url.indexOf('#');
  return (anchor === -1) ? url : url.slice(0, anchor);
}

function removeUrlAnchor2(url) {
  return url.split('#')[0];
}
