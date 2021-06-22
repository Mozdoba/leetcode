/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  s = s.toLowerCase();
  t = t.toLowerCase();
  let newString = t;
  const arr = new Array(128); //ASCII
  arr.fill(true);

  for (let i = 0; i < s.length; i++) {
    let asciiCode = s.charCodeAt(i);
    if (arr[asciiCode]) {
      newString = newString.replaceAll(newString.charAt(i), s.charAt(i));
      arr[asciiCode] = false;
    }
  }

  return s === newString;
};

isIsomorphic("paper", "title");